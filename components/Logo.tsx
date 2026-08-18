export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          stroke="url(#lg)"
          strokeWidth="1.4"
          fill="#0a0c11"
        />
        <path
          d="M11 21.2c1.5 1.2 3 1.8 4.6 1.8 2.3 0 3.7-1.1 3.7-2.7 0-1.5-1-2.3-3.6-3.1-3.3-1-4.7-2.3-4.7-4.6C11 10 12.9 8.5 16 8.5c1.6 0 3 .4 4.3 1.3"
          stroke="url(#lg)"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <circle cx="22.6" cy="10.4" r="2" fill="var(--color-lime-400)" />
        <defs>
          <linearGradient id="lg" x1="4" y1="4" x2="28" y2="28">
            <stop stopColor="var(--color-lime-400)" />
            <stop offset="1" stopColor="var(--color-cyan-400)" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-[1.06rem] font-semibold tracking-tight">
        Shivorra
      </span>
    </span>
  );
}
