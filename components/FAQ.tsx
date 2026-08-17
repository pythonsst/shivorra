"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const QA = [
  {
    q: "I'm not technical at all. Is this going to be over my head?",
    a: "That's the normal starting point. You describe how your business works in plain language; we handle everything else. What you get back is a screen with buttons that do obvious things, plus a walkthrough with your team. If anyone needs a manual to use it, we built it wrong.",
  },
  {
    q: "Will this disrupt the business while you build it?",
    a: "No. We ship in slices and run new systems alongside the old way until you trust them. Nothing gets switched off on a Friday and prayed over. Your existing spreadsheets keep working during migration, and we do the retyping — not you.",
  },
  {
    q: "How fast is fast?",
    a: "Audit within a few days of you reaching out. A site typically goes live in 2–3 weeks, custom software in 4–6, and the first AI agent in about 3. You see something working every week, not one big reveal at the end.",
  },
  {
    q: "Can AI actually be trusted with my customers?",
    a: "Only where it earns it. Agents handle the mechanical, verifiable work — reading an enquiry, quoting from your rate card, booking a free slot, chasing a payment. Anything ambiguous or high-stakes routes to a human with full context. Every action is logged, so you can read exactly what was said and why.",
  },
  {
    q: "What happens if I stop working with you?",
    a: "You keep everything. Code in your repository, data in your accounts, domains and API keys in your name, plus written handover docs. The monthly fee buys ongoing improvement, not access to your own business. No lock-in, no hostage situations.",
  },
  {
    q: "Why fixed price instead of hourly?",
    a: "Hourly billing pays us for being slow. We scope tightly after the audit and commit to a number and a date. If we underestimated, that's our problem to absorb — not a change-request email to you.",
  },
  {
    q: "My business is a bit weird. Will off-the-shelf logic fit?",
    a: "It usually won't, which is exactly why we build custom. Generic SaaS makes you reshape your process around its assumptions. We look at the way you actually run things — including the bits that seem messy — and build to that.",
  },
  {
    q: "What does the free audit actually involve?",
    a: "A 45-minute call where we map your week step by step, then a written teardown of your five biggest time-and-money leaks with a recommended order of attack. It's yours whether you hire us or not, and it's genuinely useful even if you hand it to someone else.",
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
                The things people ask before they trust us.
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-mute-400">
                Still something unanswered? Ask it directly —{" "}
                <a
                  href="mailto:hello@shivorra.it.com"
                  className="text-lime-400 underline underline-offset-4"
                >
                  hello@shivorra.it.com
                </a>
                . Real reply, same day.
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
