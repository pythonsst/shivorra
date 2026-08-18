"use client";

import { useEffect, useState } from "react";

type Line = { agent: string; text: string; tone: "ok" | "run" | "info" };

const SCRIPT: Line[] = [
  { agent: "9:04 pm", text: "New enquiry from Instagram", tone: "info" },
  { agent: "9:04 pm", text: "Checked — looks like a good fit", tone: "run" },
  { agent: "9:04 pm", text: "Replied with prices and 3 free slots", tone: "ok" },
  { agent: "9:11 pm", text: "Booked for Thursday 4:30 pm", tone: "ok" },
  { agent: "9:12 pm", text: "Sent the deposit invoice with a UPI link", tone: "run" },
  { agent: "9:26 pm", text: "Payment received and recorded", tone: "ok" },
  { agent: "Tomorrow", text: "Will chase 2 people who went quiet", tone: "info" },
  { agent: "8:00 am", text: "Your summary: 14 enquiries, 6 booked", tone: "ok" },
];

const toneMap = {
  ok: "text-lime-400",
  run: "text-cyan-400",
  info: "text-mute-400",
} as const;

export default function HeroConsole() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c >= SCRIPT.length ? 3 : c + 1));
    }, 1600);
    return () => clearInterval(id);
  }, []);

  const visible = SCRIPT.slice(0, count).slice(-5);

  return (
    <div className="card relative overflow-hidden p-1.5 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
      <div
        className="glow-blob pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,242,78,0.55), transparent 65%)",
        }}
      />
      <div className="relative rounded-2xl bg-ink-950/85 p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-ink-700/70 pb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-lime-400" />
              <span className="relative h-2 w-2 rounded-full bg-lime-400" />
            </span>
            <span className="font-mono text-[0.7rem] tracking-[0.16em] text-mute-400 uppercase">
              while you were asleep
            </span>
          </div>
          <span className="font-mono text-[0.7rem] text-mute-400">live</span>
        </div>

        <ul className="mt-3.5 min-h-[188px] space-y-2.5">
          {visible.map((l, i) => (
            <li
              key={`${l.agent}-${count}-${i}`}
              className="flex items-start gap-3 font-mono text-[0.76rem] leading-relaxed opacity-0"
              style={{
                animation: `float-in 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 40}ms forwards`,
              }}
            >
              <span className="mt-px w-[74px] shrink-0 truncate rounded bg-ink-800 px-1.5 py-0.5 text-center text-[0.66rem] text-mute-300">
                {l.agent}
              </span>
              <span className={toneMap[l.tone]}>{l.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-ink-700/70 pt-4">
          {[
            { k: "Reply time", v: "11s" },
            { k: "Hours saved a week", v: "23" },
            { k: "Done by hand", v: "0" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-lg font-semibold text-paper">
                {s.v}
              </div>
              <div className="text-[0.66rem] uppercase tracking-wider text-mute-400">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes float-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
