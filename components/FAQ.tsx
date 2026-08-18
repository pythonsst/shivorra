"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const QA = [
  {
    q: "I'm not technical. Is this over my head?",
    a: "You describe how your business works in plain language; we handle the rest. If anyone needs a manual to use it, we built it wrong.",
  },
  {
    q: "Will this disrupt the business?",
    a: "No. New systems run alongside the old way until you trust them, and we do the data migration — not you.",
  },
  {
    q: "How fast?",
    a: "Site in 2–3 weeks. Custom software in 4–8. First AI agent in about 3. You see something working every week.",
  },
  {
    q: "Can AI be trusted with my customers?",
    a: "Only where it earns it. Agents handle mechanical, verifiable work; anything ambiguous routes to a human with full context. Every action is logged.",
  },
  {
    q: "What if I stop working with you?",
    a: "You keep everything — code, data, domains, accounts, handover docs. No lock-in.",
  },
  {
    q: "Why fixed price?",
    a: "Hourly billing pays us for being slow. We scope after the audit and commit to a number and a date.",
  },
  {
    q: "My business is a bit weird. Will it fit?",
    a: "It usually won't fit off-the-shelf — which is why we build custom, around how you actually work.",
  },
  {
    q: "What's in the free audit?",
    a: "45 minutes mapping your week, then a written teardown of your five biggest leaks. Yours whether you hire us or not.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
                Questions
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.6rem]">
Before you trust us.
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-mute-400">
                Something missing?{" "}
                <a
                  href="mailto:hello@shivorra.it.com"
                  className="text-lime-400 underline underline-offset-4"
                >
                  hello@shivorra.it.com
                </a>
. Same-day reply.
              </p>
            </Reveal>
          </div>

          <div className="divide-y divide-ink-700/70 border-y border-ink-700/70">
            {QA.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-lime-400"
                  >
                    <span className="font-display text-[1.04rem] font-medium tracking-tight">
                      {item.q}
                    </span>
                    <span
                      className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink-600 transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-lime-400" : ""
                      }`}
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 1v10M1 6h10"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-400 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 pr-10 pb-6 text-[0.95rem] leading-relaxed text-mute-400">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
