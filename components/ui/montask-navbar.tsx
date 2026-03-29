"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/montask-content";
import { cn } from "@/lib/utils";

import { GradientButton } from "./gradient-button";

export function MontaskNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50"
      initial={{ opacity: 0, y: reducedMotion ? 0 : -28 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-shell py-5">
        <div
          className={cn(
            "mx-auto flex max-w-5xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5",
            isScrolled
              ? "border-[rgba(255,255,255,0.12)] bg-[rgba(15,10,7,0.88)] shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
              : "border-[rgba(255,255,255,0.09)] bg-[rgba(15,10,7,0.46)] backdrop-blur-xl",
          )}
        >
          <a
            className="flex items-center gap-3 rounded-full px-2 py-1"
            href="#hero"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--hero-accent),var(--hero-accent-soft))] text-sm font-bold text-[var(--hero-bg)] shadow-[0_10px_26px_rgba(245,155,47,0.28)]">
              M
            </span>
            <div>
              <p className="font-display text-lg font-extrabold tracking-[-0.04em] text-white">
                Montask
              </p>
              <p className="text-[11px] tracking-[0.28em] text-[rgba(255,255,255,0.46)] uppercase">
                freelance workflow
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="text-sm font-medium text-[rgba(255,255,255,0.72)] transition-colors duration-200 hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <GradientButton href="#" variant="ghost">
              Нэвтрэх
            </GradientButton>
            <GradientButton href="#cta">Эрт нэгдэх</GradientButton>
          </div>

          <button
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Цэс хаах" : "Цэс нээх"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-white backdrop-blur-xl transition hover:bg-[rgba(255,255,255,0.08)] lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-[rgba(15,10,7,0.72)] backdrop-blur-lg lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              className="container-shell pt-24"
              exit={{ y: -20, opacity: 0 }}
              initial={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div
                className="dark-surface rounded-[28px] p-6"
                id="mobile-nav"
              >
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-white transition hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)]"
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-6 grid gap-3">
                  <GradientButton
                    className="w-full justify-center"
                    href="#cta"
                    onClick={() => setMenuOpen(false)}
                    size="lg"
                  >
                    Эрт нэгдэх
                  </GradientButton>
                  <GradientButton
                    className="w-full justify-center"
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    size="lg"
                    variant="ghost"
                  >
                    Нэвтрэх
                  </GradientButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
