"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const LAYERS = [
  {
    key: "consulting",
    tag: "Layer 00",
    title: "Consulting",
    blurb: "An IT department on tap, without the headcount.",
    body: "Before anyone writes code, someone has to decide what's worth building — and what you should stop paying for. We sit on your side of the table: choosing tools, sizing costs, fixing the infrastructure, and saying no to the software you don't need.",
    ships: [
      "Technology audit: what you run, what it costs, what to kill",
      "Vendor and tool selection — with the licence maths shown",
      "Cloud setup and migration (AWS, GCP, Azure, Google Workspace)",
      "Security basics: access control, backups, device and data hygiene",
      "Ongoing IT support and a roadmap you can budget against",
    ],
    outcome: "Findings inside 2 weeks",
    accent: "var(--color-paper)",
  },
  {
    key: "design",
    tag: "Layer 01",
    title: "Design",
    blurb: "Buyers judge your competence in three seconds.",
    body: "Most small-business software looks assembled rather than designed, and customers read that as risk. We build the brand and interface layer first — identity, screens, a clickable prototype you can react to before a single line of engineering is paid for.",
    ships: [
      "Brand identity: logo, palette, type, usage rules",
      "UI/UX design for web and mobile, screen by screen",
      "Clickable prototype to approve before code starts",
      "Design system so every future screen stays consistent",
      "Marketing assets: decks, social templates, print collateral",
    ],
    outcome: "Prototype in 1–2 weeks",
    accent: "var(--color-violet-400)",
  },
  {
    key: "web",
    tag: "Layer 02",
    title: "Web",
    blurb: "A site that closes, not a brochure that sits there.",
    body: "Most small-business sites are digital business cards. Yours becomes the first salesperson on the team — fast, findable, and built to turn a stranger into a booked slot without you touching the keyboard.",
    ships: [
      "Conversion-first site, 95+ Lighthouse, sub-second loads",
      "Local + service SEO, schema markup, Google Business tuning",
      "E-commerce and payment flows when you sell online",
      "Instant-quote and booking flows wired to your calendar",
      "Analytics that report revenue, not vanity pageviews",
    ],
    outcome: "Live in 2–3 weeks",
    accent: "var(--color-lime-400)",
  },
  {
    key: "software",
    tag: "Layer 03",
    title: "Apps & software",
    blurb: "One screen that tells you the truth about your business.",
    body: "We replace the spreadsheet archaeology with software shaped around how you actually operate — web or mobile, not a generic SaaS you'll bend your process to fit. Your team logs in, sees exactly their work, and nothing needs to be asked twice.",
    ships: [
      "Custom web apps, CRMs and job pipelines built to your workflow",
      "Mobile apps for iOS and Android, published to both stores",
      "Inventory, staff, roster and cost tracking in one place",
      "Owner dashboard: cash position, pipeline, margins, live",
      "Integrations and APIs tying your existing tools together",
      "Migration of your existing sheets — nothing gets retyped",
    ],
    outcome: "Live in 4–8 weeks",
    accent: "var(--color-cyan-400)",
  },
  {
    key: "automation",
    tag: "Layer 04",
    title: "Automation & AI",
    blurb: "AI agents that do the work, not chatbots that deflect it.",
    body: "This is where the compounding starts. Agents that read the enquiry, answer it properly, book the slot, raise the invoice, chase the payment and escalate to a human only when it genuinely matters. Reviewed weekly, tuned monthly.",
    ships: [
      "Lead-response agent: qualifies and replies in under a minute",
      "Follow-up sequences that never forget a warm lead",
      "Invoice, reminder and reconciliation automation",
      "Document and data extraction (bills, POs, forms, WhatsApp)",
      "Cross-app workflows so your tools stop needing a human relay",
      "Human-in-the-loop guardrails and a full audit trail",
    ],
    outcome: "First agent live in 3 weeks",
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
                Five layers. Everything between
                <br className="hidden sm:block" /> the idea and the thing running.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-[0.94rem] leading-relaxed text-mute-400">
              End to end, or just the piece you&apos;re missing. Most clients start
              where the pain is loudest — often consulting or design — and fund the
              rest out of what it saves.
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
                <span className="font-mono text-[0.72rem] opacity-60">
                  {l.tag.replace("Layer ", "")}
                </span>{" "}
                {l.title}
              </button>
            ))}
          </div>

          <div className="card mt-6 overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
              <div className="p-8 sm:p-11">
                <span
                  className="font-mono text-[0.72rem] uppercase tracking-[0.18em]"
                  style={{ color: layer.accent }}
                >
                  {layer.tag}
                </span>
                <h3 className="mt-4 font-display text-[1.75rem] font-semibold tracking-tight sm:text-[2.1rem]">
                  {layer.blurb}
                </h3>
                <p className="mt-5 text-[1rem] leading-relaxed text-mute-300">
                  {layer.body}
                </p>
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
