# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install           # install dependencies (Node 20+ required)
npm run dev           # start dev server at http://localhost:3000
npm run build         # production build — catches route and runtime errors
npm run start         # serve production build locally
npm run typecheck     # strict TypeScript check for production code (tsc --noEmit, no cache)
npm test              # run full test suite (Vitest, single pass)
npm run test:watch    # run tests in watch mode during development
npm run typecheck:test  # type-check test files via tsconfig.test.json
```

Minimum validation gate before any PR: `npm test && npm run typecheck && npm run build`. For UI changes, manually verify the affected routes in the browser.

## Testing

Vitest + React Testing Library with a jsdom environment. Test files live alongside source files (`*.test.ts` / `*.test.tsx`).

| File | What it covers |
|---|---|
| `lib/utils.test.ts` | `cn()` and `shouldSkipOptimization()` |
| `data/projects.test.ts` | Required fields, unique slugs, href format |
| `data/site.test.ts` | `contactItems` / `socialLinks` href validation |
| `components/ui/button-link.test.tsx` | Variant class application, prop forwarding |
| `components/cards/project-card.test.tsx` | `href` vs. no-`href` element branching |
| `components/ui/count-up.test.tsx` | Reduced-motion path, observer lifecycle |
| `components/ui/fallback-image.test.tsx` | src / fallback / error state transitions |

**Key config notes:**
- `vitest.config.ts` — static asset stub plugin maps SVG/image imports to `{ src, width, height }` so image imports don't break tests
- `tsconfig.test.json` — separate tsconfig for test files; uses `paths` without `baseUrl` to avoid a TypeScript + Vitest resolution conflict
- Test files are excluded from the main `tsconfig.json` and covered by `tsconfig.test.json` instead

## Architecture

Next.js 15 App Router site (React 19, TypeScript, Tailwind CSS). All routes wrap content in `<SiteFrame currentPath="...">` which renders `SiteHeader` + `main` + `SiteFooter`.

### Routes

| Path | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home — composes four home section components |
| `/about` | `app/about/page.tsx` | Profile, working principles, role fit |
| `/portfolio` | `app/portfolio/page.tsx` | Full project listing |
| `/portfolio/muhome` | `app/portfolio/muhome/page.tsx` | Standalone launch page — bypasses `SiteFrame` |
| `/experience` | `app/experience/page.tsx` | Full experience listing |
| `/photography` | `app/photography/page.tsx` | Image grid from `data/gallery.ts` |
| `/contact` | `app/contact/page.tsx` | Contact page |
| `/images/[...path]` | `app/images/route.ts` | Serves `public/` files with 1-year cache headers |

### Data layer

Content is fully decoupled from layout. All editable content lives in `data/`:

- `data/site.ts` — `siteConfig` (name, copy, CTAs, contact info), `highlights`, `workingPrinciples`, `contactItems`, `socialLinks`
- `data/projects.ts` — `ProjectItem[]`; set `featured: true` for home page inclusion; `darkImage` swaps the thumbnail in night-race mode
- `data/experience.ts` — `ExperienceItem[]` for the experience page and home section
- `data/navigation.ts` — `NavItem[]` driving the header nav
- `data/gallery.ts` — array of `{ image: StaticImageData; objectPosition?: string }` for the photography page

### Types (`lib/types.ts`)

- `ProjectItem` — `{ slug, title, category, summary, impact, tags, href?, image, darkImage?, featured? }` — `darkImage` is an optional alternate thumbnail shown in night-race dark mode
- `ExperienceItem` — `{ title, organization, location, period, logoLabel, logoImage?, summary, bullets, tags }`
- `ContactItem`, `SocialLink`, `NavItem`, `FeatureItem`, `StatItem`

`lib/utils.ts` exports:
- `cn(...values)` — minimal class joiner (`filter(Boolean).join(" ")`), NOT clsx
- `shouldSkipOptimization(src?)` — returns `true` for local paths and `.svg`/`.gif` — used by `FallbackImage` to bypass Next.js image optimization

### Component layers

- `components/layout/` — `SiteFrame`, `SiteHeader`, `SiteFooter`
- `components/sections/` — page-level sections (`SectionHeading`, `PageIntro`); home sections in `components/sections/home/`
- `components/cards/` — `ProjectCard`, `ExperienceCard`, `StatCard`
- `components/ui/` — primitives: `Container`, `ButtonLink`, `Button`, `Tag`, `FadeIn`, `CountUp`, `FallbackImage`, pixel art components (`PixelLaptop`, `PixelJoystick`, etc.)

**`/portfolio/muhome`** bypasses `SiteFrame`, uses inline styles to match the MuHome app's dark aesthetic, and redirects to `muhome.vercel.app` after a 700 ms fade.

## Design system

### Theme

Two themes share the same semantic token names. The default (`:root`) is the **warm light theme**. The `.night-race` class on `<html>` overrides to **dark theme**.

| Token | Light value | Dark (night-race) value |
|---|---|---|
| `--background` | `38 38% 94%` — warm paper `#F6F2EB` | `24 22% 6%` |
| `--foreground` | `30 13% 9%` — near-black ink `#1A1714` | `38 30% 92%` |
| `--card` | `41 53% 97%` — paper-soft | `24 16% 11%` |
| `--muted-foreground` | `28 7% 41%` — ink-mute | `34 14% 68%` |
| `--border` | `37 20% 81%` — stone-200 | `24 12% 22%` |
| `--accent` | `33 65% 47%` — marigold `#C6802A` | (unchanged) |

Tokens are consumed by Tailwind as `hsl(var(--token) / <alpha-value>)`.

### Night-race / dark mode

`NightMode` (`components/ui/night-mode.tsx`) auto-applies `.night-race` on `<html>` between 20:00–06:00 (local time) when no preference is stored. Manual override via:
- `N` key — toggles and writes `"night"` or `"day"` to `localStorage.theme-pref`
- Clicking the `🌙 Night Race` badge — switches back to light and stores `"day"`

`ProjectCard` uses a `useNightMode` hook (MutationObserver on `document.documentElement.classList`) to swap `image` → `darkImage` instantly when the theme changes.

### Typography

| Variable | Font | Source |
|---|---|---|
| `--font-sans` | Raleway | Self-hosted TTFs in `public/fonts/` (9 weights) |
| `--font-display` | Instrument Serif | Google Fonts via `<link>` in `app/layout.tsx` |
| `--font-mono` | Geist Mono | Google Fonts via `<link>` in `app/layout.tsx` |

Google Fonts must be loaded via `<link>` tags in `layout.tsx`, **not** `@import` in `globals.css` — `@import` after `@tailwind` directives violates the CSS spec and breaks Turbopack.

### Layout

- Max site width: `max-w-site` (74 rem)
- Prose max-width: `max-w-prose` (46 rem)
- Border radius: `--radius` (1 rem), `--radius-md` (0.875 rem)
- Shadows: `shadow-soft`, `shadow-card`, `shadow-lift` (all defined in `tailwind.config.ts`)

### Animation

- `fade-slide-up` keyframe + `.animate-hero-1` through `.animate-hero-5` stagger classes for hero elements
- `FadeIn` component — IntersectionObserver, 0.08 threshold, spring easing, scroll-triggered
- `ease-gentle` Tailwind alias = `cubic-bezier(0.16, 1, 0.3, 1)`
- `prefers-reduced-motion` collapses all animation durations to 0.01 ms (set in `globals.css`)

### `ButtonLink` variants

- `primary` — accent fill
- `secondary` — card/border style
- `ghost` — no border, muted hover bg

`Button` (`components/ui/button.tsx`) is the cva-based primitive for non-link interactive elements. Keep it separate from `ButtonLink`.

## Conventions

- Path alias `@/*` maps to the project root — always use it over relative imports.
- File names: kebab-case; component names: PascalCase; data modules: lowercase.
- 2-space indentation in all `.ts`/`.tsx` files.
- Use `<Image>` (Next.js) for all raster images. Use `<FallbackImage>` when the src might 404.
- SVG thumbnails for projects live in `public/images/projects/`. Light versions are the base name; dark versions append `-dark` (e.g., `fancy-car-wash-thumbnail-dark.svg`).
- `application.fam` and `starter_app.c` are legacy Flipper files — do not modify.
- `components.json` configures shadcn-style generation (style: `radix-nova`). Use it when scaffolding new UI primitives.

## Notable runtime behaviours

- **Scrollbars** — styled via `::-webkit-scrollbar` tokens in `globals.css`; `.night-race` overrides included
- **Team Radio** (`components/ui/team-radio.tsx`) — F1-themed toast that surfaces on certain scroll/time events
- **PitBoard** (`components/ui/pit-board.tsx`) — F1 stats overlay toggled by pressing `P`
- **RaceIntro** (`components/ui/race-intro.tsx`) — animated intro sequence on first page load
- **ClickSparks** / **CursorLabel** — decorative cursor effects, both in `components/ui/`
- These Easter egg components are loaded in `app/layout.tsx` and should remain at the bottom of `<body>`

## Dependencies worth knowing

| Package | Why it's here |
|---|---|
| `motion` | Framer Motion v12 — `ProjectCard`, `FadeIn`, `PhotoGallery`, `PitBoard` |
| `ai` (Vercel AI SDK v6) | Available if an AI feature is added |
| `streamdown` + `@streamdown/*` | Streaming markdown for AI chat UI |
| `class-variance-authority` | Powers `Button` variants |
| `@vercel/speed-insights` | Injected in `app/layout.tsx` |
| `lucide-react` | Icon library (configured in `components.json`) |
