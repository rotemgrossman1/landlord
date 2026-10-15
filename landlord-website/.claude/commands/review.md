---
description: Review a built spec against its acceptance criteria, design notes and the definition of done
argument-hint: <spec-id>
---

Spec to review: $ARGUMENTS

Do not change code in this command. Produce a review only.

1. Read the spec, `CLAUDE.md` (Definition of done) and the code that implements it.
2. Product check: does every section in section 4 exist, in order, with content from `/content` (no hard-coded copy, no invented facts)? Are TBD sections flagged off?
3. Design check (use the **design** agent): layout at 360px and 1440px, RTL correctness, tokens only, states, accessibility (contrast, focus, labels, alt text, headings order).
4. Tech/SEO check: title, description, one H1, canonical, hreflang, JSON-LD, static rendering, no console errors, lint/typecheck/build pass.
5. Output a table: criterion → pass / fail → what to fix. End with "ready to merge" or "changes needed".
