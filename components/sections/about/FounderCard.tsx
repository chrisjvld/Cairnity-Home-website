"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";

function LinkedinGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeUp, stagger } from "@/lib/motion";

export function FounderCard() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-12 items-center"
        >
          <motion.div variants={fadeUp} className="md:col-span-5">
            <GlassCard className="!p-0 overflow-hidden">
              {/* Founder portrait placeholder — swap for real photo */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[oklch(0.30_0.10_250)] via-[oklch(0.22_0.06_220)] to-[oklch(0.18_0.05_295)] flex items-center justify-center">
                <div className="font-display text-[8rem] text-[--fg]/20">CF</div>
                <div className="absolute inset-0 bg-[radial-gradient(closest-side,transparent_60%,oklch(0.13_0.02_250/0.6))]" />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-[--accent]">
              Founder
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[--fg] text-balance leading-[1.05]">
              Hi, I&apos;m the operator
              <br />
              <span className="italic text-[--fg-muted]">behind Cairnity.</span>
            </h2>
            <div className="mt-6 space-y-5 text-lg text-[--fg-muted] text-pretty">
              <p>
                Before Cairnity I spent a decade building and shipping
                software inside fast-moving teams — the last several years
                deeply hands-on with applied AI. I&apos;ve sat on both sides
                of the table: as the engineer being asked to make AI
                useful, and as the operator being asked whether it was
                worth the bet.
              </p>
              <p>
                Cairnity is the firm I wanted to call when I was on the
                operator side and couldn&apos;t find a clear answer. Senior,
                practical, allergic to hype.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@cairnity.com"
                className="inline-flex items-center gap-2 rounded-full glass-soft px-4 py-2 text-sm text-[--fg-muted] hover:text-[--fg] transition-colors"
              >
                <Mail className="size-4" />
                hello@cairnity.com
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass-soft px-4 py-2 text-sm text-[--fg-muted] hover:text-[--fg] transition-colors"
              >
                <LinkedinGlyph className="size-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
