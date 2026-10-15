---
id: P-03
title: Service page template
type: page
route: /services/[slug]
status: draft
depends_on: [C-01, C-02, C-04, C-05, C-09, C-13, C-14, C-15, C-16]
open_questions: [Q01, Q03, Q07]
flags: [testimonials, luxuryService]
content: content/services/<slug>.ts
last_updated: 2026-10-15
---

# P-03 Service page template

## 1. Purpose

One reusable template for every service. Each service page explains who it is for, exactly what is and isn't included, how it works, and answers its own FAQ — and ranks for its own phrase.

## 2. Audience & user goal

An owner who already knows which kind of help they need and wants details before contacting us.

## 3. SEO (per instance, from content)

| Slug                | Target keyword         | H1 (DRAFT)                              |
| ------------------- | ---------------------- | --------------------------------------- |
| `rental-management` | ניהול דירות להשכרה     | ניהול דירות להשכרה מא' ועד ת'           |
| `owners-abroad`     | ניהול נכסים לתושבי חוץ | ניהול הדירה שלכם בישראל, כשאתם בחו"ל    |
| `luxury`            | ניהול נכסי יוקרה       | ניהול נכסי יוקרה (flag `luxuryService`) |
| `maintenance`       | אחזקת דירות להשכרה     | אחזקה ותחזוקה שוטפת לדירה המושכרת       |

- Title pattern: `<target keyword> | {{brand.nameHe}}`
- Schema: Service (provider = Organization, areaServed), FAQPage, BreadcrumbList.
- Links out: Landlord Safe, pricing, related services, 1–2 guide articles, contact.

## 4. Structure

| #   | Section                                                       | Component        | Content key                               | Flag           |
| --- | ------------------------------------------------------------- | ---------------- | ----------------------------------------- | -------------- |
| 1   | Breadcrumbs                                                   | C-16             | —                                         | —              |
| 2   | Hero: H1, "מתאים ל…", CTA                                     | C-04             | `service.hero`                            | —              |
| 3   | Direct answer paragraph (what this service is, 2–3 sentences) | text block       | `service.intro`                           | —              |
| 4   | What's included / not included (two lists)                    | text block       | `service.included`, `service.notIncluded` | —              |
| 5   | How it works                                                  | C-05             | `service.steps`                           | —              |
| 6   | Landlord Safe add-on mention                                  | C-15 (`feature`) | `service.safe`                            | —              |
| 7   | Testimonial(s) tagged with this service                       | C-09             | filter by tag                             | `testimonials` |
| 8   | Service FAQ                                                   | C-13             | `faq` tag `<slug>`                        | —              |
| 9   | CTA band + form                                               | C-15 + C-14      | `service.cta`                             | —              |

## 5. Content

- One file per service in `content/services/<slug>.ts` with: `slug`, `enabled`, `order`, `seo`, `hero`, `forWho`, `intro`, `included[]`, `notIncluded[]`, `steps[]`, `faqTag`, `relatedServices[]`, `relatedArticles[]`.
- Source text for rental management (from old site, to be rewritten): finding and screening tenants, lease with legal representation, transferring utility accounts, handling faults, end-of-lease inspection.

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

_To be filled by the dev agent._ `generateStaticParams` from enabled service files.

## 8. Acceptance criteria

- [ ] One build generates a page per enabled service file.
- [ ] Each page has its own title, H1 and FAQPage JSON-LD matching its visible FAQ.
- [ ] "Not included" list renders when present and is hidden when empty.
- [ ] Adding a new service file with `enabled: true` creates a page, a card on P-02 and a sitemap entry, with no code change.

## 9. Open questions

Q01 final service list, Q03 pricing mention per service, Q07 testimonials.

## 10. Change log

- 2026-10-15 — created (draft)
