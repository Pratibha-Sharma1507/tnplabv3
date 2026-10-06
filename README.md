# tnpLab — Training & Placement landing page

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Folder structure

```
tnplab/
├─ app/
│  ├─ layout.tsx      # Root layout, fonts (Sora + Inter), metadata
│  ├─ page.tsx         # Home page — assembles all sections
│  └─ globals.css      # Tailwind base + design tokens (input, grain overlay)
├─ components/
│  ├─ Navbar.tsx        # Sticky header + nav links
│  ├─ Hero.tsx           # Headline, stats, wave divider, contact form slot
│  ├─ ContactForm.tsx    # Client component: validated lead form
│  ├─ WhyTnpLab.tsx      # Feature grid
│  ├─ Testimonials.tsx   # Cohort testimonials
│  └─ Footer.tsx         # Closing CTA + footer
├─ public/               # Static assets (add a logo.svg / favicon here)
├─ tailwind.config.ts    # Color, font and shadow tokens
├─ next.config.js
├─ tsconfig.json
└─ package.json
```

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Wiring up the form

`components/ContactForm.tsx` currently simulates a submit with a timeout.
Replace the `await new Promise(...)` line with a real request, e.g.:

```ts
await fetch("/api/lead", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

Add a matching route at `app/api/lead/route.ts` to forward the lead to your
CRM, email, or Google Sheet.

## Notes

- Colors, type scale and spacing are defined once in `tailwind.config.ts` —
  change the `signal`, `teal` and `ink` palettes there to re-theme the site.
- The wave divider in `Hero.tsx` is inline SVG so it scales cleanly at any
  width without an image asset.
- Swap the placeholder testimonial names/quotes in `Testimonials.tsx` and the
  stats in `Hero.tsx` for real numbers before launch.
