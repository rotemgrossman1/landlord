# How to work with this kit

A short guide for Rotem. Everything else is for the agents.

## The idea in one paragraph

Every page, component and feature has its own spec file. Specs describe _what_ and _why_; content (text, numbers) lives in `/content`; code only renders specs + content. So when the owners change their minds, you change a fact or a spec — and the change-manager agent tells you exactly which pages are affected. You never have to remember what depends on what.

## One-time setup

1. Create an empty GitHub repo (e.g. `landlord-website`) and clone it.
2. Copy this whole folder into it (including the hidden `.claude` folder) and commit.
3. Open the folder in Claude Code. It reads `CLAUDE.md` automatically and finds the agents in `.claude/agents` and the commands in `.claude/commands`.
4. Approve the foundation specs (change `status: draft` → `status: approved` in F-01, F-02, F-03, F-08) and run `/build F-01`.

## The four commands

| Command                 | When                                           | What happens                                                                                                      |
| ----------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `/spec P-01`            | Before building, or to change a page           | Product agent writes/updates the spec, design agent adds design notes. Status stays `draft` until you approve it. |
| `/build P-01`           | After you approve a spec                       | Dev agent builds it on its own branch and runs all checks.                                                        |
| `/review P-01`          | After a build                                  | Checks it against the acceptance criteria, design and SEO. No code changes.                                       |
| `/owner-update <notes>` | After every meeting or message from the owners | Change-manager updates facts, answers, decisions, and marks affected specs `needs-change`.                        |

You approve specs yourself — that is your control point.

## Build order

**Phase 0 – Foundation (no owner input needed)**
F-01 setup → F-02 design system → F-03 content & flags → F-08 accessibility → C-01 header → C-02 footer → F-04 SEO → F-05 middleware & routing.

**Phase 1 – MVP pages (work with placeholders + flags)**
C-04, C-05, C-07, C-13, C-14, C-15, C-16, C-03, C-06, C-12 → F-06 lead API → F-07 analytics → P-01 home → P-14 contact → P-02/P-03 services → P-05 Landlord Safe → P-06 about → P-11 FAQ → P-15 legal → P-16 404.

**Phase 2 – Proof (needs owner data: Q03, Q04, Q06–Q11)**
C-08, C-09, C-10, C-11, C-17 → P-04 pricing → P-07 reviews → P-08 case studies → turn on flags.

**Phase 3 – Growth (SEO content)**
P-09 guide → P-10 articles → P-12 city pages → P-13 investors → C-18 + English (if Q14 = yes).

**Phase 4 – Launch**
F-09: redirects from old URLs, DNS, Search Console, Bing Webmaster, Google Business Profile link, remove the old site.

## After the meeting today

1. Write your notes in any form.
2. Run `/owner-update` and paste them.
3. Read the table it gives you. Run the suggested `/spec` commands, approve, `/build`.

## Rules of thumb

- A spec that is `needs-change` must go back through `/spec` → approve → `/build`. Do not ask the dev agent to "just fix it".
- Missing info is fine. Missing info that gets _invented_ is not. Keep TBD sections flagged off.
- Small PRs. One spec per PR. Merge often.
- If an agent asks a question you cannot answer, it goes to `docs/OPEN_QUESTIONS.md` for the next owner meeting.
