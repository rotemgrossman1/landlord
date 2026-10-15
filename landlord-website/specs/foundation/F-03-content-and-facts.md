---
id: F-03
title: Content, facts and feature flags
type: feature
status: draft
depends_on: [F-01]
open_questions: []
flags: []
last_updated: 2026-10-15
---

# F-03 Content, facts and feature flags

## 1. Purpose

Keep every word and number outside the components so the owners' changes never require touching UI code, and make it impossible to ship an unconfirmed fact by accident.

## 4. Structure

```
content/
  facts.ts          ← mirror of docs/FACTS.md: { key: { value, status: 'CONFIRMED'|'OLD-SITE'|'TBD' } }
  flags.ts          ← feature flags: { testimonials: false, googleReviews: false, stats: false, ... }
  navigation.ts     ← header/footer menus per locale
  pages/
    home.ts, services.ts, landlord-safe.ts, about.ts, faq.ts, contact.ts, ...
    (each exports { he: {...}, en?: {...} } typed by its page's interface)
  services/
    rental-management.ts, luxury.ts, owners-abroad.ts, maintenance.ts
  articles/*.mdx    ← blog/guide articles with front matter
  faq.ts            ← all Q&A items with tags (page, service, city)
```

## 7. Technical notes

- `src/lib/content.ts`: typed loaders `getPage('home', locale)`, `getFact('stats.unitsManaged')`, `isEnabled('testimonials')`.
- `getFact` returns `{ value, status }`. A component that renders a fact must not render it if status is `TBD`.
- `{{facts.key}}` placeholders inside content strings are resolved at build time.
- `npm run check:tbd` script:
  - fails if any enabled flag depends on a `TBD` fact (map of flag → required facts lives in `flags.ts`),
  - fails if any `{{facts.key}}` used on an enabled page resolves to `TBD`,
  - warns (does not fail) for `OLD-SITE` facts and `// DRAFT` copy, listing them.
- Run `check:tbd` in CI and before `build` in production.

### Initial flags (all `false` until facts are confirmed)

| Flag               | Requires facts                    |
| ------------------ | --------------------------------- |
| `stats`            | stats.*                           |
| `testimonials`     | testimonials                      |
| `googleReviews`    | reviews.google.*                  |
| `caseStudies`      | caseStudies                       |
| `pricingFrom`      | pricing.fromPercent               |
| `safeTerms`        | safe.monthsCovered, safe.backedBy |
| `serviceAreas`     | areas.cities                      |
| `pressAndPartners` | press, partners                   |
| `english`          | — (decision Q14)                  |
| `luxuryService`    | services.list (Q01)               |

## 8. Acceptance criteria

- [ ] `facts.ts` contains every key in `docs/FACTS.md` with the same value and status.
- [ ] A test proves a `TBD` fact is never rendered.
- [ ] `check:tbd` fails when a flag is turned on while its facts are `TBD`.
- [ ] No component file contains Hebrew text (lint rule or test that scans `src/components/**` for Hebrew characters).

## 10. Change log

- 2026-10-15 — created (draft)
