"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { heroContent } from "@/lib/montask-content";

import { GradientButton } from "./gradient-button";
import { SectionBadge } from "./section-badge";

const beams = [
  { top: "16%", left: "-4%", width: "42rem", delay: 0, duration: 11 },
  { top: "28%", left: "58%", width: "24rem", delay: 1.2, duration: 13 },
  { top: "40%", left: "8%", width: "34rem", delay: 2.1, duration: 12 },
  { top: "70%", left: "48%", width: "30rem", delay: 0.6, duration: 14 },
] as const;

export function MontaskHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32"
      id="hero"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,193,90,0.2),transparent_26%),radial-gradient(circle_at_20%_50%,rgba(245,155,47,0.12),transparent_26%),radial-gradient(circle_at_80%_24%,rgba(255,138,76,0.14),transparent_24%),linear-gradient(180deg,var(--hero-bg)_0%,var(--hero-bg-soft)_54%,var(--hero-bg-deep)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_34%)] opacity-70"
      />

      {beams.map((beam) => (
        <motion.div
          key={`${beam.top}-${beam.left}`}
          animate={
            reducedMotion
              ? undefined
              : {
                  x: ["-4%", "5%", "-3%"],
                  opacity: [0.55, 1, 0.62],
                }
          }
          className="hero-beam absolute h-px"
          initial={reducedMotion ? false : { opacity: 0 }}
          style={{
            left: beam.left,
            top: beam.top,
            width: beam.width,
          }}
          transition={{
            delay: beam.delay,
            duration: beam.duration,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute left-[10%] top-[22%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,193,90,0.2),transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[16%] right-[12%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,138,76,0.16),transparent_70%)] blur-3xl"
      />

      <div className="container-shell relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <SectionBadge tone="dark">{heroContent.badge}</SectionBadge>
          </motion.div>

          <motion.h1
            className="section-title mt-8 font-display text-5xl font-extrabold leading-[0.96] tracking-[-0.07em] text-white sm:text-6xl lg:text-[5.8rem]"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
            transition={{
              duration: 0.82,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {heroContent.title[0]}
            <br />
            <span className="text-hero-gradient">{heroContent.title[1]}</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.72)] sm:text-xl"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            transition={{
              duration: 0.8,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
            transition={{
              duration: 0.75,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <GradientButton href="#cta" size="lg">
              {heroContent.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </GradientButton>
            <GradientButton href="#workflow" size="lg" variant="secondary">
              {heroContent.secondaryCta}
            </GradientButton>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/60"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            transition={{
              duration: 0.72,
              delay: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            {heroContent.microItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] px-4 py-2"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
