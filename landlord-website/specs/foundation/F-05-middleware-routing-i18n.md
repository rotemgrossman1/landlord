---
id: F-05
title: Middleware, routing and i18n
type: feature
status: draft
depends_on: [F-01, F-03]
open_questions: [Q13, Q14]
flags: [english]
last_updated: 2026-10-15
---

# F-05 Middleware, routing and i18n

## 1. Purpose

Clean URLs, Hebrew at the root, optional English at `/en`, and no lost traffic from the old Wix URLs.

## 4. Structure

### Routing

- Internal structure `src/app/[locale]/…`. Hebrew is served at `/` (no prefix) by rewriting `/x` → `/he/x` in middleware. English is served at `/en/x` only when flag `english` is on; otherwise `/en/*` returns 404.
- Slugs are English transliterations (D-006).
- A shared `Link` helper adds the locale prefix.

### Middleware (`middleware.ts` or `proxy.ts` depending on Next version)

Order of operations:

1. **Canonical host** — redirect `http` → `https` and the non-canonical host (www vs bare, decided at launch, Q13) with 301.
2. **Old-site redirects (301)** — from `content/redirects.ts`:

| Old (Wix) URL                          | New                                        |
| -------------------------------------- | ------------------------------------------ |
| `/אודות`                               | `/about`                                   |
| `/שירותי-ניהול`                        | `/services`                                |
| `/landlord-safe`                       | `/landlord-safe` (unchanged)               |
| `/שאלות-נפוצות`                        | `/faq`                                     |
| `/שאלות-נפוצות-שירותי-ניהול-1`         | `/faq`                                     |
| `/שאלות-נפוצות-landlord-safe`          | `/landlord-safe#faq`                       |
| `/יצירת-קשר`                           | `/contact`                                 |
| `/למה-לבחור-בנו`                       | `/about`                                   |
| `/למי-מיועד-השירות`                    | `/services`                                |
| `/באיזה-אזור-אתם-פעילים`               | `/areas` (or `/faq` until P-12 is built)   |
| `/אילו-שירותים-אתם-מספקים`             | `/services`                                |
| `/כמה-זה-עולה-לי`                      | `/pricing` (or `/faq` until P-04 is built) |
| `/אם-אני-גר-בחו-ל-תוכלו-לנהל-בשבילי-א` | `/services/owners-abroad`                  |
| other old FAQ question pages           | `/faq`                                     |

Match both the decoded Hebrew path and its percent-encoded form. 3. **Trailing slash** — normalize to no trailing slash (301). 4. **Locale rewrite** — as described above. Do not auto-redirect by browser language (bad for SEO); show C-18 instead. 5. **Security headers** — set in `next.config` `headers()` (CSP allowing GTM/GA, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors none).

## 7. Technical notes

- Middleware must stay light: no data fetching, only the static redirect map.
- Matcher excludes `_next`, static files, `api`, `favicon`, `robots.txt`, `sitemap.xml`, `llms.txt`.
- Unit-test the redirect map (every old URL → expected status + location).

## 8. Acceptance criteria

- [ ] Every row of the redirect table returns 301 to the right target (tested, encoded and decoded).
- [ ] `/` renders Hebrew RTL; `/en` is 404 while `english` is off and renders English LTR when on.
- [ ] `/about/` → 301 → `/about`.
- [ ] Security headers present on all HTML responses.

## 9. Open questions

Q13 DNS/Wix access, Q14 English.

## 10. Change log

- 2026-10-15 — created (draft)
