import { NextResponse } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, url, interest, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const destinationEmail = process.env.CONTACT_EMAIL || "delivered@resend.dev";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Briefs <onboarding@resend.dev>",
      to: destinationEmail,
      replyTo: email,
      subject: `New Client Retainer Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background: #fafafa;">
          <h2 style="color: #6b21a8; margin-top: 0;">New Discovery Brief Received</h2>
          <p style="font-size: 15px; color: #374151;">A new client has submitted their inquiry through your portfolio website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px; font-weight: bold; color: #4b5563; width: 140px;">Client Name</td>
              <td style="padding: 12px 16px; color: #111827;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px; font-weight: bold; color: #4b5563;">Email Address</td>
              <td style="padding: 12px 16px; color: #111827;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px; font-weight: bold; color: #4b5563;">Profile / URL</td>
              <td style="padding: 12px 16px; color: #111827;"><a href="${url}" target="_blank" style="color: #7c3aed;">${url}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px; font-weight: bold; color: #4b5563;">Focus Area</td>
              <td style="padding: 12px 16px; color: #111827;">${interest}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #4b5563; vertical-align: top;">Client Notes</td>
              <td style="padding: 12px 16px; color: #111827; white-space: pre-wrap;">${message || "No additional notes provided."}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; font-size: 13px; color: #9ca3af;">
            Hit <strong>Reply</strong> to respond directly to this client via their provided email address.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Route handler error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}