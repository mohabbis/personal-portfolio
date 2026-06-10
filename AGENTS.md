# AGENTS.md

## Project Ecosystem Context

You are working inside Muhammad Rafiq’s project ecosystem.

This repository should be built with the same standards used across Muhammad’s projects: secure, organized, maintainable, scalable, and production-ready.

## Core Principles

- Optimize for security, organization, maintainability, and speed.
- Prefer simple architectures over complex ones.
- Build production-ready systems, not prototypes.
- Every decision should support scalability and long-term ownership.
- Avoid technical debt whenever possible.
- Never expose secrets, API keys, tokens, or credentials.
- Use environment variables for all sensitive configuration.
- Write code another developer can understand quickly.
- When uncertain, choose maintainability, security, and clarity.

## Deployment Standards

- Primary deployment platform: Vercel.
- Default framework: Next.js.
- Preferred language: TypeScript.
- Preferred database/auth provider: Supabase.
- Use GitHub for source control.
- Ensure builds pass on clean deployments.
- Do not add alternate deployment adapters unless the deployment strategy is intentionally changed again.

## Repository Standards

Every repository should include and maintain:

- `README.md`
- `PROJECT_CONTEXT.md`
- `AGENTS.md`
- `.env.example`

Repository expectations:

- Keep `README.md` updated.
- Keep `PROJECT_CONTEXT.md` current with project-specific goals, architecture, and decisions.
- Keep `AGENTS.md` current for AI coding agents.
- Use clear folder structures.
- Document architecture decisions.
- Create TODO sections for unfinished work.
- Preserve backwards compatibility when reasonable.

## Repository-Specific Context

This project is Muhammad Rafiq’s personal portfolio site.

It should function as a polished creative/showcase portfolio rather than a credential-heavy academic resume. Prioritize project storytelling, design taste, photography, branding, web work, smart-home/technology projects, and a studio/gallery feel.

Avoid GPA and major references unless explicitly requested.

Core line:

> Leaving every room a little brighter.

## Project Structure & Module Organization

This project is a Next.js App Router portfolio site.

- Keep route files in `app/`.
- Keep reusable UI in `components/`.
- Keep editable site content in `data/`.
- Keep shared helpers and types in `lib/`.
- Keep static assets in `public/`.
- Root configs such as `next.config.ts`, `tailwind.config.ts`, and `tsconfig.json` define framework behavior.
- `application.fam` and `starter_app.c` are legacy Flipper files; do not change them unless intentionally reviving that path.

## Build, Test, and Development Commands

Use Node 20+.

- `npm install`: install dependencies.
- `npm run dev`: start the local dev server at `http://localhost:3000`.
- `npm run build`: create a production build and catch route/runtime issues.
- `npm run start`: serve the production build locally.
- `npm run typecheck`: run strict TypeScript checks with `tsc --noEmit`.

Run `npm run typecheck` and `npm run build` before opening a PR.

## Coding Style & Naming Conventions

- Follow the existing TypeScript and App Router patterns.
- Use 2-space indentation in `*.ts` and `*.tsx`.
- Keep imports grouped.
- Prefer the `@/*` path alias over deep relative imports.
- Name React components in PascalCase.
- Keep component filenames kebab-case, for example `project-card.tsx`.
- Keep content modules descriptive and lowercase, for example `data/projects.ts`.
- Tailwind utility classes are the primary styling method.
- Keep design tokens centralized in `app/globals.css` and `tailwind.config.ts`.

## Design Standards

- Favor clean, modern, premium interfaces.
- Prioritize usability over visual complexity.
- Maintain consistent spacing, typography, and hierarchy.
- Design mobile-first responsive experiences.
- Consider accessibility by default.

## Personal Brand Design Direction

Use:

- Luxury editorial aesthetic
- Warm neutrals
- Brown, tan, and cream palette
- Instrument Serif + Raleway styling direction
- Understated, refined, editorial UI language
- Project storytelling over credentials
- Concise role-interest language such as “Strategy, product, and creative technology” when needed

Avoid:

- Generic tech gradients
- Credential-heavy framing
