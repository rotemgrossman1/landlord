---
id: C-10
title: Google reviews strip
type: component
status: draft
depends_on: [F-02, F-03]
open_questions: [Q11]
flags: [googleReviews]
last_updated: 2026-10-15
---

# C-10 Google reviews strip

## 1. Purpose

Show the Google rating and recent reviews as independent proof, and link to the Google profile.

## 4. Props

```ts
type GoogleReviewsProps = { variant: 'strip' | 'summary'; limit?: number };
```

## 7. Technical notes

- Data source (decide in build): (a) Google Places API fetched at build time / revalidated daily with `GOOGLE_PLACES_API_KEY` + place ID, or (b) manual snapshot in `content/google-reviews.ts` updated by the change-manager. Start with (b); move to (a) if the owners want it live.
- Show rating, count, 3 recent reviews (author first name, date, text), "View all on Google" link. Respect Google's attribution rules.
- `aggregateRating` in JSON-LD only from this data.

## 6. Design notes

_To be filled by the design agent._

## 8. Acceptance criteria

- [ ] Nothing renders while flag off or data missing.
- [ ] Rating and count match the source exactly; "last updated" date stored with snapshot.

## 10. Change log

- 2026-10-15 — created (draft)
