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
 *
 * Being the only route that may splash is not enough for the homepage itself. A
 * fragment landing (`/#mission`, `/#timeline`, `/#updates`, …) is a first-class
 * entry URL on this site — the header, the footer and the hero emit those links —
 * and it must not be met with the loading screen: the visitor waited 2 s and
 * then stood at the top of the page, because a `.page` held back by `is-loading`
 * keeps the browser from performing the fragment jump. So the homepage document
 * also carries a pre-paint inline gate that marks `<html>` with
 * `data-splash-skip` for any non-empty `location.hash` (and for a document
 * served at a path other than `/`), plus the stylesheet rules keyed on that
 * marker which hide `.splash` and reveal `.page`. The rules below fail closed
 * when the gate, its document order, or the marker rules go missing.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

import { listRoutes, websiteDirectory } from './guards.mjs';

/** The one generated route allowed to carry the splash. */
export const splashRoute = '/index.html';

/** The body class that defers the page reveal until the splash retracts. */
export const loadingBodyClass = 'is-loading';

/** The attribute the homepage's inline gate sets on `<html>`, and its CSS keys on. */
export const splashSkipAttribute = 'data-splash-skip';

/** The attribute only the splash element carries. */
const splashElementPattern = /\bid="splash"/;

/**
 * The homepage's pre-paint gate: an inline script that keys the skip marker on
 * the URL's fragment. The two halves have to sit in the same script — a fragment
 * read and a marker set apart are not a gate — and the quote character is
 * accepted in any of the three forms a bundler may emit.
 */
const splashGatePattern = new RegExp(
    String.raw`location\s*\.\s*hash[\s\S]*?setAttribute\(\s*['"\x60]${splashSkipAttribute}['"\x60]`,
);

/** The marker rule that hides the splash element. */
const splashSkipRule = new RegExp(
    String.raw`html\[${splashSkipAttribute}\][^{}]*\.splash\s*\{[^}]*\bdisplay:\s*none`,
);

/** The marker rule that reveals the page column from the first paint. */
const pageRevealRule = new RegExp(
    String.raw`html\[${splashSkipAttribute}\][^{}]*\.page\s*\{[^}]*\bopacity:\s*1[^}]*\bvisibility:\s*visible`,
);

/**
 * The `class` list of the document's `<body>`, split on whitespace.
 *
 * @returns {Array<string>}
 */
function bodyClasses(html) {
    const match = html.match(/<body\b[^>]*\bclass="([^"]*)"/);
    return match ? match[1].split(/\s+/).filter((name) => name.length > 0) : [];
}

/**
 * The homepage's pre-paint gate inside `html`, or `null` when the document
 * carries none. Only scripts the document runs from its own bytes count: a
 * `src` reference defers the decision until after the document is parsed, which
 * is exactly the flash the gate exists to prevent.
 *
 * @returns {{ offset: number, source: string } | null}
 */
export function splashGate(html) {
    for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
        if (/\bsrc\s*=/.test(match[1])) continue;
        if (splashGatePattern.test(match[2])) return { offset: match.index, source: match[2] };
    }

    return null;
}

/**
 * CSS a document applies: its own `<style>` blocks plus every stylesheet it
 * links, read from the output directory under check (a link into a file the
 * build did not emit contributes nothing).
 *
 * @returns {Promise<string>}
 */
async function documentStyles(html, directory) {
    const parts = [];

    for (const match of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) parts.push(match[1]);

    for (const match of html.matchAll(/<link\b[^>]*>/g)) {
        if (!/\brel="stylesheet"/.test(match[0])) continue;
        const href = match[0].match(/\bhref="([^"]+)"/)?.[1];
        if (!href) continue;

        const file = join(directory, href.split(/[?#]/)[0].replace(/^\/+/, ''));
        if (existsSync(file)) parts.push(await readFile(file, 'utf8'));
    }

    return parts.join('\n');
}

/**
 * Measure the splash state of every generated HTML route in a build output
 * directory: whether it carries the splash element, whether its `<body>` carries
 * the loading class, whether it carries the homepage's fragment gate, and
 * whether it is the route allowed to.
 *
 * @returns {Promise<Array<{ route: string, splash: boolean, loading: boolean, gate: boolean, expected: boolean }>>}
 */
export async function scanSplashScope({ directory = resolve(websiteDirectory, 'dist') } = {}) {
    const measured = [];

    for (const route of await listRoutes(directory)) {
        const html = await readFile(join(directory, route), 'utf8');
        measured.push({
            route,
            splash: splashElementPattern.test(html),
            loading: bodyClasses(html).includes(loadingBodyClass),
            gate: splashGate(html) !== null,
            expected: route === splashRoute,
        });
    }

    return measured;
}

/**
 * Check a build output directory for splash scope: the homepage carries the
 * splash, its `is-loading` body class and the pre-paint fragment gate, and every
 * other route carries neither the splash nor the gate. An output with no HTML
 * routes at all (nothing built) reports no offence.
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
        if (entry.gate) {
            offences.push({
                kind: 'splash-scope',
                file,
                detail: `the ${splashSkipAttribute} fragment gate is rendered on ${entry.route},`
                    + ' which is not the homepage',
            });
        }
    }

    offences.push(...await fragmentGateOffences(directory, measured.find((entry) => entry.expected)));

    return offences;
}

/**
 * The homepage's own fragment-gate rules: the gate is present, it precedes the
 * splash markup, and the stylesheets the homepage loads carry the marker rules
 * that act on it. A homepage without them ships the defect the gate exists to
 * fix, so a build that drops any of them fails closed.
 *
 * @returns {Promise<Array<{ kind: string, file: string, detail: string }>>}
 */
async function fragmentGateOffences(directory, home) {
    if (!home) return [];

    const file = join(directory, home.route);
    const html = await readFile(file, 'utf8');
    const gate = splashGate(html);
    const offences = [];

    if (!gate) {
        offences.push({
            kind: 'splash-scope',
            file,
            detail:
                `the homepage has no pre-paint ${splashSkipAttribute} fragment gate, so a landing such as`
                + ' /#mission still shows the splash',
        });
    } else if (html.search(splashElementPattern) !== -1 && gate.offset > html.search(splashElementPattern)) {
        offences.push({
            kind: 'splash-scope',
            file,
            detail:
                `the homepage's ${splashSkipAttribute} gate runs after its splash markup, so the splash can be`
                + ' painted before the decision is made',
        });
    }

    const styles = await documentStyles(html, directory);
    const missing = [];
    if (!splashSkipRule.test(styles)) missing.push('hides the splash');
    if (!pageRevealRule.test(styles)) missing.push('reveals the page');
    if (missing.length > 0) {
        offences.push({
            kind: 'splash-scope',
            file,
            detail: `the homepage's stylesheets carry no ${splashSkipAttribute} rule that ${missing.join(' or ')}`,
        });
    }

    return offences;
}
