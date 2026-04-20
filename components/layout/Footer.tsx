import Link from "next/link";
import { CairnMark } from "@/components/effects/CairnMark";

const linkGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#literacy", label: "AI literacy & workshops" },
      { href: "/services#audits", label: "Workflow audits" },
      { href: "/services#implementation", label: "Custom implementation" },
      { href: "/services#fractional", label: "Fractional AI leadership" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "mailto:hello@cairnity.com", label: "hello@cairnity.com" },
      { href: "https://cal.com/cairnity", label: "Book a call" },
      { href: "https://www.linkedin.com/", label: "LinkedIn" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[--border]">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <CairnMark size={28} className="text-[--accent]" />
              <span className="font-display text-2xl">Cairnity</span>
            </Link>
            <p className="mt-5 max-w-sm text-[--fg-muted]">
              Guiding small and mid-sized businesses up the AI curve — one
              durable, well-placed step at a time.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[--fg-faint]">
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-[--fg-muted] transition-colors hover:text-[--fg]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-8 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[--fg-faint]">
            © {new Date().getFullYear()} Cairnity. All rights reserved.
          </p>
          <p className="text-xs text-[--fg-faint] tracking-wide">
            Built with care in the era of intelligent machines.
          </p>
        </div>
      </div>
    </footer>
  );
}
