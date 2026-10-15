---
id: F-02
title: Design system
type: feature
status: draft
depends_on: [F-01]
open_questions: [Q12, Q22]
flags: []
last_updated: 2026-10-15
---

# F-02 Design system

## 1. Purpose

One set of tokens and rules that every component uses, so a brand change (logo, colors, font) touches only `tokens.css`.

## 2. Audience

Owners of apartments, 45–70, many on phones; some abroad. They need to feel: serious, calm, established, transparent.

## 6. Design notes _(design agent owns this file)_

### Direction (proposal until Q12/Q22 are answered)

- Feel: "a law-firm-grade property manager" — trustworthy, not flashy.
- Palette: one deep primary (navy/petrol), one warm accent for the main CTA, neutrals with warm grey. Success/warning/error only for states.
- Imagery: real photos (team, office, managed apartments). Stock only as temporary placeholders, marked in content.

### Tokens to define in `src/styles/tokens.css`

- **Color:** `--color-primary-*` (50–900), `--color-accent-*`, `--color-neutral-*`, `--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-border`, `--color-focus`, `--color-success|warning|error`. All text/background pairs ≥ 4.5:1.
- **Type:** one Hebrew-supporting family for UI and text (candidates: Heebo, Assistant, Rubik — design picks after Q22), loaded with `next/font`. Scale: `--font-size-xs … --font-size-4xl` (fluid with `clamp()`), line heights, weights 400/500/700.
- **Space:** 4px base: `--space-1 … --space-16`.
- **Radius:** `--radius-sm|md|lg|pill`.
- **Shadow:** `--shadow-sm|md` (subtle).
- **Layout:** `--container-max: 1200px`, `--gutter: 16px` mobile / 24px desktop; breakpoints 360 / 768 / 1024 / 1440 (documented; media queries use them).
- **Motion:** `--duration-fast|base`, `--ease-standard`; everything wrapped in `prefers-reduced-motion`.
- **Z-index:** header, sticky bar, dialog, toast.

### Base components (visual rules only; behavior in their own specs)

- Buttons: primary (accent fill), secondary (outline), ghost (text); sizes md/lg; min height 44px; icon + label; loading state.
- Links: underlined in body text; focus ring `--color-focus` 2px offset 2px.
- Section: vertical rhythm `--space-12` desktop / `--space-8` mobile; alternating `--color-bg` / `--color-surface`.
- Cards: surface, `--radius-lg`, `--shadow-sm`, padding `--space-6`.
- Icons: one outline icon set (e.g. Lucide), 20/24px; arrows mirror in RTL.

### RTL rules

- Logical properties only. Numbers, phone numbers, emails and Latin brand names stay LTR (`<bdi>` or `dir="ltr"` on the element).

## 7. Technical notes

- Tokens as CSS custom properties on `:root`. No color or size literal anywhere outside `tokens.css`.
- A dev-only page `/_design` (excluded from sitemap, `noindex`) shows all tokens and button/link/card variants for review.

## 8. Acceptance criteria

- [ ] `tokens.css` defines every token group listed above.
- [ ] `/_design` renders all tokens and base variants in RTL.
- [ ] Contrast check passes for every text/background pair used.
- [ ] Changing `--color-primary-600` changes every primary element site-wide.

## 9. Open questions

Q12 brand name/logo, Q22 brand colors/fonts.

## 10. Change log

- 2026-10-15 — created (draft)
