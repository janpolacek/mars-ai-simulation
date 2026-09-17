/*
 * Build guard (`npm run build` runs this as `postbuild`).
 *
 * Prints the generated route list and fails the build when anything withheld
 * reaches `dist/`. It then prunes the offending files from the output, so a
 * stale build cannot be served by anyone who ignores the failure. The detection
 * rules live in `./guards.mjs` so the test suite and the build check the same
 * thing.
 */
/* global console, process */
import { rm } from 'node:fs/promises';

import { checkDist, listRoutes, scanSourceForGatedReferences } from './guards.mjs';

const sourceOffences = await scanSourceForGatedReferences();
const distOffences = await checkDist();
const routes = await listRoutes();

console.log(`[check-dist] generated routes: ${routes.join(', ') || '(none)'}`);

if (sourceOffences.length === 0 && distOffences.length === 0) {
    console.log('[check-dist] no reference into a withheld directory, and no withheld file or marker in dist/.');
    process.exit(0);
}

console.error('[check-dist] withheld material reached the public build:');
for (const offence of [...sourceOffences, ...distOffences]) {
    console.error(`  - ${offence.kind}: ${offence.file} (${offence.detail})`);
}

const pruned = new Set();
for (const offence of distOffences) {
    if (pruned.has(offence.file)) continue;
    await rm(offence.file, { force: true });
    pruned.add(offence.file);
}
if (pruned.size > 0) {
    console.error(`[check-dist] pruned ${pruned.size} withheld file(s) from dist/.`);
}

process.exit(1);
