"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { fadeUp, stagger } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "max-w-3xl",
        align === "center" && "text-center mx-auto",
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[--accent]"
        >
          <span className="size-1 rounded-full bg-[--accent]" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-balance text-gradient"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-2xl text-[--fg-muted] text-base md:text-lg text-pretty"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
