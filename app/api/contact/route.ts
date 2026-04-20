import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

const FROM = process.env.RESEND_FROM ?? "Cairnity <hello@cairnity.com>";
const TO = process.env.RESEND_TO ?? "hello@cairnity.com";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, company, size, topic, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Soft success: form is configured to fall back to mailto on the client.
    // We log so devs notice the missing config in development.
    console.warn(
      "[contact] RESEND_API_KEY not set — message accepted but not delivered.",
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Cairnity] ${name} (${company}) — ${topic}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Size: ${size}`,
        `Topic: ${topic}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json(
        { error: "Could not send the message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message." },
      { status: 500 },
    );
  }
}
