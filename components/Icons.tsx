type P = { className?: string };

const base = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  stroke: "currentColor",
  "aria-hidden": true,
};

export const IconCompass = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.2 8.8l-2 4.4-4.4 2 2-4.4z" />
  </svg>
);

export const IconPen = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 20l4.5-1 9-9a2.1 2.1 0 0 0-3-3l-9 9z" />
    <path d="M14 6.5l3.5 3.5" />
  </svg>
);

export const IconGlobe = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
  </svg>
);

export const IconLayers = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l8 4.5-8 4.5-8-4.5z" />
    <path d="M4 12.5l8 4.5 8-4.5M4 16.5l8 4.5 8-4.5" />
  </svg>
);

export const IconBolt = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M13.5 2.5L5 13.5h5l-1.5 8L17 10.5h-5z" />
  </svg>
);

export const IconClock = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3.2 2" />
  </svg>
);

export const IconLeak = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 4h14l-2 9H7z" />
    <path d="M9 17.5c0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5S12 13 12 13s-3 3.1-3 4.5z" />
  </svg>
);

export const IconMaze = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
    <path d="M8 3.5V12h4.5M16 8v8.5H8" />
  </svg>
);

export const IconStethoscope = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 3v5a4 4 0 0 0 8 0V3" />
    <path d="M10 12v3a4 4 0 0 0 8 0v-1" />
    <circle cx="18" cy="10" r="2" />
  </svg>
);

export const IconStore = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 9.5V20h16V9.5" />
    <path d="M2.8 9.5L5 4h14l2.2 5.5z" />
    <path d="M9.5 20v-5h5v5" />
  </svg>
);

export const IconSolo = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5 20c0-3.6 3.1-5.6 7-5.6s7 2 7 5.6" />
  </svg>
);

export const ICONS = {
  compass: IconCompass,
  pen: IconPen,
  globe: IconGlobe,
  layers: IconLayers,
  bolt: IconBolt,
  clock: IconClock,
  leak: IconLeak,
  maze: IconMaze,
  stethoscope: IconStethoscope,
  store: IconStore,
  solo: IconSolo,
} as const;

export type IconName = keyof typeof ICONS;
