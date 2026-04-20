"use client";

import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 font-medium tracking-tight whitespace-nowrap rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[--fg] text-[--bg] hover:bg-[--accent] hover:text-[--bg] shadow-[0_10px_40px_-10px_oklch(1_0_0/0.4)] hover:shadow-[0_18px_50px_-10px_oklch(0.80_0.13_75/0.55)]",
  secondary:
    "glass text-[--fg] hover:bg-[oklch(1_0_0/0.06)] hover:border-[--border-strong]",
  ghost:
    "text-[--fg-muted] hover:text-[--fg] hover:bg-[oklch(1_0_0/0.04)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  withArrow?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", href, external, withArrow, children, ...props },
  ref,
) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={cn(classes, "group")}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(classes, "group")}>
        {inner}
      </Link>
    );
  }

  return (
    <button ref={ref} className={cn(classes, "group")} {...props}>
      {inner}
    </button>
  );
});
