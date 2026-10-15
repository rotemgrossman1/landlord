---
id: C-05
title: How it works (steps)
type: component
status: draft
depends_on: [F-02]
open_questions: []
flags: []
last_updated: 2026-10-15
---

# C-05 How it works

## 1. Purpose

Make the process feel simple and predictable in 3–6 numbered steps.

## 4. Props

```ts
type StepsProps = {
  variant: 'row' | 'timeline' | 'compact';
  title?: string; // H2
  steps: { title: string; text: string; icon?: string }[];
};
```

Default home steps (DRAFT): פגישת היכרות → בדיקת הנכס ותמחור → איתור וסינון שוכרים וחתימת חוזה → ניהול שוטף ודוח חודשי.

## 6. Design notes

_To be filled by the design agent._ `row`: horizontal on desktop, vertical on mobile; `timeline`: vertical with connecting line (used for the Landlord Safe scenario).

## 7. Technical notes

Server component; semantic `<ol>`; numbers come from list order.

## 8. Acceptance criteria

- [ ] Rendered as an ordered list; screen readers announce step count.
- [ ] Direction correct in RTL (step 1 at the start/right).

## 10. Change log

- 2026-10-15 — created (draft)
