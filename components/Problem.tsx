import Reveal from "./Reveal";

const LEAKS = [
  {
    n: "01",
    t: "Leads rot in the DMs",
    d: "A quote request at 9pm gets answered at 11am. By then they've booked someone who replied in a minute.",
    stat: "78%",
    statLabel: "of buyers pick whoever responds first",
  },
  {
    n: "02",
    t: "Your numbers live in your head",
    d: "Three spreadsheets, one WhatsApp group and a notebook. Nobody can answer “how did last month actually go?” without a two-hour reconciliation.",
    stat: "2 hrs",
    statLabel: "to answer one basic question",
  },
  {
    n: "03",
    t: "You are the bottleneck",
    d: "Every invoice, every follow-up, every schedule change routes through you. Growth means more of your evenings, not more profit.",
    stat: "60%",
    statLabel: "of an owner's week is admin, not strategy",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
              The leak
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
              Nothing is broken. That&apos;s the problem.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-mute-300">
              Businesses rarely die from one disaster. They stall because a
              hundred small manual steps quietly eat the week — and every one of
              them is a place a customer can slip out.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {LEAKS.map((l, i) => (
            <Reveal key={l.n} delay={i * 90}>
              <article className="card card-hover group h-full p-7">
                <span className="font-mono text-[0.8rem] text-mute-400">
                  {l.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {l.t}
                </h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-mute-400">
                  {l.d}
                </p>
                <div className="mt-7 border-t border-ink-700/70 pt-5">
                  <div className="font-display text-3xl font-semibold text-lime-400">
                    {l.stat}
                  </div>
                  <div className="mt-1 text-[0.78rem] text-mute-400">
                    {l.statLabel}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
