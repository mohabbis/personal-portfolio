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
| `components/ui/sketch-car.test.tsx` | Accessible label, `pathLength` normalisation, draw stagger, sweep |
| `components/ui/fallback-image.test.tsx` | src / fallback / error state transitions |

**Key config notes:**
- `vitest.config.ts` — static asset stub plugin maps SVG/image imports to `{ src, width, height }` so image imports don't break tests
- `vitest.setup.ts` — extends Jest DOM matchers, stubs `matchMedia` and `IntersectionObserver` globally
- `vitest.d.ts` — ambient type declarations for the test environment
- `tsconfig.test.json` — separate tsconfig for test files; uses `paths` without `baseUrl` to avoid a TypeScript + Vitest resolution conflict
- Test files are excluded from the main `tsconfig.json` and covered by `tsconfig.test.json` instead
- `types/image-types.d.ts` — module declarations for image imports. Covers `.svg` plus both lowercase and uppercase raster extensions (`.jpeg`/`.JPEG`, `.jpg`/`.JPG`, `.png`/`.PNG`, `.gif`/`.GIF`, `.webp`/`.WEBP`). HEIC/HEIF are intentionally **not** declared so an accidental HEIC import fails at typecheck instead of silently shipping an image browsers can't render — convert those first (see Conventions).

## Site identity

Core positioning: **design/UI-UX is the anchored, demonstrated skill; strategy, operations, technology, and AI are broad curiosity around it** — not a resume site. The line **"Start with how it should feel."** now lives only on the social share card (`app/opengraph-image.tsx`) — the home hero itself carries no copy. Design (UI, UX, the feel of a thing) is what he does best and should read as a real strength; everything else is framed as genuine but broad interest, not claimed expertise. The through-line is someone who both *designs/builds* and *thinks*, closing the distance between a rough idea and something real. Keep it minimal — **less is more**; don't add heavy skills/interests UI, convey it in tight copy. **Never use the word "consulting" anywhere on the site**, and avoid the overused "I build apps to solve business problems" framing — convey the build-to-solve instinct in fresher, more specific language.

Home hero signature interaction: **`SketchCar`** — an editorial line drawing of a car in profile that draws itself stroke by stroke (pure CSS `stroke-dashoffset` over `pathLength="1"` geometry), then catches a slow marigold highlight travelling the body line. It sits with pointer-reactive gallery lighting (`HeroAtmosphere`). It reads as a designer's sketch resolving into a finished object, not as motorsport — keep it that way; the F1 / racing gimmick layer stays removed. Respect `prefers-reduced-motion` (finished drawing, no sweep). Do not reintroduce custom cursors or easter-egg layers.

The former **`ProximityHeadline`** (letter-level proximity pull) was removed along with both hero text lines; recover it from git history if a typographic hero is ever wanted again.

The tone is deliberately **grounded and personal, not corporate** — it should read like the person, showcase his interests, and not overstate the work. Lead with genuine curiosity and the thinking behind each project; keep claims modest (he's a student). The earlier creative-technologist / "studio-gallery" framing and the F1 / pixel-art / easter-egg gimmick layer were removed — do not reintroduce them. There is **no resume/experience listing**; the Work page carries the substance and the About page is personal. Photography is a quiet personal touch (reachable at `/photography` and linked as "Gallery" in the footer, but out of the top nav). `PROJECT_CONTEXT.md` and `AGENTS.md` still describe the older creative-studio direction and are out of date pending a refresh.

**Standing constraint: never display GPA, academic major, or coursework anywhere on the site.**

**Standing constraint: no LinkedIn anywhere on the site.** It was removed from `siteConfig`, `contactItems`, the footer, the About page social row, and the `sameAs` structured data on `/` and in `app/layout.tsx`. Email and GitHub are the only contact channels — do not re-add it.

**Projects:** Clipstack (a local-first macOS clipboard history, `github.com/mohabbis/clipstack`) and Fader (a macOS menu-bar mixer with per-app volume, mute and output device, `github.com/mohabbis/fader`). Lumen was removed; `/lumen`, `/portfolio/lumen` and its old aliases redirect to `/portfolio`.

Visual direction: luxury editorial, warm neutrals, minimal but not sterile. Typography direction (aspirational): Instrument Serif + Raleway + Geist Mono. Current implementation uses SF Pro system stack; Raleway `.ttf` files are in `public/fonts/` if a display font shift is wanted.

## Architecture

Next.js 16 App Router site (React 19, TypeScript, Tailwind CSS). All routes wrap content in `<SiteFrame currentPath="...">` which renders `SiteHeader` + `main` + `SiteFooter`.

### Routes

| Path | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home — renders `HomeHero` (eyebrow + `SketchCar` + two nav cards + portrait, no headline copy), `HomeAboutSection`, `HomeFeaturedWorkSection`, `HomeStudioIndexSection`, and `HomeContactSection` in sequence inside `SiteFrame` (About promoted early so the personal identity lands first) |
| `/about` | `app/about/page.tsx` | Profile, working principles, focus areas |
| `/portfolio` | `app/portfolio/page.tsx` | Full project listing |
| `/portfolio/clipstack` | `app/portfolio/clipstack/page.tsx` | Clipstack case study (built on `CaseStudy`) |
| `/portfolio/fader` | `app/portfolio/fader/page.tsx` | Fader case study (built on `CaseStudy`) |
| `/photography` | `app/photography/page.tsx` | Editorial photography page — panorama lead banner + masonry collage (`PhotoGallery`) from `data/gallery.ts` |
| `/gallery` | `app/gallery/page.tsx` | Permanent `redirect("/photography")` — not a distinct page |
| `/contact` | `app/contact/page.tsx` | Contact page |

**Header nav** (`data/navigation.ts`) has two items: Work (`/portfolio`) and About (`/about`). Photography is linked as "Gallery" in the footer (`SiteFooter`), not the top nav. `/experience` is gone — `next.config.ts` permanently redirects it to `/about`.

**Home page:** `app/page.tsx` renders the sequence above. The former `HomeCreativeSystemsSection`, `CurrentSignalSection`, and `HomeAboutCharacters` (with all pixel-art components) were removed in the consulting repositioning.

### Data layer

Content is fully decoupled from layout. All editable content lives in `data/`:

- `data/site.ts` — `siteConfig` (name, copy, hero CTAs, about blurbs, contact info), `highlights`, `workingPrinciples`, `contactItems`, `socialLinks`
- `data/projects.ts` — `ProjectItem[]`; set `featured: true` for home page inclusion. Each project points at a dark-theme cover in `public/images/projects/` (`clipstack-cover.svg`, `fader-cover.svg`). The home Featured Work section leads with the first `featured` project and lists the rest under Other Work
- `data/navigation.ts` — `NavItem[]` driving the header nav
- `data/gallery.ts` — exports `gallery: GalleryPhoto[]`; `GalleryPhoto` is `{ image: StaticImageData | string; alt: string }`. The **first** entry is the full-width panorama lead banner; the rest flow into the masonry collage. Order is intentional (interleaves landscape/portrait frames and flows across tones) — keep that in mind when adding photos.

### Types (`lib/types.ts`)

- `ProjectLogo` — `{ label, status, image }`
- `ProjectItem` — `{ slug, title, category, summary, eyebrow?, subtitle?, relationshipLabel?, systemRole?: "interface" | "foundation", impact?, tags, href?, ctaLabel?, proofLogos?: ProjectLogo[], image, imageFit?: "cover" | "contain", featured? }`
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
- `components/sections/home/` — `HomeAboutSection`, `HomeContactSection`, `HomeFeaturedWorkSection`, `HomeStudioIndexSection` (all mounted on the home page)
- `components/cards/` — `ProjectCard`, `StatCard`
- `components/portfolio/` — `CaseStudy` (shared dark case-study layout: hero + GitHub link, facts row, problem + numbered decisions), `ProjectPlate` (variant-based card; variants: `"brand" | "interface" | "system"`)
- `components/ui/` — primitives and interactive pieces (full list below)

**Portfolio case studies** (`/portfolio/clipstack`, `/portfolio/fader`) are thin pages that pass content to `CaseStudy`. Add new case studies the same way.

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
| `SketchCar` | Self-drawing line-art car for the home hero; CSS-only, so it stays a server component. Keyframes live in `globals.css` under "Home hero sketch-car draw-in" |
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
`app/theme-fixes.css` scopes transitions to avoid layout jank — imported after `globals.css` in `layout.tsx`. It also holds per-page overrides (e.g. the Car Wash 3D-model label contrast fix). `CaseStudy` paints its own dark section backgrounds locally (`bg-[#0d0905]` etc.). `ProjectCard` renders the single `image`; the project covers are dark-theme SVGs sharing one visual language (graphite base, amber glow, cream text, amber/teal accents) so they sit cleanly on the dark UI.

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
- SVG thumbnails for projects live in `public/images/projects/`. The project card covers (`clipstack-cover.svg`, `fader-cover.svg`) are ASCII-only, dark-theme SVGs sharing one visual language — keep new covers in that style so they match the dark UI. Note: SVG text must use plain ASCII (no `·`/`—`), since non-ASCII punctuation can be written as invalid single-byte encodings that break SVG parsing.
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
