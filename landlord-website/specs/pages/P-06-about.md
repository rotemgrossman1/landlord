---
id: P-06
title: About and team
type: page
route: /about
status: draft
depends_on: [C-01, C-02, C-06, C-12, C-15, C-16]
open_questions: [Q06, Q09, Q10, Q20]
flags: [stats, pressAndPartners]
content: content/pages/about.ts
last_updated: 2026-10-15
---

# P-06 About and team

## 1. Purpose

Show the real people and history behind the company so visitors trust us with their property, and give AI assistants concrete facts to repeat (founded 2013, founders are property owners themselves, lawyer-led).

## 2. Audience & user goal

Owners checking "who are these people?" before calling.

## 3. SEO

- Target keyword: **חברת ניהול נדל"ן** (secondary keyword lives here, per D-001)
- Title: `אודות {{brand.nameHe}} – חברת ניהול נדל"ן מאז {{company.founded}}`
- H1 (DRAFT): `מי אנחנו`
- Schema: Organization (founder/employees as Person), BreadcrumbList.

## 4. Structure

| #   | Section                                                                                       | Component          | Content key    | Flag                                            |
| --- | --------------------------------------------------------------------------------------------- | ------------------ | -------------- | ----------------------------------------------- |
| 1   | Breadcrumbs                                                                                   | C-16               | —              | —                                               |
| 2   | Story: founded by property owners who needed a transparent manager (from old site, rewritten) | text block + photo | `about.story`  | —                                               |
| 3   | Numbers                                                                                       | C-06               | `about.stats`  | `stats`                                         |
| 4   | Values / how we work (transparency, no conflict of interest, legal backing)                   | 3–4 short items    | `about.values` | —                                               |
| 5   | Team                                                                                          | C-12               | `about.team`   | — (partners from OLD-SITE; full team after Q09) |
| 6   | Office (B.S.R tower, photo, map link)                                                         | text + image       | `about.office` | —                                               |
| 7   | Press & partners                                                                              | logos/links        | `about.press`  | `pressAndPartners`                              |
| 8   | CTA                                                                                           | C-15               | `about.cta`    | —                                               |

## 5. Content

Facts: `company.founded`, `company.address`, `team.*`, `press`, `partners`, `legal.companyName`. Remove the old site's external news links entirely.

## 6. Design notes

_To be filled by the design agent._ Real photos only; no stock people.

## 7. Technical notes

_To be filled by the dev agent._

## 8. Acceptance criteria

- [ ] No links to unrelated external news articles.
- [ ] Every team member shown has a name, role and photo; missing photo → member not shown (no avatar placeholders at launch).
- [ ] Organization JSON-LD includes `foundingDate` and the people shown.

## 9. Open questions

Q06 numbers, Q09 team, Q10 press/partners, Q20 legal name.

## 10. Change log

- 2026-10-15 — created (draft)
