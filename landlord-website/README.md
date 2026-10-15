# Landlord website

Marketing website for Landlord (לנדלורד). Next.js (App Router) + TypeScript, statically generated, Hebrew-first (RTL).

**Start here:** [docs/HOW-TO-WORK.md](docs/HOW-TO-WORK.md). Project rules for humans and agents are in [CLAUDE.md](CLAUDE.md).

## Requirements

Node version from [.nvmrc](.nvmrc) (`nvm use`).

## Commands

```
npm install
npm run dev         # local dev server at http://localhost:3000
npm run build       # production build (static)
npm run start       # serve the production build
npm run lint
npm run typecheck
npm run test        # unit tests (Vitest)
npm run test:e2e    # smoke + accessibility tests (Playwright; first run: npx playwright install chromium)
npm run check:tbd   # fails if an enabled section uses a TBD fact
```

Environment variables are documented in [.env.example](.env.example).
