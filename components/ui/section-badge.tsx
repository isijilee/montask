import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionBadge({
  children,
  className,
  tone = "light",
}: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em]",
        tone === "dark"
          ? "border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.78)] backdrop-blur-xl"
          : "border border-[var(--border)] bg-[rgba(255,255,255,0.72)] text-[var(--ink-soft)]",
        className,
      )}
    >
      <span className="h-2 w-2 rounded-full bg-[var(--hero-accent)]" />
      {children}
    </span>
  );
}
