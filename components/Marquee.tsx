const ITEMS = [
  "WhatsApp Business",
  "Razorpay",
  "Stripe",
  "Google Workspace",
  "Zoho",
  "Tally",
  "Shopify",
  "HubSpot",
  "Slack",
  "Twilio",
  "n8n",
  "Supabase",
  "Postgres",
  "Claude",
  "Google Sheets",
  "Calendly",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="border-y border-ink-700/60 bg-ink-900/40 py-7">
      <p className="mb-6 text-center text-[0.7rem] uppercase tracking-[0.22em] text-mute-400">
        We plug into the tools you already pay for
      </p>
      <div
        className="relative flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee items-center gap-10 pr-10">
          {row.map((t, i) => (
            <li
              key={`${t}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-[0.95rem] font-medium text-mute-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400/60" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
