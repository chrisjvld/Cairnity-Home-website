import { cn } from "@/lib/cn";

interface CairnMarkProps {
  className?: string;
  size?: number;
  withGlow?: boolean;
}

/**
 * Stacked-stone cairn mark — Cairnity's brand symbol.
 * Three balanced stones of decreasing size, each with a subtle
 * highlight to suggest stone weight + light direction.
 */
export function CairnMark({ className, size = 28, withGlow = false }: CairnMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="cairn-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="cairn-highlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.45" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {withGlow && (
          <filter id="cairn-glow">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      <g filter={withGlow ? "url(#cairn-glow)" : undefined}>
        {/* Bottom stone */}
        <ellipse cx="32" cy="50" rx="22" ry="8" fill="url(#cairn-stone)" />
        <ellipse cx="32" cy="48" rx="22" ry="6" fill="url(#cairn-highlight)" opacity="0.35" />

        {/* Middle stone */}
        <ellipse cx="32" cy="34" rx="15" ry="7" fill="url(#cairn-stone)" />
        <ellipse cx="32" cy="32.5" rx="15" ry="5" fill="url(#cairn-highlight)" opacity="0.4" />

        {/* Top stone */}
        <ellipse cx="32" cy="20" rx="9" ry="5.5" fill="url(#cairn-stone)" />
        <ellipse cx="32" cy="19" rx="9" ry="4" fill="url(#cairn-highlight)" opacity="0.5" />
      </g>
    </svg>
  );
}
