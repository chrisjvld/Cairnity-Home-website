"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { Button } from "@/components/ui/Button";
import { CairnMark } from "@/components/effects/CairnMark";
import { easeOutSoft } from "@/lib/motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden">
      <AuroraBackground className="-z-10" />

      <div className="container-x relative z-10 pt-32 pb-20 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutSoft }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[--fg-faint]"
        >
          <span className="h-px w-8 bg-[--border-strong]" />
          AI Advisory & Implementation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutSoft, delay: 0.1 }}
          className="mt-8 max-w-5xl font-display text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.98] tracking-[-0.03em] text-balance"
        >
          We help established businesses put AI to work —{" "}
          <span className="italic font-serif underline decoration-[--accent] decoration-1 underline-offset-4">
            deliberately.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutSoft, delay: 0.35 }}
          className="mt-7 max-w-xl text-base md:text-lg text-[--fg-muted] text-pretty"
        >
          Advisory, audits, and custom builds led by senior operators. No pilots
          that go nowhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutSoft, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <Button href="/contact" size="lg">
            Book a discovery call
          </Button>
          <Link
            href="#process"
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-[--fg-muted] transition-colors hover:text-[--fg]"
          >
            See how we work
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Scroll affordance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[--fg-faint]"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-px bg-[--border-strong]" />
        </motion.div>

        {/* Faint cairn watermark */}
        <CairnMark
          size={220}
          className="pointer-events-none absolute -right-12 -bottom-10 hidden text-[--accent] opacity-[0.06] md:block"
        />
      </div>
    </section>
  );
}
