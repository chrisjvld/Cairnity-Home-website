"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";

const principles = [
  {
    n: "01",
    title: "We earn the right to recommend.",
    body:
      "Every recommendation we make starts from time spent watching how your business actually runs.",
  },
  {
    n: "02",
    title: "We optimize for momentum.",
    body:
      "Small visible wins early, compounding from there. We'd rather ship five things in a quarter than promise one in a year.",
  },
  {
    n: "03",
    title: "We're vendor-agnostic on purpose.",
    body:
      "Our incentive is your outcome, not a referral fee. We have no kickbacks with any platform we recommend.",
  },
  {
    n: "04",
    title: "Your team owns what we build.",
    body:
      "Documentation, evals, and handoff are not afterthoughts — they're how we measure that we did our job.",
  },
  {
    n: "05",
    title: "We say no when we should.",
    body:
      "If AI isn't the right answer for what you're trying to do, we'll tell you — and point you somewhere useful.",
  },
  {
    n: "06",
    title: "Quiet over loud.",
    body:
      "We don't post about your work without permission, ever. The best testimonial we can earn is your next call.",
  },
];

export function Principles() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Principles"
          title={
            <>
              Six tenets that decide
              <br />
              <span className="italic text-[--fg-muted]">how we show up.</span>
            </>
          }
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((p) => (
            <motion.div key={p.n} variants={fadeUp}>
              <GlassCard className="h-full">
                <span className="font-mono text-xs text-[--accent]">{p.n}</span>
                <h3 className="mt-3 font-display text-2xl text-[--fg] text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 text-[--fg-muted] text-pretty">{p.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
