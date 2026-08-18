"use client";

import { useEffect } from "react";

/**
 * One delegated pointer listener feeds --mx/--my to whichever .card is
 * under the cursor, so every card gets the sheen without a wrapper each.
 */
export default function Spotlight() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let frame = 0;
    let last: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const target = e.target as HTMLElement | null;
        const card = target?.closest<HTMLElement>(".card") ?? null;
        if (card !== last) last = card;
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
