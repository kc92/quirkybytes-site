import { NextRequest, NextResponse } from "next/server";

// Simple rate limiting
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimit.get(ip) || 0;

  if (now - lastRequest < RATE_LIMIT_WINDOW) {
    return true;
  }

  rateLimit.set(ip, now);
  return false;
}

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
}) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("DISCORD_WEBHOOK_URL not configured - skipping notification");
    return;
  }

  const embed = {
    title: "📬 New Project Inquiry!",
    color: 0x00ffff, // Neon cyan
    fields: [
      {
        name: "👤 Name",
        value: data.name,
        inline: true,
      },
      {
        name: "📧 Email",
        value: data.email,
        inline: true,
      },
      {
        name: "📁 Project Type",
        value: projectLabels[data.projectType] || data.projectType || "Not specified",
        inline: true,
      },
      {
        name: "💰 Budget",
        value: budgetLabels[data.budget] || data.budget || "Not specified",
        inline: true,
      },
      {
        name: "💬 Message",
        value: data.message.length > 1000 ? data.message.slice(0, 997) + "..." : data.message,
        inline: false,
      },
    ],
    footer: {
      text: "QuirkyBytes Contact Form",
    },
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "🔔 **New inquiry from quirkybytes.com!**",
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

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log it
    console.log("📧 New contact form submission:", {
      name,
      email,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    // Send to Discord for review
    await sendToDiscord({ name, email, projectType, budget, message });

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
