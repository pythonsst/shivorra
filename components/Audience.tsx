import Reveal from "./Reveal";

const WHO = [
  {
    who: "Service businesses",
    examples: "Clinics, salons, studios, contractors, consultants",
    pain: "“Half my day is rescheduling and reminding people.”",
    fix: [
      "Self-serve booking with deposits collected up front",
      "No-show reminders over WhatsApp and SMS",
      "Job-to-invoice pipeline with zero re-entry",
    ],
  },
  {
    who: "Retail & local shops",
    examples: "Boutiques, D2C brands, distributors, kitchens",
    pain: "“I find out I'm out of stock when a customer tells me.”",
    fix: [
      "Live stock levels with reorder alerts before you run dry",
      "Online catalogue synced with what's actually on the shelf",
      "Daily sales and margin digest at closing time",
    ],
  },
  {
    who: "Solo founders & small teams",
    examples: "Agencies, freelancers, 2–15 person operations",
    pain: "“I'm the sales team, the support team and the accountant.”",
    fix: [
      "An agent that answers and qualifies every enquiry instantly",
      "Proposals, contracts and invoices generated on trigger",
      "One dashboard replacing six tabs and a notebook",
    ],
  },
];

export default function Audience() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
            Who this is for
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-4 max-w-2xl font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
            If your business runs on WhatsApp and willpower, you&apos;re in the
            right place.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-4">
          {WHO.map((w, i) => (
            <Reveal key={w.who} delay={i * 80}>
              <article className="card card-hover grid gap-7 p-7 sm:p-9 lg:grid-cols-[0.9fr_1fr_1.1fr] lg:items-start">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {w.who}
                  </h3>
                  <p className="mt-2 text-[0.85rem] text-mute-400">{w.examples}</p>
                </div>
                <p className="font-display text-[1.05rem] leading-snug text-mute-300 italic">
                  {w.pain}
                </p>
                <ul className="space-y-2.5">
                  {w.fix.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 text-[0.92rem] leading-relaxed text-mute-300"
                    >
                      <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
