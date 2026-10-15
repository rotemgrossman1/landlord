---
id: P-02
title: Services index
type: page
route: /services
status: draft
depends_on: [C-01, C-02, C-04, C-07, C-15, C-16]
open_questions: [Q01, Q02]
flags: [luxuryService]
content: content/pages/services.ts
last_updated: 2026-10-15
---

# P-02 Services index

## 1. Purpose

One page that lists every service with a clear "who it's for", so visitors pick the right one and Google sees the full offer.

## 2. Audience & user goal

Owners comparing what we do; they want to find "the service for someone like me".

## 3. SEO

- Target keyword: **שירותי ניהול נכסים**
- Supporting: חברת ניהול נכסים, ניהול דירות להשכרה, חברת ניהול נדל"ן
- Title: `שירותי ניהול נכסים לבעלי דירות | {{brand.nameHe}}`
- H1 (DRAFT): `שירותי ניהול נכסים`
- Schema: BreadcrumbList, ItemList of Service.
- Links out: each service page, Landlord Safe, pricing, contact.

## 4. Structure

| #   | Section                            | Component                 | Content key     | Flag            |
| --- | ---------------------------------- | ------------------------- | --------------- | --------------- |
| 1   | Breadcrumbs                        | C-16                      | —               | —               |
| 2   | Short hero (H1 + 2-sentence intro) | C-04 (variant `compact`)  | `services.hero` | —               |
| 3   | Service cards with "מתאים ל…" line | C-07 (variant `detailed`) | `services.list` | `luxuryService` |
| 4   | "Not sure which fits?" CTA         | C-15                      | `services.cta`  | —               |

## 5. Content

Services list driven by `content/services/*.ts` (one file per service), ordered by `order` field. Facts: `services.list`.

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

_To be filled by the dev agent._ Cards generated from the services content folder; adding a service file adds a card and a page.

## 8. Acceptance criteria

- [ ] Every service in `content/services` with `enabled: true` appears as a card and links to `/services/<slug>`.
- [ ] Disabling a service removes its card, page, sitemap entry and JSON-LD.
- [ ] Breadcrumbs: דף הבית › שירותים.

## 9. Open questions

Q01 which services and in what order; Q02 commercial property.

## 10. Change log

- 2026-10-15 — created (draft)
