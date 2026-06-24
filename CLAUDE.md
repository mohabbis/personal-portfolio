# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install           # install dependencies (Node 20+ required)
npm run dev           # start dev server at http://localhost:3000 (predev converts gallery HEIC sources)
npm run build         # production build — catches route and runtime errors (prebuild converts gallery HEIC sources)
npm run start         # serve production build locally
npm run typecheck     # strict TypeScript check for production code (tsc --noEmit, no cache)
npm test              # run full test suite (Vitest, single pass)
npm run test:watch    # run tests in watch mode during development
npm run typecheck:test  # type-check test files via tsconfig.test.json
npm run ci            # aggregate gate: typecheck && typecheck:test && test && build
npx vitest run <path> # run a single test file, e.g. npx vitest run lib/utils
```

Minimum validation gate before any PR: `npm run ci` (equivalent to `npm run typecheck && npm run typecheck:test && npm test && npm run build`). For UI changes, manually verify the affected routes in the browser.

`predev`/`prebuild` run `scripts/convert-gallery-heic.js`, which converts a fixed list of known HEIC sources in `public/images/gallery/` to `.jpg` (skipping ones already up to date). This is separate from `scripts/convert-heic.js`, the general-purpose one-off converter described in Conventions below — adding a *new* gallery photo still requires manually converting it and adding it to `data/gallery.ts`; only those two already-known filenames are handled automatically.

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

Core positioning: **analytical business thinker** — strategy, research, and operations for consulting / finance / business development. Hero line: **"Clarity under constraints."**

This is a professional positioning site aimed primarily at **consulting recruiting** (and finance/BD). Lead with structured problem-solving, analysis, and quantified outcomes; the technical/creative work (Lumen, brand, ops) is framed as **proof of execution**, not the headline. The earlier creative-technologist / "studio-gallery" framing and the F1 / pixel-art / easter-egg gimmick layer were intentionally removed — do not reintroduce them. Photography remains as a quiet personal touch (reachable at `/photography`, out of the top nav). `PROJECT_CONTEXT.md` and `AGENTS.md` still describe the older creative-studio direction and are out of date pending a refresh.

**Standing constraint: never display GPA, academic major, or coursework anywhere on the site.**

**Lumen positioning:** A calm home companion for iOS. The core purpose is reducing sensory stress and cognitive fatigue — lighting, atmosphere, and ambient scenes that help users destress and regain focus. Primary audience includes neurodivergent people (autism, ADHD) who are especially sensitive to environmental overstimulation. HomeKit and multi-protocol hardware support are capabilities, not the headline. Never frame Lumen as a "smart home control app."

Visual direction: luxury editorial, warm neutrals, minimal but not sterile. Typography direction (aspirational): Instrument Serif + Raleway + Geist Mono. Current implementation uses SF Pro system stack; Raleway `.ttf` files are in `public/fonts/` if a display font shift is wanted.

## Architecture

Next.js 16 App Router site (React 19, TypeScript, Tailwind CSS). All routes wrap content in `<SiteFrame currentPath="...">` which renders `SiteHeader` + `main` + `SiteFooter`.

### Routes

| Path | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home — renders `HomeHero`, `HomeAboutSection`, `HomeFeaturedWorkSection`, `HomeStudioIndexSection`, `HomeExperienceSection`, and `HomeContactSection` in sequence inside `SiteFrame` (About promoted early so the analytical identity lands first) |
| `/about` | `app/about/page.tsx` | Profile, working principles, focus areas |
| `/portfolio` | `app/portfolio/page.tsx` | Full project listing |
| `/portfolio/lumen` | `app/portfolio/lumen/page.tsx` | Lumen case study — calm iOS home companion focused on reducing sensory stress and cognitive fatigue, especially for neurodivergent users (autism, ADHD) |
| `/portfolio/car-wash` | `app/portfolio/car-wash/page.tsx` | Car Wash Marketing case study (Fancy Car Wash + Car Wash Guys) |
| `/portfolio/operations` | `app/portfolio/operations/page.tsx` | Organizational Strategy case study |
| `/experience` | `app/experience/page.tsx` | Full experience listing |
| `/photography` | `app/photography/page.tsx` | Editorial photography page — panorama lead banner + masonry collage (`PhotoGallery`) from `data/gallery.ts` |
| `/gallery` | `app/gallery/page.tsx` | Permanent `redirect("/photography")` — not a distinct page |
| `/contact` | `app/contact/page.tsx` | Contact page |

**Header nav** (`data/navigation.ts`) has three items: Work (`/portfolio`), Experience (`/experience`), About (`/about`). Photography is reachable but not in the top nav.

**Home page:** `app/page.tsx` renders the sequence above. The former `HomeCreativeSystemsSection`, `CurrentSignalSection`, and `HomeAboutCharacters` (with all pixel-art components) were removed in the consulting repositioning.

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
- `components/sections/home/` — `HomeAboutSection`, `HomeContactSection`, `HomeExperienceSection`, `HomeFeaturedWorkSection`, `HomeStudioIndexSection` (all mounted on the home page)
- `components/cards/` — `ProjectCard`, `ExperienceCard`, `StatCard`
- `components/portfolio/` — `ProjectPlate` (variant-based card for portfolio case study pages; variants: `"brand" | "interface" | "system"`)
- `components/ui/` — primitives and interactive pieces (full list below)

**Portfolio case studies** (`/portfolio/lumen`, `/portfolio/car-wash`, `/portfolio/operations`) are standard `SiteFrame` pages composed of stacked content sections. Use `ProjectPlate` for consistent project presentation within case studies.

**PhotoGallery** (`components/sections/photo-gallery.tsx`) renders the first gallery entry as a full-width panorama lead banner, then the rest as a responsive CSS-columns **masonry** collage (1 / 2 / 3 columns). Each frame matches its image's natural aspect ratio so every photo shows in full (no `object-cover` cropping). Clicking any photo opens a portal-based lightbox with keyboard (←/→/Esc) and touch-swipe navigation.

#### `components/ui/` inventory

> **Removed in the consulting repositioning** (do not reintroduce): the F1 / gimmick layer — `RaceIntro`, `PitBoard`, `SectorTimer`, `TeamRadio`, `AsigEasterEgg`, `DolphinEasterEgg`, `RGBStripe`, `PhotoBanner`, `ClickSparks`, `CursorLabel`, `NightMode`, and all `Pixel*` characters — plus the `night-race`/`bright-mode` themes. Component files were deleted.

| Component | Purpose |
|---|---|
| `BackToTop` | Fixed bottom-left scroll-to-top button, visible after 400 px scroll |
| `Button` | cva-based primitive for non-link interactive elements |
| `ButtonGroup` + `ButtonGroupText` + `ButtonGroupSeparator` | Radix-based grouped button primitive |
| `ButtonLink` | Link wrapper with `primary` / `secondary` / `ghost` variants |
| `Collapsible` | Radix-based collapse primitive |
| `Container` | Max-width wrapper (`max-w-site`) |
| `CountUp` | IntersectionObserver-triggered animated number |
| `FadeIn` | IntersectionObserver scroll-reveal wrapper |
| `FallbackImage` | `<Image>` with fallback src on error |
| `Magnet` | Magnetic hover pull effect using Framer Motion springs |
| `PageTransitionWrapper` | Fade + slide-up motion wrapper keyed on pathname |
| `ProfileImage` | Circular headshot component |
| `ScrollArea` | Radix-based scroll container primitive |
| `ScrollProgress` | Fixed horizontal progress bar showing page scroll depth |
| `Separator` | Radix-based separator primitive |
| `Tag` | Pill badge for skills / categories |
| `Tooltip` + `TooltipProvider` | Radix-based tooltip (provider mounted in `layout.tsx`) |
| `Typewriter` | Cycling text with character-by-character animation |

## Design system

### Theme

A **single warm light theme** defined on `:root` in `globals.css`. The earlier dual-theme system (`.night-race` dark / `.bright-mode`) and the path-based `NightMode` switcher were removed; there is no theme switching.

| Token | Warm (`:root`) |
|---|---|
| `--background` | `36 42% 91%` — warm paper |
| `--foreground` | `27 18% 10%` — near-black ink |
| `--card` | `40 48% 95%` — paper-soft |
| `--muted-foreground` | `28 9% 38%` — ink-mute |
| `--border` | `31 30% 72%` |
| `--accent` | `33 68% 44%` — marigold |

Tokens are consumed by Tailwind as `hsl(var(--token) / <alpha-value>)`.

`body` has a radial-gradient overlay (defined in `globals.css`).  
`app/theme-fixes.css` scopes transitions to avoid layout jank — imported after `globals.css` in `layout.tsx`. It also holds per-page overrides (e.g. the Car Wash 3D-model label contrast fix). The Lumen and Operations case-study pages paint their own dark section backgrounds locally (`bg-[#0d0905]` etc.) and do not depend on a global dark theme. `ProjectCard` renders the single `image` (the `darkImage` field on `ProjectItem` is now unused).

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

- **Scrollbars** — styled via `::-webkit-scrollbar` tokens in `globals.css`
- **Google Analytics** — GA4 tag (`G-Y3865CHRM0`) injected inline in `app/layout.tsx` `<head>`
- **Mounted in `app/layout.tsx`**: only `TooltipProvider`, which wraps all `children`. The former gimmick mounts (`NightMode`, `RaceIntro`, `PitBoard`, `AsigEasterEgg`) were removed.
- **TooltipProvider** — Radix tooltip context; mounted at the root in `app/layout.tsx` wrapping all children.

## Dependencies worth knowing

| Package | Why it's here |
|---|---|
| `motion` | Framer Motion v12 — `ProjectCard`, `FadeIn`, `PhotoGallery`, `Magnet`, `BackToTop`, etc. |
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
