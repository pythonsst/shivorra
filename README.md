# Shivorra — shivorra.it.com

Marketing site for Shivorra: IT consultancy & AI automation studio.
Next.js 15 (App Router) + Tailwind CSS v4. Fully static — no server needed.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| File | What it is |
| --- | --- |
| `app/layout.tsx` | Metadata, SEO, JSON-LD schema, fonts |
| `app/page.tsx` | Section order for the whole page |
| `app/globals.css` | Design tokens (colors, fonts, animations) + utilities |
| `components/Hero.tsx` | Headline, CTAs, trust bar |
| `components/HeroConsole.tsx` | Animated "ops runtime" log in the hero |
| `components/Services.tsx` | Four-layer offering (Consulting → Presence → Systems → Autonomy) |
| `components/Calculator.tsx` | Live ROI calculator + its assumptions |
| `components/Pricing.tsx` | Tiers, build/care toggle, consulting rate |
| `components/FAQ.tsx` | Accordion |
| `components/Contact.tsx` | Audit request form |

## Things to change before launch

1. **Phone number** — `wa.me/910000000000` appears in `Contact.tsx` and `Footer.tsx`.
2. **Email** — `hello@shivorra.it.com` in `Contact.tsx`, `FAQ.tsx`, `Footer.tsx`.
3. **Prices** — all in `Pricing.tsx` (`TIERS` array + the consulting strip).
4. **Calculator assumptions** — `AUTOMATABLE` and `RECOVERY` constants at the top
   of `Calculator.tsx`. They are stated openly on the page; keep them honest.
5. **Blueprints** — `Blueprints.tsx` is explicitly labelled as illustrative, not
   client testimonials. Replace with real named results as they land; don't drop
   the label until they're real.
6. **OG image** — add `public/og.png` (1200×630) and reference it in
   `app/layout.tsx` under `openGraph.images`.

## Contact form

The form currently opens the visitor's mail client with everything pre-filled
(zero backend, works on static hosting). To capture submissions instead, either:

- **Formspree / Basin / Tally** — change the `<form>` to `action="https://formspree.io/f/xxxx" method="POST"`, or
- **Resend + a route handler** — add `app/api/lead/route.ts` and `fetch("/api/lead", { method: "POST", body: JSON.stringify(form) })`. Needs a Node host (Vercel is fine); drop `output: export` plans if you go this way.

## Deploy

Static output, so anything works:

```bash
npx vercel --prod            # easiest
# or Cloudflare Pages / Netlify: build `npm run build`, framework preset "Next.js"
```

Then point `shivorra.it.com` at the host and add the domain in its dashboard.
