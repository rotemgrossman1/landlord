#!/usr/bin/env node
// Stub for `npm run check:tbd`. F-03 replaces it with the real check:
// fail when an enabled flag (content/flags.ts) or an enabled page uses a TBD fact (content/facts.ts).
import { existsSync } from 'node:fs';

if (!existsSync(new URL('../content/flags.ts', import.meta.url))) {
  console.log('check:tbd — content/flags.ts not created yet (F-03). Nothing to check.');
  process.exit(0);
}

console.error(
  'check:tbd — content/flags.ts exists but the real check is not implemented yet (F-03).',
);
process.exit(1);
