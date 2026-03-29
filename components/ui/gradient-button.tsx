import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/utils";

type GradientButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export function GradientButton({
  children,
  href,
  className,
  variant = "primary",
  size = "default",
  ariaLabel,
  onClick,
}: GradientButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hero-accent)]/50 focus-visible:ring-offset-2";

  const sizes = {
    default: "px-5 py-3",
    lg: "px-6 py-3.5 text-[15px]",
  };

  const variants = {
    primary:
      "button-shine border-transparent bg-[linear-gradient(135deg,var(--hero-accent),var(--hero-accent-soft))] text-[var(--hero-bg)] shadow-[0_18px_44px_rgba(245,155,47,0.26)] hover:scale-[1.02] hover:shadow-[0_24px_58px_rgba(245,155,47,0.34)] focus-visible:ring-offset-[var(--hero-bg)]",
    secondary:
      "border-[rgba(255,255,255,0.18)] bg-transparent text-white backdrop-blur-xl hover:border-[rgba(255,255,255,0.28)] hover:bg-[rgba(255,255,255,0.06)] focus-visible:ring-offset-[var(--hero-bg)]",
    ghost:
      "border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.88)] hover:border-[rgba(255,255,255,0.22)] hover:bg-[rgba(255,255,255,0.08)] focus-visible:ring-offset-[var(--hero-bg)]",
  };

  const classes = cn(baseStyles, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a
        aria-label={ariaLabel}
        className={classes}
        href={href}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className={classes}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      type="button"
    >
      {children}
    </button>
  );
}
