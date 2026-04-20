"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";
import { easeOutSoft } from "@/lib/motion";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 md:pt-48 pb-12 md:pb-20 overflow-hidden">
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.18_220/0.25),oklch(0.70_0.13_75/0.12),transparent)] blur-3xl" />
      </div>

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutSoft }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[--accent]"
        >
          <span className="size-1 rounded-full bg-[--accent]" />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutSoft, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.025em] text-balance text-gradient"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutSoft, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-[--fg-muted] text-pretty"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
