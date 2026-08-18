import CountUp from "./CountUp";
import FlowDiagram from "./FlowDiagram";
import { IconClock, IconLeak, IconMaze } from "./Icons";
import Reveal from "./Reveal";

const LEAKS = [
  {
    Icon: IconLeak,
    value: 78,
    suffix: "%",
    stat: "go to whoever replies first",
    line: "You answer at 11am. They booked at 9pm.",
  },
  {
    Icon: IconMaze,
    value: 2,
    suffix: " hrs",
    stat: "to answer one basic question",
    line: "Three sheets, a WhatsApp group, a notebook.",
  },
  {
    Icon: IconClock,
    value: 60,
    suffix: "%",
    stat: "of your week is admin",
    line: "Growth costs evenings, not profit.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime-400">
              The leak
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[2.9rem]">
              Nothing is broken.
              <br />
              That&apos;s the problem.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {LEAKS.map((l, i) => (
            <Reveal key={l.stat} delay={i * 90}>
              <article className="card card-hover group h-full p-7">
                <l.Icon className="text-lime-400 transition-transform duration-500 group-hover:scale-110" />
                <div className="mt-6 font-display text-[2.6rem] font-semibold leading-none tracking-[-0.02em]">
                  <CountUp to={l.value} suffix={l.suffix} />
                </div>
                <p className="mt-2 text-[0.86rem] text-mute-400">{l.stat}</p>
                <p className="mt-5 border-t border-ink-700/70 pt-5 font-display text-[1.02rem] leading-snug">
                  {l.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="card mt-6 p-7 sm:p-9">
            <p className="mb-7 text-center font-display text-[1.15rem] font-semibold tracking-tight sm:text-[1.35rem]">
              What it looks like fixed
            </p>
            <FlowDiagram />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
