# Landlord website — project memory

Read this file at the start of every session. It is the contract between the human, the agents and the code.

## What we are building

A marketing website for **Landlord (לנדלורד)**, an Israeli property-management company for owners of rented apartments (founded 2013, office in Bnei Brak). It replaces landlords.co.il (an old Wix site that is blocked from Google with `noindex`).

Business goals, in order:

1. Turn visitors (apartment owners, incl. owners living abroad) into leads: call, WhatsApp, form.
2. Prove the company is established and active: numbers, reviews, team, case studies.
3. Rank #1 on Google for **"חברת ניהול נכסים"** (primary) and **"חברת ניהול נדל"ן"** (secondary), and be named by ChatGPT / Gemini / Claude / Perplexity when people ask for a recommendation.

## Golden rules (never break these)

1. **Spec first.** Nothing is built without a spec in `/specs` whose status is `approved`. If the code needs to differ from the spec, update the spec first.
2. **Nothing the owners might change is hard-coded.** All copy, numbers, prices, cities, phone numbers, names and links live in `/content`. Components get content through props.
3. **Never invent facts.** Anything not confirmed by the owners is `TBD` in `docs/FACTS.md` and `content/facts.ts`. Never make up numbers, prices, reviews, testimonials, team members, partners, press, or legal claims. A section whose data is `TBD` ships **disabled** (feature flag), not with fake data.
4. **One unit of work at a time.** One spec → one branch → one pull request.
5. **Hebrew first, RTL first.** Hebrew is the default locale at `/`. English (if approved, see Q14) lives at `/en`.
6. **Every page is static, server-rendered HTML.** Content must be readable with JavaScript turned off (Google and AI crawlers depend on it).
7. **Accessibility is a legal requirement in Israel.** Target WCAG 2.1 AA on every component.

## Stack

| Concern       | Choice                                                                              | Notes                                                                                           |
| ------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Framework     | Next.js (App Router) + React + TypeScript                                           | Static generation (SSG) for all pages                                                           |
| Styling       | Plain CSS: CSS Modules per component + design tokens in `src/styles/tokens.css`     | No Tailwind, no CSS-in-JS. Logical properties only (`margin-inline-start`, never `margin-left`) |
| Content       | Typed TS files in `/content` (+ MDX for articles)                                   | Single source for all copy and facts                                                            |
| Middleware    | `middleware.ts` (Next ≤15) or `proxy.ts` (Next 16+) — check the installed version   | 301 redirects from old URLs, locale routing, canonical host                                     |
| Forms / leads | Route handler `POST /api/lead`, validated with `zod`                                | Destination (email / CRM / WhatsApp) is TBD — see Q17                                           |
| SEO           | Next metadata API, `sitemap.ts`, `robots.ts`, JSON-LD components, `public/llms.txt` |                                                                                                 |
| Analytics     | Google Tag Manager → GA4, behind a consent banner                                   | Events listed in spec F-07                                                                      |
| Hosting       | Vercel (proposed)                                                                   | TBD — Q18                                                                                       |
| Fonts         | `next/font`, Hebrew-supporting family chosen in F-02                                |                                                                                                 |

## Repo layout

```
CLAUDE.md                  ← this file
.claude/agents/            ← product, design, dev, change-manager
.claude/commands/          ← /spec /build /review /owner-update
docs/
  HOW-TO-WORK.md           ← the human's guide to this setup
  FACTS.md                 ← every business fact + its status (CONFIRMED / OLD-SITE / TBD)
  OPEN_QUESTIONS.md        ← questions for the owners (Q01…)
  DECISIONS.md             ← decisions log (D-001…)
  SITEMAP.md               ← every route → its spec → status → phase
  CHANGELOG.md             ← what changed and why, newest first
specs/
  _TEMPLATE.md
  foundation/F-xx-*.md     ← cross-cutting features (setup, design system, SEO, middleware, API…)
  pages/P-xx-*.md          ← one per page or page template
  components/C-xx-*.md     ← one per reusable component
content/                   ← created in F-03: facts.ts, flags.ts, pages/*.ts, articles/*.mdx
src/
  app/[locale]/…           ← routes
  app/api/lead/route.ts
  components/<Name>/<Name>.tsx, <Name>.module.css, index.ts
  lib/                     ← seo.ts, schema.ts, analytics.ts, content.ts
  styles/tokens.css, globals.css
public/                    ← images, llms.txt, favicons
```

## Who owns what

| Agent              | Writes                                                                                                                    | Reads          | Never                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------- |
| **product**        | `specs/**` sections 1–5, 8–9; Hebrew copy drafts in `/content`                                                            | everything     | writes code or CSS                    |
| **design**         | `specs/**` section 6; `specs/foundation/F-02`; `src/styles/tokens.css`                                                    | specs, content | changes copy or business logic        |
| **dev**            | `src/**`, `content/**` structure (not wording), config, tests; spec section 7                                             | everything     | invents copy or facts; skips the spec |
| **change-manager** | `docs/FACTS.md`, `OPEN_QUESTIONS.md`, `DECISIONS.md`, `CHANGELOG.md`, `content/facts.ts` values, spec status + change log | everything     | builds features                       |

## The loop (for every page, component or feature)

1. **product** drafts or updates the spec (`/spec <id>`). Status → `draft`.
2. **design** fills section 6 (design notes). Human approves → status `approved`.
3. **dev** builds it on branch `spec/<id>` (`/build <id>`). Status → `in-progress` → `built`.
4. **review** checks it against acceptance criteria (`/review <id>`).
5. When the owners change something, **change-manager** runs (`/owner-update <notes>`): updates facts and decisions, finds every affected spec, sets them to `needs-change`, and logs it. Then go back to step 1 for each affected spec.

## Spec status values

`draft` → `approved` → `in-progress` → `built` → (`needs-change` → `approved` → …)

Keep `docs/SITEMAP.md` status in sync with each spec's front matter.

## Definition of done (every PR)

- Matches the spec's acceptance criteria.
- No hard-coded copy or facts; no invented data; TBD sections are flagged off.
- RTL and LTR both render correctly; mobile (360px) and desktop (1440px) checked.
- Keyboard navigable, visible focus, labels/alt text, contrast AA.
- `npm run lint`, `npm run typecheck`, `npm run build` pass; `npm run check:tbd` lists no TBD on enabled sections.
- Page has unique title, meta description, one H1, canonical, and its JSON-LD (per F-04).
- `docs/CHANGELOG.md` and the spec's change log updated.

## Commands (after F-01)

```
npm run dev         # local dev server
npm run build       # production build (static)
npm run lint
npm run typecheck
npm run test
npm run check:tbd   # fails if an enabled section uses a TBD fact
```

## Conventions

- Components: PascalCase folder, named export, props typed, no data fetching inside presentational components.
- Content keys: `content/pages/<page>.ts` exports a typed object per locale (`he`, `en`).
- Images: `next/image`, explicit width/height, Hebrew alt text from content.
- Links: internal links use the shared `Link` helper so locale prefixes are correct.
- Git: branch `spec/<id>-<short-name>`, conventional commits (`feat(P-01): …`), one spec per PR.
- When unsure about a business fact: stop, add a question to `docs/OPEN_QUESTIONS.md`, and continue with a flag or placeholder that is clearly marked.
