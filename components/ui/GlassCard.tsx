import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padded?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  padded = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-[var(--radius-lg)] relative overflow-hidden",
        padded && "p-6 md:p-8",
        hover &&
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[--border-strong] hover:-translate-y-0.5",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(1_0_0/0.25)] to-transparent"
      />
      {children}
    </div>
  );
}
