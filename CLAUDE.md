@AGENTS.md

# Project context (Hostifer Suite frontend)

This is the **public marketing site** for **Hostifer Suite** — a managed SaaS
workspace (business email, cloud drive, collaboration, admin console, security)
for **Algerian companies**, with local billing and a data-residency focus.

Full app context, stack, component rules, brand tokens, and routes are in
`AGENTS.md` (imported above). Key reminders:

- Built with **Next.js 16 App Router + React 19**; read `node_modules/next/dist/docs/`
  before writing Next code (this version differs from training data).
- **Reuse `@hostifer/shared-ui`** (`Badge`, `Button`, `Card`, `Field`, `Input`,
  `ProgressBar`, `Accordion`, `Select`, `Textarea`) before building anything. Its
  stylesheet is imported once in `app/layout.tsx`.
- New reusable components are prototyped in `components/to-add/` (with `radix-ui`)
  then promoted into shared-ui and deleted locally — the folder is currently empty.
  App-only building blocks → `components/site/`.
- Marketing pages use inline styles + brand tokens (`components/site/theme.ts`)
  and the responsive helper classes in `app/globals.css` — no Tailwind classes.
- Verify changes with `pnpm build` and `pnpm lint`.
