"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClipboardList, Handshake, ScanSearch } from "lucide-react";

import { workflowSteps } from "@/lib/montask-content";

import { GlassCard } from "./glass-card";
import { SectionBadge } from "./section-badge";

const icons = [ClipboardList, ScanSearch, Handshake];

export function MontaskHowItWorks() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-shell" id="workflow">
      <div className="container-shell relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.45 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionBadge>Workflow in 3 steps</SectionBadge>
          <h2 className="section-title mt-6 font-display text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">
            Montask 3 алхмаар эхэлнэ
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl text-lg">
            Screen recording-ийн clean rhythm-ийг дагаж, хамгийн чухал гурван
            мөчийг л төвд нь авчирсан бүтэц.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {workflowSteps.map((step, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
                transition={{
                  duration: 0.68,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={reducedMotion ? undefined : { y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GlassCard className="h-full overflow-hidden p-6 sm:p-7" tone="warm">
                  <div className="rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.66)] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--ink-soft)]">
                        {step.eyebrow}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(245,155,47,0.12)] text-[var(--hero-accent)]">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                    </div>

                    <div className="mt-5 rounded-[20px] border border-[var(--border)] bg-[rgba(255,255,255,0.8)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(245,155,47,0.75)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,193,90,0.65)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,138,76,0.6)]" />
                      </div>
                      <div className="mt-4 grid gap-2">
                        {step.preview.map((item, previewIndex) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2"
                          >
                            <span className="text-sm text-[var(--ink)]">{item}</span>
                            <span className="h-2.5 w-14 rounded-full bg-[rgba(23,18,15,0.08)]" />
                            <span
                              className="h-7 w-7 rounded-full"
                              style={{
                                background:
                                  previewIndex === 1
                                    ? "linear-gradient(135deg, rgba(245,155,47,0.9), rgba(255,193,90,0.85))"
                                    : "rgba(23,18,15,0.06)",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--ink-soft)]">
                    {step.step}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="section-copy mt-4 text-base">{step.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
