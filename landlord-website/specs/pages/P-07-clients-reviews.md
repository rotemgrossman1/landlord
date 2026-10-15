---
id: P-07
title: Clients and reviews
type: page
route: /reviews
status: draft
depends_on: [C-01, C-02, C-09, C-10, C-11, C-15, C-16]
open_questions: [Q07, Q08, Q10, Q11]
flags: [testimonials, googleReviews, caseStudies, pressAndPartners]
content: content/pages/reviews.ts
last_updated: 2026-10-15
---

# P-07 Clients and reviews

## 1. Purpose

Collect all social proof in one place: testimonials, Google reviews, short case-study teasers.

## 2. Audience & user goal

Owners who want to hear from other owners before committing.

## 3. SEO

- Target keyword: **חברת ניהול נכסים המלצות**
- Title: `המלצות לקוחות על {{brand.nameHe}}`
- H1 (DRAFT): `מה בעלי הנכסים אומרים עלינו`
- Schema: BreadcrumbList; `Review` items only for testimonials with written consent; `aggregateRating` only via Google data (`googleReviews`).

## 4. Structure

| #   | Section                                  | Component                | Content key    | Flag               |
| --- | ---------------------------------------- | ------------------------ | -------------- | ------------------ |
| 1   | Breadcrumbs                              | C-16                     | —              | —                  |
| 2   | Google rating summary + link to profile  | C-10 (variant `summary`) | —              | `googleReviews`    |
| 3   | Testimonials (video first, then written) | C-09 (variant `grid`)    | `testimonials` | `testimonials`     |
| 4   | Case study teasers → P-08                | C-11                     | `caseStudies`  | `caseStudies`      |
| 5   | Partners / press                         | logos                    | `about.press`  | `pressAndPartners` |
| 6   | CTA                                      | C-15                     | `reviews.cta`  | —                  |

## 5. Content

Each testimonial needs: name (or initials if requested), city, service, quote, date, photo/video (optional), consent date. Store in `content/testimonials.ts`.

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

_To be filled by the dev agent._ The page itself is behind a page-level rule: if both `testimonials` and `googleReviews` are off, the page is not built and not in the nav/sitemap.

## 8. Acceptance criteria

- [ ] Page is absent (404, not in sitemap, not in menu) when both main flags are off.
- [ ] Every testimonial shown has a consent date in content.
- [ ] No review text is invented or edited beyond typo fixes approved by the client.

## 9. Open questions

Q07, Q08, Q10, Q11.

## 10. Change log

- 2026-10-15 — created (draft)
