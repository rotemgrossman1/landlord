---
id: P-09
title: Knowledge hub and owner's guide
type: page
route: /guide
status: draft
depends_on: [C-01, C-02, C-15, C-16, P-10]
open_questions: [Q15]
flags: []
content: content/pages/guide.ts + content/articles/*.mdx
last_updated: 2026-10-15
---

# P-09 Knowledge hub and owner's guide

## 1. Purpose

The pillar page "המדריך המלא לניהול נכס להשכרה" plus an index of articles. This is the main long-term engine for Google rankings and AI citations.

## 2. Audience & user goal

Owners researching before deciding; they arrive from questions like "מה עושים כשהשוכר לא משלם".

## 3. SEO

- Target keyword: **ניהול נכס להשכרה** / **מדריך לבעלי דירות להשכרה**
- Title: `המדריך המלא לניהול נכס להשכרה ({{currentYear}}) | {{brand.nameHe}}`
- H1 (DRAFT): `המדריך המלא לניהול נכס להשכרה`
- Schema: Article (pillar), BreadcrumbList, ItemList (articles).

## 4. Structure

| #   | Section                                                                                                                                                                                                                                                  | Component     | Content key  |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| 1   | Breadcrumbs                                                                                                                                                                                                                                              | C-16          | —            |
| 2   | Pillar guide: table of contents + chapters (finding a tenant, contract & guarantees, rent collection, maintenance, ending a lease, taxes on rental income, managing from abroad) — each chapter opens with a direct answer and links to a deeper article | long-form MDX | `guide.mdx`  |
| 3   | Article index by category                                                                                                                                                                                                                                | cards         | `articles/*` |
| 4   | CTA                                                                                                                                                                                                                                                      | C-15          | `guide.cta`  |

## 5. Content

- First article topics (product to prioritize with owners): כמה עולה חברת ניהול נכסים; מה עושים כשהשוכר לא משלם; איך לנהל דירה מחו"ל; ניהול עצמי או חברת ניהול; אילו ביטחונות לדרוש מהשוכר; מיסוי הכנסה משכירות.
- Each article bylined by a real person (Q15), with "last updated" date. Tax/legal content needs the lawyer's review.

## 6. Design notes

_To be filled by the design agent._ Readable long-form: 65–75 characters per line, sticky table of contents on desktop.

## 7. Technical notes

_To be filled by the dev agent._ MDX with front matter; reading time; "updated" date shown and in schema.

## 8. Acceptance criteria

- [ ] Table of contents links to every chapter heading (anchor IDs stable).
- [ ] Each chapter's first paragraph is a direct answer of 2–3 sentences.
- [ ] Article index lists only published articles, newest first.

## 9. Open questions

Q15 author and approver.

## 10. Change log

- 2026-10-15 — created (draft)
