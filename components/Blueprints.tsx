import Reveal from "./Reveal";

const BUILDS = [
  {
    kind: "Dental clinic · 2 chairs, 4 staff",
    title: "The no-show killer",
    stack: ["Booking site", "Deposit capture", "Reminder agent"],
    before: "Front desk fields 40 calls a day; 1 in 5 patients no-shows.",
    after:
      "Patients self-book with a deposit, get nudged twice, and reschedule themselves. Front desk goes back to being clinical support.",
    target: "No-shows targeted down to under 6%",
  },
  {
    kind: "Interior contractor · ₹4 Cr/yr",
    title: "Quote in an hour, not a week",
    stack: ["Rate-card engine", "PDF generator", "Job pipeline"],
    before:
      "Every quote is a bespoke Excel job; site costs reconciled at month end, badly.",
    after:
      "Measurements in, priced quote out in minutes, margin visible per job before it's signed.",
    target: "Quote turnaround 5 days → same day",
  },
  {
    kind: "D2C brand · 900 orders/mo",
    title: "Stock that tells the truth",
    stack: ["Inventory sync", "Reorder agent", "Owner digest"],
    before:
      "Oversells on weekends, panic restocks on Mondays, no view of real margin.",
    after:
      "Live stock across channels, reorder raised before the shelf empties, one digest at closing.",
    target: "Oversell incidents to near zero",
  },
];

export default function Blueprints() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
                Build blueprints
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
                What a Shivorra build actually looks like.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={110}>
            <p className="max-w-sm text-[0.88rem] leading-relaxed text-mute-400">
              Straight talk: Shivorra is a young studio, so these are the
              blueprints we run and the outcomes each is engineered to hit — not
              borrowed testimonials. Named client numbers go here as they land.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {BUILDS.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <article className="card card-hover flex h-full flex-col p-7">
                <p className="font-mono text-[0.72rem] uppercase tracking-wider text-mute-400">
                  {b.kind}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {b.title}
                </h3>

                <div className="mt-5 space-y-4 text-[0.9rem] leading-relaxed">
                  <p className="text-mute-400">
                    <span className="mr-2 rounded bg-ink-800 px-1.5 py-0.5 font-mono text-[0.68rem] uppercase text-mute-400">
                      before
                    </span>
                    {b.before}
                  </p>
                  <p className="text-mute-300">
                    <span className="mr-2 rounded bg-lime-400/15 px-1.5 py-0.5 font-mono text-[0.68rem] uppercase text-lime-400">
                      after
                    </span>
                    {b.after}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {b.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink-600 px-2.5 py-1 text-[0.72rem] text-mute-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="mt-auto pt-6 text-[0.86rem] font-medium text-lime-400">
                  {b.target}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
