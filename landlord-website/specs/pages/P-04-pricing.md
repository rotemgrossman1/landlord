---
id: P-04
title: Pricing
type: page
route: /pricing
status: draft
depends_on: [C-01, C-02, C-08, C-13, C-14, C-15, C-16]
open_questions: [Q03, Q04]
flags: [pricingFrom, safeTerms]
content: content/pages/pricing.ts
last_updated: 2026-10-15
---

# P-04 Pricing

## 1. Purpose

Answer "כמה זה עולה?" honestly. Transparency builds trust and this question is one of the most common ones owners ask Google and AI assistants.

## 2. Audience & user goal

Owners comparing management companies or deciding between self-management and a company.

## 3. SEO

- Target keyword: **כמה עולה חברת ניהול נכסים**
- Supporting: מחיר ניהול נכסים, דמי ניהול דירה
- Title: `כמה עולה ניהול נכסים? מחירים ושקיפות | {{brand.nameHe}}`
- H1 (DRAFT): `כמה עולה ניהול נכס אצלנו`
- Schema: BreadcrumbList, FAQPage; `Offer` only if a confirmed price exists.

## 4. Structure

| #   | Section                                         | Component   | Content key             | Flag                                                                    |
| --- | ----------------------------------------------- | ----------- | ----------------------- | ----------------------------------------------------------------------- |
| 1   | Breadcrumbs                                     | C-16        | —                       | —                                                                       |
| 2   | Direct answer: how pricing works + "החל מ-X%"   | text block  | `pricing.answer`        | `pricingFrom` (if off: explain model without numbers + CTA for a quote) |
| 3   | What's included in the fee                      | C-08        | `pricing.plans`         | —                                                                       |
| 4   | Management vs. management + Landlord Safe       | C-08        | `pricing.comparison`    | `safeTerms`                                                             |
| 5   | Self-management vs. company — honest comparison | text block  | `pricing.selfVsCompany` | —                                                                       |
| 6   | Pricing FAQ                                     | C-13        | `faq` tag `pricing`     | —                                                                       |
| 7   | CTA "קבלו הצעת מחיר לנכס שלכם" + form           | C-15 + C-14 | `pricing.cta`           | —                                                                       |

## 5. Content

Facts: `pricing.model`, `pricing.fromPercent`, `safe.price`. Until Q03 is answered, section 2 runs in "no numbers" mode.

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

_To be filled by the dev agent._ Build this page only in Phase 2; until then `/pricing` redirects to `/faq` (F-05).

## 8. Acceptance criteria

- [ ] With `pricingFrom` off, no number appears on the page or in JSON-LD.
- [ ] With it on, the percent comes only from `facts.pricing.fromPercent`.
- [ ] FAQ JSON-LD matches visible FAQ.

## 9. Open questions

Q03 pricing model, Q04 Landlord Safe price.

## 10. Change log

- 2026-10-15 — created (draft)
