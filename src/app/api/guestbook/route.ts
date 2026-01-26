import { NextRequest, NextResponse } from "next/server";
import { getEntries, addEntry } from "@/lib/guestbook";

// Simple rate limiting (in-memory, resets on restart)
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimit.get(ip) || 0;

  if (now - lastRequest < RATE_LIMIT_WINDOW / MAX_REQUESTS) {
    return true;
  }

  rateLimit.set(ip, now);
  return false;
}

export async function GET() {
  const entries = getEntries();
  return NextResponse.json(entries);
}

export async function POST(request: NextRequest) {
  // Get IP for rate limiting
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
    const { name, message } = body;

    // Validation
    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    if (name.length > 50) {
      return NextResponse.json(
        { error: "Name too long (max 50 characters)" },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: "Message too long (max 500 characters)" },
        { status: 400 }
      );
    }

    // Basic sanitization (strip HTML)
    const sanitizedName = name.replace(/<[^>]*>/g, "").trim();
    const sanitizedMessage = message.replace(/<[^>]*>/g, "").trim();

    const entry = addEntry(sanitizedName, sanitizedMessage);
    return NextResponse.json(entry, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
