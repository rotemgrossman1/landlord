---
id: C-08
title: Comparison / plans table
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q03, Q04]
flags: [pricingFrom, safeTerms]
last_updated: 2026-10-15
---

# C-08 Comparison table

## 1. Purpose

Show what is included in each option (e.g. management vs. management + Landlord Safe) side by side.

## 4. Props

```ts
type ComparisonProps = {
  title?: string;
  columns: {
    id: string;
    name: string;
    priceFactKey?: string;
    highlight?: boolean;
    cta?: { label: string; href: string };
  }[];
  rows: { label: string; values: Record<string, boolean | string> }[];
  footnote?: string;
};
```

## 6. Design notes

_To be filled by the design agent._ Mobile: stacked cards per column (not a sideways-scrolling table).

## 7. Technical notes

Real `<table>` with `<th scope>` on desktop; mobile view uses the same data. Check/cross icons have text alternatives ("כלול" / "לא כלול"). Prices only from facts; TBD price → "לפי הצעה".

## 8. Acceptance criteria

- [ ] Screen reader reads each cell with its row and column header.
- [ ] No price shown unless its fact is confirmed.

## 10. Change log

- 2026-10-15 — created (draft)
