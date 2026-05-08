# Cakrawala — CRN Advisory Systems

Fictional Indonesian enterprise website for CRN Advisory Systems — a premium AI governance, data platform, cloud risk, and digital resilience consultancy. Static marketing site built with Astro 6 and Tailwind CSS v4.

## Project structure

```
src/pages/       → Astro page routes
src/styles/      → global.css (Tailwind v4 theme tokens + custom utilities)
public/          → static assets
docs/            → project brief and strategy docs
PRODUCT.md       → product definition, users, brand personality
DESIGN.md        → design system spec (colors, typography, components, rules)
```

## Commands

All commands use [Bun](https://bun.sh), not npm/yarn/pnpm. Requires Node >=22.12.0.

```sh
bun install            # install dependencies
bun dev                # dev server at localhost:4321
bun run build          # production build → ./dist/
bun run preview        # preview production build
bun run check          # format → lint → astro check (run before committing)
```

Individual checks:

```sh
bun run format         # format with Prettier
bun run format:check   # check formatting
bun run lint           # ESLint
bun run lint:fix       # ESLint with auto-fix
```

## Key references

| File                    | Purpose                                                                        |
| ----------------------- | ------------------------------------------------------------------------------ |
| `PRODUCT.md`            | Users, brand personality, design principles, accessibility targets             |
| `DESIGN.md`             | Complete design system — colors, typography, elevation, components, dos/don'ts |
| `docs/project.md`       | Fictional company profile, market analysis, website strategy                   |
| `src/styles/global.css` | Canonical Tailwind v4 design tokens and custom utilities                       |
