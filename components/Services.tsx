"use client";

import { useState } from "react";
import { ICONS, type IconName } from "./Icons";
import Reveal from "./Reveal";

const LAYERS = [
  {
    key: "consulting",
    tag: "00",
    icon: "compass",
    title: "Consulting",
    blurb: "An IT department on tap, no headcount.",
    ships: [
      "Audit: what you run, what it costs, what to kill",
      "Tool and vendor picks, licence maths shown",
      "Cloud setup and migration",
      "Access, backups, security basics",
      "Ongoing support and a budgetable roadmap",
    ],
    outcome: "Findings in 2 weeks",
    accent: "var(--color-paper)",
  },
  {
    key: "design",
    tag: "01",
    icon: "pen",
    title: "Design",
    blurb: "Buyers judge you in three seconds.",
    ships: [
      "Brand identity: logo, palette, type",
      "UI/UX for web and mobile",
      "Clickable prototype before code",
      "Design system for every future screen",
      "Decks, social and print assets",
    ],
    outcome: "Prototype in 1–2 weeks",
    accent: "var(--color-violet-400)",
  },
  {
    key: "web",
    tag: "02",
    icon: "globe",
    title: "Web",
    blurb: "A site that closes, not a brochure.",
    ships: [
      "Conversion-first build, sub-second loads",
      "Local and service SEO, done properly",
      "E-commerce and payments",
      "Instant quotes, self-serve booking",
      "Analytics that report revenue",
    ],
    outcome: "Live in 2–3 weeks",
    accent: "var(--color-lime-400)",
  },
  {
    key: "software",
    tag: "03",
    icon: "layers",
    title: "Apps & software",
    blurb: "One screen that tells you the truth.",
    ships: [
      "Custom CRM and job pipelines",
      "iOS and Android apps, shipped to stores",
      "Inventory, staff and cost tracking",
      "Owner dashboard: cash, pipeline, margin",
      "Integrations across your existing tools",
      "Your spreadsheets migrated for you",
    ],
    outcome: "Live in 4–8 weeks",
    accent: "var(--color-cyan-400)",
  },
  {
    key: "automation",
    tag: "04",
    icon: "bolt",
    title: "Automation & AI",
    blurb: "Agents that do the work, not deflect it.",
    ships: [
      "Replies to every lead in under a minute",
      "Follow-ups that never forget",
      "Invoicing, reminders, reconciliation",
      "Reads bills, forms and WhatsApp",
      "Cross-app workflows, no human relay",
      "Human approval where it matters",
    ],
    outcome: "First agent in 3 weeks",
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
                What we build
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
                Idea to running system.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-[0.94rem] leading-relaxed text-mute-400">
              End to end, or just the piece you&apos;re missing.
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
                    Layer {layer.tag}
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
                  What ships
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
