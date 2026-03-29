"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightLeft, CheckCircle2, CircleSlash, Languages, Sparkles, Timer } from "lucide-react";

import { proofSection } from "@/lib/montask-content";

import { GlassCard } from "./glass-card";
import { SectionBadge } from "./section-badge";

const highlightIcons = [Languages, Sparkles, Timer];

export function MontaskFeatureGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-shell bg-[linear-gradient(180deg,var(--page-bg)_0%,var(--page-bg-muted)_100%)]" id="proof">
      <div className="container-shell">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.45 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionBadge>{proofSection.badge}</SectionBadge>
          <h2 className="section-title mt-6 font-display text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">
            {proofSection.title}
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl text-lg">
            {proofSection.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.95fr_auto_1.05fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : -22 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <GlassCard className="h-full p-7 sm:p-8" tone="light">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(23,18,15,0.06)] text-[var(--ink-soft)]">
                  <CircleSlash className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--ink-soft)]">
                    Before
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-[var(--ink)]">
                    {proofSection.before.title}
                  </h3>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {proofSection.before.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[20px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm leading-7 text-[var(--ink-soft)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            className="hidden items-center justify-center lg:flex"
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.92 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            viewport={{ once: true, amount: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.8)] shadow-[0_18px_46px_var(--warm-shadow-soft)]">
              <ArrowRightLeft className="h-5 w-5 text-[var(--hero-accent)]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : 22 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <GlassCard className="h-full p-7 sm:p-8" tone="warm" strong>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(245,155,47,0.12)] text-[var(--hero-accent)]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--ink-soft)]">
                    With Montask
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-[var(--ink)]">
                    {proofSection.after.title}
                  </h3>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {proofSection.after.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[20px] border border-[rgba(245,155,47,0.16)] bg-[rgba(255,255,255,0.82)] px-4 py-3 text-sm leading-7 text-[var(--ink)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {proofSection.highlights.map((item, index) => {
            const Icon = highlightIcons[index];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
                transition={{
                  duration: 0.62,
                  delay: 0.12 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={reducedMotion ? undefined : { y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GlassCard className="h-full p-5" tone="light">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(245,155,47,0.1)] text-[var(--hero-accent)]">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--ink)]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="section-copy mt-4 text-sm">{item.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
