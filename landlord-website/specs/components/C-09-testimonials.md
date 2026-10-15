---
id: C-09
title: Testimonials
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q07]
flags: [testimonials]
content: content/testimonials.ts
last_updated: 2026-10-15
---

# C-09 Testimonials

## 1. Purpose

Real owners, in their own words, with name, city and photo or video.

## 4. Props

```ts
type TestimonialsProps = {
  variant: 'featured' | 'grid' | 'single';
  title?: string;
  filter?: { service?: string; city?: string; limit?: number };
};
// testimonial item in content:
// { id, name, displayName ('full'|'initials'), city, service, quote, date, photo?, video?: { src, poster, captions }, consentDate }
```

## 6. Design notes

_To be filled by the design agent._ No auto-rotating carousel; show 1–3 at a time.

## 7. Technical notes

Renders nothing if flag off or no matching items. Video: `preload="none"`, captions file required, plays only on click. `Review` JSON-LD only for items with `consentDate`.

## 8. Acceptance criteria

- [ ] Items without `consentDate` are never rendered.
- [ ] Videos have Hebrew captions and do not autoplay.

## 10. Change log

- 2026-10-15 — created (draft)
