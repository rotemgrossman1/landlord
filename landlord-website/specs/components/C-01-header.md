---
id: C-01
title: Header
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q12, Q14]
flags: [english]
content: content/navigation.ts
last_updated: 2026-10-15
---

# C-01 Header

## 1. Purpose

Brand, main navigation and the always-visible way to call — on every page.

## 4. Structure

- Logo (links to `/`), main nav from `navigation.ts` (שירותים ▾, Landlord Safe, אודות, המלצות*, מדריך*, שאלות נפוצות, צרו קשר), phone link, primary CTA button "קבעו שיחת ייעוץ" → `/contact`, language switcher C-18 (flag `english`).
- `*` items appear only when their page exists (flags).
- Mobile: logo + phone icon + menu button; menu opens a full-height panel.

## 6. Design notes

_To be filled by the design agent._ Sticky on scroll with reduced height; never covers content anchors (scroll-margin).

## 7. Technical notes

- Server component; the mobile menu toggle is a small client component.
- Menu button: `aria-expanded`, `aria-controls`; focus trapped in open panel; Escape closes; body scroll locked.
- Services submenu: disclosure pattern (button), not hover-only.
- Phone link fires `click_phone` with `location: header`.

## 8. Acceptance criteria

- [ ] Nav items come only from `navigation.ts`; disabled pages are absent.
- [ ] Full keyboard operation of menu and submenu; axe clean.
- [ ] Phone number rendered LTR inside RTL layout.

## 10. Change log

- 2026-10-15 — created (draft)
