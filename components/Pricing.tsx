"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const TIERS = [
  {
    name: "Get found",
    for: "Nobody can find you, and enquiries slip away.",
    build: "₹35,000",
    buildNote: "one-off",
    run: "₹4,000",
    popular: false,
    includes: [
      "A logo and look that's properly yours",
      "A 5–7 page website you own",
      "Show up on Google in your area",
      "Every WhatsApp enquiry answered straight away",
      "Customers book themselves in",
    ],
    runIncludes: [
      "We keep it online, fast and backed up",
      "Two rounds of text or photo changes a month",
      "A simple monthly report",
    ],
  },
  {
    name: "Get organised",
    for: "It works, but it all lives in spreadsheets and your head.",
    build: "₹1,25,000",
    buildNote: "one-off",
    run: "₹9,000",
    popular: true,
    includes: [
      "Everything in Get found",
      "One place to track every customer and job",
      "Screens designed and approved before we build",
      "Know your stock, staff and costs",
      "One screen: money in, money out, what's coming",
      "We move your spreadsheets over and train your team",
    ],
    runIncludes: [
      "Everything in Get found",
      "Fixes and small changes when you need them",
      "A proper review every three months",
    ],
  },
  {
    name: "Get time back",
    for: "You want the work done, not just written down.",
    build: "from ₹2,75,000",
    buildNote: "priced after our chat",
    run: "₹18,000",
    popular: false,
    includes: [
      "Everything in Get organised",
      "Every enquiry answered and booked for you",
      "Invoices, reminders and receipts sent automatically",
      "Your bills and forms read for you",
      "You approve anything that matters",
      "Connects up the tools you already use",
    ],
    runIncludes: [
      "Everything in Get organised",
      "We check what it's doing every week",
      "A monthly note on hours and money saved",
    ],
  },
];

export default function Pricing() {
  const [mode, setMode] = useState<"build" | "run">("build");

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
              Pricing
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
              Real prices. No surprises.
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-5 text-[1rem] leading-relaxed text-mute-300">
              Pay once to get it built. The small monthly fee is optional — it just
              means we keep looking after it. Cancel any time and it&apos;s still
              yours.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mx-auto mt-9 flex w-fit rounded-full border border-ink-600 bg-ink-900/70 p-1">
            {(
              [
                ["build", "One-off cost"],
                ["run", "Monthly looking-after"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setMode(k)}
                aria-pressed={mode === k}
                className={`rounded-full px-5 py-2 text-[0.86rem] font-medium transition-all ${
                  mode === k
                    ? "bg-paper text-ink-950"
                    : "text-mute-400 hover:text-paper"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <article
                className={`card card-hover relative flex h-full flex-col p-8 ${
                  t.popular
                    ? "aura border-lime-400/30 bg-gradient-to-b from-lime-400/[0.07] to-transparent"
                    : ""
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-lime-400 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-ink-950">
                    Most chosen
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {t.name}
                </h3>
                <p className="mt-2 min-h-[2.8rem] text-[0.88rem] leading-relaxed text-mute-400">
                  {t.for}
                </p>

                <div className="mt-6 border-y border-ink-700/70 py-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-[2.4rem] font-semibold leading-none tracking-[-0.02em]">
                      {mode === "build" ? t.build : t.run}
                    </span>
                    {mode === "run" && (
                      <span className="text-[0.9rem] text-mute-400">/month</span>
                    )}
                  </div>
                  <p className="mt-2 text-[0.78rem] text-mute-400">
                    {mode === "build" ? t.buildNote : "optional, cancel any time"}
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {(mode === "build" ? t.includes : t.runIncludes).map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 text-[0.9rem] leading-relaxed text-mute-300"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-1 shrink-0"
                      >
                        <path
                          d="M4 10.6l3.4 3.4L16 5.6"
                          stroke="var(--color-lime-400)"
                          strokeWidth="1.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 font-semibold transition-all ${
                    t.popular
                      ? "bg-lime-400 text-ink-950 hover:bg-lime-500 active:scale-[0.98]"
                      : "border border-ink-600 text-paper hover:border-mute-400 hover:bg-ink-800/60"
                  }`}
                >
                  {t.name === "Get time back" ? "Get a price" : `Start with ${t.name}`}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={145}>
          <div className="card mt-5 p-7 sm:p-8">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Bigger projects
            </h3>
            <p className="mt-2 max-w-2xl text-[0.9rem] leading-relaxed text-mute-400">
              These get their own price after we&apos;ve talked, because a real
              number needs a real conversation first.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  t: "An app for iPhone and Android",
                  d: "Designed, built, put on the app stores and looked after.",
                  p: "from ₹3,50,000",
                },
                {
                  t: "Logo and brand",
                  d: "A logo, colours and screens. No website needed.",
                  p: "from ₹60,000",
                },
                {
                  t: "An online shop",
                  d: "Products, payments, stock and orders handled.",
                  p: "from ₹1,50,000",
                },
              ].map((a) => (
                <div
                  key={a.t}
                  className="rounded-xl border border-ink-700/70 bg-ink-950/40 p-5"
                >
                  <p className="font-display text-[0.98rem] font-semibold tracking-tight">
                    {a.t}
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-mute-400">
                    {a.d}
                  </p>
                  <p className="mt-3 text-[0.86rem] font-medium text-lime-400">
                    {a.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="card mt-5 flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Only want advice?
              </h3>
              <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-mute-400">
                Just talk to us. Which tools to use, what to stop paying for,
                keeping your data safe, hiring your first tech person. Nothing
                needs building.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <div>
                <div className="font-display text-2xl font-semibold">
                  ₹3,500
                  <span className="text-[0.9rem] font-normal text-mute-400">
                    {" "}
                    / hour
                  </span>
                </div>
                <p className="mt-1 text-[0.76rem] text-mute-400">
                  or ₹28,000 a month
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-full border border-ink-600 px-5 py-2.5 text-[0.88rem] font-medium transition-colors hover:border-mute-400 hover:bg-ink-800/60"
              >
                Enquire
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 text-center text-[0.84rem] text-mute-400">
            GST extra. Pay in three parts. Not sure which one?{" "}
            <a href="#contact" className="text-lime-400 underline underline-offset-4">
              have a free chat
            </a>{" "}
            and we&apos;ll tell you the smallest thing that helps most.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
