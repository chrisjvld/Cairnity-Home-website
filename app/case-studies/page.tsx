import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case studies",
  description:
    "Real AI engagements with small and mid-sized businesses — outcomes, approach, and what changed.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Real engagements,
            <br />
            <span className="italic text-[--fg-muted]">measurable outcomes.</span>
          </>
        }
        description="A few of the businesses we've worked with and what changed for them. We share these with permission, and we don't ghostwrite outcomes — every metric below was confirmed by the client."
      />

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.05}>
              <Link href={`/case-studies/${study.slug}`} className="block h-full group">
                <GlassCard className="h-full !p-0 overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.30_0.10_250)] via-[oklch(0.22_0.08_220)] to-[oklch(0.18_0.06_295)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(closest-side,transparent_30%,oklch(0.13_0.02_250/0.7))]" />
                    <div className="relative z-10 flex h-full items-end p-6">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--fg-faint]">
                          {study.industry}
                        </p>
                        <p className="mt-1 font-display text-2xl text-[--fg]">
                          {study.client}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-2xl md:text-3xl text-[--fg] leading-[1.1] text-balance">
                      {study.headline}
                    </h3>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {study.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-2xl text-gradient-accent">
                            {m.value}
                          </div>
                          <div className="text-xs text-[--fg-faint] mt-0.5 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 inline-flex items-center gap-1.5 text-sm text-[--accent]">
                      Read the case study
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
