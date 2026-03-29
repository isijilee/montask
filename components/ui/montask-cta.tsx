"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ctaContent } from "@/lib/montask-content";

import { GradientButton } from "./gradient-button";
import { SectionBadge } from "./section-badge";

export function MontaskCta() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-shell pb-8 sm:pb-10" id="cta">
      <div className="container-shell">
        <motion.div
          className="relative overflow-hidden rounded-[36px] border border-[rgba(255,255,255,0.12)] px-6 py-14 sm:px-10 lg:px-14 lg:py-16"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 22 }}
          transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,193,90,0.22),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,138,76,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))]"
          />
          <div
            aria-hidden="true"
            className="hero-beam animate-beam absolute left-[-12%] top-[22%] h-px w-[32rem]"
          />
          <div
            aria-hidden="true"
            className="hero-beam animate-beam absolute right-[-10%] top-[68%] h-px w-[24rem]"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <SectionBadge tone="dark">Early access</SectionBadge>
            <h2 className="section-title mt-6 font-display text-4xl font-extrabold text-white sm:text-5xl">
              {ctaContent.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.72)]">
              {ctaContent.subtitle}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <GradientButton href="#" size="lg">
                {ctaContent.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </GradientButton>
              <GradientButton href="#platform" size="lg" variant="secondary">
                {ctaContent.secondaryCta}
              </GradientButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
