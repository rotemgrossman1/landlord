---
id: P-01
title: Home page
type: page
route: /
status: draft
depends_on:
  [
    F-02,
    F-03,
    F-04,
    F-05,
    C-01,
    C-02,
    C-03,
    C-04,
    C-05,
    C-06,
    C-07,
    C-09,
    C-10,
    C-11,
    C-13,
    C-14,
    C-15,
    C-17,
  ]
open_questions: [Q01, Q05, Q06, Q07, Q08, Q11]
flags: [stats, testimonials, googleReviews, caseStudies, serviceAreas, luxuryService]
content: content/pages/home.ts
last_updated: 2026-10-15
---

# P-01 Home page

## 1. Purpose

Tell an apartment owner in 5 seconds who we are for and what they get, prove we are a real, established company, and get them to call, WhatsApp or book a consultation. This is the main page for the keyword "חברת ניהול נכסים".

## 2. Audience & user goal

- Owners of one or more rented apartments, in Israel or abroad, arriving from Google, an AI assistant's recommendation, or a referral.
- Goal: decide within one scroll whether to trust us, then contact us.

## 3. SEO

- Target keyword: **חברת ניהול נכסים**
- Supporting: ניהול נכסים, ניהול דירות להשכרה, חברת ניהול נדל"ן, ניהול נכסים לתושבי חוץ
- Title: `חברת ניהול נכסים לבעלי דירות להשכרה | {{brand.nameHe}}` (≤60)
- Meta description (DRAFT): `{{brand.nameHe}} – חברת ניהול נכסים מאז {{company.founded}}. מוצאים שוכרים, גובים שכר דירה ומטפלים בכל תקלה. ערבות לשכר הדירה עם Landlord Safe.` (≤155)
- H1 (DRAFT): `חברת ניהול נכסים שדואגת שהשכירות תעבוד בשבילכם`
- Schema: Organization + LocalBusiness (RealEstateAgent), WebSite, FAQPage (home FAQ subset).
- Links out: every service page, Landlord Safe, about, reviews, contact, guide. Links in: header logo, footer, all pages.

## 4. Structure

| #   | Section                                                                    | Component                | Content key         | Flag                         |
| --- | -------------------------------------------------------------------------- | ------------------------ | ------------------- | ---------------------------- |
| 1   | Hero: H1, one-line promise, primary CTA "קבעו שיחת ייעוץ", WhatsApp, phone | C-04                     | `home.hero`         | —                            |
| 2   | Proof strip: years active + key numbers                                    | C-06                     | `home.stats`        | `stats` (years always shown) |
| 3   | Services overview (4–5 cards → service pages)                              | C-07                     | `home.services`     | `luxuryService` per card     |
| 4   | Landlord Safe highlight: what it protects, link to P-05                    | C-15 (variant `feature`) | `home.safe`         | —                            |
| 5   | How it works (4 steps)                                                     | C-05                     | `home.howItWorks`   | —                            |
| 6   | Testimonials                                                               | C-09                     | `home.testimonials` | `testimonials`               |
| 7   | Google reviews strip                                                       | C-10                     | —                   | `googleReviews`              |
| 8   | Case study teaser (1–2)                                                    | C-11                     | `home.caseStudies`  | `caseStudies`                |
| 9   | Service areas                                                              | C-17                     | `home.areas`        | `serviceAreas`               |
| 10  | Short FAQ (4–6 questions tagged `home`)                                    | C-13                     | `faq` tag `home`    | —                            |
| 11  | Final CTA band with form                                                   | C-15 + C-14              | `home.finalCta`     | —                            |

## 5. Content

- File `content/pages/home.ts`. All copy DRAFT until owners approve.
- Facts used: `company.founded`, `contact.*`, `stats.*`, `areas.cities`, `brand.*`.
- Opening paragraph under H1 must state, in 2–3 sentences, what the company does, for whom, where and since when (AI assistants quote it).
- No claims like "המובילה בישראל" unless backed by a confirmed fact.

## 6. Design notes

_To be filled by the design agent._ Hints: no slider; hero image = real photo when available; above the fold on 360px must show H1, promise and the primary CTA.

## 7. Technical notes

_To be filled by the dev agent._ Static page; only C-03, C-13, C-14 are client components.

## 8. Acceptance criteria

- [ ] H1 contains "ניהול נכסים"; exactly one H1.
- [ ] Primary CTA and phone visible above the fold at 360×640.
- [ ] Sections 2 (numbers), 6, 7, 8, 9 are not rendered while their flags are off; years-active still shows.
- [ ] Every service card links to an existing service page.
- [ ] JSON-LD includes Organization/LocalBusiness and WebSite; FAQPage matches the visible FAQ.
- [ ] Lighthouse mobile ≥ 90 in all four categories.

## 9. Open questions

Q01 audience mix (order of services), Q05 areas, Q06 numbers, Q07 testimonials, Q08 case studies, Q11 Google reviews.

## 10. Change log

- 2026-10-15 — created (draft)
