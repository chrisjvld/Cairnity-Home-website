import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
}

const speedClass = {
  slow: "[animation-duration:60s]",
  normal: "[animation-duration:40s]",
  fast: "[animation-duration:25s]",
};

export function Marquee({
  children,
  className,
  pauseOnHover = true,
  speed = "normal",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max animate-marquee gap-16",
          speedClass[speed],
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 items-center gap-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
