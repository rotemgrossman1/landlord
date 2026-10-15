---
id: F-07
title: Analytics and cookie consent
type: feature
status: draft
depends_on: [F-01, F-03]
open_questions: [Q21, Q23]
flags: []
last_updated: 2026-10-15
---

# F-07 Analytics and cookie consent

## 1. Purpose

Know which pages and channels bring leads, while respecting privacy law and visitors' choice.

## 4. Structure

- Google Tag Manager container (ID in env `NEXT_PUBLIC_GTM_ID`) → GA4. Google Search Console and Bing Webmaster verified at launch (F-09).
- Consent banner (client component): accept all / necessary only / settings. Uses Google Consent Mode v2 (default denied until choice). Choice stored in a first-party cookie for 12 months. Link to privacy policy (P-15). Hebrew copy from content.
- `src/lib/analytics.ts` → `track(event, params)` that pushes to `dataLayer`. Components never call `gtag` directly.

### Events (the only ones allowed)

| Event             | Fired when           | Params                                 |
| ----------------- | -------------------- | -------------------------------------- |
| `lead_submit`     | /api/lead returns ok | `source`, `ownerLocation`              |
| `lead_error`      | form submit fails    | `source`, `reason`                     |
| `click_phone`     | any `tel:` link      | `location` (header/footer/sticky/body) |
| `click_whatsapp`  | any WhatsApp link    | `location`                             |
| `click_email`     | any `mailto:`        | `location`                             |
| `cta_click`       | primary CTA button   | `cta_id`, `page`                       |
| `faq_open`        | FAQ item opened      | `question_id`                          |
| `language_switch` | C-18 used            | `to`                                   |

## 7. Technical notes

- GTM script loaded with `next/script` `afterInteractive`, only after consent defaults are set.
- No personal data (name, phone, email) in any event.
- CSP in F-05 must allow GTM/GA domains.

## 8. Acceptance criteria

- [ ] No analytics cookies are set before consent.
- [ ] Each event above appears in GTM preview with the right params.
- [ ] Banner is keyboard accessible and does not cover the sticky CTA on mobile after dismissal.

## 9. Open questions

Q21 privacy text owner, Q23 existing accounts.

## 10. Change log

- 2026-10-15 — created (draft)
