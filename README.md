# muharafiq.com

Personal portfolio for Muhammad Rafiq — strategy, design, systems, and photography. Built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Pages

- **Home** — hero, featured work, experience, and contact
- **About** — profile, working principles, and role fit
- **Portfolio** — full project listing (Fancy Car Wash, MuHome, Personal Portfolio)
- **Experience** — work and education timeline
- **Photography** — editorial gallery with lightbox
- **Contact** — email and links

## Theme

Three modes toggled by the floating pill button (bottom-center) or pressing `N`:

| Mode | Class on `<html>` | Background |
|---|---|---|
| Warm | *(default)* | Cream paper `#F6F2EB` |
| Bright | `.bright-mode` | Pure white `#FFFFFF` |
| Night Race | `.night-race` | Dark cinematic `#0D0C0B` |

Preference is saved to `localStorage`. Between 20:00–07:00, Night Race applies automatically when no preference is stored.

## Content

All editable content lives in `data/`:

| File | What it controls |
|---|---|
| `data/site.ts` | Name, hero copy, CTAs, contact info, social links |
| `data/projects.ts` | Project cards — add `featured: true` for home page; `darkImage` swaps the thumbnail in Night Race |
| `data/experience.ts` | Experience and education entries |
| `data/gallery.ts` | Photography — order, spans, and object position |
| `data/navigation.ts` | Header nav links |

## Development

```sh
npm install       # Node 20+ required
npm run dev       # http://localhost:3000
npm run build     # production build
npm run typecheck # strict TypeScript check
npm test          # Vitest test suite
```

Minimum gate before pushing: `npm test && npm run typecheck && npm run build`.

## Project structure

```
app/                  routes and global CSS
components/
  cards/              ProjectCard, ExperienceCard
  layout/             SiteFrame, SiteHeader, SiteFooter
  sections/           page-level sections and home sections
  ui/                 primitives — NightMode, FallbackImage, Tag, etc.
data/                 all site content
lib/                  types.ts, utils.ts
public/
  fonts/              self-hosted Raleway TTFs
  images/
    gallery/          photography JPGs
    logos/            org logos (e.g. michigan-wolverines.png)
    projects/         project thumbnails (light + dark SVG variants)
```

## Notes

- **Standing constraint:** never display GPA or academic major anywhere on the site.
- Project thumbnail naming: `name.svg` for light, `name-dark.svg` for dark (Night Race) variant.
- Org logos go in `public/images/logos/` and are referenced via `logoImage` on `ExperienceItem`.
- Google Fonts must be loaded via `<link>` tags in `app/layout.tsx` — not `@import` in CSS (breaks Turbopack).
