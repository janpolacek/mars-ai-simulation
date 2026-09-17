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
 */
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';

import { websiteDirectory } from '../scripts/guards.mjs';
import { checkSplashScope, loadingBodyClass, scanSplashScope, splashRoute } from '../scripts/splash-scope.mjs';

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

/** A homepage document carrying the splash and the loading body class. */
const homeDocument = '<html><body class="is-loading"><div class="splash" id="splash" aria-hidden="true"></div>'
    + '<main class="page">Home</main></body></html>';

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
            '/about/index.html': `<html><body class="${loadingBodyClass}"><main class="page">About</main></body></html>`,
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
        const directory = await distWith({
            'index.html': '<html><body><div class="splash" id="splash" aria-hidden="true"></div></body></html>',
        });

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
                + `<body><main class="page">News</main><style>body:not(.is-loading) .page{opacity:1}</style></body></html>`,
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
        }

        const home = measured.filter((entry) => entry.expected);
        expect(home.map((entry) => entry.route)).toEqual([splashRoute]);
        expect(home[0].splash).toBe(true);
        expect(home[0].loading).toBe(true);

        // Every other route is the clean half, the Google verification
        // passthrough file included.
        for (const entry of measured.filter((candidate) => !candidate.expected)) {
            expect(entry.splash, `${entry.route} carries the splash element`).toBe(false);
            expect(entry.loading, `${entry.route} carries the ${loadingBodyClass} body class`).toBe(false);
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
            expect(bodyClass.split(/\s+/), `${route.route} carries ${loadingBodyClass}`).not.toContain(loadingBodyClass);
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
});
