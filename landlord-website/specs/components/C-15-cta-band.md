---
id: C-15
title: CTA band
type: component
status: draft
depends_on: [F-02, C-14]
open_questions: []
flags: []
last_updated: 2026-10-15
---

# C-15 CTA band

## 1. Purpose

A reusable call-to-action block placed between and at the end of sections.

## 4. Props

```ts
type CtaBandProps = {
  variant: 'band' | 'feature' | 'inline' | 'withForm';
  title: string;
  text?: string;
  primaryCta?: { label: string; href: string; id: string };
  secondaryCta?: { label: string; href: string; id: string };
  showPhone?: boolean;
  showWhatsapp?: boolean;
  image?: { src: string; alt: string };
};
```

- `band`: full-width colored block, end of page.
- `feature`: highlight of a product (e.g. Landlord Safe) with image and link.
- `inline`: small box inside articles.
- `withForm`: band + C-14 `short`.

## 6. Design notes

_To be filled by the design agent._

## 7. Technical notes

Server component except `withForm` (embeds client form). CTA clicks fire `cta_click`.

## 8. Acceptance criteria

- [ ] Every variant renders with only title + one CTA.
- [ ] Heading level configurable so page outline stays valid.

## 10. Change log

- 2026-10-15 — created (draft)
