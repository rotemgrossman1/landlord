---
id: C-18
title: Language switcher
type: component
status: draft
depends_on: [F-05]
open_questions: [Q14]
flags: [english]
last_updated: 2026-10-15
---

# C-18 Language switcher

## 1. Purpose

Let owners abroad switch to English — only if the owners approve an English version (Q14).

## 4. Props

```ts
type LanguageSwitcherProps = { current: 'he' | 'en'; alternates: { he?: string; en?: string } };
```

## 7. Technical notes

Links to the equivalent page in the other locale (not the home page). If a page has no translation, link to the other locale's home. `lang` attribute on each link label; fires `language_switch`. No automatic redirect by browser language.

## 8. Acceptance criteria

- [ ] Hidden entirely while `english` is off.
- [ ] Switching keeps the visitor on the equivalent page.

## 10. Change log

- 2026-10-15 — created (draft)
