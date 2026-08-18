import Reveal from "./Reveal";

const BUILDS = [
  {
    kind: "Dental clinic",
    title: "No more no-shows",
    stack: ["Online booking", "Deposits", "Reminders"],
    metric: "No-shows",
    before: "1 in 5",
    after: "under 6%",
    beforeBar: 100,
    afterBar: 30,
  },
  {
    kind: "Interior contractor",
    title: "Quotes out the same day",
    stack: ["Price list", "Instant quotes", "Job tracking"],
    metric: "Time to send a quote",
    before: "5 days",
    after: "same day",
    beforeBar: 100,
    afterBar: 18,
  },
  {
    kind: "D2C brand",
    title: "Never oversell again",
    stack: ["Live stock", "Reorder alerts", "Daily summary"],
    metric: "Selling stock you don't have",
    before: "weekly",
    after: "near zero",
    beforeBar: 100,
    afterBar: 8,
  },
];

export default function Blueprints() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
                Examples
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
                What actually changes.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={110}>
            <p className="max-w-xs text-[0.82rem] leading-relaxed text-mute-400">
              Examples we run and the targets they&apos;re engineered to hit —
              not borrowed testimonials.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {BUILDS.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <article className="card card-hover flex h-full flex-col p-7">
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-mute-400">
                  {b.kind}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                  {b.title}
                </h3>

                <p className="mt-7 text-[0.76rem] uppercase tracking-wider text-mute-400">
                  {b.metric}
                </p>

                <div className="mt-4 space-y-3">
                  <div>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-mono text-[0.68rem] uppercase text-mute-400">
                        before
                      </span>
                      <span className="text-[0.9rem] text-mute-400">
                        {b.before}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-ink-700">
                      <div
                        className="h-full rounded-full bg-mute-400/60"
                        style={{ width: `${b.beforeBar}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-mono text-[0.68rem] uppercase text-lime-400">
                        after
                      </span>
                      <span className="font-display text-[1rem] font-semibold text-lime-400">
                        {b.after}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-ink-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 transition-[width] duration-1000 ease-out"
                        style={{ width: `${b.afterBar}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-7">
                  {b.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink-600 px-2.5 py-1 text-[0.72rem] text-mute-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
