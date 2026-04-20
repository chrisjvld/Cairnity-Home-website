"use client";

import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variants?: Variants;
  once?: boolean;
  as?: "div" | "section" | "li" | "article";
}

export function Reveal({
  children,
  delay = 0,
  className,
  variants = fadeUp,
  once = true,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
