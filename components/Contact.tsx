"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const EMAIL = "hello@shivorra.it.com";
const PHONE = "+91 70077 46087";
const WHATSAPP =
  "https://wa.me/917007746087?text=" +
  encodeURIComponent("Hi Shivorra — I'd like a free automation audit.");

const GOALS = [
  "IT consulting / advisory",
  "Website & digital presence",
  "Custom software or dashboard",
  "AI agents & automation",
  "Cloud, infra & IT support",
  "Not sure yet — audit me",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    goal: GOALS[5],
    notes: "",
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const mailto = () => {
    const subject = `Audit request — ${form.business || form.name || "new enquiry"}`;
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Interested in: ${form.goal}`,
      "",
      "What's eating my week:",
      form.notes,
    ].join("\n");
    return `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full rounded-xl border border-ink-600 bg-ink-950/70 px-4 py-3 text-[0.94rem] text-paper placeholder:text-mute-400/70 outline-none transition-colors focus:border-lime-400/70";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full opacity-[0.13] blur-[120px]"
        style={{
          background:
            "conic-gradient(from 140deg, #4fd8e8, #c9f24e, #8b7bff, #4fd8e8)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="card overflow-hidden">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-9 sm:p-12">
              <Reveal>
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
                  Free audit
                </span>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="mt-4 font-display text-[2rem] leading-[1.08] font-semibold tracking-[-0.025em] sm:text-[2.5rem]">
                  45 minutes. A written teardown. No pitch deck.
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-5 text-[1rem] leading-relaxed text-mute-300">
                  Tell us how your week actually goes. We&apos;ll come back with
                  the five places your time and money are leaking, ranked by what
                  to fix first — and an honest read on whether you need us at all.
                </p>
              </Reveal>

              <Reveal delay={160}>
                <ul className="mt-9 space-y-4">
                  {[
                    "Reply within one business day",
                    "No obligation, no retainer talk on the first call",
                    "You keep the teardown either way",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-[0.92rem] text-mute-300">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime-400/15">
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M4 10.6l3.4 3.4L16 5.6"
                            stroke="#c9f24e"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-700/70 pt-8 text-[0.9rem]">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-mute-300 transition-colors hover:text-lime-400"
                  >
                    {EMAIL}
                  </a>
                  <a
                    href="tel:+917007746087"
                    className="text-mute-300 transition-colors hover:text-lime-400"
                  >
                    {PHONE}
                  </a>
                  <a
                    href={WHATSAPP}
                    className="text-mute-300 transition-colors hover:text-lime-400"
                  >
                    WhatsApp us
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="border-t border-ink-700/70 bg-ink-950/60 p-9 sm:p-12 lg:border-l lg:border-t-0">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailto();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    className={field}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                  />
                  <input
                    className={field}
                    placeholder="Business name"
                    value={form.business}
                    onChange={(e) => set("business")(e.target.value)}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="email"
                    className={field}
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                  />
                  <input
                    className={field}
                    placeholder="Phone / WhatsApp"
                    value={form.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                  />
                </div>

                <div>
                  <p className="mb-2.5 text-[0.8rem] text-mute-400">
                    What do you need?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {GOALS.map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => set("goal")(g)}
                        className={`rounded-full border px-3.5 py-1.5 text-[0.82rem] transition-all ${
                          form.goal === g
                            ? "border-lime-400 bg-lime-400/15 text-paper"
                            : "border-ink-600 text-mute-400 hover:border-mute-400"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows={4}
                  className={`${field} resize-none`}
                  placeholder="What's eating your week? Be blunt."
                  value={form.notes}
                  onChange={(e) => set("notes")(e.target.value)}
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-lime-400 px-6 py-3.5 font-semibold text-ink-950 transition-all hover:bg-lime-500 hover:shadow-[0_14px_44px_-12px_rgba(201,242,78,0.7)]"
                >
                  Send and book my audit →
                </button>
                <p className="text-center text-[0.74rem] text-mute-400">
                  Opens your email client with the details filled in. Prefer to
                  talk?{" "}
                  <a
                    href={WHATSAPP}
                    className="text-mute-300 underline underline-offset-2"
                  >
                    Message us on WhatsApp
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
