---
id: P-05
title: Landlord Safe
type: page
route: /landlord-safe
status: draft
depends_on: [C-01, C-02, C-04, C-05, C-08, C-11, C-13, C-14, C-15, C-16]
open_questions: [Q04, Q08]
flags: [safeTerms, caseStudies]
content: content/pages/landlord-safe.ts
last_updated: 2026-10-15
---

# P-05 Landlord Safe

## 1. Purpose

Explain the company's strongest differentiator — continued rent income and legal handling when a tenant stops paying or won't leave — clearly enough that an owner understands exactly what is covered and wants it.

## 2. Audience & user goal

Owners whose biggest fear is a non-paying tenant. They want to know: what happens, step by step, if it goes wrong — and what it costs.

## 3. SEO

- Target keyword: **הבטחת שכר דירה**
- Supporting: ביטוח שכר דירה, ערבות לשכר דירה, שוכר לא משלם, פינוי שוכר
- Title: `Landlord Safe – הבטחת שכר דירה לבעלי נכסים | {{brand.nameHe}}`
- H1 (DRAFT): `Landlord Safe – שכר הדירה ממשיך להיכנס, גם כשהשוכר לא משלם`
- Schema: Service, FAQPage, BreadcrumbList.
- Old URL `/landlord-safe` is kept (F-05).

## 4. Structure

| #   | Section                                                  | Component                 | Content key       | Flag          |
| --- | -------------------------------------------------------- | ------------------------- | ----------------- | ------------- |
| 1   | Breadcrumbs                                              | C-16                      | —                 | —             |
| 2   | Hero: H1, one-line promise, CTA                          | C-04                      | `safe.hero`       | —             |
| 3   | Direct answer: what Landlord Safe is (2–3 sentences)     | text block                | `safe.intro`      | —             |
| 4   | What's included (from `safe.includes`)                   | list                      | `safe.includes`   | —             |
| 5   | "What happens if the tenant stops paying" — step by step | C-05 (variant `timeline`) | `safe.scenario`   | —             |
| 6   | Terms: months covered, backing, eligibility, price       | C-08                      | `safe.terms`      | `safeTerms`   |
| 7   | Management only vs. with Landlord Safe                   | C-08                      | `safe.comparison` | `safeTerms`   |
| 8   | Real example (anonymized)                                | C-11                      | `safe.example`    | `caseStudies` |
| 9   | Landlord Safe FAQ (`id="faq"`, target of old redirect)   | C-13                      | `faq` tag `safe`  | —             |
| 10  | CTA + form                                               | C-15 + C-14               | `safe.cta`        | —             |

## 5. Content

- Facts: `safe.includes` (OLD-SITE), `safe.monthsCovered`, `safe.backedBy`, `safe.price`, `safe.eligibility` (TBD).
- Wording must be reviewed by the lawyer partner before launch — no promise beyond the confirmed terms.

## 6. Design notes

_To be filled by the design agent._ Make the scenario timeline the visual centerpiece.

## 7. Technical notes

_To be filled by the dev agent._

## 8. Acceptance criteria

- [ ] With `safeTerms` off, sections 6–7 are hidden and no duration/price appears anywhere.
- [ ] `/landlord-safe#faq` scrolls to the FAQ section.
- [ ] Copy status of sections 3–6 is not DRAFT at launch (legal sign-off noted in change log).

## 9. Open questions

Q04 terms.

## 10. Change log

- 2026-10-15 — created (draft)
