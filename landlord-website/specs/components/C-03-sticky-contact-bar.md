---
id: C-03
title: Sticky contact bar (mobile)
type: component
status: draft
depends_on: [F-02, F-03, F-07]
open_questions: [Q17]
flags: []
content: content/navigation.ts (labels), facts.contact.*
last_updated: 2026-10-15
---

# C-03 Sticky contact bar

## 1. Purpose

On phones, keep call and WhatsApp one tap away on every page.

## 4. Structure

Bottom bar, mobile only (< 768px): [התקשרו] [וואטסאפ] [השאירו פרטים]. WhatsApp button hidden while `contact.whatsapp` is TBD (then 2 buttons). Desktop: not shown (header covers it).

## 6. Design notes

_To be filled by the design agent._ Safe-area inset at the bottom; page gets bottom padding equal to the bar height so nothing is hidden.

## 7. Technical notes

- `tel:` and `https://wa.me/<number>?text=<prefilled DRAFT text>` links.
- Hidden on `/contact` "leave details" button (already on the form page).
- Events: `click_phone` / `click_whatsapp` / `cta_click` with `location: sticky`.

## 8. Acceptance criteria

- [ ] Visible on all pages < 768px, never covers the last content or the consent banner buttons.
- [ ] Each button ≥ 44px tall with accessible names.

## 10. Change log

- 2026-10-15 — created (draft)
