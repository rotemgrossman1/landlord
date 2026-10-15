---
id: C-16
title: Breadcrumbs
type: component
status: draft
depends_on: [F-02, F-04]
open_questions: []
flags: []
last_updated: 2026-10-15
---

# C-16 Breadcrumbs

## 1. Purpose

Orientation for users and BreadcrumbList structured data for Google.

## 4. Props

```ts
type BreadcrumbsProps = { items: { label: string; href?: string }[] }; // last item = current page, no href
```

## 6. Design notes

_To be filled by the design agent._ Separator mirrors in RTL.

## 7. Technical notes

`<nav aria-label="פירורי לחם"><ol>`; current item `aria-current="page"`; emits BreadcrumbList JSON-LD with absolute URLs.

## 8. Acceptance criteria

- [ ] JSON-LD matches visible items.
- [ ] Not rendered on the home page.

## 10. Change log

- 2026-10-15 — created (draft)
