"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-lime-400 to-cyan-400 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${pct / 100})` }}
      />
    </div>
  );
}
