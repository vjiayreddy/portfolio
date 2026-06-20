import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website } = parsed.data;

    if (website && website.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resend || !toEmail || !fromEmail) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Contact form is not configured. Please set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.",
        },
        { status: 503 }
      );
    }

    const emailSubject = subject?.trim()
      ? `[Portfolio] ${subject.trim()}`
      : `[Portfolio] Message from ${name}`;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        subject?.trim() ? `Subject: ${subject.trim()}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
