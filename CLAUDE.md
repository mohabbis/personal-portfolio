# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install          # install dependencies (Node 20+ required)
npm run dev          # start dev server at http://localhost:3000
npm run build        # production build — catches route and runtime errors
npm run start        # serve production build locally
npm run typecheck    # strict TypeScript check (tsc --noEmit, no cache)
```

There is no test runner. Run `npm run typecheck` and `npm run build` as the minimum validation gate before any PR. For UI changes, manually verify the affected routes in the browser.

## Architecture

This is a Next.js App Router site (React 19, TypeScript, Tailwind CSS). All routes live under `app/`, each route file wraps its content in `<SiteFrame currentPath="...">` which renders `SiteHeader` + `main` + `SiteFooter`.

**Content is fully decoupled from layout.** All editable data lives in `data/`:
- `data/site.ts` — `siteConfig` (name, copy, CTAs, contact), `highlights`, `workingPrinciples`, `contactItems`, `socialLinks`
- `data/projects.ts` — `ProjectItem[]` array; set `featured: true` for home page inclusion
- `data/experience.ts` — `ExperienceItem[]` array for the experience page and home section
- `data/navigation.ts` — `NavItem[]` driving the header nav

All shared TypeScript types are in `lib/types.ts`. The only utility in `lib/utils.ts` is `cn()`, a minimal class joiner (not clsx — just `filter(Boolean).join(" ")`).

**Component layers:**
- `components/layout/` — `SiteFrame`, `SiteHeader`, `SiteFooter` (page shell)
- `components/sections/` — top-level page sections (`PageIntro`, `SectionHeading`, `HomeHero`); home-specific sections are in `components/sections/home/`
- `components/cards/` — `ProjectCard`, `ExperienceCard`, `StatCard`
- `components/ui/` — primitives: `Container`, `ButtonLink`, `Tag`, `Tooltip`, `Separator`, `ProfileImage`, `FallbackImage`, `ScrollArea`, `Collapsible`, `ButtonGroup`

**Design system:** Semantic color tokens are CSS variables defined in `app/globals.css` (dark theme only — `--background`, `--foreground`, `--muted`, `--accent` etc.) and consumed via `tailwind.config.ts` as `hsl(var(--token) / <alpha-value>)`. The accent color is orange (`hsl(28 74% 58%)`). Fonts are system SF Pro via CSS variables `--font-sans` and `--font-display`. The site max-width is `max-w-site` (74rem); prose is `max-w-prose` (46rem). `Container` centers content with responsive horizontal padding.

**`ButtonLink` variants:** `primary` (accent fill), `secondary` (card/border), `ghost` (no border).

**`/portfolio/muhome`** is a client component (`"use client"`) that renders a standalone launch page for the MuHome project with a fade transition to `muhome.vercel.app`. It intentionally bypasses `SiteFrame`.

## Conventions

- Path alias `@/*` maps to the project root — always use it over relative imports.
- File names: kebab-case (`project-card.tsx`); component names: PascalCase; data modules: lowercase (`data/projects.ts`).
- 2-space indentation in all `.ts`/`.tsx` files.
- Next.js `<Image>` for all raster images; SVGs can use `dangerouslyAllowSVG` (already enabled in `next.config.ts`).
- `application.fam` and `starter_app.c` are legacy Flipper files — do not modify unless intentionally reviving that path.
- If AI chat UI is added, use Vercel AI Elements over custom markdown rendering.
