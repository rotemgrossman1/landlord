---
id: C-17
title: Service areas
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q05]
flags: [serviceAreas]
last_updated: 2026-10-15
---

# C-17 Service areas

## 1. Purpose

Show where the company operates; link to city pages when they exist.

## 4. Props

```ts
type ServiceAreasProps = {
  title?: string;
  variant: 'chips' | 'list' | 'map';
  linkToCityPages?: boolean;
};
```

## 6. Design notes

_To be filled by the design agent._ `map` = static SVG of Israel with dots (no map embed).

## 7. Technical notes

Cities from `areas.cities` fact; link only cities that have an enabled P-12 page. Renders nothing while flag off.

## 8. Acceptance criteria

- [ ] Only confirmed cities appear.
- [ ] Links only to existing city pages.

## 10. Change log

- 2026-10-15 — created (draft)
