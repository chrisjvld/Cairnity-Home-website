import { Mail, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a free 30-minute discovery call with Cairnity, or send us a message directly.",
  path: "/contact",
});

const channels = [
  {
    Icon: Mail,
    title: "Email us directly",
    body: "We answer every email personally, usually the same day.",
    actionLabel: "hello@cairnity.com",
    actionHref: "mailto:hello@cairnity.com",
  },
  {
    Icon: Calendar,
    title: "Book a call",
    body: "30 minutes, free. No deck — just a real conversation.",
    actionLabel: "Schedule on Cal.com",
    actionHref: "https://cal.com/cairnity",
  },
  {
    Icon: Clock,
    title: "Response time",
    body: "We&apos;re a small team — every reply comes from someone senior.",
    actionLabel: "Within 1 business day",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about
            <br />
            <span className="italic text-[--fg-muted]">where AI fits in your business.</span>
          </>
        }
        description="Tell us a little about your company and what you're trying to figure out. We'll get back to you within one business day."
      />

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5 space-y-6">
            {channels.map(({ Icon, title, body, actionLabel, actionHref }) => (
              <div key={title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.80_0.13_75/0.18)] to-[oklch(0.72_0.18_220/0.10)] border border-[--border-strong]">
                  <Icon className="size-5 text-[--accent]" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-[--fg]">{title}</h3>
                  <p
                    className="mt-1 text-[--fg-muted]"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                  {actionHref ? (
                    <a
                      href={actionHref}
                      className="mt-2 inline-block text-sm text-[--accent] hover:underline"
                    >
                      {actionLabel}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-[--accent]">{actionLabel}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="hairline mt-8" />

            <div className="text-sm text-[--fg-faint]">
              We work primarily with North American &amp; EU SMBs, but we&apos;ll
              happily meet you wherever your team works.
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
