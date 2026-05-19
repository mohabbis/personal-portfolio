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

Next.js 15 App Router site (React 19, TypeScript, Tailwind CSS). All routes wrap content in `<SiteFrame currentPath="...">` which renders `SiteHeader` + `main` + `RGBStripe` + `PhotoBanner` + `SiteFooter`.

### Routes

| Path | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home — composes five section components |
| `/about` | `app/about/page.tsx` | Profile, working principles, role fit |
| `/portfolio` | `app/portfolio/page.tsx` | Full project listing |
| `/portfolio/muhome` | `app/portfolio/muhome/page.tsx` | Standalone launch page — bypasses `SiteFrame` |
| `/experience` | `app/experience/page.tsx` | Full experience listing |
| `/photography` | `app/photography/page.tsx` | Image grid from `data/gallery.ts` |
| `/contact` | `app/contact/page.tsx` | Contact page |

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
- `GalleryItem`, `CinematicItem`, `DeviceItem` — defined in `lib/types.ts`; reserved for future sections

`lib/utils.ts` exports:
- `cn(...values)` — minimal class joiner (`filter(Boolean).join(" ")`), NOT clsx
- `shouldSkipOptimization(src?)` — returns `true` for local paths and `.svg`/`.gif` — used by `FallbackImage` to bypass Next.js image optimization

### Component layers

- `components/layout/` — `SiteFrame`, `SiteHeader`, `SiteFooter`
- `components/sections/` — `HomeHero` (home hero, directly here, not in `home/`); `SectionHeading`, `PageIntro`, `PhotoGallery`
- `components/sections/home/` — `HomeAboutSection`, `HomeContactSection`, `HomeExperienceSection`, `HomeFeaturedWorkSection`
- `components/cards/` — `ProjectCard`, `ExperienceCard`, `StatCard`
- `components/ui/` — primitives and interactive utilities (see below)

**Active `components/ui/` components:**
- Layout: `Container`, `ButtonLink`, `Button`, `Tag`, `ButtonGroup`
- Motion: `FadeIn`, `Magnet`, `PageTransitionWrapper`
- Media: `FallbackImage`, `ProfileImage`, `PhotoBanner`
- Feedback/display: `CountUp`, `ScrollProgress`, `BackToTop`, `RGBStripe`
- Decorative: `Typewriter`, `SectorTimer`, `DolphinEasterEgg`
- Pixel art: `PixelLaptop`, `PixelJoystick`, `PixelCamera`, `PixelHeadphones`, `PixelRaceCar`, `PixelSignal`
- Radix primitives: `Collapsible`, `ScrollArea`, `Separator`, `Tooltip` (with `TooltipProvider`)
- Theme: `NightMode`

**Dormant Easter egg components** (files exist, not currently mounted anywhere):
`TeamRadio`, `PitBoard`, `RaceIntro`, `ClickSparks`, `CursorLabel`

**`/portfolio/muhome`** bypasses `SiteFrame`, uses inline styles to match the MuHome app's dark aesthetic, and redirects to `muhome.vercel.app` after a 700 ms fade.

## Design system

### Theme

Three themes share the same semantic token names. The default (`:root`) is the **warm theme**. Class overrides on `<html>` activate the other two.

| Token | Warm (`:root`) | Night (`.night-race`) | Bright (`.bright-mode`) |
|---|---|---|---|
| `--background` | `38 38% 94%` — warm paper | `24 20% 7%` | `0 0% 100%` |
| `--foreground` | `30 13% 9%` — near-black ink | `38 28% 93%` | `220 25% 10%` |
| `--card` | `41 53% 97%` — paper-soft | `24 16% 11%` | `0 0% 100%` |
| `--muted-foreground` | `28 7% 41%` | `32 13% 70%` | `220 9% 42%` |
| `--border` | `37 20% 81%` | `24 12% 28%` | `0 0% 86%` |
| `--accent` | `33 65% 47%` — marigold | (unchanged) | (unchanged) |

Tokens are consumed by Tailwind as `hsl(var(--token) / <alpha-value>)`.

### Theme cycling

`NightMode` (`components/ui/night-mode.tsx`) auto-selects `warm` or `night` on first visit (based on time: `night` between 20:00–07:00 local, `warm` otherwise) when no preference is stored. Manual override:
- `N` key — cycles warm → bright → night → warm, saves to `localStorage["theme-pref"]`
- Clicking the fixed bottom-center pill button (label updates to show the current theme)

Button labels: `"☀ Warm"` / `"◎ Bright"` / `"🌙 Night Race"`. Stored values: `"warm"` / `"bright"` / `"night"` (legacy `"day"` maps to `"warm"`).

`ProjectCard` uses a `useNightMode` hook (MutationObserver on `document.documentElement.classList`) to swap `image` → `darkImage` with an `AnimatePresence` crossfade when the theme changes.

`SiteHeader` logo switches icon via CSS parent-class selectors: `[.night-race_&]:hidden` / `[.night-race_&]:inline` — `>_` badge shows in warm/bright mode, `〽️` in night mode. No client component needed.

**Standing constraint: never display the user's GPA or academic major anywhere on the site.**

### Typography

Fonts are resolved via CSS custom properties set in `globals.css`:

| Variable | Stack |
|---|---|
| `--font-sans` | `SF Pro Text`, `SF Pro Display`, `-apple-system`, system sans fallbacks |
| `--font-display` | `SF Pro Display`, `SF Pro Text`, `-apple-system`, system sans fallbacks |
| `--font-mono` | browser default monospace (no override set) |

Tailwind's `font-sans`, `font-display`, and `font-mono` classes resolve through `var(--font-*)` tokens defined in `tailwind.config.ts`.

### CSS files

- `app/globals.css` — Tailwind base/components/utilities, design tokens, theme overrides (`:root`, `.night-race`, `.bright-mode`), body gradients, scrollbar styles, hero animations
- `app/theme-fixes.css` — performance reset: disables the broad `transition-property` on all elements (to prevent FOUC and jank), then re-enables targeted transitions only on `body`, `.theme-toggle`, `.project-thumbnail`, and `.project-thumbnail-image`

**Load order matters**: `globals.css` is imported before `theme-fixes.css` in `app/layout.tsx` so the fix overrides the broad transition rules.

### Layout

- Max site width: `max-w-site` (74 rem)
- Prose max-width: `max-w-prose` (46 rem)
- Border radius: `--radius` (1 rem), `--radius-md` (0.875 rem)
- Shadows: `shadow-soft`, `shadow-card`, `shadow-lift` (all defined in `tailwind.config.ts`)

### Animation

- `fade-slide-up` keyframe + `.animate-hero-1` through `.animate-hero-4` stagger classes for hero elements
- `FadeIn` component — IntersectionObserver, 0.08 threshold, spring easing, scroll-triggered
- `ease-gentle` Tailwind alias = `cubic-bezier(0.16, 1, 0.3, 1)`
- `prefers-reduced-motion` disables the `.animate-hero-*` classes (via `animation: none`)

### `ButtonLink` variants

- `primary` — accent fill
- `secondary` — card/border style
- `ghost` — no border, muted hover bg

`Button` (`components/ui/button.tsx`) is the cva-based primitive for non-link interactive elements. Keep it separate from `ButtonLink`.

## Conventions

- Path alias `@/*` maps to the project root — always use it over relative imports.
- File names: kebab-case; component names: PascalCase; data modules: lowercase.
- 2-space indentation in all `.ts`/`.tsx` files.
- Use `<Image>` (Next.js) for all raster images. Use `<FallbackImage>` when the src might 404. Use `<ProfileImage>` for the owner's headshot (wraps `public/images/profile/headshot.jpg`).
- SVG thumbnails for projects live in `public/images/projects/`. Light versions are the base name; dark versions append `-dark` (e.g., `muhome-thumbnail.svg` / `muhome-thumbnail-dark.svg`). The Fancy Car Wash project uses `fancy-car-wash-logo.svg` / `fancy-car-wash-logo-dark.svg` (the client's actual logo, not a generated thumbnail).
- Org logos live in `public/images/logos/` (e.g., `michigan-wolverines.png`). Reference them via `logoImage` on `ExperienceItem`.
- `application.fam` and `starter_app.c` are legacy Flipper files — do not modify.
- `components.json` configures shadcn-style generation (style: `radix-nova`). Use it when scaffolding new UI primitives.

## Root layout (`app/layout.tsx`)

- Wraps all children in `<TooltipProvider>` (from `components/ui/tooltip`)
- Mounts `<NightMode />` for theme switching
- Mounts `<SpeedInsights />` (Vercel)
- Imports `globals.css` then `theme-fixes.css` (order is significant)
- Defines `metadata` (title template, OG tags) using `siteConfig`

## Scripts

`scripts/convert-heic.js` — Node utility to convert HEIC photos to JPEG for web use. Usage: `node scripts/convert-heic.js <input.heic> [output.jpg]`. Uses `heic-convert` (dev dependency).

## Notable runtime behaviours

- **Scrollbars** — styled via `::-webkit-scrollbar` tokens in `globals.css`; `.night-race` overrides included
- **PhotoBanner** (`components/ui/photo-banner.tsx`) — infinite-scrolling horizontal photo strip rendered inside `SiteFrame` between `<main>` and `<SiteFooter>`
- **RGBStripe** (`components/ui/rgb-stripe.tsx`) — decorative F1-inspired gradient stripe rendered immediately after `<main>` in `SiteFrame`
- **Typewriter** (`components/ui/typewriter.tsx`) — cycles through phrases with typing/erasing effect (for hero text)
- **Magnet** (`components/ui/magnet.tsx`) — magnetic hover utility: wraps children and pulls them toward the cursor within a configurable radius using Framer Motion springs
- **DolphinEasterEgg** (`components/ui/dolphin-easter-egg.tsx`) — launches animated 🐬 dolphins across the screen on click; available to wire up anywhere
- **BackToTop** (`components/ui/back-to-top.tsx`) — fixed scroll-to-top button, appears after 400 px of scroll
- **ScrollProgress** (`components/ui/scroll-progress.tsx`) — thin F1-gradient bar showing read progress; available to place in a header
- **SectorTimer** (`components/ui/sector-timer.tsx`) — elapsed-time display (mm:ss.cc) using an interval
- **PageTransitionWrapper** (`components/ui/page-transition-wrapper.tsx`) — wraps page content with a `motion.div` fade keyed on pathname; available to add to layout
- **Team Radio** (`components/ui/team-radio.tsx`) — F1-themed toast (dormant, not mounted)
- **PitBoard** (`components/ui/pit-board.tsx`) — F1 stats overlay toggled by pressing `P` (dormant, not mounted)
- **RaceIntro** (`components/ui/race-intro.tsx`) — animated intro sequence on first page load (dormant, not mounted)
- **ClickSparks** / **CursorLabel** — decorative cursor effects (dormant, not mounted)

## Dependencies worth knowing

| Package | Why it's here |
|---|---|
| `motion` | Framer Motion v12 — `ProjectCard`, `FadeIn`, `PhotoGallery`, `PitBoard`, `Magnet`, `BackToTop`, `DolphinEasterEgg` |
| `radix-ui` | Headless primitives used by `Collapsible`, `ScrollArea`, `Separator`, `Tooltip` |
| `@radix-ui/react-use-controllable-state` | Standalone Radix hook |
| `tailwindcss-animate` | Keyframe animation plugin (loaded in `tailwind.config.ts`) |
| `ai` (Vercel AI SDK v6) | Available if an AI feature is added |
| `streamdown` + `@streamdown/*` | Streaming markdown for AI chat UI |
| `class-variance-authority` | Powers `Button` variants |
| `use-stick-to-bottom` | Scroll-anchoring for chat-style UIs |
| `critters` | Inlines critical CSS at build time |
| `@vercel/speed-insights` | Injected in `app/layout.tsx` |
| `@vercel/analytics` | In `package.json`; not yet wired up |
| `lucide-react` | Icon library (configured in `components.json`) |
| `heic-convert` | Dev-only; used by `scripts/convert-heic.js` |
