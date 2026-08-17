import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    t: "Audit",
    when: "Day 0 · free, 45 minutes",
    d: "We map every manual step in your week and price it in hours and rupees. You leave with a written teardown of your top five leaks — whether or not you hire us.",
    out: "A ranked list of what to automate first",
  },
  {
    n: "02",
    t: "Blueprint",
    when: "Week 1",
    d: "Fixed scope, fixed price, fixed dates. Screens and flows mocked before a line of code exists, so there are no surprises and no “that's out of scope” conversations later.",
    out: "Signed plan with dates and a single number",
  },
  {
    n: "03",
    t: "Ship in slices",
    when: "Weeks 2–6",
    d: "Something useful goes live every week instead of one big reveal at the end. Your team adopts it gradually, so nothing about the running business gets disrupted.",
    out: "Working software in your hands weekly",
  },
  {
    n: "04",
    t: "Tune & hand over",
    when: "Ongoing",
    d: "Agents get reviewed against real transcripts, dashboards get sharpened, and your team gets trained. Code, data and accounts are yours — no hostage situations.",
    out: "Monthly report on hours and money saved",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
              How it works
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
              No discovery theatre. Working software in three weeks.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-700/70 bg-ink-700/50 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="group relative h-full bg-ink-900 p-7 transition-colors hover:bg-ink-850">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[2.4rem] font-semibold leading-none text-ink-700 transition-colors group-hover:text-lime-400/70">
                    {s.n}
                  </span>
                  {i < STEPS.length - 1 && (
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 20 10"
                      fill="none"
                      className="text-ink-600"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 5h17M13 1.5L17 5l-4 3.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                  {s.t}
                </h3>
                <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-wider text-lime-400/80">
                  {s.when}
                </p>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-mute-400">
                  {s.d}
                </p>
                <p className="mt-6 border-t border-ink-700/70 pt-4 text-[0.82rem] text-mute-300">
                  <span className="text-mute-400">You get: </span>
                  {s.out}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
