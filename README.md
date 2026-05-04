# Personal Portfolio Website

A clean, premium personal portfolio built with Next.js App Router and Tailwind, designed to be highly editable rather than over-designed.

## What is included

- `app/` for all routes and page-level structure
- `components/` for reusable layout, card, and section primitives
- `data/` for easy-to-edit content files
- `public/images/` for placeholder assets you can replace later
- `app/globals.css` for theme tokens and baseline visual styling

## Pages

- Home
- About
- Experience
- Portfolio / Projects
- Photography Gallery
- Contact

## Project structure

```text
app/
  about/page.tsx
  contact/page.tsx
  experience/page.tsx
  photography/page.tsx
  portfolio/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  cards/
  layout/
  sections/
  ui/
data/
  experience.ts
  gallery.ts
  navigation.ts
  projects.ts
  site.ts
lib/
  types.ts
  utils.ts
public/
  images/
```

## Where to customize

- `app/globals.css`
  Adjust color tokens, background treatment, and baseline visual style.
- `app/layout.tsx`
  Swap fonts in one place.
- `tailwind.config.ts`
  Update container width, shadow style, and theme extensions.
- `data/site.ts`
  Replace your name, intro copy, social links, and contact details.
- `data/experience.ts`
  Add real roles, bullets, and tags.
- `data/projects.ts`
  Add or remove project cards without touching layout code.
- `data/gallery.ts`
  Update photography metadata and image paths.

## Local setup

1. Install Node.js 20 or newer.
2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Build for production

```sh
npm run build
npm run start
```

## Free deployment

### Option 1: Vercel

1. Push this repository to GitHub.
2. Create a free Vercel account at [vercel.com](https://vercel.com).
3. Import the GitHub repository.
4. Vercel will detect Next.js automatically.
5. Click deploy.

### Option 2: Netlify

1. Push the repository to GitHub.
2. Create a free Netlify account at [netlify.com](https://www.netlify.com).
3. Import the repository.
4. Use the default Next.js build settings if prompted.
5. Deploy the site.

## Notes

- Placeholder image files are already included so the layout works immediately.
- The visual system is intentionally neutral and restrained so you can direct the aesthetic yourself.
- The structure is meant to grow with stronger content rather than lock you into a fixed brand style.
