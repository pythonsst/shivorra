"use client";

import { useEffect, useRef, useState } from "react";

const NODES = [
  { label: "They ask", sub: "call, DM or form" },
  { label: "It replies", sub: "in 11 seconds" },
  { label: "They book", sub: "straight into your diary" },
  { label: "You get paid", sub: "invoice sent, money in" },
];

export default function FlowDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        if (reduce) return setStep(NODES.length - 1);
        let i = 0;
        setStep(0);
        const id = setInterval(() => {
          i += 1;
          setStep(i % (NODES.length + 1));
        }, 950);
        return () => clearInterval(id);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="grid gap-3 sm:grid-cols-4">
        {NODES.map((n, i) => {
          const on = step >= i;
          return (
            <div key={n.label} className="relative">
              {/* connector */}
              {i > 0 && (
                <span
                  aria-hidden
                  className="absolute -left-3 top-1/2 hidden h-px w-3 sm:block"
                  style={{
                    background: on
                      ? "var(--color-lime-400)"
                      : "var(--color-ink-600)",
                    transition: "background 0.4s ease",
                  }}
                />
              )}
              <div
                className="rounded-xl border p-4 transition-all duration-500"
                style={{
                  borderColor: on
                    ? "color-mix(in oklab, var(--color-lime-400) 55%, transparent)"
                    : "var(--color-ink-600)",
                  background: on
                    ? "color-mix(in oklab, var(--color-lime-400) 7%, transparent)"
                    : "transparent",
                  transform: on ? "translateY(-2px)" : "none",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full transition-colors duration-500"
                    style={{
                      background: on
                        ? "var(--color-lime-400)"
                        : "var(--color-ink-600)",
                    }}
                  />
                  <span className="font-display text-[0.95rem] font-semibold">
                    {n.label}
                  </span>
                </div>
                <p className="mt-1.5 font-mono text-[0.7rem] text-mute-400">
                  {n.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mute-400">
        nobody had to lift a finger
      </p>
    </div>
  );
}
