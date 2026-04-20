"use client";

import { motion } from "motion/react";
import { Zap, Hammer, Infinity as InfinityIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";

const models = [
  {
    Icon: Zap,
    name: "Sprint",
    timeframe: "1–2 weeks",
    price: "From $12k",
    description:
      "Fixed-scope engagement to answer a specific question or run a workshop series. The fastest way to work with us.",
    bestFor: "Workshops, opportunity sprints, proof-of-concept builds.",
    features: [
      "Defined scope and outcome upfront",
      "Senior team only — no handoffs",
      "Written readout you can share with stakeholders",
    ],
  },
  {
    Icon: Hammer,
    name: "Project",
    timeframe: "6–12 weeks",
    price: "From $40k",
    description:
      "End-to-end build of a defined AI capability — audit, design, implement, train, document. The most common shape of our work.",
    bestFor: "Workflow audits, custom implementations, internal AI tools.",
    features: [
      "Discovery, build, and handoff phases",
      "Weekly working sessions with your team",
      "30-day support window after handoff",
    ],
    featured: true,
  },
  {
    Icon: InfinityIcon,
    name: "Retainer",
    timeframe: "Monthly",
    price: "From $9k/mo",
    description:
      "Ongoing fractional AI leadership. We act as part of your team — owning strategy, vendor decisions, and execution oversight.",
    bestFor: "Companies that need senior AI judgment without a full-time hire.",
    features: [
      "Standing weekly working sessions",
      "Quarterly strategy reviews",
      "On-call advisory between sessions",
    ],
  },
];

export function EngagementModels() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Ways to engage"
          title={
            <>
              Three shapes of work,
              <br />
              <span className="italic text-[--fg-muted]">priced clearly upfront.</span>
            </>
          }
          description="Whatever the engagement shape, you get the same senior team and the same unwillingness to ship work we wouldn't be proud of."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {models.map(({ Icon, name, timeframe, price, description, bestFor, features, featured }) => (
            <motion.div key={name} variants={fadeUp}>
              <GlassCard
                className={`h-full relative ${featured ? "border-[--accent]/40 shadow-[0_0_60px_-10px_oklch(0.80_0.13_75/0.30)]" : ""}`}
              >
                {featured && (
                  <div className="absolute -top-3 left-6 rounded-full bg-[--accent] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[--bg] font-medium">
                    Most common
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.80_0.13_75/0.18)] to-[oklch(0.72_0.18_220/0.10)] border border-[--border-strong]">
                    <Icon className="size-5 text-[--accent]" />
                  </div>
                  <span className="font-mono text-xs text-[--fg-faint]">
                    {timeframe}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-3xl text-[--fg]">{name}</h3>
                <p className="mt-2 text-sm text-[--accent]">{price}</p>
                <p className="mt-4 text-[--fg-muted]">{description}</p>

                <div className="mt-6 hairline" />

                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[--fg-faint]">
                  Best for
                </p>
                <p className="mt-2 text-sm text-[--fg]">{bestFor}</p>

                <ul className="mt-6 space-y-2.5 text-sm text-[--fg-muted]">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 size-1 rounded-full bg-[--accent] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
