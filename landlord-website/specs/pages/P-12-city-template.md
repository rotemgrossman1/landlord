---
id: P-12
title: Service areas and city page template
type: page
route: /areas, /areas/[city]
status: draft
depends_on: [C-01, C-02, C-13, C-14, C-15, C-16, C-17]
open_questions: [Q05]
flags: [serviceAreas]
content: content/areas/<city>.ts
last_updated: 2026-10-15
---

# P-12 Service areas and city template

## 1. Purpose

Rank for local searches ("ניהול נכסים בתל אביב") — but only for cities the company really serves, each with genuinely local content (not copied pages).

## 3. SEO

- Index: `אזורי פעילות – ניהול נכסים | {{brand.nameHe}}`
- City target keyword: **ניהול נכסים ב<city>** (e.g. ניהול נכסים בגבעתיים)
- City title: `ניהול נכסים ב<city> | {{brand.nameHe}}`
- Schema: Service with `areaServed` = City, FAQPage, BreadcrumbList.

## 4. Structure

**Index (`/areas`):** C-16 → intro → C-17 (all enabled cities, linked) → C-15.
**City page:** C-16 → H1 → direct answer (do we operate here, since when, how many units if confirmed) → local market notes (typical tenants, neighborhoods we cover) → services available here → local testimonial/case (if any) → city FAQ (C-13, tag `city-<slug>`) → C-15 + C-14.

## 5. Content

One file per city: `slug`, `nameHe`, `nameEn`, `enabled`, `since?`, `units?`, `neighborhoods[]`, `localNotes` (written by product with owner input), `faqTag`. A city page is enabled only when `localNotes` has real, specific content.

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

_To be filled by the dev agent._ No route at all while `serviceAreas` is off.

## 8. Acceptance criteria

- [ ] Only cities in confirmed `areas.cities` can be enabled (check in `check:tbd`).
- [ ] No two city pages share more than the template structure (manual review note in change log).

## 9. Open questions

Q05.

## 10. Change log

- 2026-10-15 — created (draft)
