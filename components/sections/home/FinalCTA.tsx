"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticLink";
import { CairnMark } from "@/components/effects/CairnMark";
import { fadeUp, stagger } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Decorative aurora glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.18_220/0.30),oklch(0.70_0.13_75/0.18),transparent)] blur-3xl" />
      </div>

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container-x text-center"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <CairnMark size={56} className="text-[--accent]" withGlow />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="mt-8 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-balance text-gradient max-w-4xl mx-auto"
        >
          Let&apos;s find the next durable step
          <br />
          <span className="italic text-[--fg-muted]">your business should take.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl mx-auto text-[--fg-muted] text-lg"
        >
          A free 30-minute conversation. No deck, no pitch — just a real
          discussion of where AI fits in your business.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex justify-center">
          <Magnetic strength={0.4}>
            <Button href="/contact" size="lg" withArrow>
              Book a discovery call
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
