"use client";

import { motion } from "motion/react";
import { fadeUp, stagger } from "@/lib/motion";

export function Story() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-12 md:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[--accent]">
              Why Cairnity exists
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[--fg] leading-[1.05] text-balance">
              The companies AI will help most are the ones least equipped to navigate it.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-7 md:col-start-6 space-y-5 text-lg text-[--fg-muted] text-pretty">
            <p>
              The technology press talks about AI as if every conversation
              starts with a CTO and a research budget. Most businesses
              don&apos;t look like that. They look like 30 people running a
              brokerage, an accounting firm, a manufacturing line, an agency
              — doing real work for real customers with very little time to
              experiment.
            </p>
            <p>
              For those companies, the gap between what AI can do and what
              they can actually use is the widest. And it&apos;s the gap with
              the most economic value sitting inside it.
            </p>
            <p>
              Cairnity exists to close that gap. Not by selling another
              platform, not by writing another whitepaper — but by sitting
              with your team, understanding the work, and shipping the right
              thing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
