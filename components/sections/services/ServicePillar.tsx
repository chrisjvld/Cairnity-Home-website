"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { type Service } from "@/content/services";
import { fadeUp, stagger } from "@/lib/motion";
import { serviceIcons } from "@/components/sections/services/service-icons";

interface Props {
  service: Service;
  index: number;
}

export function ServicePillar({ service, index }: Props) {
  const reversed = index % 2 === 1;
  const Icon = serviceIcons[service.icon];

  return (
    <motion.div
      id={service.id}
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="scroll-mt-32"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Title block */}
        <motion.div
          variants={fadeUp}
          className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}
        >
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.80_0.13_75/0.18)] to-[oklch(0.72_0.18_220/0.10)] border border-[--border-strong]">
              <Icon className="size-5 text-[--accent]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[--fg-faint]">
              0{index + 1} · Pillar
            </span>
          </div>
          <h3 className="mt-6 font-display text-4xl md:text-5xl text-[--fg] leading-[1.05] tracking-tight">
            {service.title}
          </h3>
          <p className="mt-4 text-lg text-[--fg-muted] text-pretty">
            {service.tagline}
          </p>
        </motion.div>

        {/* Detail card */}
        <motion.div
          variants={fadeUp}
          className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}
        >
          <GlassCard>
            <p className="text-[--fg] text-pretty">{service.description}</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent]">
                  Outcomes
                </h4>
                <ul className="mt-4 space-y-3">
                  {service.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-[--fg-muted]">
                      <Check className="mt-1 size-4 shrink-0 text-[--accent]" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent]">
                  Deliverables
                </h4>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-[--fg-muted]">
                      <Check className="mt-1 size-4 shrink-0 text-[--accent]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
