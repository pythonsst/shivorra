"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";

const AUTOMATABLE = 0.65; // share of repetitive admin we typically remove
const RECOVERY = 0.25; // share of slow-response leads typically recovered

function inr(n: number) {
  const v = Math.round(n);
  if (v >= 10000000) return `₹${(v / 10000000).toFixed(2)} Cr`;
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)} L`;
  return `₹${v.toLocaleString("en-IN")}`;
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  format,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-[0.9rem] font-medium text-mute-300">
          {label}
        </label>
        <span className="font-display text-[1.05rem] font-semibold text-paper tabular-nums">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3.5 w-full"
      />
      {hint && <p className="mt-2 text-[0.76rem] text-mute-400">{hint}</p>}
    </div>
  );
}

export default function Calculator() {
  const [people, setPeople] = useState(3);
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(350);
  const [slowLeads, setSlowLeads] = useState(20);
  const [dealValue, setDealValue] = useState(15000);

  const r = useMemo(() => {
    const adminCostYear = people * hours * 52 * rate;
    const adminSaved = adminCostYear * AUTOMATABLE;
    const hoursSavedWeek = people * hours * AUTOMATABLE;
    const leadUpside = slowLeads * 12 * RECOVERY * dealValue;
    return {
      adminCostYear,
      adminSaved,
      hoursSavedWeek,
      leadUpside,
      total: adminSaved + leadUpside,
      daysBack: (hoursSavedWeek * 52) / 8,
    };
  }, [people, hours, rate, slowLeads, dealValue]);

  return (
    <section id="calculator" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: "radial-gradient(circle, #c9f24e, transparent 65%)" }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
              The maths
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
              Manual work isn&apos;t free. Here&apos;s your bill.
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-mute-300">
              Move the sliders to match your business. Every number below is
              computed live from assumptions we state openly — no black box.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="card space-y-8 p-8 sm:p-10">
              <Slider
                label="People doing repetitive admin"
                value={people}
                min={1}
                max={25}
                onChange={setPeople}
                format={(v) => `${v}`}
              />
              <Slider
                label="Hours each, per week"
                value={hours}
                min={2}
                max={40}
                onChange={setHours}
                format={(v) => `${v} hrs`}
                hint="Data entry, follow-ups, invoicing, scheduling, reporting."
              />
              <Slider
                label="Loaded cost per hour"
                value={rate}
                min={100}
                max={2500}
                step={50}
                onChange={setRate}
                format={inr}
                hint="Salary + overheads ÷ hours worked. Use your own time too."
              />
              <Slider
                label="Enquiries lost to slow replies / month"
                value={slowLeads}
                min={0}
                max={150}
                onChange={setSlowLeads}
                format={(v) => `${v}`}
              />
              <Slider
                label="Average value of a customer"
                value={dealValue}
                min={1000}
                max={500000}
                step={1000}
                onChange={setDealValue}
                format={inr}
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="card glow-lime relative overflow-hidden p-8 sm:p-10">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute-400">
                  Recoverable in year one
                </p>
                <p className="mt-3 font-display text-[3rem] font-semibold leading-none tracking-[-0.03em] text-lime-400 tabular-nums sm:text-[3.6rem]">
                  {inr(r.total)}
                </p>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-mute-300">
                  {inr(r.adminSaved)} in admin time you stop paying for, plus{" "}
                  {inr(r.leadUpside)} from enquiries you currently answer too
                  late.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    v: `${Math.round(r.hoursSavedWeek)} hrs`,
                    k: "Given back every week",
                  },
                  {
                    v: `${Math.round(r.daysBack)}`,
                    k: "Working days a year, freed",
                  },
                  { v: inr(r.adminCostYear), k: "Current annual admin cost" },
                  { v: `${Math.round(AUTOMATABLE * 100)}%`, k: "Typically automated" },
                ].map((s) => (
                  <div key={s.k} className="card p-5">
                    <div className="font-display text-xl font-semibold tabular-nums">
                      {s.v}
                    </div>
                    <div className="mt-1.5 text-[0.76rem] leading-snug text-mute-400">
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-6">
                <p className="text-[0.78rem] leading-relaxed text-mute-400">
                  <span className="text-mute-300">Assumptions:</span> we remove{" "}
                  {Math.round(AUTOMATABLE * 100)}% of repetitive admin hours and
                  recover {Math.round(RECOVERY * 100)}% of slow-response
                  enquiries — the range we see in practice. This is an estimate to
                  size the opportunity, not a guarantee. The free audit replaces
                  these with your actual numbers.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
                >
                  Pressure-test this on a call →
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
