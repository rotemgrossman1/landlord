---
id: P-08
title: Case studies (index + single)
type: page
route: /case-studies, /case-studies/[slug]
status: draft
depends_on: [C-01, C-02, C-11, C-15, C-16]
open_questions: [Q08]
flags: [caseStudies]
content: content/case-studies/<slug>.ts
last_updated: 2026-10-15
---

# P-08 Case studies

## 1. Purpose

Short, concrete stories with real numbers that prove results ("vacant 6 weeks → rented in 9 days"). Strong for trust and for AI assistants, which quote specific outcomes.

## 2. Audience & user goal

Owners in a similar situation (abroad, problem tenant, apartment needing renovation) who want to see it solved before.

## 3. SEO

- Index title: `סיפורי הצלחה בניהול נכסים | {{brand.nameHe}}`
- Single title: `<case title> | {{brand.nameHe}}`
- Schema: Article (single), BreadcrumbList.

## 4. Structure

**Index:** C-16 → intro → grid of C-11 → C-15.
**Single:** C-16 → title + tags (city, service, situation) → "The situation" → "What we did" → "The result" (numbers) → owner quote (optional, consent) → related service link → C-15.

## 5. Content

One file per case in `content/case-studies/<slug>.ts`: `slug`, `enabled`, `city`, `service`, `situation`, `actions[]`, `results[] {label, before, after}`, `quote?`, `consentDate`, `photos[]`. Anonymize addresses.

## 6. Design notes

_To be filled by the design agent._ Results as a prominent before/after block.

## 7. Technical notes

_To be filled by the dev agent._ Whole section hidden (no route, no sitemap) while `caseStudies` is off.

## 8. Acceptance criteria

- [ ] Routes exist only when flag is on and at least one case is enabled.
- [ ] Every number shown comes from the case content file.

## 9. Open questions

Q08.

## 10. Change log

- 2026-10-15 — created (draft)
