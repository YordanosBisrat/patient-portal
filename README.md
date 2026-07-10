# TrialCliniq — Next.js

Migrated from TanStack Start (Vite) to Next.js 15 App Router.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What changed

**Framework**
- TanStack Start / Vite → Next.js 15 (App Router), React 19.
- `src/routes/*.tsx` (file-based TanStack routes) → `src/app/**/page.tsx`.
- `src/routes/__root.tsx` → `src/app/layout.tsx`. Fonts now load via `next/font/google`
  instead of a manual Google Fonts `<link>` tag.
- Route `head()` meta → the Next.js `metadata` export (per-page, or `contact/layout.tsx`
  for the one page that has to be a client component).
- `<Link to="...">` (TanStack Router) → `<Link href="...">` (`next/link`).
- Header's active-link styling now uses `usePathname()` from `next/navigation`
  instead of TanStack's `activeProps`/`activeOptions`.
- `src/routes/sitemap[.]xml.ts` (manual XML Response) → `src/app/sitemap.ts` using
  Next's built-in `MetadataRoute.Sitemap` convention.
- 404/error handling → `src/app/not-found.tsx` and `src/app/error.tsx`
  (Next's file-based conventions, replacing TanStack's `notFoundComponent`/`errorComponent`).
- Tailwind CSS v4 setup adapted for Next (`postcss.config.mjs` +
  `@tailwindcss/postcss`) instead of the Vite `@tailwindcss/vite` plugin.

**Removed (Lovable-specific / unused)**
- `.lovable/` folder and the Lovable notice block in `AGENTS.md`.
- `@lovable.dev/vite-tanstack-config` dev dependency and `vite.config.ts`.
- `src/lib/lovable-error-reporting.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts`,
  and the custom `src/server.ts` / `src/start.ts` SSR error-wrapping — this was all
  bespoke plumbing to catch and report errors to the Lovable preview iframe; Next.js's
  own `error.tsx` boundary replaces it.
- `@tanstack/react-query` — it was wired up in the root route (`QueryClientProvider`)
  but nothing in the app ever called `useQuery`/`useMutation`, so it was dead weight.
- `src/router.tsx`, `src/routeTree.gen.ts`, `bunfig.toml`, `bun.lock` — TanStack
  Start/Vite router plumbing with no Next.js equivalent needed.

**Kept as-is**
- All `src/components/ui/*` shadcn components — they had no TanStack/Lovable
  dependencies, just added `"use client"` where a component uses hooks or Radix
  primitives (standard for shadcn on the App Router).
- Design tokens, Tailwind theme, and custom utilities in `globals.css`.
- `Footer.tsx`, `Logo.tsx` (Logo now uses `next/image`), all page content and copy.

## Notes

- Image imports (`@/assets/*.jpg`) are used with `.src` (e.g. `src={heroHome.src}`)
  since Next's static image imports return an object, not a URL string, and the
  original hand-tuned CSS masks/positioning were easiest to preserve with plain
  `<img>` tags. You can migrate these to `next/image` later for automatic
  optimization if you want it.
- `npm run build` was verified locally and produces a fully static export for all
  5 routes (`/`, `/about`, `/features`, `/contact`, `/sitemap.xml`).
