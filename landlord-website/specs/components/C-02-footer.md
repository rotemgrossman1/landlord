---
id: C-02
title: Footer
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q12, Q19, Q20]
flags: []
content: content/navigation.ts
last_updated: 2026-10-15
---

# C-02 Footer

## 1. Purpose

Trust and orientation: full contact details, legal identity, secondary navigation, legal links.

## 4. Structure

- Column 1: logo, one-sentence description (what we do, where, since `company.founded`), social links.
- Column 2: services links.
- Column 3: company links (אודות, המלצות, מדריך, למשקיעים, שאלות נפוצות).
- Column 4: contact — address, phone, WhatsApp, email, hours (if confirmed).
- Bottom row: `© {currentYear} {{legal.companyName}} · ח.פ. {{legal.companyId}}` (hidden parts while TBD), links to privacy, terms, accessibility statement, cookie settings (reopens F-07 banner).

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

Server component; current year computed at build. Contact links fire analytics with `location: footer`. Address in `<address>`.

## 8. Acceptance criteria

- [ ] No TBD fact rendered; legal row shows only confirmed parts.
- [ ] Links to all three legal pages present.
- [ ] Social links come from facts; wrong LinkedIn (old site) is not shown until Q12 is answered.

## 10. Change log

- 2026-10-15 — created (draft)
