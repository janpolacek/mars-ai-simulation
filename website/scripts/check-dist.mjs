/*
 * Build guard (`npm run build` runs this as `postbuild`).
 *
 * Prints the generated route list, the splash state of every route, and fails
 * the build when anything withheld reaches `dist/` or when the splash is
 * rendered anywhere but the homepage. On a withheld-material failure it then
 * prunes the offending files from the output, so a stale build cannot be served
 * by anyone who ignores the failure. The detection rules live in `./guards.mjs`
 * and `./splash-scope.mjs` so the test suite and the build check the same thing.
 */
/* global console, process */
import { rm } from 'node:fs/promises';

import { checkDist, listRoutes, scanSourceForGatedReferences } from './guards.mjs';
import { checkSplashScope, loadingBodyClass, scanSplashScope, splashRoute } from './splash-scope.mjs';

const sourceOffences = await scanSourceForGatedReferences();
const distOffences = await checkDist();
const splashOffences = await checkSplashScope();
const routes = await listRoutes();

console.log(`[check-dist] generated routes: ${routes.join(', ') || '(none)'}`);

for (const entry of await scanSplashScope()) {
    const state = `splash=${entry.splash ? 'yes' : 'no'} ${loadingBodyClass}=${entry.loading ? 'yes' : 'no'}`;
    console.log(`[check-dist] splash scope ${entry.route}: ${state} expected=${entry.expected ? 'yes' : 'no'}`);
}

if (sourceOffences.length === 0 && distOffences.length === 0 && splashOffences.length === 0) {
    console.log('[check-dist] no reference into a withheld directory, and no withheld file or marker in dist/.');
    console.log(`[check-dist] splash scope: only ${splashRoute} carries the splash and its ${loadingBodyClass} class.`);
    process.exit(0);
}

if (sourceOffences.length > 0 || distOffences.length > 0) {
    console.error('[check-dist] withheld material reached the public build:');
    for (const offence of [...sourceOffences, ...distOffences]) {
        console.error(`  - ${offence.kind}: ${offence.file} (${offence.detail})`);
    }
}

if (splashOffences.length > 0) {
    console.error('[check-dist] the splash is not scoped to the homepage:');
    for (const offence of splashOffences) {
        console.error(`  - ${offence.kind}: ${offence.file} (${offence.detail})`);
    }
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
