---
description: Build one approved spec with the dev agent, on its own branch
argument-hint: <spec-id>
---

Spec to build: $ARGUMENTS

1. Check the spec's status is `approved` and every spec in `depends_on` is `built`. If not, stop and tell me what is missing.
2. Use the **dev** agent to implement it on branch `spec/<id>-<short-name>`, following `CLAUDE.md` and the dev agent rules.
3. When done, run lint, typecheck, test, build and `check:tbd`, and report the results.
4. Report: files changed, acceptance criteria ticked or not, any content keys added as DRAFT/TBD, and new open questions.
