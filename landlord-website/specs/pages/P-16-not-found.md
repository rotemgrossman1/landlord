---
id: P-16
title: 404 page
type: page
route: (not found)
status: draft
depends_on: [C-01, C-02]
open_questions: []
flags: []
content: content/pages/not-found.ts
last_updated: 2026-10-15
---

# P-16 404 page

## 1. Purpose

Turn a dead end into a next step — especially for old-site URLs we did not map.

## 4. Structure

H1 (DRAFT) "העמוד לא נמצא" → one sentence → links: דף הבית, שירותים, שאלות נפוצות, צרו קשר → phone and WhatsApp buttons.

## 7. Technical notes

`not-found.tsx` per locale; returns HTTP 404; `noindex`. Log the missing path (no personal data) so unmapped old URLs can be added to the redirect map.

## 8. Acceptance criteria

- [ ] Unknown URL returns status 404 with this page in the right locale.
- [ ] Contact buttons fire their analytics events.

## 10. Change log

- 2026-10-15 — created (draft)
