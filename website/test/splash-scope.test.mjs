/*
 * Splash-scope suite: the loading screen belongs to `/` and to no other route.
 *
 * The defect this pins was measured, not imagined: the splash element and the
 * `is-loading` body class used to ship on every route that composes
 * `BaseLayout`, so `/news/`, `/about/` and `/404.html` each sat behind the
 * splash script's 2 s timer — and behind JavaScript — before their content could
 * be read. The guard in `scripts/splash-scope.mjs` runs on the built output (as
 * part of `postbuild`), and this suite exercises it against temporary fixtures
 * and, when `dist/` exists, against the real build.
 *
 * The second half of the rule is the fragment gate: an exact `/` is the only URL
 * that shows the loading screen, so the homepage document must carry the
 * pre-paint inline gate that suppresses it on a fragment landing (`/#mission`)
 * or on another path, plus the stylesheet rules that act on the marker it sets.
 */
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import vm from 'node:vm';
import { afterAll, describe, expect, it } from 'vitest';

import { websiteDirectory } from '../scripts/guards.mjs';
import {
    checkSplashScope,
    loadingBodyClass,
    scanSplashScope,
    splashGate,
    splashRoute,
    splashSkipAttribute,
} from '../scripts/splash-scope.mjs';

const temporaryDirectories = [];

async function temporaryDirectory(prefix) {
    const directory = await mkdtemp(join(tmpdir(), prefix));
    temporaryDirectories.push(directory);
    return directory;
}

afterAll(async () => {
    for (const directory of temporaryDirectories) {
        await rm(directory, { recursive: true, force: true });
    }
});

const distDirectory = resolve(websiteDirectory, 'dist');
const hasBuild = existsSync(join(distDirectory, 'index.html'));

/** The homepage's pre-paint gate: an inline script keyed on the URL fragment. */
const splashGateMarkup = `<script>if (location.pathname !== '/' || location.hash)`
    + ` { document.documentElement.setAttribute('${splashSkipAttribute}', ''); }</script>`;

/** The marker rules the stylesheets the homepage loads have to carry. */
const splashMarkerStyles = `<style>html[${splashSkipAttribute}] .splash { display: none; }`
    + `html[${splashSkipAttribute}] body .page { opacity: 1; visibility: visible; }</style>`;

/** The splash element itself. */
const splashMarkup = '<div class="splash" id="splash" aria-hidden="true"></div>';

/** The page column and the end of a document. */
const pageEnd = '<main class="page">Home</main></body></html>';

/**
 * The head of a homepage document, carrying the gate and the marker rules by
 * default and dropping either half on request.
 */
const homeHead = ({ gate = true, markerStyles = true } = {}) =>
    `<html><head>${gate ? splashGateMarkup : ''}${markerStyles ? splashMarkerStyles : ''}</head>`;

/** A homepage document carrying the splash and the loading body class. */
const homeDocument = `${homeHead()}<body class="${loadingBodyClass}">${splashMarkup}${pageEnd}`;

/** A homepage document that carries the splash but no loading body class. */
const idleHomeDocument = `${homeHead()}<body>${splashMarkup}${pageEnd}`;

/** A document that carries the splash element but no loading body class. */
const splashOnlyDocument = '<html><body><div class="splash" id="splash" aria-hidden="true"></div>'
    + '<main class="page">Content</main></body></html>';

/** A document that carries neither half of the splash. */
const plainDocument = '<html><body><main class="page">Content</main></body></html>';

/** Write one `route` → `html` pair into a build output directory. */
async function distWith(entries) {
    const directory = await temporaryDirectory('rh-splash-scope-');
    for (const [route, html] of Object.entries(entries)) {
        const file = join(directory, route.replace(/^\//, ''));
        await mkdir(resolve(file, '..'), { recursive: true });
        await writeFile(file, html);
    }
    return directory;
}

/** CSS a route actually applies: its inline `<style>` blocks plus every stylesheet it links. */
async function routeStyles(html) {
    const parts = [];

    for (const match of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) parts.push(match[1]);
    for (const match of html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)) {
        const file = join(distDirectory, match[1].replace(/^\//, ''));
        if (existsSync(file)) parts.push(await readFile(file, 'utf8'));
    }

    return parts.join('\n');
}

/**
 * Run a gate's source against stubbed `location`/`document` objects, the way the
 * browser runs it during parse, and report whether it set the skip marker.
 * `location` is a plain object rather than a `URL`: the page reads `pathname`
 * and `hash`, and `hash` is `''` — not `undefined` — when there is no fragment.
 */
function gateSkipsOn(source, { pathname = '/', hash = '' } = {}) {
    const markers = new Set();
    const context = {
        location: { pathname, hash },
        document: {
            documentElement: {
                setAttribute: (name) => markers.add(name),
                hasAttribute: (name) => markers.has(name),
            },
        },
    };

    vm.runInNewContext(source, context);
    return markers.has(splashSkipAttribute);
}

describe('splash scope guard', () => {
    it('accepts an output where only the homepage carries the splash', async () => {
        const directory = await distWith({
            'index.html': homeDocument,
            'news/index.html': plainDocument,
            '404.html': plainDocument,
        });

        expect(await checkSplashScope({ directory })).toEqual([]);
    });

    it('rejects a non-home route that renders the splash element', async () => {
        const directory = await distWith({
            'index.html': homeDocument,
            'news/index.html': splashOnlyDocument,
        });

        const offences = await checkSplashScope({ directory });

        expect(offences).toHaveLength(1);
        expect(offences[0].detail).toContain('/news/index.html');
        expect(offences[0].detail).toContain('not the homepage');
    });

    it('rejects a non-home route that defers its page reveal with the loading class', async () => {
        const directory = await distWith({
            'index.html': homeDocument,
            '/about/index.html':
                `<html><body class="${loadingBodyClass}"><main class="page">About</main></body></html>`,
        });

        const offences = await checkSplashScope({ directory });

        expect(offences).toHaveLength(1);
        expect(offences[0].detail).toContain('/about/index.html');
        expect(offences[0].detail).toContain(loadingBodyClass);
    });

    it('rejects a homepage that lost the splash element', async () => {
        const directory = await distWith({ 'index.html': plainDocument });

        const offences = await checkSplashScope({ directory });

        expect(offences.map((offence) => offence.detail)).toContain('the homepage carries no splash element');
    });

    it('rejects a homepage that no longer waits for the splash', async () => {
        const directory = await distWith({ 'index.html': idleHomeDocument });

        const offences = await checkSplashScope({ directory });

        expect(offences.map((offence) => offence.detail)).toEqual([
            `the homepage has no ${loadingBodyClass} body class, so it no longer waits for the splash`,
        ]);
    });

    it('rejects an output with no homepage route', async () => {
        const directory = await distWith({ 'news/index.html': plainDocument });

        const offences = await checkSplashScope({ directory });

        expect(offences.map((offence) => offence.detail)).toEqual([
            `the build has no ${splashRoute} route, so no page carries the splash`,
        ]);
    });

    it('rejects a homepage that lost the pre-paint fragment gate', async () => {
        /*
         * The splash itself is intact here — element, loading class, stylesheet
         * rules — and the document is still wrong: without the gate, `/#mission`
         * is met with the loading screen and the fragment jump never happens.
         */
        const directory = await distWith({
            'index.html': `${homeHead({ gate: false })}<body class="${loadingBodyClass}">${splashMarkup}${pageEnd}`,
        });

        const offences = await checkSplashScope({ directory });

        expect(offences).toHaveLength(1);
        expect(offences[0].file).toContain('/index.html');
        expect(offences[0].detail).toContain('no pre-paint');
        expect(offences[0].detail).toContain('#mission');
    });

    it('rejects a homepage whose gate runs after its splash markup', async () => {
        const directory = await distWith({
            'index.html': `${homeHead({ gate: false })}<body class="${loadingBodyClass}">${splashMarkup}`
                + `${splashGateMarkup}${pageEnd}`,
        });

        const offences = await checkSplashScope({ directory });

        expect(offences).toHaveLength(1);
        expect(offences[0].detail).toContain('after its splash markup');
    });

    it('rejects a homepage whose stylesheets lost the marker rules', async () => {
        const directory = await distWith({
            'index.html': `${homeHead({ markerStyles: false })}<body class="${loadingBodyClass}">`
                + `${splashMarkup}${pageEnd}`,
        });

        const offences = await checkSplashScope({ directory });

        expect(offences).toHaveLength(1);
        expect(offences[0].detail).toContain(splashSkipAttribute);
        expect(offences[0].detail).toContain('hides the splash');
        expect(offences[0].detail).toContain('reveals the page');
    });

    it('rejects a non-home route that carries the fragment gate', async () => {
        const directory = await distWith({
            'index.html': homeDocument,
            'news/index.html': `<html><head>${splashGateMarkup}</head>`
                + '<body><main class="page">News</main></body></html>',
        });

        const offences = await checkSplashScope({ directory });

        expect(offences).toHaveLength(1);
        expect(offences[0].file).toContain('/news/index.html');
        expect(offences[0].detail).toContain(`${splashSkipAttribute} fragment gate`);
        expect(offences[0].detail).toContain('not the homepage');
    });

    it('does not read the loading class out of a stylesheet', async () => {
        /*
         * The reveal rule the layout ships on every route is
         * `body:not(.is-loading) .page { … }`, so `is-loading` is text in the
         * stylesheet of a page that is not loading at all. The guard matches the
         * `<body>` class attribute instead, and this fixture fails if that ever
         * regresses to a bare substring search over the document.
         */
        const directory = await distWith({
            'index.html': homeDocument,
            'news/index.html': '<html><head><link rel="stylesheet" href="/_astro/BaseLayout.css"></head>'
                + '<body><main class="page">News</main>'
                + '<style>body:not(.is-loading) .page{opacity:1}</style></body></html>',
        });

        expect(await checkSplashScope({ directory })).toEqual([]);
    });

    it('reports no offence for an output with no HTML routes', async () => {
        const directory = await temporaryDirectory('rh-splash-scope-empty-');

        expect(await checkSplashScope({ directory })).toEqual([]);
    });
});

describe('splash scope in the real build', () => {
    it.runIf(hasBuild)('scopes the splash to the homepage on every generated route', async () => {
        const measured = await scanSplashScope();
        expect(measured.length).toBeGreaterThan(0);

        // The routes the commission names, present and clean.
        for (const route of ['/news/index.html', '/about/index.html', '/404.html']) {
            const entry = measured.find((candidate) => candidate.route === route);
            expect(entry, `${route} was not generated`).toBeDefined();
            expect(entry.splash, `${route} carries the splash element`).toBe(false);
            expect(entry.loading, `${route} carries the ${loadingBodyClass} body class`).toBe(false);
            expect(entry.gate, `${route} carries the fragment gate`).toBe(false);
        }

        const home = measured.filter((entry) => entry.expected);
        expect(home.map((entry) => entry.route)).toEqual([splashRoute]);
        expect(home[0].splash).toBe(true);
        expect(home[0].loading).toBe(true);
        expect(home[0].gate).toBe(true);

        // Every other route is the clean half, the Google verification
        // passthrough file included.
        for (const entry of measured.filter((candidate) => !candidate.expected)) {
            expect(entry.splash, `${entry.route} carries the splash element`).toBe(false);
            expect(entry.loading, `${entry.route} carries the ${loadingBodyClass} body class`).toBe(false);
            expect(entry.gate, `${entry.route} carries the fragment gate`).toBe(false);
        }

        expect(await checkSplashScope()).toEqual([]);
    });

    it.runIf(hasBuild)('leaves every non-home route readable without JavaScript', async () => {
        const revealRule = /body:not\(\.is-loading\)\s*\.page\s*\{[^}]*opacity:\s*1[^}]*visibility:\s*visible/;

        for (const route of await scanSplashScope()) {
            if (route.expected) continue;
            const html = await readFile(join(distDirectory, route.route), 'utf8');

            // No timer to wait on: the document's own `<body>` is not held back.
            const bodyClass = html.match(/<body\b[^>]*\bclass="([^"]*)"/)?.[1] ?? '';
            expect(bodyClass.split(/\s+/), `${route.route} carries ${loadingBodyClass}`).not.toContain(
                loadingBodyClass,
            );
            expect(html, `${route.route} still loads the splash script`).not.toContain('#splash');

            // A passthrough file with no page column (the Google verification
            // file) has nothing to reveal, so only the layout's own routes are
            // held to the rule below.
            if (!html.includes('class="page"')) continue;

            // And the CSS rule that shows `.page` without any class applies to
            // this document, so the content is visible before any script runs.
            expect(await routeStyles(html), `${route.route} has no CSS-only reveal rule`).toMatch(revealRule);
        }
    });

    it.runIf(hasBuild)('keeps the homepage splash exactly as commissioned', async () => {
        const html = await readFile(join(distDirectory, 'index.html'), 'utf8');

        expect(html).toMatch(/<div class="splash" id="splash" aria-hidden="true"/);
        expect(html).toMatch(/<body[^>]*\bclass="[^"]*is-loading/);
        // The 2 s retraction, the `is-ready` swap and the `hidden` attribute.
        expect(html).toMatch(/window\.setTimeout\(/);
        expect(html).toMatch(/2e3|2000/);
        expect(html).toContain('classList.remove(`is-loading`)');
        expect(html).toContain('classList.add(`is-ready`)');
        expect(html).toContain('setAttribute(`hidden`');
        expect(html).toContain('<noscript>');
    });

    it.runIf(hasBuild)('runs the built gate: a fragment landing skips the splash, an exact / does not', async () => {
        /*
         * String presence is not behaviour. The gate is extracted from the built
         * document and executed the way the browser executes it during parse —
         * `location` and `document` stubbed, no dependency — so a gate that is
         * emitted but decides nothing fails here. The real browser measurement
         * (no flash, `.page` visible from the first paint, the fragment jump
         * performed) is the other half of this proof.
         */
        const html = await readFile(join(distDirectory, 'index.html'), 'utf8');
        const gate = splashGate(html);

        expect(gate, 'the built homepage carries no inline fragment gate').not.toBeNull();
        expect(gateSkipsOn(gate.source, { pathname: '/', hash: '#mission' })).toBe(true);
        expect(gateSkipsOn(gate.source, { pathname: '/', hash: '#updates' })).toBe(true);
        expect(gateSkipsOn(gate.source, { pathname: '/', hash: '' })).toBe(false);
        // Defensive: a document served at another path does not splash either.
        expect(gateSkipsOn(gate.source, { pathname: '/index.html', hash: '' })).toBe(true);
    });
});
