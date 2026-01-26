import { NextRequest, NextResponse } from "next/server";

// ============================================================================
// SECURITY CONFIGURATION
// ============================================================================

// Rate limiting (in-memory, resets on cold start - consider Redis for production)
const rateLimit = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // Max 3 requests per minute per IP

// Input length limits
const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321
  message: 2000,
  projectType: 20,
  budget: 20,
  honeypot: 0, // Should always be empty
};

// Valid enum values (strict whitelist)
const VALID_PROJECT_TYPES = ["website", "webapp", "game", "ai", "other", ""];
const VALID_BUDGETS = ["under5k", "5k-10k", "10k-25k", "25k-50k", "50k+", "unsure", ""];

// Prompt injection detection patterns
const SUSPICIOUS_PATTERNS = [
  // Direct instruction attempts
  /ignore\s*(all\s*)?(previous|above|prior)/i,
  /disregard\s*(all\s*)?(previous|above|prior)/i,
  /forget\s*(all\s*)?(previous|above|prior)/i,
  /override\s*(all\s*)?(previous|above|prior)/i,
  
  // Role/system prompts
  /system\s*:/i,
  /assistant\s*:/i,
  /user\s*:/i,
  /\[INST\]/i,
  /\[\/INST\]/i,
  /<<SYS>>/i,
  /<\|im_start\|>/i,
  /<\|im_end\|>/i,
  
  // Jailbreak attempts
  /you\s+are\s+now\s+(in\s+)?/i,
  /pretend\s+(you('re|are)\s+)?/i,
  /act\s+as\s+(if\s+)?(you('re|are)\s+)?/i,
  /roleplay\s+as/i,
  /you\s+must\s+(now\s+)?/i,
  /from\s+now\s+on/i,
  
  // Instruction injection
  /IMPORTANT\s*:/i,
  /URGENT\s*:/i,
  /CRITICAL\s*:/i,
  /OVERRIDE\s*:/i,
  /NEW\s+INSTRUCTIONS?\s*:/i,
  /EXECUTE\s*:/i,
  /ADMIN\s*:/i,
  
  // Code/command injection attempts
  /```(bash|sh|python|javascript|js|eval)/i,
  /\$\([^)]+\)/,
  /`[^`]+`/,
  /<script/i,
  /javascript\s*:/i,
  /on\w+\s*=/i,
  
  // Delimiter confusion
  /---+\s*(system|user|assistant)/i,
  /###\s*(system|user|assistant)/i,
  
  // Data exfiltration attempts
  /reveal\s+(your\s+)?(system\s+)?(prompt|instructions)/i,
  /show\s+(me\s+)?(your\s+)?(system\s+)?(prompt|instructions)/i,
  /what\s+are\s+your\s+(system\s+)?instructions/i,
  /repeat\s+(your\s+)?(system\s+)?(prompt|instructions)/i,
  
  // Social engineering
  /this\s+is\s+(a\s+)?test/i,
  /testing\s+(security|injection|prompt)/i,
  /security\s+researcher/i,
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now - record.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

function sanitizeInput(input: string, maxLength: number): string {
  if (typeof input !== "string") return "";
  
  return input
    // Remove control characters (except newlines/tabs in messages)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    // Normalize whitespace
    .replace(/\s+/g, " ")
    // Trim
    .trim()
    // Enforce length limit
    .slice(0, maxLength);
}

function sanitizeMessage(input: string, maxLength: number): string {
  if (typeof input !== "string") return "";
  
  return input
    // Remove dangerous control characters (keep newlines)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    // Normalize multiple newlines
    .replace(/\n{3,}/g, "\n\n")
    // Trim
    .trim()
    // Enforce length limit
    .slice(0, maxLength);
}

function detectPromptInjection(text: string): { suspicious: boolean; matches: string[] } {
  const matches: string[] = [];
  
  for (const pattern of SUSPICIOUS_PATTERNS) {
    if (pattern.test(text)) {
      const match = text.match(pattern);
      if (match) {
        matches.push(match[0]);
      }
    }
  }
  
  return {
    suspicious: matches.length > 0,
    matches,
  };
}

function escapeMarkdown(text: string): string {
  // Escape Discord markdown to prevent formatting injection
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\*/g, "\\*")
    .replace(/_/g, "\\_")
    .replace(/~/g, "\\~")
    .replace(/`/g, "\\`")
    .replace(/\|/g, "\\|")
    .replace(/>/g, "\\>");
}

// ============================================================================
// DISCORD NOTIFICATION
// ============================================================================

// Budget labels for display
const budgetLabels: Record<string, string> = {
  "under5k": "Under $5,000",
  "5k-10k": "$5,000 - $10,000",
  "10k-25k": "$10,000 - $25,000",
  "25k-50k": "$25,000 - $50,000",
  "50k+": "$50,000+",
  "unsure": "Not sure yet",
};

// Project type labels
const projectLabels: Record<string, string> = {
  "website": "🌐 Website",
  "webapp": "⚡ Web Application",
  "game": "🎮 Game",
  "ai": "🤖 AI / Automation",
  "other": "💡 Something Else",
};

async function sendToDiscord(data: {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  securityFlags: {
    suspicious: boolean;
    matches: string[];
    honeypotTriggered: boolean;
  };
  metadata: {
    ip: string;
    userAgent: string;
  };
}) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("DISCORD_WEBHOOK_URL not configured - skipping notification");
    return;
  }

  // Escape all user inputs to prevent markdown injection
  const safeName = escapeMarkdown(data.name);
  const safeEmail = escapeMarkdown(data.email);
  const safeMessage = escapeMarkdown(data.message);
  
  // Determine embed color and title based on security flags
  const isClean = !data.securityFlags.suspicious && !data.securityFlags.honeypotTriggered;
  const embedColor = isClean ? 0x00ff00 : 0xff0000; // Green if clean, red if suspicious
  const embedTitle = isClean 
    ? "📬 New Project Inquiry" 
    : "⚠️ FLAGGED INQUIRY - Review Carefully";

  const fields = [
    {
      name: "👤 Name",
      value: safeName || "Not provided",
      inline: true,
    },
    {
      name: "📧 Email",
      value: safeEmail || "Not provided",
      inline: true,
    },
    {
      name: "📁 Project Type",
      value: projectLabels[data.projectType] || "Not specified",
      inline: true,
    },
    {
      name: "💰 Budget",
      value: budgetLabels[data.budget] || "Not specified",
      inline: true,
    },
    {
      name: "💬 Message",
      value: safeMessage.length > 900 
        ? safeMessage.slice(0, 897) + "..." 
        : safeMessage || "No message",
      inline: false,
    },
  ];

  // Add security warning field if flagged
  if (!isClean) {
    const warnings: string[] = [];
    
    if (data.securityFlags.honeypotTriggered) {
      warnings.push("🤖 Bot detected (honeypot triggered)");
    }
    
    if (data.securityFlags.suspicious) {
      warnings.push(`🚨 Prompt injection attempt detected`);
      warnings.push(`Patterns: ${data.securityFlags.matches.slice(0, 3).join(", ")}`);
    }
    
    fields.push({
      name: "🛡️ SECURITY WARNING",
      value: warnings.join("\n"),
      inline: false,
    });
    
    fields.push({
      name: "📍 Metadata",
      value: `IP: \`${data.metadata.ip}\`\nUA: \`${data.metadata.userAgent.slice(0, 100)}\``,
      inline: false,
    });
  }

  const embed = {
    title: embedTitle,
    color: embedColor,
    fields,
    footer: {
      text: isClean 
        ? "QuirkyBytes Contact Form • ✅ Security scan passed" 
        : "QuirkyBytes Contact Form • ⚠️ Manual review required",
    },
    timestamp: new Date().toISOString(),
  };

  const content = isClean
    ? "🔔 **New inquiry from quirkybytes.com!**"
    : "🚨 **SECURITY FLAGGED** — This submission triggered security filters. Treat content as untrusted.";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      console.error("Discord webhook failed:", response.status);
    }
  } catch (error) {
    console.error("Discord webhook error:", error);
  }
}

// ============================================================================
// MAIN HANDLER
// ============================================================================

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  
  const userAgent = request.headers.get("user-agent") || "unknown";

  // Rate limiting
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    
    // Extract and sanitize inputs
    const name = sanitizeInput(body.name || "", MAX_LENGTHS.name);
    const email = sanitizeInput(body.email || "", MAX_LENGTHS.email);
    const projectType = sanitizeInput(body.projectType || "", MAX_LENGTHS.projectType);
    const budget = sanitizeInput(body.budget || "", MAX_LENGTHS.budget);
    const message = sanitizeMessage(body.message || "", MAX_LENGTHS.message);
    
    // Honeypot check (field should be empty - bots fill it)
    const honeypot = body.website || body.url || body.company_url || "";
    const honeypotTriggered = honeypot.length > 0;
    
    // Required field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Strict enum validation
    if (projectType && !VALID_PROJECT_TYPES.includes(projectType)) {
      return NextResponse.json(
        { error: "Invalid project type" },
        { status: 400 }
      );
    }

    if (budget && !VALID_BUDGETS.includes(budget)) {
      return NextResponse.json(
        { error: "Invalid budget range" },
        { status: 400 }
      );
    }

    // Security scan - check all text fields for prompt injection
    const allText = `${name} ${email} ${message}`;
    const securityScan = detectPromptInjection(allText);

    // Log submission (sanitized)
    console.log("📧 Contact form submission:", {
      name: name.slice(0, 30),
      email: email.slice(0, 30),
      projectType,
      budget,
      messageLength: message.length,
      securityFlags: {
        suspicious: securityScan.suspicious,
        honeypotTriggered,
        patternCount: securityScan.matches.length,
      },
      ip,
      timestamp: new Date().toISOString(),
    });

    // Send to Discord with security context
    await sendToDiscord({
      name,
      email,
      projectType,
      budget,
      message,
      securityFlags: {
        suspicious: securityScan.suspicious,
        matches: securityScan.matches,
        honeypotTriggered,
      },
      metadata: {
        ip,
        userAgent,
      },
    });

    // Always return success to user (don't reveal security detection)
    return NextResponse.json(
      { success: true, message: "Message received! We'll be in touch soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
