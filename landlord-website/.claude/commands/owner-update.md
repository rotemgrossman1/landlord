---
description: Apply the owners' feedback or meeting notes across facts, questions, decisions and affected specs
argument-hint: <paste meeting notes or the owners' message>
---

Owner input:

$ARGUMENTS

Use the **change-manager** agent to process this input exactly as its instructions describe:
update `docs/FACTS.md` (and `content/facts.ts` if it exists), `docs/OPEN_QUESTIONS.md`, `docs/DECISIONS.md`, mark affected specs `needs-change`, update `docs/SITEMAP.md` and `docs/CHANGELOG.md`.

Then show me:

1. The table of items → where they went → affected specs.
2. The list of feature flags that could now be turned on.
3. The suggested next commands, in order (e.g. `/spec P-01 …`, then `/build P-01`).
