<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Hostifer Suite — marketing frontend

This app is the **public marketing site** for **Hostifer Suite**, a managed
SaaS workspace for **Algerian companies**: professional business email, cloud
files/drive, collaboration (calendar + contacts), an admin console, and
security — sold as one subscription with local billing (invoice / bank transfer
today, CIB card planned) and a data-residency focus. There is a separate Admin
Console product (referenced in the design, not built here).

## Stack

- **Next.js 16 (App Router, Turbopack) + React 19**, TypeScript.
- **`@hostifer/shared-ui`** — the shared design system (installed package).
  Import its stylesheet **once** in `app/layout.tsx`:
  `import "@hostifer/shared-ui/styles.css"`. It provides brand tokens, the
  `Sora`/`Manrope` fonts (via Google Fonts `@import`), and the components:
  `Badge`, `Button`, `Card`, `Field`, `Input`, `ProgressBar`, `Accordion`,
  `Select`, `Textarea` (the last three are Radix-based; they were prototyped
  locally and promoted into the package in v0.1.1).
- No Tailwind classes are used on the marketing pages; layout is done with
  inline styles + brand tokens, plus responsive helper classes in
  `app/globals.css` (`.hf-grid-*`, `.hf-alt-row`, `.hf-steps`, `.hf-nav-links`,
  `.ct-grid`, …).

## Component rules (important)

- **Reuse `@hostifer/shared-ui` first.** Only build a new component if an
  equivalent does not already exist in the package.
- New reusable design-system components are prototyped in a **`components/to-add/`**
  folder (built on `radix-ui`, styled with the shared tokens, co-located CSS so
  they move cleanly), then promoted into the shared-ui package — after which the
  local copy is deleted and imports switch to `@hostifer/shared-ui`. The folder
  is currently empty (accordion/select/textarea were promoted in v0.1.1). If you
  add one, re-add `radix-ui` as a dependency (it was removed once unused).
- App-specific (non-promotable) building blocks live in **`components/site/`**:
  `site-header`, `site-footer`, `cta-band`, `brand-mark`, `icons`, and the
  presentational `primitives` (`Section`, `Inner`, `Eyebrow`, `SectionIntro`,
  `FeatureCard`, `MiniCard`, `Check`, `BrowserChrome`) plus `theme.ts` (tokens).

## Brand tokens

Bg `#F5F8FC` · ink `#10141C` · secondary `#4B5768` · muted `#8A96A8` · border
`#E3E8F0` · dark `#25262A` · brand gradient
`linear-gradient(135deg,#2FD1B8,#4A6CF7 55%,#7C5CFC)`. Headings use `Sora`, body
uses `Manrope`. Mirror of `components/site/theme.ts` and the shared-ui CSS vars.

## Routes (`app/`)

- `/` — homepage. Contains the on-page `#security` and `#faq` anchors that the
  nav links to; also previews product suite, pricing, comparison, use cases.
- `/product`, `/email`, `/drive`, `/pricing`, `/contact` — the linked pages.
- Nav "Security" → `/#security`, "FAQ" → `/#faq`. "Start free trial" and
  "Contact sales" both go to `/contact`.
- Client components (interactivity): `site-header` (mobile menu),
  `pricing/pricing-billing` (monthly/yearly toggle), `contact/contact-form`
  (stateful form + success state), plus the shared-ui `Accordion`/`Select`.
  Route-private sections use the `app/**/_folder` / co-located file convention.

## SEO

- Domains: marketing site is **`hostifer.dev`**, the app/console is
  **`console.hostifer.dev`**. All canonical/OG URLs use `hostifer.dev`.
- **`lib/seo.ts`** is the single source of truth: `SITE` (url, name, keywords,
  description), the `pageMetadata({ title, description, path })` helper (sets
  `title`, `description`, canonical `alternates`, Open Graph, Twitter), and the
  JSON-LD builders (`organizationJsonLd`, `websiteJsonLd`, `softwareAppJsonLd`).
- Root `app/layout.tsx` sets `metadataBase`, site-wide defaults, robots
  directives, icons (`/favicon.svg`), the manifest link, `viewport.themeColor`,
  and injects the JSON-LD `<script>`.
- Each page exports `metadata = pageMetadata({ …, path })` so it gets a correct
  canonical + OG/Twitter tags.
- Metadata routes (Next file conventions): `app/robots.ts`, `app/sitemap.ts`,
  `app/manifest.ts`, `app/opengraph-image.tsx` (dynamic 1200×630 via `next/og`),
  and `app/twitter-image.tsx` (re-exports the OG image). Add new routes to
  `ROUTES` in `app/sitemap.ts`.
- Favicon is the hand-authored `public/favicon.svg` (brand mark); there is no
  `favicon.ico`.

The design source of truth is the Claude Design project
`81cf5bb4-27a1-414a-8244-cb4b82046deb` (imported via the claude_design MCP).
