---
id: P-14
title: Contact
type: page
route: /contact
status: draft
depends_on: [C-01, C-02, C-05, C-14, C-16, F-06]
open_questions: [Q17, Q19]
flags: []
content: content/pages/contact.ts
last_updated: 2026-10-15
---

# P-14 Contact

## 1. Purpose

Make contacting the company effortless through the visitor's preferred channel.

## 3. SEO

- Title: `צרו קשר – {{brand.nameHe}} ניהול נכסים`
- H1 (DRAFT): `בואו נדבר על הנכס שלכם`
- Schema: LocalBusiness (address, phone, hours), BreadcrumbList.

## 4. Structure

| #   | Section                                                                                           | Component        | Content key       |
| --- | ------------------------------------------------------------------------------------------------- | ---------------- | ----------------- |
| 1   | Breadcrumbs                                                                                       | C-16             | —                 |
| 2   | H1 + response-time promise (Q19)                                                                  | text             | `contact.intro`   |
| 3   | Lead form                                                                                         | C-14             | `contact.form`    |
| 4   | Direct channels: phone, WhatsApp, email (each tracked)                                            | contact list     | `facts.contact.*` |
| 5   | Office: address, hours, map link (static map image, not an embedded iframe), parking/transit note | text + image     | `contact.office`  |
| 6   | "What happens after you contact us" (3 steps)                                                     | C-05 (`compact`) | `contact.next`    |

## 6. Design notes

_To be filled by the design agent._ Form first on mobile, channels second.

## 7. Technical notes

_To be filled by the dev agent._ Map link opens Google Maps / Waze; no third-party embed (performance, privacy).

## 8. Acceptance criteria

- [ ] Phone, WhatsApp and email links fire their analytics events (F-07).
- [ ] Successful submit shows an inline confirmation and fires `lead_submit`.
- [ ] Hours and response time are hidden while TBD.

## 9. Open questions

Q17, Q19.

## 10. Change log

- 2026-10-15 — created (draft)
