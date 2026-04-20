"use client";

import { motion } from "motion/react";
import { Lightbulb, Layers, Gauge } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";

const values = [
  {
    Icon: Lightbulb,
    title: "Clarity over hype",
    body:
      "We translate AI from a buzzword into specific, defensible decisions about what to use, what to skip, and what to wait on.",
  },
  {
    Icon: Layers,
    title: "Built on your reality",
    body:
      "Every recommendation and build is shaped by how your team actually works today — not how a vendor wishes they did.",
  },
  {
    Icon: Gauge,
    title: "Outcomes you can measure",
    body:
      "We pick metrics with you upfront and instrument everything we ship, so you can see exactly what AI is changing in your business.",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Cairnity"
          title={
            <>
              Senior judgment, <span className="italic text-[--fg-muted]">applied</span>
              <br /> to the work you actually do.
            </>
          }
          description="We don't sell AI. We help you decide where it earns its keep — and then we help you put it to work."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {values.map(({ Icon, title, body }) => (
            <motion.div key={title} variants={fadeUp}>
              <GlassCard className="h-full">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.80_0.13_75/0.18)] to-[oklch(0.72_0.18_220/0.10)] border border-[--border-strong]">
                  <Icon className="size-5 text-[--accent]" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-[--fg]">{title}</h3>
                <p className="mt-3 text-[--fg-muted]">{body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
