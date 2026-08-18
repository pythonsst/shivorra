"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import ScrollProgress from "./ScrollProgress";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#services", label: "What we build" },
  { href: "#process", label: "How it works" },
  { href: "#calculator", label: "ROI calculator" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-700/70 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main"
      >
        <a href="#top" className="group" aria-label="Shivorra home">
          <Logo className="transition-opacity group-hover:opacity-80" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={`relative rounded-lg px-3.5 py-2 text-[0.875rem] transition-colors hover:bg-ink-800/70 hover:text-paper ${
                  active === l.href ? "text-paper" : "text-mute-300"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-lime-400 transition-transform duration-300 ${
                    active === l.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-lime-400 px-5 py-2.5 text-[0.875rem] font-semibold text-ink-950 transition-all active:scale-[0.98] hover:bg-lime-500 hover:shadow-[0_10px_36px_-10px_rgba(201,242,78,0.7)] sm:inline-block"
          >
            Book a free audit
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-ink-600 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-paper transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-paper transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {scrolled && <ScrollProgress />}

      <div
        className={`overflow-hidden border-t border-ink-700/60 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink-800 py-3.5 text-mute-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-lime-400 py-3 text-center font-semibold text-ink-950"
            >
              Book a free audit
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
