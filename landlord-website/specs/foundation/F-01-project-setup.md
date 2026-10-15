---
id: F-01
title: Project setup
type: feature
status: built
depends_on: []
open_questions: []
flags: []
last_updated: 2026-10-15
---

# F-01 Project setup

## 1. Purpose

Create the empty, working Next.js project with all tooling, so every later spec only adds features.

## 4. Structure (what gets created)

- Next.js (latest stable, App Router) + React + TypeScript (strict).
- Folders exactly as in `CLAUDE.md` → Repo layout.
- `src/app/[locale]/layout.tsx` with `<html lang dir>` set from locale (`he` → `rtl`, `en` → `ltr`).
- `src/styles/globals.css` (reset + base typography using tokens) and an empty `tokens.css` (filled in F-02).
- ESLint (next + jsx-a11y), Prettier, TypeScript strict, Vitest + Testing Library, Playwright (smoke + axe accessibility tests).
- `npm` scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `test:e2e`, `check:tbd` (stub that F-03 completes).
- `.env.example` documenting every env var (empty for now).
- `.editorconfig`, `.gitignore`, `README.md` pointing to `docs/HOW-TO-WORK.md`.
- GitHub Actions: on every PR run lint, typecheck, test, build.

## 7. Technical notes

- Use static generation: `generateStaticParams` for `[locale]` with `['he']` (add `'en'` only when Q14 = yes, via F-05).
- No UI library. No Tailwind (D-005).
- Node LTS version pinned in `.nvmrc` and `package.json#engines`.
- Built on Next 16.4.1 → middleware file is `proxy.ts` (F-05). No `next lint`: ESLint 9 flat config (`eslint.config.mjs`); ESLint is held at 9 because eslint-plugin-jsx-a11y does not support 10. TypeScript held at 5.9 (Next tooling uses the TS JS API; TS 7 is the native rewrite).
- `/` is served by a temporary rewrite `/` → `/he` in `next.config.ts`; F-05 replaces it with locale routing in `proxy.ts` and decides what happens to `/he` (redirect/canonical).
- `<html lang dir>` lives in `src/app/[locale]/layout.tsx` (no root `app/layout.tsx`). `dynamicParams = false`.
- Page `<title>` comes from `content/site.ts` — DRAFT stub using the TBD brand name (Q12); F-03 replaces it with `getFact()`.
- `check:tbd` is a stub (`scripts/check-tbd.mjs`): passes while `content/flags.ts` doesn't exist, fails once it does until F-03 implements it.
- Playwright runs against the production build at 360px and 1440px; axe uses WCAG 2.1 A/AA tags (best-practice rules like page-has-heading-one are off until pages have content).
- jsdom pinned to 26 (jsdom 30 needs Node ≥22.22). CI workflow is at the git repo root `.github/workflows/ci.yml` with `working-directory: landlord-website`.
- Prettier ignores docs/, specs/, .claude/, CLAUDE.md.

## 8. Acceptance criteria

- [x] `npm run dev` shows a blank Hebrew page at `/` with `<html lang="he" dir="rtl">`.
- [x] `npm run build` produces static HTML for `/`.
- [ ] lint, typecheck, test pass in CI on a PR. _(pass locally; CI not run yet — no PR/remote)_
- [x] Playwright smoke test loads `/` and runs an axe check with zero violations.

## 10. Change log

- 2026-10-15 — created (draft)
- 2026-10-15 — built (dev)
