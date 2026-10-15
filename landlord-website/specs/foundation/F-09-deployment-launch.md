---
id: F-09
title: Deployment and launch
type: feature
status: draft
depends_on: [F-04, F-05, F-06, F-07, F-08]
open_questions: [Q11, Q13, Q18, Q23]
flags: []
last_updated: 2026-10-15
---

# F-09 Deployment and launch

## 1. Purpose

Ship safely, keep the old site's search value, and get indexed fast.

## 4. Structure

### Environments

- Preview deploy for every PR (Vercel), protected / `noindex` header.
- Production from `main`.
- Env vars set per environment (see `.env.example`).

### Launch checklist

- [ ] All Phase 1 specs `built` and reviewed.
- [ ] `check:tbd` clean; no OLD-SITE facts left unconfirmed on enabled pages.
- [ ] Lighthouse mobile ≥ 90 for performance, accessibility, best practices, SEO on home, a service page, contact.
- [ ] Test lead submitted in production reaches the owners.
- [ ] DNS switched to the new host; HTTPS active; canonical host chosen.
- [ ] Old URLs tested against the redirect map (F-05).
- [ ] Google Search Console: property verified, sitemap submitted, URL inspection on home.
- [ ] Bing Webmaster Tools: verified, sitemap submitted.
- [ ] Google Business Profile website link updated (Q11).
- [ ] Old Wix site unpublished only after redirects are confirmed working.
- [ ] Uptime monitor on `/` and `/api/lead`.

## 8. Acceptance criteria

- [ ] Every item in the launch checklist ticked with date.

## 9. Open questions

Q11, Q13, Q18, Q23.

## 10. Change log

- 2026-10-15 — created (draft)
