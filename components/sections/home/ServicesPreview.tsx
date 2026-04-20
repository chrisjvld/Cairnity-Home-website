"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { serviceIcons } from "@/components/sections/services/service-icons";
import { fadeUp, stagger } from "@/lib/motion";

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Four ways we help
                <br />
                <span className="italic text-[--fg-muted]">SMBs put AI to work.</span>
              </>
            }
          />
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm text-[--fg-muted] hover:text-[--fg] transition-colors"
          >
            All services
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {services.map(({ id, title, tagline, icon }, i) => {
            const Icon = serviceIcons[icon];
            return (
            <motion.div key={id} variants={fadeUp}>
              <Link href={`/services#${id}`} className="block h-full">
                <GlassCard className="h-full group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.80_0.13_75/0.18)] to-[oklch(0.72_0.18_220/0.10)] border border-[--border-strong]">
                      <Icon className="size-5 text-[--accent]" />
                    </div>
                    <span className="font-mono text-xs text-[--fg-faint]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl text-[--fg]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[--fg-muted]">{tagline}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-[--accent]">
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
