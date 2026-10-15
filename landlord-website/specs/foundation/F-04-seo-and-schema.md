---
id: F-04
title: SEO, structured data and AI visibility
type: feature
status: draft
depends_on: [F-01, F-03]
open_questions: [Q11, Q12, Q19, Q20]
flags: [googleReviews, serviceAreas]
last_updated: 2026-10-15
---

# F-04 SEO, structured data and AI visibility

## 1. Purpose

Make every page indexable, understandable and quotable by Google and AI assistants, in support of D-001 (primary "חברת ניהול נכסים", secondary "חברת ניהול נדל"ן").

## 4. Structure

- `src/lib/seo.ts` → `buildMetadata({ title, description, path, locale, image })` returning Next metadata: title template `%s | {{brand.nameHe}}`, description, canonical, `alternates.languages` (hreflang he/en/x-default), Open Graph, Twitter card, `robots: index,follow` (except `/_design`).
- `src/app/sitemap.ts` — all enabled routes and locales, `lastModified` from content.
- `src/app/robots.ts` — allow all, point to sitemap. Explicitly allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) unless the owners decide otherwise.
- `public/llms.txt` — generated at build from content: company summary, services, areas, contact, key pages.
- `src/lib/schema.ts` + `<JsonLd>` component, schema types:
  - `Organization` + `LocalBusiness` (`RealEstateAgent`): name, logo, address, phone, email, url, `foundingDate`, `areaServed` (flag `serviceAreas`), `openingHours` (Q19), `sameAs` (social, Google profile), `aggregateRating` (flag `googleReviews` only).
  - `WebSite` (home only).
  - `Service` per service page.
  - `FAQPage` wherever C-13 renders.
  - `BreadcrumbList` wherever C-16 renders.
  - `Article` + `Person` (author) on articles.
- Heading rules: exactly one H1 per page, logical H2/H3.
- Images: descriptive Hebrew alt text from content; OG image per page (fallback default).

## 7. Technical notes

- Schema must only contain facts with status CONFIRMED or OLD-SITE; never TBD.
- `aggregateRating` only from real Google data (flag `googleReviews`).
- Validate JSON-LD in tests (schema-dts types + a snapshot).
- Metadata for every page comes from its content file (`seo.title`, `seo.description`).

## 8. Acceptance criteria

- [ ] Every built page has unique title (≤60), description (≤155), canonical and hreflang.
- [ ] `/sitemap.xml` lists only enabled pages; `/robots.txt` points to it.
- [ ] Home JSON-LD validates in Google Rich Results Test with Organization/LocalBusiness and WebSite.
- [ ] `llms.txt` is generated and contains no TBD values.
- [ ] Viewing source (JS disabled) shows all page copy in HTML.

## 9. Open questions

Q11 Google profile, Q12 brand/logo, Q19 hours, Q20 legal name.

## 10. Change log

- 2026-10-15 — created (draft)
