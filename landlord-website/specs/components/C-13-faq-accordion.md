---
id: C-13
title: FAQ accordion
type: component
status: draft
depends_on: [F-02, F-03, F-04]
open_questions: []
flags: []
content: content/faq.ts
last_updated: 2026-10-15
---

# C-13 FAQ accordion

## 1. Purpose

Answer objections on the page, and power FAQPage rich results — from one shared FAQ source.

## 4. Props

```ts
type FaqProps = {
  title?: string;
  tag?: string;
  category?: string;
  ids?: string[];
  limit?: number;
  emitSchema?: boolean; /* default true */
};
```

## 6. Design notes

_To be filled by the design agent._ Clear +/− indicator; generous tap area.

## 7. Technical notes

- Use native `<details>/<summary>` so answers are in the HTML and work without JS; enhance only for analytics (`faq_open`).
- Each item `id="q-<id>"`; opening via URL hash expands it.
- Emits FAQPage JSON-LD for exactly the rendered items; when a page renders two FAQ blocks, only one emits schema.

## 8. Acceptance criteria

- [ ] Works with JS disabled.
- [ ] JSON-LD items equal visible items.

## 10. Change log

- 2026-10-15 — created (draft)
