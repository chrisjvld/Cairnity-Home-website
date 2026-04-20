"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { caseStudies } from "@/content/case-studies";
import { fadeUp, stagger } from "@/lib/motion";

export function CaseStudyTeaser() {
  const featured = caseStudies[0];

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[--accent]"
          >
            <span className="size-1 rounded-full bg-[--accent]" />
            Featured work
          </motion.div>

          <Link href={`/case-studies/${featured.slug}`} className="block group">
            <GlassCard className="!p-0 overflow-hidden" hover>
              <div className="grid md:grid-cols-[1.1fr_1fr]">
                <div className="p-8 md:p-12">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--fg-faint]">
                    {featured.industry} · {featured.client}
                  </p>
                  <h3 className="mt-4 font-display text-3xl md:text-5xl text-[--fg] leading-[1.05] text-balance">
                    {featured.headline}
                  </h3>
                  <p className="mt-5 max-w-xl text-[--fg-muted] text-pretty">
                    {featured.summary}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 text-[--accent]">
                    Read the case study
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-[oklch(0.20_0.04_250/0.6)] to-[oklch(0.16_0.05_220/0.6)] p-8 md:p-12 border-t md:border-t-0 md:border-l border-[--border]">
                  <div className="grid gap-8">
                    {featured.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-5xl md:text-6xl text-gradient-accent leading-none">
                          {m.value}
                        </div>
                        <div className="mt-2 text-sm text-[--fg]">{m.label}</div>
                        {m.detail && (
                          <div className="text-xs text-[--fg-faint] mt-0.5">
                            {m.detail}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
