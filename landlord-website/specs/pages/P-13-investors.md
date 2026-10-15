---
id: P-13
title: For investors
type: page
route: /investors
status: draft
depends_on: [C-01, C-02, C-04, C-06, C-14, C-15, C-16]
open_questions: [Q01, Q02, Q06]
flags: [stats]
content: content/pages/investors.ts
last_updated: 2026-10-15
---

# P-13 For investors

## 1. Purpose

A page for owners of several apartments (portfolio investors) and the secondary keyword "חברת ניהול נדל"ן": reporting, scale, one point of contact.

## 3. SEO

- Target keyword: **חברת ניהול נדל"ן** / **ניהול תיק נכסים**
- Title: `ניהול נדל"ן למשקיעים ובעלי כמה דירות | {{brand.nameHe}}`
- H1 (DRAFT): `ניהול תיק דירות להשקעה`
- Schema: Service, BreadcrumbList.

## 4. Structure

| #   | Section                                                                           | Component   | Content key            | Flag    |
| --- | --------------------------------------------------------------------------------- | ----------- | ---------------------- | ------- |
| 1   | Breadcrumbs                                                                       | C-16        | —                      | —       |
| 2   | Hero                                                                              | C-04        | `investors.hero`       | —       |
| 3   | What portfolio owners get (consolidated monthly report, one manager, yield focus) | list        | `investors.benefits`   | —       |
| 4   | Sample monthly report (image/PDF)                                                 | media       | `investors.report`     | —       |
| 5   | Numbers                                                                           | C-06        | `investors.stats`      | `stats` |
| 6   | Commercial property note (only if Q02 = yes)                                      | text        | `investors.commercial` | —       |
| 7   | CTA + form                                                                        | C-15 + C-14 | `investors.cta`        | —       |

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

_To be filled by the dev agent._

## 8. Acceptance criteria

- [ ] Sample report shown only if the owners supplied a real (anonymized) one.
- [ ] Linked from footer and from P-02.

## 9. Open questions

Q01, Q02, Q06.

## 10. Change log

- 2026-10-15 — created (draft)
