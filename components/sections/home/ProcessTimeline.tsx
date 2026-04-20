"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Discover",
    body:
      "We sit with your teams, map the work as it actually happens, and surface where AI will deliver real leverage. Two to three weeks, ending in a prioritized roadmap.",
  },
  {
    n: "02",
    title: "Educate",
    body:
      "Workshops and playbooks tailored to your roles and tools. Your team builds confidence and a shared vocabulary before we ship a line of production code.",
  },
  {
    n: "03",
    title: "Implement",
    body:
      "We build the chosen workflows end-to-end — production-grade software, evaluation harness, and documentation your team can own from day one.",
  },
  {
    n: "04",
    title: "Compound",
    body:
      "Monthly working sessions to refine, expand, and ship the next thing. AI capability becomes a durable advantage, not a one-time project.",
  },
];

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A path up the curve,
              <br />
              <span className="italic text-[--fg-muted]">not a leap into the dark.</span>
            </>
          }
          description="Every Cairnity engagement follows the same four-stage rhythm — adapted to your size, your stakes, and your speed."
        />

        <div ref={ref} className="relative mt-20 grid gap-12 md:grid-cols-[140px_1fr]">
          {/* Vertical progress line (desktop only) */}
          <div className="pointer-events-none absolute left-[69px] top-0 hidden h-full w-px bg-[--border] md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-[--accent] via-[--accent-2] to-transparent shadow-[0_0_20px_var(--accent)]"
            />
          </div>

          <div className="hidden md:block" />
          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-12"
              >
                {/* Node + number */}
                <div className="relative md:absolute md:-left-[140px] md:top-1 flex items-center gap-4">
                  <div className="relative">
                    <div className="size-3 rounded-full bg-[--accent] shadow-[0_0_18px_var(--accent)]" />
                    <div className="absolute inset-0 size-3 rounded-full bg-[--accent] animate-ping opacity-30" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[--fg-faint]">
                    Step {s.n}
                  </span>
                </div>

                <div className="md:col-start-2">
                  <h3 className="font-display text-3xl md:text-4xl text-[--fg] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[--fg-muted] text-lg">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
