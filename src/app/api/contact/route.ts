import { NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limit store: IP -> list of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  rateLimitMap.set(ip, recent);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  return false;
}

// Silent success — fools bots into thinking submission worked
const SILENT_OK = NextResponse.json({ success: true });

export async function POST(req: Request) {
  try {
    // --- Rate Limiting ---
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      eventAddress,
      locationType,
      eventDate,
      startTime,
      endTime,
      eventType,
      eventTheme,
      guestCount,
      beverageTypes,
      serviceType,
      budget,
      specificDrinks,
      cupPreference,
      anythingElse,
      referral,
      company, // honeypot
      _t, // timestamp
    } = body;

    // --- Honeypot Check ---
    if (company) return SILENT_OK;

    // --- Time-Based Check (< 3 seconds) ---
    const loadedAt = Number(_t);
    if (!_t || isNaN(loadedAt) || Date.now() - loadedAt < 3000) {
      return SILENT_OK;
    }

    // --- Required Fields ---
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // --- Field Length / Gibberish Validation ---
    const textFields: Record<string, unknown> = {
      firstName, lastName, email, phone, eventAddress, locationType,
      eventDate, startTime, endTime, eventType, eventTheme,
      beverageTypes, serviceType, budget, specificDrinks,
      cupPreference, anythingElse, referral,
    };

    for (const [key, val] of Object.entries(textFields)) {
      if (val && typeof val === "string" && val.length > 500) {
        return NextResponse.json(
          { error: `${key} is too long` },
          { status: 400 }
        );
      }
    }

    // Name fields: reject if over 100 chars, or no spaces and over 20 chars
    for (const name of [firstName, lastName]) {
      if (typeof name === "string") {
        if (name.length > 100) {
          return NextResponse.json({ error: "Name is too long" }, { status: 400 });
        }
        if (!name.includes(" ") && name.length > 20) {
          return NextResponse.json({ error: "Invalid name" }, { status: 400 });
        }
      }
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Phone: must contain 10-11 digits
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Guest count: reject if over 1000
    if (guestCount) {
      const count = Number(guestCount);
      if (isNaN(count) || count > 1000) {
        return NextResponse.json(
          { error: "Invalid guest count" },
          { status: 400 }
        );
      }
    }

    // --- Build & Send Email ---
    const subject =
      eventType && eventDate
        ? `New Event Inquiry — ${eventType} on ${eventDate}`
        : "New Event Inquiry — TB Mixology Website";

    const htmlContent = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto;">
        <div style="border-bottom: 2px solid #c9a96e; padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="font-size: 24px; margin: 0;">New Event Inquiry</h1>
          <p style="color: #a89f95; margin: 4px 0 0;">via tbmixology.com</p>
        </div>

        <h2 style="font-size: 16px; color: #c9a96e; text-transform: uppercase; letter-spacing: 2px; margin-top: 24px;">Client Information</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h2 style="font-size: 16px; color: #c9a96e; text-transform: uppercase; letter-spacing: 2px; margin-top: 24px;">Event Information</h2>
        <p><strong>Address:</strong> ${eventAddress || "Not provided"}</p>
        <p><strong>Location Type:</strong> ${locationType || "Not provided"}</p>
        <p><strong>Date:</strong> ${eventDate || "Not provided"}</p>
        <p><strong>Time:</strong> ${startTime || "TBD"} – ${endTime || "TBD"}</p>
        <p><strong>Event Type:</strong> ${eventType || "Not provided"}</p>
        <p><strong>Theme:</strong> ${eventTheme || "Not provided"}</p>
        <p><strong>Guests Drinking:</strong> ${guestCount || "Not provided"}</p>
        <p><strong>Beverages:</strong> ${beverageTypes || "Not provided"}</p>

        <h2 style="font-size: 16px; color: #c9a96e; text-transform: uppercase; letter-spacing: 2px; margin-top: 24px;">Service & Preferences</h2>
        <p><strong>Service Interest:</strong> ${serviceType || "Not provided"}</p>
        <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
        <p><strong>Specific Drinks:</strong> ${specificDrinks || "Not provided"}</p>
        <p><strong>Cup Preference:</strong> ${cupPreference || "Not provided"}</p>
        <p><strong>Additional Notes:</strong> ${anythingElse || "None"}</p>
        <p><strong>Referral Source:</strong> ${referral || "Not provided"}</p>

        <hr style="border: none; border-top: 1px solid #c9a96e; margin-top: 32px;" />
        <p style="color: #a89f95; font-size: 12px;">
          Sent from tbmixology.com contact form
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "TB Mixology <notifications@tbmixology.com>",
      to: "emma@tbmixology.com",
      subject,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
