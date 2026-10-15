---
id: C-04
title: Hero
type: component
status: draft
depends_on: [F-02]
open_questions: []
flags: []
last_updated: 2026-10-15
---

# C-04 Hero

## 1. Purpose

The first screen of a page: the H1, the promise, and the main action.

## 4. Props

```ts
type HeroProps = {
  variant: 'home' | 'page' | 'compact';
  eyebrow?: string; // small line above H1
  title: string; // rendered as H1
  subtitle?: string; // 1–2 sentences
  forWho?: string; // "מתאים ל…"
  primaryCta: { label: string; href: string; id: string };
  secondaryCta?: { label: string; href: string; id: string };
  showPhone?: boolean;
  image?: { src: string; alt: string; isPlaceholder?: boolean };
  trustLine?: string; // e.g. "מנהלים נכסים מאז 2013"
};
```

## 6. Design notes

_To be filled by the design agent._ `home`: image beside text on desktop, below on mobile; `compact`: no image. Image must not push the CTA below the fold on 360×640.

## 7. Technical notes

Server component. Image via `next/image` with `priority`. CTA click fires `cta_click` with its `id`.

## 8. Acceptance criteria

- [ ] Renders exactly one H1.
- [ ] Primary CTA visible above the fold at 360×640 for every variant.
- [ ] Placeholder images (`isPlaceholder`) cause a `check:tbd` warning.

## 10. Change log

- 2026-10-15 — created (draft)
