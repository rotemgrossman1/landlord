---
id: C-06
title: Stats strip
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q06]
flags: [stats]
last_updated: 2026-10-15
---

# C-06 Stats strip

## 1. Purpose

Prove scale and track record with 3–4 real numbers.

## 4. Props

```ts
type StatsProps = {
  items: { factKey: string; label: string; suffix?: string; prefix?: string }[];
  alwaysShow?: string[]; // fact keys shown even when flag 'stats' is off (e.g. 'company.founded' → "שנות ניסיון")
};
```

Candidate items: years active (from `company.founded`, always), units managed, owners served, average days to rent, on-time collection %.

## 6. Design notes

_To be filled by the design agent._ Large numerals, short labels. No count-up animation (or only with reduced-motion respected).

## 7. Technical notes

Reads values via `getFact`; skips any item whose fact is TBD. If fewer than 2 items remain, render nothing.

## 8. Acceptance criteria

- [ ] No TBD or invented numbers ever rendered.
- [ ] Years active is computed from `company.founded` at build time.

## 10. Change log

- 2026-10-15 — created (draft)
