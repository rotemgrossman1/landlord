---
id: P-10
title: Article template
type: page
route: /blog/[slug]
status: draft
depends_on: [C-01, C-02, C-13, C-15, C-16]
open_questions: [Q15]
flags: []
content: content/articles/<slug>.mdx
last_updated: 2026-10-15
---

# P-10 Article template

## 1. Purpose

A template for answer-first articles that rank on Google and are easy for AI assistants to quote.

## 3. SEO (per article, from front matter)

- Front matter: `title`, `description`, `slug`, `targetKeyword`, `author`, `publishedAt`, `updatedAt`, `category`, `relatedService`, `faq[]`, `status: draft|published`.
- Title = article title + ` | {{brand.nameHe}}`.
- Schema: Article (author Person, dates), FAQPage (if `faq`), BreadcrumbList.

## 4. Structure

| #   | Section                                          | Component       |
| --- | ------------------------------------------------ | --------------- |
| 1   | Breadcrumbs (בית › מדריך › article)              | C-16            |
| 2   | H1 + author, role, date, reading time            | header block    |
| 3   | **Short answer** box: 2–3 sentence direct answer | answer box      |
| 4   | Body (MDX), H2/H3                                | prose           |
| 5   | In-article CTA to the related service            | C-15 (`inline`) |
| 6   | Article FAQ                                      | C-13            |
| 7   | Author box (photo, bio, credentials)             | author block    |
| 8   | Related articles (2–3)                           | cards           |
| 9   | CTA band                                         | C-15            |

## 5. Content

Writing rules: answer first; concrete facts and numbers with sources; Hebrew, plain language; legal/tax content reviewed by the lawyer; no keyword stuffing.

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

_To be filled by the dev agent._ Only `status: published` articles are built.

## 8. Acceptance criteria

- [ ] Draft articles are not built and not in the sitemap.
- [ ] Answer box is the first content after the header.
- [ ] Article JSON-LD has author, `datePublished`, `dateModified`.

## 9. Open questions

Q15.

## 10. Change log

- 2026-10-15 — created (draft)
