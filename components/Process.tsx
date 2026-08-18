"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const STEPS = [
  { n: "01", t: "Audit", when: "Day 0 · free", d: "We map your week and price every manual step." },
  { n: "02", t: "Blueprint", when: "Week 1", d: "Fixed scope, fixed price, dates on paper." },
  { n: "03", t: "Ship in slices", when: "Weeks 2–6", d: "Something useful goes live every week." },
  { n: "04", t: "Tune", when: "Ongoing", d: "Reviewed monthly. Code and data stay yours." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        const start = window.innerHeight * 0.85;
        const end = window.innerHeight * 0.25;
        const p = (start - r.top) / (start - end);
        setProgress(Math.max(0, Math.min(1, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
              How it works
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
              Working software in three weeks.
            </h2>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* rail that fills as you scroll */}
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-ink-600 lg:block">
            <div
              className="h-full origin-left bg-gradient-to-r from-lime-400 to-cyan-400"
              style={{
                transform: `scaleX(${progress})`,
                transition: "transform 0.25s linear",
              }}
            />
          </div>

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => {
              const reached = progress > i / STEPS.length;
              return (
                <li key={s.n} className="relative">
                  <span
                    className="relative z-10 grid h-11 w-11 place-items-center rounded-full border font-display text-[0.9rem] font-semibold transition-all duration-500"
                    style={{
                      borderColor: reached
                        ? "var(--color-lime-400)"
                        : "var(--color-ink-600)",
                      background: reached
                        ? "color-mix(in oklab, var(--color-lime-400) 14%, var(--color-ink-950))"
                        : "var(--color-ink-950)",
                      color: reached
                        ? "var(--color-lime-400)"
                        : "var(--color-mute-400)",
                    }}
                  >
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {s.t}
                  </h3>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-lime-400/80">
                    {s.when}
                  </p>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-mute-400">
                    {s.d}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
