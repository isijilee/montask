"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Sparkles } from "lucide-react";

import { audienceCards } from "@/lib/montask-content";

import { GlassCard } from "./glass-card";
import { SectionBadge } from "./section-badge";

const icons = [Sparkles, BriefcaseBusiness];

export function MontaskAudienceSplit() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-shell bg-[linear-gradient(180deg,var(--page-bg-muted)_0%,var(--page-bg)_100%)]" id="audience">
      <div className="container-shell">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.45 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionBadge>Хоёр талын эхлэл</SectionBadge>
          <h2 className="section-title mt-6 font-display text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">
            Хэнд зориулагдаж байна?
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl text-lg">
            Энэ page нь нэг тал руу хэлбийхгүй. Компани ба freelancer хоёрын
            аль алинд нь илүү цэвэр эхлэл өгөхийг зорьж байна.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {audienceCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                transition={{
                  duration: 0.66,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={reducedMotion ? undefined : { y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GlassCard className="h-full p-7 sm:p-8" tone={index === 0 ? "light" : "warm"}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(245,155,47,0.12)] text-[var(--hero-accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
                        {card.id === "freelancers" ? "For freelancers" : "For companies"}
                      </p>
                      <h3 className="mt-1 font-display text-3xl font-bold text-[var(--ink)]">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="section-copy mt-6 text-base">{card.summary}</p>

                  <div className="mt-6 space-y-3">
                    {card.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[20px] border border-[var(--border)] bg-[rgba(255,255,255,0.7)] px-4 py-3 text-sm leading-7 text-[var(--ink-soft)]"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)]">
                    {card.cta}
                    <ArrowUpRight className="h-4 w-4 text-[var(--hero-accent)]" />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
