---
id: P-11
title: FAQ
type: page
route: /faq
status: draft
depends_on: [C-01, C-02, C-13, C-15, C-16]
open_questions: [Q03, Q05]
flags: []
content: content/faq.ts
last_updated: 2026-10-15
---

# P-11 FAQ

## 1. Purpose

One page with every question answered as visible text (replacing the old site's one-page-per-question setup). Feeds FAQ rich results and AI answers.

## 3. SEO

- Target keyword: **שאלות נפוצות ניהול נכסים**
- Title: `שאלות נפוצות על ניהול נכסים | {{brand.nameHe}}`
- H1 (DRAFT): `שאלות נפוצות`
- Schema: FAQPage (all visible items), BreadcrumbList.
- Old FAQ URLs redirect here (F-05).

## 4. Structure

| #   | Section                                                                    | Component   | Content key          |
| --- | -------------------------------------------------------------------------- | ----------- | -------------------- |
| 1   | Breadcrumbs                                                                | C-16        | —                    |
| 2   | H1 + intro                                                                 | text        | `faqPage.intro`      |
| 3   | Category jump links (כללי, שירותי ניהול, Landlord Safe, מחירים, תושבי חוץ) | anchor list | `faqPage.categories` |
| 4   | FAQ grouped by category                                                    | C-13        | `faq` (all)          |
| 5   | "Didn't find an answer?" CTA                                               | C-15        | `faqPage.cta`        |

## 5. Content

- `content/faq.ts`: `{ id, question, answer, category, tags[] (pages it also appears on), enabled }`.
- Seed questions from the old site (rewrite answers): למה לבחור בנו; למי מיועד השירות; באיזה אזור אתם פעילים (Q05); אילו שירותים אתם מספקים; שיפוץ לפני כניסת דיירים; העברת תשלומי רשויות; מה קורה אחרי כניסת הדיירים; כמה זה עולה (Q03); מכירת הדירה; ניהול מחו"ל; אחזקת דירה לתושבי חוץ שמגיעים לביקור.
- An answer that needs a TBD fact stays `enabled: false`.

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

_To be filled by the dev agent._ Same FAQ items are reused on other pages through tags — one source of truth.

## 8. Acceptance criteria

- [ ] All enabled answers are in the HTML (not loaded on click).
- [ ] FAQPage JSON-LD contains exactly the visible items.
- [ ] Each item has a stable anchor (`#q-<id>`).

## 9. Open questions

Q03, Q05.

## 10. Change log

- 2026-10-15 — created (draft)
