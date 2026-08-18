"use client";

import { useState } from "react";
import { ICONS, type IconName } from "./Icons";
import Reveal from "./Reveal";

const LAYERS = [
  {
    key: "advice",
    tag: "Start here",
    icon: "compass",
    title: "Advice",
    blurb: "Know what to fix first.",
    ships: [
      "A plain look at what you're paying for each month",
      "Which tools to keep and which to cancel",
      "Move your files and email somewhere safe",
      "Backups, so nothing can be lost",
      "Someone to call when tech goes wrong",
    ],
    outcome: "You'll know within 2 weeks",
    accent: "var(--color-paper)",
  },
  {
    key: "design",
    tag: "Look the part",
    icon: "pen",
    title: "Design",
    blurb: "Look like a business people trust.",
    ships: [
      "A logo, colours and a look that's yours",
      "Screens designed before anything is built",
      "See it and click it before you pay to build it",
      "Everything matches as you grow",
      "Brochures, decks and social posts",
    ],
    outcome: "See it in 1–2 weeks",
    accent: "var(--color-violet-400)",
  },
  {
    key: "website",
    tag: "Get found",
    icon: "globe",
    title: "Website",
    blurb: "Get found, then get booked.",
    ships: [
      "A fast website that turns visitors into customers",
      "Show up on Google when people search for you",
      "Sell online and take payments",
      "Customers book themselves into your diary",
      "See where your customers actually come from",
    ],
    outcome: "Live in 2–3 weeks",
    accent: "var(--color-lime-400)",
  },
  {
    key: "software",
    tag: "Get organised",
    icon: "layers",
    title: "Software & apps",
    blurb: "One screen instead of six spreadsheets.",
    ships: [
      "One place to track every customer and job",
      "Your own app for iPhone and Android",
      "Know what stock, staff and costs you have",
      "One screen: money in, money out, what's coming",
      "Works with the tools you already use",
      "We move your spreadsheets across for you",
    ],
    outcome: "Ready in 4–8 weeks",
    accent: "var(--color-cyan-400)",
  },
  {
    key: "automation",
    tag: "Get time back",
    icon: "bolt",
    title: "Automation",
    blurb: "The busywork does itself.",
    ships: [
      "Every enquiry answered in under a minute",
      "Nobody gets forgotten or followed up late",
      "Invoices, reminders and receipts sent for you",
      "Your bills and forms read automatically",
      "You approve anything that matters",
      "See exactly what it did, any time",
    ],
    outcome: "Working in 3 weeks",
    accent: "var(--color-violet-400)",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const layer = LAYERS[active];

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
                What we do
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
                Five ways we help. Pick one, or all of them.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-[0.94rem] leading-relaxed text-mute-400">
              Most people start with whatever hurts most, then use the savings
              to pay for the next bit.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-12">
          <div className="flex flex-wrap gap-2">
            {LAYERS.map((l, i) => (
              <button
                key={l.key}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`rounded-full border px-5 py-2.5 text-[0.9rem] font-medium transition-all duration-300 ${
                  i === active
                    ? "border-transparent bg-paper text-ink-950"
                    : "border-ink-600 text-mute-300 hover:border-mute-400 hover:text-paper"
                }`}
              >
                <span className="flex items-center gap-2">
                  {(() => {
                    const I = ICONS[l.icon as IconName];
                    return <I className="h-[18px] w-[18px]" />;
                  })()}
                  {l.title}
                </span>
              </button>
            ))}
          </div>

          <div className="card mt-6 overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
              <div className="p-8 sm:p-11">
                <div className="flex items-center gap-3">
                  {(() => {
                    const I = ICONS[layer.icon as IconName];
                    return (
                      <span
                        className="grid h-11 w-11 place-items-center rounded-xl border"
                        style={{
                          color: layer.accent,
                          borderColor:
                            "color-mix(in oklab, currentColor 40%, transparent)",
                          background:
                            "color-mix(in oklab, currentColor 8%, transparent)",
                        }}
                      >
                        <I />
                      </span>
                    );
                  })()}
                  <span
                    className="font-mono text-[0.72rem] uppercase tracking-[0.18em]"
                    style={{ color: layer.accent }}
                  >
                    {layer.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[1.75rem] font-semibold tracking-tight sm:text-[2.15rem]">
                  {layer.blurb}
                </h3>
                <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-ink-600 bg-ink-900/60 px-4 py-2 text-[0.84rem] text-mute-300">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: layer.accent }}
                  />
                  {layer.outcome}
                </div>
              </div>

              <div className="border-t border-ink-700/70 bg-ink-950/50 p-8 sm:p-11 lg:border-l lg:border-t-0">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute-400">
                  What you get
                </p>
                <ul className="mt-6 space-y-4">
                  {layer.ships.map((s) => (
                    <li key={s} className="flex gap-3 text-[0.93rem] leading-relaxed text-mute-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-1 shrink-0"
                      >
                        <path
                          d="M4 10.6l3.4 3.4L16 5.6"
                          stroke={layer.accent}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
