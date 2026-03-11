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
      tier,
      budget,
      specificDrinks,
      cupPreference,
      anythingElse,
      referral,
    } = body;

    const htmlContent = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px;">
        <h1 style="color: #c9a84c; border-bottom: 2px solid #c9a84c; padding-bottom: 8px;">
          New Event Inquiry
        </h1>

        <h2 style="color: #555; margin-top: 24px;">Client Information</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h2 style="color: #555; margin-top: 24px;">Event Information</h2>
        <p><strong>Address:</strong> ${eventAddress || "Not provided"}</p>
        <p><strong>Location Type:</strong> ${locationType || "Not provided"}</p>
        <p><strong>Date:</strong> ${eventDate || "Not provided"}</p>
        <p><strong>Time:</strong> ${startTime || "TBD"} – ${endTime || "TBD"}</p>
        <p><strong>Event Type:</strong> ${eventType || "Not provided"}</p>
        <p><strong>Theme:</strong> ${eventTheme || "Not provided"}</p>
        <p><strong>Guests Drinking:</strong> ${guestCount || "Not provided"}</p>
        <p><strong>Beverages:</strong> ${beverageTypes || "Not provided"}</p>
        <p><strong>Tier Interest:</strong> ${tier || "Not provided"}</p>

        <h2 style="color: #555; margin-top: 24px;">Bar Preferences</h2>
        <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
        <p><strong>Specific Drinks:</strong> ${specificDrinks || "Not provided"}</p>
        <p><strong>Cup Preference:</strong> ${cupPreference || "Not provided"}</p>
        <p><strong>Additional Notes:</strong> ${anythingElse || "None"}</p>
        <p><strong>Referral Source:</strong> ${referral || "Not provided"}</p>

        <hr style="border: none; border-top: 1px solid #c9a84c; margin-top: 32px;" />
        <p style="color: #999; font-size: 12px;">
          Sent from tbmixology.com contact form
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "TB Mixology <onboarding@resend.dev>",
      to: "emma@tbmixology.com",
      subject: `New Event Inquiry — ${firstName} ${lastName}`,
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
