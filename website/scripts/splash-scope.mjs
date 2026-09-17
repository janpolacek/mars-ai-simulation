/*
 * Splash-screen scope guard for the public build.
 *
 * The loading screen is homepage chrome. Both halves of it belong to `/` alone:
 * the `<div id="splash">` element, and the `is-loading` body class that
 * `src/styles/layout.css` uses to hold `.page` back. A route that carries
 * `is-loading` cannot be read until the splash script's 2 s timer retracts it —
 * and, with JavaScript off, not until the `<noscript>` fallback in the layout
 * overrides it. A route that carries neither is revealed by CSS the moment the
 * document is parsed.
 *
 * The rule is checked on the build output, not on the source: `BaseLayout`
 * defaults `splash` to false and `index.astro` is the only page that sets it,
 * so the composition of a route — not its pathname — decides here. A future page
 * that renders the splash fails this guard instead of shipping it.
 */
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

import { listRoutes, websiteDirectory } from './guards.mjs';

/** The one generated route allowed to carry the splash. */
export const splashRoute = '/index.html';

/** The body class that defers the page reveal until the splash retracts. */
export const loadingBodyClass = 'is-loading';

/** The attribute only the splash element carries. */
const splashElementPattern = /\bid="splash"/;

/** The `class` list of the document's `<body>`, split on whitespace. */
function bodyClasses(html) {
    const match = html.match(/<body\b[^>]*\bclass="([^"]*)"/);
    return match ? match[1].split(/\s+/).filter((name) => name.length > 0) : [];
}

/**
 * Measure the splash state of every generated HTML route in a build output
 * directory: whether it carries the splash element, whether its `<body>` carries
 * the loading class, and whether it is the route allowed to.
 *
 * @returns {Promise<Array<{ route: string, splash: boolean, loading: boolean, expected: boolean }>>}
 */
export async function scanSplashScope({ directory = resolve(websiteDirectory, 'dist') } = {}) {
    const measured = [];

    for (const route of await listRoutes(directory)) {
        const html = await readFile(join(directory, route), 'utf8');
        measured.push({
            route,
            splash: splashElementPattern.test(html),
            loading: bodyClasses(html).includes(loadingBodyClass),
            expected: route === splashRoute,
        });
    }

    return measured;
}

/**
 * Check a build output directory for splash scope: the homepage carries the
 * splash and its `is-loading` body class, and every other route carries neither.
 * An output with no HTML routes at all (nothing built) reports no offence.
 *
 * @returns {Promise<Array<{ kind: string, file: string, detail: string }>>}
 */
export async function checkSplashScope({ directory = resolve(websiteDirectory, 'dist') } = {}) {
    const measured = await scanSplashScope({ directory });
    if (measured.length === 0) return [];

    const offences = [];

    if (!measured.some((entry) => entry.expected)) {
        offences.push({
            kind: 'splash-scope',
            file: join(directory, splashRoute),
            detail: `the build has no ${splashRoute} route, so no page carries the splash`,
        });
    }

    for (const entry of measured) {
        const file = join(directory, entry.route);

        if (entry.expected) {
            if (!entry.splash) {
                offences.push({ kind: 'splash-scope', file, detail: 'the homepage carries no splash element' });
            }
            if (!entry.loading) {
                offences.push({
                    kind: 'splash-scope',
                    file,
                    detail: `the homepage has no ${loadingBodyClass} body class, so it no longer waits for the splash`,
                });
            }
            continue;
        }

        if (entry.splash) {
            offences.push({
                kind: 'splash-scope',
                file,
                detail: `the splash element is rendered on ${entry.route}, which is not the homepage`,
            });
        }
        if (entry.loading) {
            offences.push({
                kind: 'splash-scope',
                file,
                detail: `${entry.route} defers the page reveal with ${loadingBodyClass}, which is homepage-only`,
            });
        }
    }

    return offences;
}
