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

### Routes

| Path | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home — composes the four home section components |
| `/about` | `app/about/page.tsx` | About page with profile, working principles, and role fit |
| `/portfolio` | `app/portfolio/page.tsx` | Full project listing |
| `/portfolio/muhome` | `app/portfolio/muhome/page.tsx` | Standalone launch page — bypasses `SiteFrame` (see below) |
| `/experience` | `app/experience/page.tsx` | Full experience listing |
| `/photography` | `app/photography/page.tsx` | Image grid from `data/gallery.ts` |
| `/contact` | `app/contact/page.tsx` | Contact page |
| `/images/[...path]` | `app/images/route.ts` | GET route that serves files from `public/` with 1-year cache headers |

### Data layer

**Content is fully decoupled from layout.** All editable data lives in `data/`:

- `data/site.ts` — `siteConfig` (name, copy, CTAs, contact info), `highlights`, `workingPrinciples`, `contactItems`, `socialLinks`
- `data/projects.ts` — `ProjectItem[]` array; set `featured: true` for home page inclusion
- `data/experience.ts` — `ExperienceItem[]` array for the experience page and home section
- `data/navigation.ts` — `NavItem[]` driving the header nav
- `data/gallery.ts` — flat array of `{ image: string }` objects for the photography page

### Types

All shared TypeScript types are in `lib/types.ts`:

- `NavItem`, `StatItem`, `FeatureItem`
- `ExperienceItem` — `{ title, organization, location, period, logoLabel, logoImage?, summary, bullets, tags }`
- `ProjectItem` — `{ slug, title, category, summary, impact, tags, href?, image, featured? }`
- `GalleryItem`, `CinematicItem` — defined but not yet wired to a data file beyond the simple gallery array
- `DeviceItem` — defined for a future devices/gear page
- `ContactItem`, `SocialLink`

The only utility in `lib/utils.ts` is `cn()` — a minimal class joiner (`filter(Boolean).join(" ")`), NOT clsx.

### Component layers

- `components/layout/` — `SiteFrame`, `SiteHeader`, `SiteFooter` (page shell)
- `components/sections/` — top-level page sections (`PageIntro`, `SectionHeading`, `HomeHero`); home-specific sections are in `components/sections/home/`
- `components/cards/` — `ProjectCard`, `ExperienceCard`, `StatCard`
- `components/ui/` — primitives:
  - `Container` — centers content with responsive horizontal padding
  - `ButtonLink` — nav/CTA links (see variants below)
  - `Button` — cva-based button for interactive UI (not used as a link)
  - `Tag`, `Tooltip`, `Separator`, `ProfileImage`, `FallbackImage`
  - `ScrollArea`, `Collapsible`, `ButtonGroup`
  - `FadeIn` — scroll-triggered fade-up animation (client component using IntersectionObserver)

### Special pages

**`/portfolio/muhome`** is a `"use client"` component that renders a standalone launch page for the MuHome project with a 700 ms fade transition to `muhome.vercel.app`. It intentionally bypasses `SiteFrame` and uses inline styles to match the target app's dark green aesthetic.

## Design system

Semantic color tokens are CSS custom properties defined in `app/globals.css` (dark theme only) and consumed via `tailwind.config.ts` as `hsl(var(--token) / <alpha-value>)`.

### Key tokens

| Token | Value | Usage |
|---|---|---|
| `--background` | `24 18% 8%` | Page background |
| `--foreground` | `38 30% 92%` | Default text |
| `--muted` | `26 14% 14%` | Subtle surfaces |
| `--muted-foreground` | `34 14% 68%` | Secondary text |
| `--card` | `24 16% 11%` | Card backgrounds |
| `--accent` | `31 42% 56%` | Orange accent |
| `--border` | `24 12% 22%` | Borders |

The body has a subtle multi-stop radial gradient and a fixed grid overlay (both set in `app/globals.css`).

### Sizing

- Max site width: `max-w-site` (74 rem)
- Prose max-width: `max-w-prose` (46 rem)
- Base border radius: `--radius` (1 rem), `--radius-md` (0.875 rem)

### Typography

Fonts are system SF Pro via CSS variables `--font-sans` and `--font-display`. Tailwind aliases them as `font-sans` and `font-display`.

### Animation

- CSS keyframe `fade-slide-up` with staggered classes `.animate-hero-1` through `.animate-hero-4` (defined in `globals.css`) for above-the-fold hero elements
- `FadeIn` component for scroll-triggered sections (IntersectionObserver, 0.08 threshold, spring easing)
- Easing alias `ease-gentle` = `cubic-bezier(0.16, 1, 0.3, 1)` (Tailwind config)

### `ButtonLink` variants

- `primary` — accent fill, subtle lift on hover
- `secondary` — card/border style
- `ghost` — no border, muted hover bg

`Button` (`components/ui/button.tsx`) is the cva-based radix/shadcn primitive for non-link interactive elements. It is distinct from `ButtonLink`.

## Conventions

- Path alias `@/*` maps to the project root — always use it over relative imports.
- File names: kebab-case (`project-card.tsx`); component names: PascalCase; data modules: lowercase (`data/projects.ts`).
- 2-space indentation in all `.ts`/`.tsx` files.
- Next.js `<Image>` for all raster images; SVGs can use `dangerouslyAllowSVG` (already enabled in `next.config.ts`). Use `<FallbackImage>` when the image might 404 (it renders a label instead).
- `application.fam` and `starter_app.c` are legacy Flipper files — do not modify.
- The `components.json` at the root configures shadcn-style component generation (style: `radix-nova`). Use it if scaffolding new UI primitives.
- If AI chat UI is added, use Vercel AI Elements and the `streamdown` / `@streamdown/*` packages already in `package.json` for streaming markdown rendering — do not add a custom renderer.

## Dependencies worth knowing

| Package | Why it's here |
|---|---|
| `@vercel/speed-insights` | Injected in `app/layout.tsx` |
| `@vercel/analytics` | Available, wire up if needed |
| `motion` | Available for imperative animations — not yet used in components |
| `ai` (Vercel AI SDK v6) | Available if an AI feature is added |
| `streamdown` + `@streamdown/*` | Streaming markdown/code/math for AI chat |
| `use-stick-to-bottom` | Scroll-lock for chat UIs |
| `lucide-react` | Icon library (already in shadcn config) |
| `class-variance-authority` | Powers `Button` variants |
| `radix-ui` | Primitive components (Slot, etc.) |
| `tailwindcss-animate` | Keyframe utility classes |
