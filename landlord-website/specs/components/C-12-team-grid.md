---
id: C-12
title: Team grid
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q09]
flags: []
content: content/team.ts
last_updated: 2026-10-15
---

# C-12 Team grid

## 1. Purpose

Real people with real roles — a key trust signal.

## 4. Props

```ts
type TeamGridProps = {
  title?: string;
  members: {
    name: string;
    role: string;
    bio?: string;
    photo: { src: string; alt: string };
    credentials?: string;
    linkedin?: string;
  }[];
};
```

## 6. Design notes

_To be filled by the design agent._ Consistent photo crop and background; 2 columns mobile, 3–4 desktop.

## 7. Technical notes

Members without a photo are skipped at launch. Emits `Person` objects for the Organization JSON-LD.

## 8. Acceptance criteria

- [ ] Only members from `content/team.ts` with `enabled: true` and a photo are shown.

## 10. Change log

- 2026-10-15 — created (draft)
