"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  ImagePlus,
  MessageSquareMore,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

import { platformPreview } from "@/lib/montask-content";

import { GlassCard } from "./glass-card";
import { SectionBadge } from "./section-badge";

export function MontaskMarketplacePreview() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-shell" id="platform">
      <div className="container-shell">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.45 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionBadge>{platformPreview.badge}</SectionBadge>
          <h2 className="section-title mt-6 font-display text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">
            {platformPreview.title}
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl text-lg">
            {platformPreview.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 26 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GlassCard className="overflow-hidden p-4 sm:p-5 lg:p-6" tone="warm">
            <div className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.74)] p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(245,155,47,0.12)] text-[var(--hero-accent)]">
                    <BriefcaseBusiness className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                      {platformPreview.project.label}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-[var(--ink)]">
                      {platformPreview.project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--ink-soft)]">
                  <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.8)] px-3 py-1.5">
                    {platformPreview.project.budget}
                  </span>
                  <span className="rounded-full border border-[rgba(245,155,47,0.16)] bg-[rgba(245,155,47,0.12)] px-3 py-1.5 text-[var(--hero-bg)]">
                    {platformPreview.project.timeline}
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[0.95fr_1.15fr_0.9fr]">
                <div className="rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Project brief
                  </p>
                  <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
                    {platformPreview.project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {platformPreview.project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs text-[var(--ink-soft)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[22px] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-[var(--hero-accent)]" />
                      <p className="text-sm font-medium text-[var(--ink)]">
                        Next step
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                      Shortlist-оо харж, эхний message-ээ шууд эхлүүлэхэд
                      бэлэн.
                    </p>
                  </div>
                </div>

                <div className="rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.8)] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                      Smart shortlist
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,155,47,0.16)] bg-[rgba(245,155,47,0.12)] px-3 py-1 text-xs text-[var(--ink)]">
                      <Sparkles className="h-3.5 w-3.5 text-[var(--hero-accent)]" />
                      Live match
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {platformPreview.shortlist.map((person, index) => (
                      <div
                        key={person.name}
                        className="rounded-[22px] border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-[var(--ink)]">
                              {person.name}
                            </p>
                            <p className="mt-1 text-xs text-[var(--ink-soft)]">
                              {person.role}
                            </p>
                          </div>
                          <span
                            className="rounded-full px-2.5 py-1 text-xs font-semibold"
                            style={{
                              background:
                                index === 0
                                  ? "rgba(245,155,47,0.14)"
                                  : "rgba(23,18,15,0.06)",
                              color:
                                index === 0 ? "var(--hero-bg)" : "var(--ink-soft)",
                            }}
                          >
                            {person.match} match
                          </span>
                        </div>

                        <div className="mt-4 flex items-center justify-between text-xs text-[var(--ink-soft)]">
                          <div className="inline-flex items-center gap-2">
                            <UserRoundCheck className="h-3.5 w-3.5 text-[var(--hero-accent)]" />
                            Profile ready
                          </div>
                          <div className="inline-flex items-center gap-2">
                            <Clock3 className="h-3.5 w-3.5 text-[var(--hero-accent)]" />
                            {person.response} дотор
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {person.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.86)] px-2.5 py-1 text-[11px] text-[var(--ink-soft)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Workflow signals
                  </p>
                  <div className="mt-4 space-y-3">
                    {platformPreview.updates.map((item) => (
                      <div
                        key={item}
                        className="rounded-[20px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(245,155,47,0.12)] text-[var(--hero-accent)]">
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </div>
                          <p className="text-sm leading-7 text-[var(--ink-soft)]">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[22px] border border-[var(--border)] bg-[rgba(245,155,47,0.08)] p-4">
                    <div className="flex items-center gap-2">
                      <MessageSquareMore className="h-4 w-4 text-[var(--hero-accent)]" />
                      <p className="text-sm font-medium text-[var(--ink)]">
                        Message handoff
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                      Brief, shortlist, эхний холбооны context-оо нэг урсгалаар
                      авч орно.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {platformPreview.imageSlots.map((slot) => (
                <GlassCard key={slot.title} className="p-5 sm:p-6" tone="light">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(245,155,47,0.12)] text-[var(--hero-accent)]">
                      <ImagePlus className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">
                        {slot.title}
                      </p>
                      <p className="mt-1 text-xs text-[var(--ink-soft)]">
                        {slot.description}
                      </p>
                    </div>
                  </div>

                  <div className="image-slot mt-5 rounded-[24px] p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(245,155,47,0.1)] text-[var(--hero-accent)]">
                      <ImagePlus className="h-6 w-6" />
                    </div>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--ink-soft)]">
                      Add image here later
                    </p>
                    <p className="mt-3 text-sm text-[var(--ink)]">{slot.path}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
