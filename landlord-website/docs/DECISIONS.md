# Decisions log

Format: ID · date · decision · reason · decided by · status (ACTIVE / SUPERSEDED by D-xxx). Never delete or renumber.

| ID    | Date       | Decision                                                                                                         | Reason                                                                       | By    | Status |
| ----- | ---------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----- | ------ |
| D-001 | 2026-10-15 | Primary target keyword "חברת ניהול נכסים"; secondary "חברת ניהול נדל"ן". "חברת ניהול בתים" is not a main target. | "ניהול בתים" returns ועד בית companies; "נדל"ן" skews to commercial property | Rotem | ACTIVE |
| D-002 | 2026-10-15 | Rebuild from scratch (no access to Wix code). Next.js + React + TypeScript, static generation.                   | SEO and AI crawlers need server-rendered HTML; full control                  | Rotem | ACTIVE |
| D-003 | 2026-10-15 | Hebrew first, RTL, at `/`. English at `/en` only if Q14 is answered yes.                                         | Main audience is Hebrew-speaking                                             | Rotem | ACTIVE |
| D-004 | 2026-10-15 | No invented data. Sections that need unconfirmed facts ship disabled via feature flags.                          | Credibility; legal risk                                                      | Rotem | ACTIVE |
| D-005 | 2026-10-15 | Plain CSS: CSS Modules + design tokens. No Tailwind or CSS-in-JS.                                                | Simple, portable, easy to rebrand by editing tokens                          | Rotem | ACTIVE |
| D-006 | 2026-10-15 | English-transliterated URL slugs (e.g. `/landlord-safe`, `/services/rental-management`).                         | Hebrew slugs become long encoded URLs when shared                            | Rotem | ACTIVE |
| D-007 | 2026-10-15 | Spec-driven workflow with product, design, dev and change-manager agents; one spec per PR.                       | Owners' answers will keep changing scope                                     | Rotem | ACTIVE |
