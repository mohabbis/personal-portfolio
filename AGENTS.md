# Repository Guidelines

## Project Structure & Module Organization
This project is a Next.js App Router portfolio site. Keep route files in `app/`, reusable UI in `components/`, editable site content in `data/`, and shared helpers/types in `lib/`. Static assets belong in `public/`. Root configs such as `next.config.ts`, `tailwind.config.ts`, and `tsconfig.json` define framework behavior. `application.fam` and `starter_app.c` are legacy Flipper files; do not change them unless you are intentionally reviving that path.

## Build, Test, and Development Commands
Use Node 20+.

- `npm install`: install dependencies.
- `npm run dev`: start the local dev server at `http://localhost:3000`.
- `npm run build`: create a production build and catch route/runtime issues.
- `npm run start`: serve the production build locally.
- `npm run typecheck`: run strict TypeScript checks with `tsc --noEmit`.

Run `npm run typecheck` and `npm run build` before opening a PR.

## Coding Style & Naming Conventions
Follow the existing TypeScript and App Router patterns. Use 2-space indentation in `*.ts` and `*.tsx`, keep imports grouped, and prefer the `@/*` path alias over deep relative imports. Name React components in PascalCase, keep component filenames kebab-case like `project-card.tsx`, and keep content modules descriptive and lowercase, for example `data/projects.ts`. Tailwind utility classes are the primary styling method; keep design tokens centralized in `app/globals.css` and `tailwind.config.ts`.

## Testing Guidelines
There is no dedicated test runner configured yet. Treat `npm run typecheck` and `npm run build` as the minimum validation gate. For UI changes, manually verify the main routes (`/`, `/about`, `/experience`, `/portfolio`, `/photography`, `/contact`) in the browser and note any responsive checks in your PR.

## Commit & Pull Request Guidelines
This repository does not currently have a usable commit history, so no formal convention is established. Use short imperative commit subjects such as `app: tighten hero spacing` or `data: refresh project copy`. PRs should include a brief summary, affected routes/components, linked issues if any, and screenshots for visible UI changes.

## Agent Notes
If AI-generated text or chat UI is added later, prefer Vercel AI Elements over custom markdown rendering. Install only the components you need and avoid hand-rolled AI message displays.
