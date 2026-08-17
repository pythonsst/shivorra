import Logo from "./Logo";

const COLS = [
  {
    h: "Services",
    links: [
      ["IT consulting & advisory", "#services"],
      ["Digital presence", "#services"],
      ["Custom software", "#services"],
      ["AI agents & automation", "#services"],
    ],
  },
  {
    h: "Company",
    links: [
      ["How it works", "#process"],
      ["Pricing", "#pricing"],
      ["ROI calculator", "#calculator"],
      ["FAQ", "#faq"],
    ],
  },
  {
    h: "Talk to us",
    links: [
      ["hello@shivorra.it.com", "mailto:hello@shivorra.it.com"],
      ["WhatsApp", "https://wa.me/910000000000"],
      ["Book a free audit", "#contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700/70 bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-mute-400">
              IT consultancy and AI automation studio. We rebuild the boring half
              of your business as software — so the people you pay can do work
              only people can do.
            </p>
            <p className="mt-6 font-mono text-[0.76rem] text-mute-400">
              shivorra.it.com
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.h}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute-400">
                  {c.h}
                </p>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-[0.9rem] text-mute-300 transition-colors hover:text-lime-400"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-700/70 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8rem] text-mute-400">
            © {new Date().getFullYear()} Shivorra. All rights reserved.
          </p>
          <p className="text-[0.8rem] text-mute-400">
            Built to be replaced by something better — by us, on your schedule.
          </p>
        </div>
      </div>
    </footer>
  );
}
