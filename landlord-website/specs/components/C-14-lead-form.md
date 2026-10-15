---
id: C-14
title: Lead form
type: component
status: draft
depends_on: [F-02, F-03, F-06, F-07, F-08]
open_questions: [Q17, Q19]
flags: []
content: content/forms.ts
last_updated: 2026-10-15
---

# C-14 Lead form

## 1. Purpose

The shortest form that still lets the company call back prepared.

## 4. Fields (order)

1. שם מלא (required)
2. טלפון (required; accepts Israeli and international numbers)
3. עיר הנכס (optional, free text with suggestions from `areas.cities` if confirmed)
4. כמה דירות? (optional: 1 / 2–3 / 4+)
5. אני גר/ה: בארץ / בחו"ל (radio, optional)
6. הודעה (optional)
7. Consent checkbox linking to privacy policy (required)
   Hidden: honeypot, render timestamp, `source`, UTM params.

Variants: `full` (all fields, contact page), `short` (name, phone, consent — CTA bands).

## 6. Design notes

_To be filled by the design agent._ Single column; large inputs; submit button full width on mobile; loading and success states.

## 7. Technical notes

- Client component; same `zod` schema as F-06.
- Inline validation on blur; error summary on submit with focus moved to it; errors linked via `aria-describedby`.
- `inputmode="tel"`, `autocomplete` attributes.
- Success: replace form with confirmation text (+ response time if confirmed); fire `lead_submit`. Failure: show error and phone fallback; fire `lead_error`.
- Works without JS as a regular POST to `/api/lead` with a redirect to `/contact?sent=1`.

## 8. Acceptance criteria

- [ ] Submits successfully end-to-end in preview to a test adapter.
- [ ] Every error message is in Hebrew from content and announced to screen readers.
- [ ] No personal data in analytics events.

## 10. Change log

- 2026-10-15 — created (draft)
