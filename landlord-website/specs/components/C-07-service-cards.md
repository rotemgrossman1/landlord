---
id: C-07
title: Service cards
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q01]
flags: [luxuryService]
last_updated: 2026-10-15
---

# C-07 Service cards

## 1. Purpose

Show the services as clickable cards that lead to their pages.

## 4. Props

```ts
type ServiceCardsProps = {
  variant: 'overview' | 'detailed';
  title?: string; // H2
  services: { slug: string; title: string; summary: string; forWho?: string; icon?: string }[];
};
```

Data comes from enabled files in `content/services/` (P-03), ordered by `order`.

## 6. Design notes

_To be filled by the design agent._ Whole card clickable; 1 column mobile, 2 tablet, 3–4 desktop.

## 7. Technical notes

Each card is one `<a>` with heading inside (no nested links). `overview` shows title + summary; `detailed` adds `forWho`.

## 8. Acceptance criteria

- [ ] Cards reflect the enabled service files exactly.
- [ ] Each card is a single focusable link with a clear accessible name.

## 10. Change log

- 2026-10-15 — created (draft)
