---
id: F-08
title: Accessibility baseline
type: feature
status: draft
depends_on: [F-01]
open_questions: [Q21]
flags: []
last_updated: 2026-10-15
---

# F-08 Accessibility baseline

## 1. Purpose

Meet Israeli web-accessibility requirements (Israeli Standard 5568, based on WCAG) — target WCAG 2.1 AA — and make the site easy for older visitors.

## 4. Structure

- Skip link "דלג לתוכן הראשי" as first focusable element.
- Landmarks: `header`, `nav` (labelled), `main`, `footer`.
- Visible focus ring everywhere (token `--color-focus`).
- All interactive elements reachable and operable by keyboard; no keyboard traps; Escape closes menus/dialogs.
- Text resizable to 200% without loss; layout works at 320px width.
- Forms: visible labels, error messages linked with `aria-describedby`, errors announced (`role="alert"`).
- Media: alt text from content; decorative images `alt=""`.
- Motion: respect `prefers-reduced-motion`.
- Accessibility statement page (`/accessibility`, part of P-15) with the accessibility coordinator's contact details (Q21).
- No third-party "accessibility overlay" widgets — fix the code instead.

## 7. Technical notes

- `eslint-plugin-jsx-a11y` errors fail CI.
- Playwright + `@axe-core/playwright` runs on every page in the sitemap in CI.

## 8. Acceptance criteria

- [ ] axe reports zero violations on every built page.
- [ ] Full keyboard walk-through of header, menu, form and FAQ works.
- [ ] Screen-reader smoke test (VoiceOver or NVDA) on home and contact recorded in the PR.

## 9. Open questions

Q21 who owns the accessibility statement and coordinator contact.

## 10. Change log

- 2026-10-15 — created (draft)
