import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return buildMetadata({ title: "Case study" });
  return buildMetadata({
    title: `${study.client} — ${study.industry}`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const related = caseStudies.filter((s) => s.slug !== study.slug);

  return (
    <>
      <section className="relative pt-40 md:pt-48 pb-12 md:pb-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.18_220/0.25),oklch(0.70_0.13_75/0.12),transparent)] blur-3xl" />
        </div>

        <div className="container-x">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-[--fg-muted] hover:text-[--fg] transition-colors"
          >
            <ArrowLeft className="size-4" />
            All case studies
          </Link>

          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[--accent]">
                {study.industry} · {study.client}
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] text-gradient leading-[1.05] text-balance tracking-[-0.025em]">
                {study.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[--fg-muted] text-pretty">
                {study.summary}
              </p>
            </div>

            <div className="md:col-span-4">
              <GlassCard>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--fg-faint]">
                  Engagement
                </p>
                <p className="mt-2 text-[--fg]">{study.duration}</p>

                <div className="mt-5 hairline" />

                <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-[--fg-faint]">
                  Services
                </p>
                <ul className="mt-2 space-y-1 text-[--fg-muted] text-sm">
                  {study.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Metric strip */}
      <section className="py-12">
        <div className="container-x">
          <Reveal>
            <GlassCard className="!p-0 overflow-hidden">
              <div className="grid sm:grid-cols-3">
                {study.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={`p-8 md:p-10 ${i > 0 ? "border-t sm:border-t-0 sm:border-l border-[--border]" : ""}`}
                  >
                    <div className="font-display text-5xl md:text-6xl text-gradient-accent leading-none">
                      {m.value}
                    </div>
                    <div className="mt-3 text-[--fg]">{m.label}</div>
                    {m.detail && (
                      <div className="mt-1 text-sm text-[--fg-faint]">
                        {m.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[--accent]">
              The challenge
            </h3>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.1}>
            <p className="text-lg text-[--fg-muted] text-pretty">
              {study.challenge}
            </p>
          </Reveal>
        </div>

        <div className="container-x grid gap-16 md:grid-cols-12 mt-16 md:mt-24">
          <Reveal className="md:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[--accent]">
              Our approach
            </h3>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.1}>
            <ol className="space-y-6">
              {study.approach.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-mono text-xs text-[--accent] mt-1 shrink-0 w-8">
                    0{i + 1}
                  </span>
                  <p className="text-lg text-[--fg-muted] text-pretty">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="container-x grid gap-16 md:grid-cols-12 mt-16 md:mt-24">
          <Reveal className="md:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[--accent]">
              Outcome
            </h3>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.1}>
            <p className="text-lg text-[--fg-muted] text-pretty">
              {study.outcome}
            </p>
          </Reveal>
        </div>

        {study.quote && (
          <div className="container-x mt-20 md:mt-28">
            <Reveal>
              <GlassCard className="relative max-w-3xl mx-auto text-center !p-12 md:!p-16">
                <Quote className="absolute left-8 top-8 size-8 text-[--accent]/30" aria-hidden />
                <blockquote className="font-display text-3xl md:text-4xl text-gradient leading-[1.15] text-balance">
                  &ldquo;{study.quote.text}&rdquo;
                </blockquote>
                <div className="mt-8 text-[--fg]">{study.quote.author}</div>
                <div className="text-sm text-[--fg-faint]">{study.quote.role}</div>
              </GlassCard>
            </Reveal>
          </div>
        )}
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[--accent]">
              More case studies
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/case-studies/${r.slug}`}
                  className="block group"
                >
                  <GlassCard className="h-full">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--fg-faint]">
                      {r.industry}
                    </p>
                    <h4 className="mt-3 font-display text-2xl text-[--fg] text-balance">
                      {r.headline}
                    </h4>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-[--accent]">
                      Read
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
