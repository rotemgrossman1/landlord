---
id: C-11
title: Case study card
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q08]
flags: [caseStudies]
last_updated: 2026-10-15
---

# C-11 Case study card

## 1. Purpose

A compact before/after teaser that links to the full case study (P-08).

## 4. Props

```ts
type CaseStudyCardProps = {
  slug: string;
  title: string;
  city: string;
  service: string;
  headlineResult: { label: string; before: string; after: string };
  image?: { src: string; alt: string };
};
```

## 6. Design notes

_To be filled by the design agent._ The before → after result is the visual focus.

## 7. Technical notes

Data from `content/case-studies/<slug>.ts`. Whole card is one link to `/case-studies/<slug>`.

## 8. Acceptance criteria

- [ ] Renders nothing while `caseStudies` is off.
- [ ] Result values come only from content.

## 10. Change log

- 2026-10-15 — created (draft)
