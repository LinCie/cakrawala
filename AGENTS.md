# AGENTS.md — Cakrawala (CRN Advisory Systems)

## Project

Fictional Indonesian enterprise website for CRN Advisory Systems — a premium AI governance, data platform, cloud risk, and digital resilience consultancy. Static marketing site targeting skeptical enterprise decision-makers in regulated Indonesian organizations.

## Tech stack

- **Runtime/package manager**: Bun (not npm/yarn/pnpm). Node >=22.12.0.
- **Framework**: Astro 6 (SSG, no SSR, no UI framework islands currently).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin — there is no `tailwind.config.*`. All design tokens live in `src/styles/global.css` using the `@theme` directive. **You MUST use Tailwind for all styling. Only write plain CSS when Tailwind cannot express the needed style (e.g., complex animations, SVG filters, hacky workarounds). Document the reason in a comment when resorting to plain CSS.**
- **Animation**: GSAP (GreenSock) for all scroll-triggered, entrance, and interactive animations. Prefer GSAP's `ScrollTrigger` plugin for scroll-based effects. Always respect `prefers-reduced-motion`. Use Tailwind's `transition-*` utilities only for trivial hover states; reach for GSAP when timing, choreography, or physics are involved.
- **TypeScript**: Strict config extending `astro/tsconfigs/strict`.
- **Lint**: ESLint flat config with `eslint-plugin-astro` + `eslint-config-prettier`.
- **Format**: Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`.

## Commands

```sh
bun install            # install deps
bun dev                # dev server (localhost:4321)
bun run build          # production build → ./dist/
bun run preview        # preview production build
bun run check          # format → lint → astro check (run this before committing)
```

The `check` script runs format, lint, and astro type-checking in sequence. Use it as the pre-commit verification step.

## Architecture

```
src/pages/       → Astro page routes (entry points)
src/styles/      → global.css (Tailwind v4 theme + custom utilities)
public/          → static assets (favicons, images)
docs/            → project brief and strategy docs
PRODUCT.md       → product definition, users, brand personality
DESIGN.md        → full design system spec (colors, typography, components, rules)
```

No component library yet. No layouts directory yet. The project is early-stage — most pages and components have not been built.

## Tailwind v4 patterns

- Design tokens are CSS custom properties defined in `@theme {}` in `src/styles/global.css`, not in a JS config file.
- Content detection uses `@source "../pages"`. When new directories with utility classes are added (e.g. `src/components/`), add a corresponding `@source` line.
- Custom utilities use `@utility name { ... }` syntax. Existing: `section-shell`, `enterprise-ring`, `text-readable`, `focus-enterprise`.
- Dark mode uses `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *))`. The `dark:` variant activates via `data-theme="dark"` attribute on an ancestor — not `prefers-color-scheme` and not `.dark` class.
- Custom fonts: Satoshi (display), Inter (body), IBM Plex Mono (mono). These must be loaded (e.g. via `<link>` or `@font-face`) before they render correctly.

## Design constraints

See `DESIGN.md` for the full system. Key rules that are easy to violate:

- **Gold is a signal, not a surface.** `#C49A45` / `#8B6827` for small emphasis only — never as large fills.
- **Primary CTA: `#174B68` at rest, `#0B2A3D` on hover.** Always with a visible `2px` focus outline.
- **Body measure: 68ch–72ch.** Don't let long-form copy stretch wider.
- **Motion: 160ms (fast), 420–520ms (reveal).** Always provide `prefers-reduced-motion` fallbacks.
- **No decorative elevation.** Shadows must earn their place through action or evidence content.
- **Accessibility target: WCAG 2.2 AA.** Do not rely on color alone for error/risk/data meaning.

## Brand voice

Analytical, credible, disciplined. Calm, board-ready, precise, non-hyped. Evidence over assertion. Do not make this look like a generic digital agency, a hype-driven AI startup, or a consumer-tech marketing site. See `PRODUCT.md` for full personality and anti-references.

## Key references

- `PRODUCT.md` — users, purpose, brand personality, design principles, accessibility targets
- `DESIGN.md` — complete design system (colors, typography, elevation, components, dos/don'ts)
- `docs/project.md` — full fictional company profile, market analysis, and website strategy
- `src/styles/global.css` — canonical design token definitions
