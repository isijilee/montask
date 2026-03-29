import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  strong?: boolean;
  tone?: "light" | "warm" | "dark";
};

export function GlassCard({
  children,
  className,
  strong = false,
  tone = "light",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px]",
        tone === "light" && "surface-card bg-white/90",
        tone === "warm" && "surface-card surface-card-warm",
        tone === "dark" && "dark-surface text-white",
        strong && "warm-ring",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
