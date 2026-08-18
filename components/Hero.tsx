import HeroConsole from "./HeroConsole";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div
        className="glow-blob pointer-events-none absolute left-1/2 top-[-14rem] -z-10 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full opacity-[0.16] blur-[120px]"
        style={{
          background:
            "conic-gradient(from 210deg, #c9f24e, #4fd8e8, #8b7bff, #c9f24e)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900/70 py-1.5 pl-1.5 pr-4 text-[0.78rem] text-mute-300 backdrop-blur transition-colors hover:border-lime-400/50 hover:text-paper"
              >
                <span className="rounded-full bg-lime-400 px-2.5 py-0.5 text-[0.7rem] font-semibold text-ink-950">
                  New
                </span>
                See what your manual work costs you →
              </a>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.03em] sm:text-[3.5rem] lg:text-[4.1rem]">
                You&apos;re paying people
                <br />
                to do{" "}
                <span className="gradient-text">robot work.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[1.06rem] leading-relaxed text-mute-300">
                Shivorra is your whole technology department: consulting, design,
                websites, custom software, mobile apps and AI automation. We tell
                you what to build and what to stop paying for — then design it,
                build it, and keep it running.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 font-semibold text-ink-950 transition-all active:scale-[0.98] hover:bg-lime-500 hover:shadow-[0_14px_44px_-12px_rgba(201,242,78,0.75)]"
                >
                  Get a free automation audit
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-ink-600 px-7 py-3.5 font-medium text-paper transition-colors hover:border-mute-400 hover:bg-ink-800/60"
                >
                  See what we build
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.82rem] text-mute-400">
                {[
                  "Fixed scope, fixed price",
                  "First systems live in 21 days",
                  "You own every line of code",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="var(--color-lime-400)" strokeOpacity="0.4" />
                      <path
                        d="M6 10.4l2.6 2.6L14 7.6"
                        stroke="var(--color-lime-400)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="animate-float">
            <HeroConsole />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
