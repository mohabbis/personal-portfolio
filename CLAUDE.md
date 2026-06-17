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
- `types/image-types.d.ts` — module declarations for image imports. Covers `.svg` plus both lowercase and uppercase raster extensions (`.jpeg`/`.JPEG`, `.jpg`/`.JPG`, `.png`/`.PNG`, `.gif`/`.GIF`, `.webp`/`.WEBP`). HEIC/HEIF are intentionally **not** declared so an accidental HEIC import fails at typecheck instead of silently shipping an image browsers can't render — convert those first (see Conventions).

## Site identity

Core tagline: **"Leaving every room a little brighter."**

This is a creative portfolio and digital home, not a resume site. Prioritize project storytelling, design taste, and a studio/gallery feel over credential listing. Full brand brief lives in `PROJECT_CONTEXT.md`; agent ecosystem standards in `AGENTS.md`.

**Standing constraint: never display GPA, academic major, or coursework anywhere on the site.**

**Lumen positioning:** A calm home companion for iOS. The core purpose is reducing sensory stress and cognitive fatigue — lighting, atmosphere, and ambient scenes that help users destress and regain focus. Primary audience includes neurodivergent people (autism, ADHD) who are especially sensitive to environmental overstimulation. HomeKit and multi-protocol hardware support are capabilities, not the headline. Never frame Lumen as a "smart home control app."

Visual direction: luxury editorial, warm neutrals, minimal but not sterile. Typography direction (aspirational): Instrument Serif + Raleway + Geist Mono. Current implementation uses SF Pro system stack; Raleway `.ttf` files are in `public/fonts/` if a display font shift is wanted.

## Architecture

Next.js 16 App Router site (React 19, TypeScript, Tailwind CSS). All routes wrap content in `<SiteFrame currentPath="...">` which renders `SiteHeader` + `main` + `RGBStripe` + `PhotoBanner` + `SiteFooter`.

### Routes

| Path | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home — currently renders only `<HomeHero />` inside `SiteFrame` |
| `/about` | `app/about/page.tsx` | Profile, working principles, focus areas |
| `/portfolio` | `app/portfolio/page.tsx` | Full project listing |
| `/portfolio/lumen` | `app/portfolio/lumen/page.tsx` | Lumen case study — calm iOS home companion focused on reducing sensory stress and cognitive fatigue, especially for neurodivergent users (autism, ADHD) |
| `/portfolio/car-wash` | `app/portfolio/car-wash/page.tsx` | Car Wash Marketing case study (Fancy Car Wash + Car Wash Guys) |
| `/portfolio/operations` | `app/portfolio/operations/page.tsx` | Organizational Strategy case study |
| `/experience` | `app/experience/page.tsx` | Full experience listing |
| `/photography` | `app/photography/page.tsx` | Editorial photography page — panorama lead banner + masonry collage (`PhotoGallery`) from `data/gallery.ts` |
| `/gallery` | `app/gallery/page.tsx` | Permanent `redirect("/photography")` — not a distinct page |
| `/contact` | `app/contact/page.tsx` | Contact page |

**Header nav** (`data/navigation.ts`) has three items: Work (`/portfolio`), About (`/about`), Contact (`/contact`). Experience and photography are reachable but not in the top nav.

**Home page:** `app/page.tsx` currently renders only `<HomeHero />`. The other home sections in `components/sections/home/` (`HomeFeaturedWorkSection`, `HomeAboutSection`, `HomeContactSection`, etc.) exist but are not mounted; add them to the page sequence when the home page should grow.

### Data layer

Content is fully decoupled from layout. All editable content lives in `data/`:

- `data/site.ts` — `siteConfig` (name, copy, hero CTAs, about blurbs, contact info), `highlights`, `workingPrinciples`, `contactItems`, `socialLinks`
- `data/projects.ts` — `ProjectItem[]`; set `featured: true` for home page inclusion; `darkImage` swaps the thumbnail in night-race mode
- `data/experience.ts` — `ExperienceItem[]` for the experience page and home section
- `data/navigation.ts` — `NavItem[]` driving the header nav
- `data/gallery.ts` — exports `gallery: GalleryPhoto[]`; `GalleryPhoto` is `{ image: StaticImageData | string; alt: string }`. The **first** entry is the full-width panorama lead banner; the rest flow into the masonry collage. Order is intentional (interleaves landscape/portrait frames and flows across tones) — keep that in mind when adding photos.

### Types (`lib/types.ts`)

- `ProjectLogo` — `{ label, status, image }`
- `ProjectItem` — `{ slug, title, category, summary, eyebrow?, subtitle?, relationshipLabel?, systemRole?: "interface" | "foundation", impact?, tags, href?, ctaLabel?, proofLogos?: ProjectLogo[], image, darkImage?, imageFit?: "cover" | "contain", featured? }`
- `ExperienceItem` — `{ title, organization, location, period, logoLabel, logoImage?, summary, bullets, tags }`
- `GalleryItem` — `{ title, location, description, image, orientation: "portrait" | "landscape" | "square" }` (defined in types; the gallery data uses the separate, simpler `GalleryPhoto` type from `data/gallery.ts`)
- `CinematicItem` — `{ title, location, description, video, poster }`
- `DeviceItem` — `{ name, category, status, detail, note, tags[] }`
- `ContactItem`, `SocialLink`, `NavItem`, `FeatureItem`, `StatItem`

`lib/utils.ts` exports:
- `cn(...values)` — minimal class joiner (`filter(Boolean).join(" ")`), NOT clsx
- `shouldSkipOptimization(src?)` — returns `true` for local paths and `.svg`/`.gif` — used by `FallbackImage` to bypass Next.js image optimization

### Component layers

- `components/layout/` — `SiteFrame`, `SiteHeader`, `SiteFooter`
- `components/sections/` — `HomeHero` (home-hero.tsx), `PageIntro`, `SectionHeading`; `PhotoGallery` (photo-gallery.tsx)
- `components/sections/home/` — `CurrentSignalSection`, `HomeAboutSection`, `HomeAboutCharacters`, `HomeContactSection`, `HomeExperienceSection`, `HomeFeaturedWorkSection`, `HomeCreativeSystemsSection`, `HomeStudioIndexSection` (none currently mounted — see Home page note above)
- `components/cards/` — `ProjectCard`, `ExperienceCard`, `StatCard`
- `components/portfolio/` — `ProjectPlate` (variant-based card for portfolio case study pages; variants: `"brand" | "interface" | "system"`)
- `components/ui/` — primitives and interactive pieces (full list below)

**Portfolio case studies** (`/portfolio/lumen`, `/portfolio/car-wash`, `/portfolio/operations`) are standard `SiteFrame` pages composed of stacked content sections. Use `ProjectPlate` for consistent project presentation within case studies.

**PhotoGallery** (`components/sections/photo-gallery.tsx`) renders the first gallery entry as a full-width panorama lead banner, then the rest as a responsive CSS-columns **masonry** collage (1 / 2 / 3 columns). Each frame matches its image's natural aspect ratio so every photo shows in full (no `object-cover` cropping). Clicking any photo opens a portal-based lightbox with keyboard (←/→/Esc) and touch-swipe navigation.

#### `components/ui/` inventory

| Component | Purpose |
|---|---|
| `AsigEasterEgg` | Fullscreen overlay triggered by typing "asig"; shows Alpha Sigma Phi composite photo. **Mounted** in `layout.tsx`. |
| `BackToTop` | Fixed bottom-left scroll-to-top button, visible after 400 px scroll |
| `Button` | cva-based primitive for non-link interactive elements |
| `ButtonGroup` + `ButtonGroupText` + `ButtonGroupSeparator` | Radix-based grouped button primitive |
| `ButtonLink` | Link wrapper with `primary` / `secondary` / `ghost` variants |
| `ClickSparks` | Cursor click particle effect (exists; **not mounted** — piloted on `/photography` and then removed as too distracting) |
| `Collapsible` | Radix-based collapse primitive |
| `Container` | Max-width wrapper (`max-w-site`) |
| `CountUp` | IntersectionObserver-triggered animated number |
| `CursorLabel` | Follows cursor to show contextual label (exists; **not mounted** — piloted and removed alongside `ClickSparks`) |
| `DolphinEasterEgg` | Dolphin emoji arc animation launched from a visible 🔆 button. **Mounted** in `SiteFooter` next to the location line. |
| `FadeIn` | IntersectionObserver scroll-reveal wrapper |
| `FallbackImage` | `<Image>` with fallback src on error |
| `Magnet` | Magnetic hover pull effect using Framer Motion springs |
| `NightMode` | Automatic path-based theme switcher — warm by default; night-race on `/photography`, `/gallery`, `/portfolio/lumen`, and `/portfolio/operations` (no UI, returns null). **Mounted** in `layout.tsx`. |
| `PageTransitionWrapper` | Fade + slide-up motion wrapper keyed on pathname |
| `PhotoBanner` | Auto-scrolling horizontal photo strip (used inside `SiteFrame`) |
| `PitBoard` | F1 stats overlay toggled by pressing `P`. **Mounted** in `layout.tsx`. |
| `PixelCamera`, `PixelHeadphones`, `PixelJoystick`, `PixelLaptop`, `PixelMonkey`, `PixelMordecai`, `PixelRaceCar`, `PixelRigby`, `PixelSignal` | SVG pixel-art characters used by `HomeAboutCharacters` (which is itself not currently mounted) |
| `ProfileImage` | Circular headshot component |
| `RaceIntro` | Animated F1 start-light intro on first page load (session-gated via `sessionStorage`). **Mounted** in `layout.tsx`. |
| `RGBStripe` | Decorative 3 px gradient stripe (used inside `SiteFrame`) |
| `ScrollArea` | Radix-based scroll container primitive |
| `ScrollProgress` | Fixed horizontal progress bar showing page scroll depth |
| `SectorTimer` | F1-style elapsed-time clock (mm:ss.cc) |
| `Separator` | Radix-based separator primitive |
| `Tag` | Pill badge for skills / categories |
| `TeamRadio` | F1-themed toast surfaced on scroll/time events (exists; **not mounted** — removed from `layout.tsx` as too distracting) |
| `Tooltip` + `TooltipProvider` | Radix-based tooltip (provider mounted in `layout.tsx`) |
| `Typewriter` | Cycling text with character-by-character animation |

## Design system

### Theme

Two themes share the same semantic token names. The default (`:root`) is the **warm light theme**. The `.night-race` class on `<html>` overrides to the dark theme.

| Token | Warm (`:root`) | Night Race (`.night-race`) |
|---|---|---|
| `--background` | `38 38% 94%` — warm paper `#F6F2EB` | `24 20% 7%` |
| `--foreground` | `30 13% 9%` — near-black ink | `38 28% 93%` |
| `--card` | `41 53% 97%` — paper-soft | `24 16% 11%` |
| `--muted-foreground` | `28 7% 41%` — ink-mute | `32 13% 70%` |
| `--border` | `37 20% 81%` | `24 12% 28%` |
| `--accent` | `33 65% 47%` — marigold `#C6802A` | `33 65% 47%` (unchanged) |

Tokens are consumed by Tailwind as `hsl(var(--token) / <alpha-value>)`.

`body` has a radial-gradient overlay in warm mode (defined in `globals.css`).  
`app/theme-fixes.css` resets broad transitions set in `globals.css` to targeted ones, preventing layout jank during theme switching — it is imported after `globals.css` in `layout.tsx`.

### Theme switching

`NightMode` (`components/ui/night-mode.tsx`) is a path-based automatic switcher — no user-facing toggle or controls. It applies `night-race` on `/photography`, `/gallery` (which redirects to `/photography`), `/portfolio/lumen`, and `/portfolio/operations`, and `warm` everywhere else (including `/portfolio/car-wash`). The component renders nothing (`return null`).

`ProjectCard` uses a `useNightMode` hook (MutationObserver on `document.documentElement.classList`) to swap `image` → `darkImage` with an `AnimatePresence` crossfade when the theme changes. `HomeAboutCharacters` uses the same hook to swap pixel art between day/night versions.

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
- **Photo uploads are usually HEIC** (often saved with a misleading `.JPG`/`.JPEG` extension). Browsers can't render HEIC, so convert before wiring anything in: `node scripts/convert-heic.js <input> <output.jpg>` (uses the `heic-convert` dependency). Verify real content with `file <path>` — the type declarations deliberately don't cover HEIC, so importing one fails at typecheck rather than shipping a broken image. Gallery images live in `public/images/gallery/`.
- SVG thumbnails for projects live in `public/images/projects/`. Light versions are the base name; dark versions append `-dark` (e.g., `lumen-thumbnail.svg` / `lumen-thumbnail-dark.svg`). The Fancy Car Wash project uses both `fancy-car-wash-logo.svg` (the project card image) and a separate `fancy-car-wash-thumbnail.svg`.
- Org logos live in `public/images/logos/` (e.g., `michigan-wolverines.png`). Reference them via `logoImage` on `ExperienceItem`.
- Profile photos live in `public/images/profile/` (the live headshot is `headshot.jpg`).
- `application.fam` and `starter_app.c` are legacy Flipper files — do not modify.
- `components.json` configures shadcn-style generation (style: `radix-nova`). Use it when scaffolding new UI primitives.
- `scripts/` contains dev-only utilities (e.g., `convert-heic.js` for HEIC → JPEG conversion).

## Notable runtime behaviours

- **Scrollbars** — styled via `::-webkit-scrollbar` tokens in `globals.css`; `.night-race` overrides included
- **Google Analytics** — GA4 tag (`G-Y3865CHRM0`) injected inline in `app/layout.tsx` `<head>`
- **Mounted in `app/layout.tsx`** (after `children`): `NightMode`, `RaceIntro`, `PitBoard`, `AsigEasterEgg`; `TooltipProvider` wraps all `children`.
- **AsigEasterEgg** (`components/ui/asig-easter-egg.tsx`) — type "a","s","i","g" to reveal a fullscreen Alpha Sigma Phi composite overlay; Esc or click to dismiss. Mounted.
- **RaceIntro** (`components/ui/race-intro.tsx`) — F1 start-light animated intro on first page load (session-gated via `sessionStorage`). Mounted.
- **PitBoard** (`components/ui/pit-board.tsx`) — F1 stats overlay toggled by the `P` key. Mounted.
- **DolphinEasterEgg** (`components/ui/dolphin-easter-egg.tsx`) — dolphin arc animation launched from a visible 🔆 button in `SiteFooter`.
- **TeamRadio / ClickSparks / CursorLabel** — exist in `components/ui/` but are **not mounted** anywhere; they were intentionally removed as too distracting (auto-firing toasts / cursor effects). Don't re-mount without a deliberate reason.
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
| `@vercel/analytics` | In dependencies; available for wiring up if needed |
| `lucide-react` | Icon library (configured in `components.json`) |
| `tailwindcss-animate` | Tailwind animation utilities plugin |
| `heic-convert` | HEIC → JPEG conversion (used by `scripts/convert-heic.js` for photo uploads) |
