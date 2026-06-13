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
npx vitest run <path> # run a single test file, e.g. npx vitest run lib/utils
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
- `vitest.setup.ts` — extends Jest DOM matchers, stubs `matchMedia` and `IntersectionObserver` globally
- `vitest.d.ts` — ambient type declarations for the test environment
- `tsconfig.test.json` — separate tsconfig for test files; uses `paths` without `baseUrl` to avoid a TypeScript + Vitest resolution conflict
- Test files are excluded from the main `tsconfig.json` and covered by `tsconfig.test.json` instead
- `types/image-types.d.ts` — module declarations for `.jpeg`, `.jpg`, `.png`, `.svg`, `.gif`, `.webp` imports

## Architecture

Next.js 15 App Router site (React 19, TypeScript, Tailwind CSS). All routes wrap content in `<SiteFrame currentPath="...">` which renders `SiteHeader` + `main` + `RGBStripe` + `PhotoBanner` + `SiteFooter`.

### Routes

| Path | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home — six section components in sequence |
| `/about` | `app/about/page.tsx` | Redirects to `/perspectives` |
| `/perspectives` | `app/perspectives/page.tsx` | Editorial notes on strategy, taste, and organization |
| `/portfolio` | `app/portfolio/page.tsx` | Full project listing |
| `/portfolio/lumen` | `app/portfolio/lumen/page.tsx` | Standalone launch page — bypasses `SiteFrame` and links to `lumen.muharafiq.com` |
| `/experience` | `app/experience/page.tsx` | Full experience listing |
| `/photography` | `app/photography/page.tsx` | Image grid from `data/gallery.ts` |
| `/contact` | `app/contact/page.tsx` | Contact page |

**Home page section order:** `HomeHero` → `CurrentSignalSection` → `HomeFeaturedWorkSection` → `HomeExperienceSection` → `HomeAboutSection` → `HomeContactSection`

### Data layer

Content is fully decoupled from layout. All editable content lives in `data/`:

- `data/site.ts` — `siteConfig` (name, copy, hero CTAs, about blurbs, contact info), `highlights`, `workingPrinciples`, `contactItems`, `socialLinks`
- `data/projects.ts` — `ProjectItem[]`; set `featured: true` for home page inclusion; `darkImage` swaps the thumbnail in night-race mode
- `data/experience.ts` — `ExperienceItem[]` for the experience page and home section
- `data/navigation.ts` — `NavItem[]` driving the header nav
- `data/gallery.ts` — `GalleryPhoto[]` plus a `latestFrame` constant (path to the most recent gallery image); type has `image`, `alt`, optional `objectPosition`, optional `span: "hero" | "wide" | "tall"`

### Types (`lib/types.ts`)

- `ProjectItem` — `{ slug, title, category, summary, impact?, tags, href?, image, darkImage?, featured? }`
- `ExperienceItem` — `{ title, organization, location, period, logoLabel, logoImage?, summary, bullets, tags }`
- `GalleryItem` — `{ title, location, description, image, orientation: "portrait" | "landscape" | "square" }`
- `CinematicItem` — `{ title, location, description, video, poster }`
- `DeviceItem` — `{ name, category, status, detail, note, tags[] }`
- `ContactItem`, `SocialLink`, `NavItem`, `FeatureItem`, `StatItem`

`lib/utils.ts` exports:
- `cn(...values)` — minimal class joiner (`filter(Boolean).join(" ")`), NOT clsx
- `shouldSkipOptimization(src?)` — returns `true` for local paths and `.svg`/`.gif` — used by `FallbackImage` to bypass Next.js image optimization

### Component layers

- `components/layout/` — `SiteFrame`, `SiteHeader`, `SiteFooter`
- `components/sections/` — `HomeHero` (home-hero.tsx), `PageIntro`, `SectionHeading`; `PhotoGallery` (photo-gallery.tsx)
- `components/sections/home/` — `CurrentSignalSection`, `HomeAboutSection`, `HomeAboutCharacters`, `HomeContactSection`, `HomeExperienceSection`, `HomeFeaturedWorkSection`
- `components/cards/` — `ProjectCard`, `ExperienceCard`, `StatCard`
- `components/ui/` — primitives and interactive pieces (full list below)

**`/portfolio/lumen`** bypasses `SiteFrame`, uses inline styles to match the Lumen launch-page aesthetic, and redirects to `lumen.muharafiq.com` after a 700 ms fade.

#### `components/ui/` inventory

| Component | Purpose |
|---|---|
| `AsigEasterEgg` | Fullscreen overlay triggered by typing "asig"; shows Alpha Sigma Phi composite photo |
| `BackToTop` | Fixed bottom-left scroll-to-top button, visible after 400 px scroll |
| `Button` | cva-based primitive for non-link interactive elements |
| `ButtonGroup` + `ButtonGroupText` + `ButtonGroupSeparator` | Radix-based grouped button primitive |
| `ButtonLink` | Link wrapper with `primary` / `secondary` / `ghost` variants |
| `ClickSparks` | Cursor click particle effect (exists; not mounted in current layout) |
| `Collapsible` | Radix-based collapse primitive |
| `Container` | Max-width wrapper (`max-w-site`) |
| `CountUp` | IntersectionObserver-triggered animated number |
| `CursorLabel` | Follows cursor to show contextual label (exists; not mounted in current layout) |
| `DolphinEasterEgg` | Dolphin emoji arc animation launched from a sun-pulse button |
| `FadeIn` | IntersectionObserver scroll-reveal wrapper |
| `FallbackImage` | `<Image>` with fallback src on error |
| `Magnet` | Magnetic hover pull effect using Framer Motion springs |
| `NightMode` | Three-way theme toggle pill button (see below) |
| `PageTransitionWrapper` | Fade + slide-up motion wrapper keyed on pathname |
| `PhotoBanner` | Auto-scrolling horizontal photo strip (used inside `SiteFrame`) |
| `PitBoard` | F1 stats overlay toggled by pressing `P` |
| `PixelCamera`, `PixelHeadphones`, `PixelJoystick`, `PixelLaptop`, `PixelMonkey`, `PixelMordecai`, `PixelRaceCar`, `PixelRigby`, `PixelSignal` | SVG pixel-art characters used in home about section |
| `ProfileImage` | Circular headshot component |
| `RaceIntro` | Animated F1 start-light intro on first page load (exists; not mounted in current layout) |
| `RGBStripe` | Decorative 3 px gradient stripe (used inside `SiteFrame`) |
| `ScrollArea` | Radix-based scroll container primitive |
| `ScrollProgress` | Fixed horizontal progress bar showing page scroll depth |
| `SectorTimer` | F1-style elapsed-time clock (mm:ss.cc) |
| `Separator` | Radix-based separator primitive |
| `Tag` | Pill badge for skills / categories |
| `TeamRadio` | F1-themed toast surfaced on scroll/time events (exists; not mounted in current layout) |
| `Tooltip` + `TooltipProvider` | Radix-based tooltip (provider mounted in `layout.tsx`) |
| `Typewriter` | Cycling text with character-by-character animation |

## Design system

### Theme

Three themes share the same semantic token names. The default (`:root`) is the **warm light theme**. The `.night-race` or `.bright-mode` class on `<html>` overrides to the corresponding theme.

| Token | Warm (`:root`) | Night Race (`.night-race`) | Bright (`.bright-mode`) |
|---|---|---|---|
| `--background` | `38 38% 94%` — warm paper `#F6F2EB` | `24 20% 7%` | `30 14% 95%` |
| `--foreground` | `30 13% 9%` — near-black ink | `38 28% 93%` | `20 12% 10%` |
| `--card` | `41 53% 97%` — paper-soft | `24 16% 11%` | `33 22% 97%` |
| `--muted-foreground` | `28 7% 41%` — ink-mute | `32 13% 70%` | `20 7% 42%` |
| `--border` | `37 20% 81%` | `24 12% 28%` | `22 14% 82%` |
| `--accent` | `33 65% 47%` — marigold `#C6802A` | `33 65% 47%` (unchanged) | `0 58% 34%` — deep crimson |

Tokens are consumed by Tailwind as `hsl(var(--token) / <alpha-value>)`.

`body` has a radial-gradient overlay in warm and bright modes (defined in `globals.css`).  
`app/theme-fixes.css` resets broad transitions set in `globals.css` to targeted ones, preventing layout jank during theme switching — it is imported after `globals.css` in `layout.tsx`.

### Night-race / dark mode

`NightMode` (`components/ui/night-mode.tsx`) cycles through three themes: `warm → bright → night` (stored in `localStorage` as `"warm"` / `"bright"` / `"night"`). Legacy stored values `"day"` are coerced to `"warm"`.

Auto-applies `night` between 20:00–07:00 (local time) when no preference is stored. Manual override via:
- `N` key — advances to the next theme in the cycle
- Clicking the fixed bottom-center pill button (`☀ Warm` / `◎ Bright` / `🌙 Night Race`)

`ProjectCard` uses a `useNightMode` hook (MutationObserver on `document.documentElement.classList`) to swap `image` → `darkImage` with an `AnimatePresence` crossfade when the theme changes. `HomeAboutCharacters` uses the same hook to swap pixel art between day/night versions.

**SiteHeader logo variants** (CSS parent-class selectors, no client component needed):
- **Warm** (default): dancing corgi SVG (`/images/dancing-corgi.svg`) + `MUHA` in mono
- **Bright** (`.bright-mode`): `>_` badge + `MUHA` in mono
- **Night Race** (`.night-race`): `〽️` + `UHA` in yellow (`text-yellow-400`)

**SiteFooter**: shows a bouncing `🐒` emoji (`animate-idle-bounce`) in non-night themes.

**Standing constraint: never display the user's GPA or academic major anywhere on the site.**

### Typography

| Variable | Font | Source |
|---|---|---|
| `--font-sans` | System font stack | SF Pro / system fonts defined in `globals.css` |
| `--font-display` | System font stack | SF Pro / system fonts defined in `globals.css` |
| `--font-mono` | Geist Mono (fallback: `monospace`) | CSS variable only — no Google Fonts `<link>` currently |

`public/fonts/` contains the full Raleway weight range (Thin → Heavy) as `.ttf` files — available for use if a display font shift is wanted.

### Layout

- Max site width: `max-w-site` (74 rem)
- Prose max-width: `max-w-prose` (46 rem)
- Border radius: `--radius` (1 rem), `--radius-md` (0.875 rem)
- Shadows: `shadow-soft`, `shadow-card`, `shadow-lift` (all defined in `tailwind.config.ts`)

### Animation

- `fade-slide-up` keyframe + `.animate-hero-1` through `.animate-hero-4` stagger classes for hero elements
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
- SVG thumbnails for projects live in `public/images/projects/`. Light versions are the base name; dark versions append `-dark` (e.g., `lumen-thumbnail.svg` / `lumen-thumbnail-dark.svg`). The Fancy Car Wash project uses both `fancy-car-wash-logo.svg` (the project card image) and a separate `fancy-car-wash-thumbnail.svg`.
- Org logos live in `public/images/logos/` (e.g., `michigan-wolverines.png`). Reference them via `logoImage` on `ExperienceItem`.
- Profile photos live in `public/images/profile/`.
- `application.fam` and `starter_app.c` are legacy Flipper files — do not modify.
- `components.json` configures shadcn-style generation (style: `radix-nova`). Use it when scaffolding new UI primitives.

## Notable runtime behaviours

- **Scrollbars** — styled via `::-webkit-scrollbar` tokens in `globals.css`; `.night-race` overrides included
- **AsigEasterEgg** (`components/ui/asig-easter-egg.tsx`) — type "a","s","i","g" to reveal a fullscreen Alpha Sigma Phi composite overlay; Esc or click to dismiss. Mounted in `app/layout.tsx`.
- **RaceIntro** (`components/ui/race-intro.tsx`) — F1 start-light animated intro on first page load (session-gated via `sessionStorage`); component file exists but is not currently mounted in `layout.tsx`.
- **PitBoard** (`components/ui/pit-board.tsx`) — F1 stats overlay toggled by `P` key; exists but not currently mounted in `layout.tsx`.
- **TeamRadio** (`components/ui/team-radio.tsx`) — F1-themed toast on scroll/time triggers; exists but not currently mounted in `layout.tsx`.
- **ClickSparks** / **CursorLabel** — decorative cursor effects; exist but not currently mounted in `layout.tsx`.
- **DolphinEasterEgg** (`components/ui/dolphin-easter-egg.tsx`) — dolphin arc animation launched from a button component; not wired to any page currently.
- **TooltipProvider** — Radix tooltip context; mounted at the root in `app/layout.tsx` wrapping all children.

## Dependencies worth knowing

| Package | Why it's here |
|---|---|
| `motion` | Framer Motion v12 — `ProjectCard`, `FadeIn`, `PhotoGallery`, `PitBoard`, `Magnet`, `BackToTop`, etc. |
| `ai` (Vercel AI SDK v6) | Available if an AI feature is added |
| `streamdown` + `@streamdown/*` | Streaming markdown for AI chat UI |
| `use-stick-to-bottom` | Scroll-pinning for AI chat UI |
| `class-variance-authority` | Powers `Button` variants |
| `radix-ui` | Unified Radix primitives package (Collapsible, ScrollArea, Separator, Tooltip, Slot) |
| `@radix-ui/react-use-controllable-state` | Internal Radix state utility |
| `critters` | Inlines critical CSS for faster first paint |
| `@vercel/speed-insights` | Injected in `app/layout.tsx` |
| `@vercel/analytics` | In dependencies; available for wiring up if needed |
| `lucide-react` | Icon library (configured in `components.json`) |
| `tailwindcss-animate` | Tailwind animation utilities plugin |
| `heic-convert` | Dev-only HEIC image conversion utility |
