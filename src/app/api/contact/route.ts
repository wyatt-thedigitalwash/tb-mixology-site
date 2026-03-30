import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
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
    } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const subject = `New Event Inquiry — ${eventType || "Event"} on ${eventDate || "TBD"}`;

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
          Sent from tb-mixology-site.vercel.app contact form
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "TB Mixology <onboarding@resend.dev>",
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
