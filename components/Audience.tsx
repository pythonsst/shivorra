import { IconSolo, IconStethoscope, IconStore } from "./Icons";
import Reveal from "./Reveal";

const WHO = [
  {
    Icon: IconStethoscope,
    who: "Service businesses",
    examples: "Clinics · salons · studios · contractors",
    pain: "“Half my day is rescheduling people.”",
    fix: ["Self-serve booking", "Deposits up front", "No-show reminders"],
  },
  {
    Icon: IconStore,
    who: "Retail & D2C",
    examples: "Boutiques · brands · distributors · kitchens",
    pain: "“I find out I'm out of stock from a customer.”",
    fix: ["Live stock levels", "Reorder alerts", "Daily sales digest"],
  },
  {
    Icon: IconSolo,
    who: "Solo & small teams",
    examples: "Agencies · freelancers · 2–15 people",
    pain: "“I'm sales, support and accounts.”",
    fix: ["Instant lead replies", "Auto proposals", "One dashboard"],
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
            If it runs on WhatsApp and willpower, you&apos;re in the right place.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {WHO.map((w, i) => (
            <Reveal key={w.who} delay={i * 90}>
              <article className="card card-hover group flex h-full flex-col p-7">
                <w.Icon className="text-lime-400 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110" />

                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {w.who}
                </h3>
                <p className="mt-1.5 text-[0.8rem] text-mute-400">{w.examples}</p>

                <p className="mt-6 font-display text-[1.05rem] leading-snug text-mute-300">
                  {w.pain}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-7">
                  {w.fix.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-lime-400/30 bg-lime-400/[0.07] px-2.5 py-1 text-[0.75rem] text-mute-300"
                    >
                      {f}
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
