"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CircleCheckBig, Globe2, Layers3, TimerReset } from "lucide-react";

import { trustStats } from "@/lib/montask-content";

import { GlassCard } from "./glass-card";

const icons = [CircleCheckBig, Layers3, TimerReset, Globe2];

export function MontaskTrustStrip() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-shell pt-0">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GlassCard className="overflow-hidden p-4 sm:p-5" tone="light">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {trustStats.map((item, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.74)] px-5 py-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(245,155,47,0.12)] text-[var(--hero-accent)]">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                      <div>
                        <p className="font-display text-3xl font-extrabold tracking-[-0.05em] text-[var(--ink)]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-semibold text-[var(--ink)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-[var(--ink-soft)]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
