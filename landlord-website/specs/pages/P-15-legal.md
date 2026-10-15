---
id: P-15
title: Legal pages (privacy, terms, accessibility statement)
type: page
route: /privacy, /terms, /accessibility
status: draft
depends_on: [C-01, C-02, C-16]
open_questions: [Q20, Q21]
flags: []
content: content/legal/*.mdx
last_updated: 2026-10-15
---

# P-15 Legal pages

## 1. Purpose

Required pages: privacy policy (the site collects leads and uses analytics), terms of use, and an accessibility statement (Israeli accessibility regulations).

## 3. SEO

- `noindex` is not needed; they are low-priority in the sitemap.
- Titles: `מדיניות פרטיות`, `תנאי שימוש`, `הצהרת נגישות` + ` | {{brand.nameHe}}`.

## 4. Structure

Each page: C-16 → H1 → "last updated" date → MDX body.

- **Privacy:** what data the form collects, why, where it is sent (adapters in F-06), cookies/analytics (F-07), retention, rights, contact.
- **Terms:** use of the site, no binding offer, IP, liability, governing law.
- **Accessibility statement:** level of conformance, what was adapted, known limitations, accessibility coordinator name/phone/email, last audit date.

## 5. Content

Text written or approved by the lawyer partner (Q21). The product agent may prepare a structure with headings and notes, never final legal text.

## 6. Design notes

_To be filled by the design agent._ Plain readable layout, same as articles.

## 7. Technical notes

_To be filled by the dev agent._ Linked from the footer and from the consent banner and form.

## 8. Acceptance criteria

- [ ] All three pages exist before launch with approved text and a last-updated date.
- [ ] Accessibility statement includes coordinator contact details.

## 9. Open questions

Q20 legal entity, Q21 author/approver.

## 10. Change log

- 2026-10-15 — created (draft)
