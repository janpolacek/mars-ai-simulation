/*
 * Guard suite for the public build.
 *
 * This replaces `sync-assets.test.mjs`. That test asserted that a copy step
 * withheld the gated renders and pruned stale copies; the copy step is gone, so
 * the suite now asserts the stronger property directly: a reference into a
 * withheld directory fails, a withheld file in the build output fails (by name,
 * by leading name token, or by content hash), a withheld marker in built text
 * fails, and a `publication: draft` item produces no card, no listing entry, and
 * no route.
 *
 * It also pins the one retirement: the landing-region name is released for
 * article 001 (2026-09-17) and no longer gated, while every other marker and
 * file rule stays in force.
 */
import { existsSync } from 'node:fs';
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join, relative, resolve } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';

import {
    checkDist,
    collectGatedSources,
    gatedSourceDirectories,
    gatedTextMarkers,
    listFiles,
    listRoutes,
    projectDirectory,
    scanSourceForGatedReferences,
    websiteDirectory,
} from '../scripts/guards.mjs';
import { selectPublicNews, selectReleasedNews } from '../src/lib/publication';
import { releasedNewsSlugs } from '../src/lib/releases';

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
const newsDirectory = resolve(websiteDirectory, 'news');

/** Collapse runs of whitespace so a rendered page can be compared to source text. */
const collapse = (value) => value.replace(/\s+/g, ' ').trim();

/** Strip markup and decode the entities this site's copy actually uses. */
function stripMarkup(html) {
    return html
        .replace(/<[^>]*>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'");
}

/** Flatten one Markdown line to the text a page would render. */
function flattenMarkdown(line) {
    return line
        .replace(/^\s*(?:[-*+]|\d+\.)\s+/, '')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[*_`]/g, '')
        .trim();
}

/** All text the built site would serve, as one normalised string. */
async function distText() {
    const files = (await listFiles(distDirectory)).filter((file) =>
        /\.(css|html|js|json|svg|txt|webmanifest|xml)$/.test(file)
    );
    const parts = [];
    for (const file of files) parts.push(stripMarkup(await readFile(file, 'utf8')));
    return collapse(parts.join('\n'));
}

/** All HTML the built site would serve, as one string. */
async function distHtml() {
    const files = (await listFiles(distDirectory)).filter((file) => file.endsWith('.html'));
    const parts = [];
    for (const file of files) parts.push(await readFile(file, 'utf8'));
    return parts.join('\n');
}

async function newsFiles() {
    return (await listFiles(newsDirectory)).filter((file) => file.endsWith('.mdx'));
}

/** Read one frontmatter value without pulling in a YAML parser. */
async function frontmatterValue(file, key) {
    const source = await readFile(file, 'utf8');
    const block = source.match(/^---\n([\s\S]*?)\n---/);
    if (!block) return undefined;
    const line = block[1].split('\n').find((candidate) => candidate.startsWith(`${key}:`));
    return line?.slice(key.length + 1).trim().replace(/^['"]|['"]$/g, '');
}

/** The closing sentence of an article body, flattened, for a leak check. */
async function closingBodySentence(file) {
    const source = await readFile(file, 'utf8');
    const body = source.replace(/^---\n[\s\S]*?\n---\n?/, '');
    const lines = body.split('\n').map((line) => line.trim()).filter((line) => line.length > 0);
    return collapse(flattenMarkdown(lines.at(-1) ?? ''));
}

describe('gated source references', () => {
    it('finds no reference into a withheld directory in the site source', async () => {
        expect(await scanSourceForGatedReferences()).toEqual([]);
    });

    it('reports a source file that names a withheld directory', async () => {
        const root = await temporaryDirectory('rh-guard-literal-');
        const gatedReference = relative(projectDirectory, gatedSourceDirectories[0]);
        const file = join(root, 'src', 'pages', 'planted.astro');
        await mkdir(join(root, 'src', 'pages'), { recursive: true });
        await writeFile(file, `---\nimport mark from '../../../${gatedReference}/canonical.png';\n---\n`);

        const offences = await scanSourceForGatedReferences({ directory: root });

        expect(offences.map((offence) => offence.kind)).toContain('gated-path');
        expect(offences[0].file).toBe(file);
        expect(offences[0].detail).toContain(gatedReference);
    });

    it('resolves a relative reference into a withheld directory', async () => {
        const root = await temporaryDirectory('rh-guard-relative-');
        const gatedDirectory = join(root, 'held');
        const file = join(root, 'site', 'src', 'pages', 'planted.astro');
        await mkdir(gatedDirectory, { recursive: true });
        await mkdir(join(root, 'site', 'src', 'pages'), { recursive: true });
        await writeFile(join(gatedDirectory, 'plate.png'), 'placeholder');
        await writeFile(file, `---\nimport plate from '../../../held/plate.png';\n---\n`);

        const offences = await scanSourceForGatedReferences({
            directory: join(root, 'site'),
            gatedDirectories: [gatedDirectory],
        });

        expect(offences.map((offence) => offence.kind)).toContain('gated-reference');
        expect(offences[0].file).toBe(file);
    });
});

describe('withheld material in the build output', () => {
    it('rejects a copied withheld asset by name and by content hash', async () => {
        const sources = await collectGatedSources();
        const source = sources.find((entry) => entry.path.startsWith(gatedSourceDirectories[0]));
        expect(source).toBeDefined();

        const dist = await temporaryDirectory('rh-guard-dist-');
        await mkdir(join(dist, 'assets'), { recursive: true });
        await copyFile(source.path, join(dist, 'assets', source.name));

        const offences = await checkDist({ directory: dist, sources });

        expect(offences.map((offence) => offence.kind)).toContain('gated-name');
        expect(offences.map((offence) => offence.kind)).toContain('gated-content');
    });

    it('rejects a re-encoded copy that no longer matches by content hash', async () => {
        const sources = await collectGatedSources();
        const source = sources.find((entry) => entry.path.startsWith(gatedSourceDirectories[0]));

        const dist = await temporaryDirectory('rh-guard-encoded-');
        await mkdir(join(dist, '_astro'), { recursive: true });
        await writeFile(join(dist, '_astro', `${source.stem}.ABCD1234.webp`), 're-encoded placeholder bytes');

        const offences = await checkDist({ directory: dist, sources });

        expect(offences.map((offence) => offence.kind)).toContain('gated-name-stem');
    });

    it('rejects built text that carries a withheld marker', async () => {
        const sources = await collectGatedSources();
        const dist = await temporaryDirectory('rh-guard-text-');
        await mkdir(join(dist, 'news'), { recursive: true });
        await writeFile(join(dist, 'news', 'index.html'), `<p>${gatedTextMarkers[0]} reached the page.</p>`);

        const offences = await checkDist({ directory: dist, sources });

        expect(offences.map((offence) => offence.kind)).toContain('gated-text');
        expect(offences[0].detail).toBe(gatedTextMarkers[0]);
    });

    it('accepts an output directory that holds none of it', async () => {
        const dist = await temporaryDirectory('rh-guard-clean-');
        await writeFile(join(dist, 'index.html'), '<p>Nothing withheld here.</p>');

        expect(await checkDist({ directory: dist })).toEqual([]);
    });

    it.runIf(hasBuild)('passes on the real build output', async () => {
        expect(await checkDist()).toEqual([]);
    });

    it.runIf(hasBuild)('generates the home and news index routes and no article detail route', async () => {
        const routes = await listRoutes();

        expect(routes).toContain('/index.html');
        expect(routes).toContain('/news/index.html');

        if (releasedNewsSlugs.length === 0) {
            expect(routes.filter((route) => /^\/news\/.+\/index\.html$/.test(route))).toEqual([]);
        }
    });

    it.runIf(hasBuild)('keeps every unreleased article body out of the build', async () => {
        const corpus = await distText();
        const checked = [];

        for (const file of await newsFiles()) {
            const slug = basename(file, '.mdx');
            if (releasedNewsSlugs.includes(slug)) continue;
            const closing = await closingBodySentence(file);
            expect(closing.length).toBeGreaterThan(20);
            expect(corpus).not.toContain(closing);
            checked.push(slug);
        }

        expect(checked.length).toBeGreaterThan(0);
    });

    it.runIf(hasBuild)('offers no article link while no slug is released', async () => {
        if (releasedNewsSlugs.length > 0) return;
        // A card label that advertises an article must not look like a link
        // while there is no route behind it.
        expect(await distHtml()).not.toMatch(/href="\/news\/[^"]+\/"/);
    });

    it.runIf(hasBuild)('renders no page, no listing entry, and no card for a draft article', async () => {
        const corpus = await distText();
        const drafts = [];

        for (const file of await newsFiles()) {
            if ((await frontmatterValue(file, 'publication')) !== 'draft') continue;
            drafts.push({ file, title: await frontmatterValue(file, 'title') });
        }

        expect(drafts.length).toBeGreaterThan(0);
        for (const draft of drafts) {
            expect(corpus).not.toContain(collapse(draft.title));
        }
    });
});

describe('route identity', () => {
    /*
     * Two routes once shipped one document title: `/` and `/news/` both rendered
     * the site default, so the two pages competed for one identity in a result
     * list. The defect survived a build and a test suite because nothing
     * asserted it. This is that assertion — every generated route carries its
     * own non-empty `<title>`, so a page that forgets to pass one fails here
     * instead of shipping.
     */
    it.runIf(hasBuild)('gives every generated route a distinct, non-empty title', async () => {
        const routes = await listRoutes();
        expect(routes.length).toBeGreaterThan(0);

        const seen = new Map();
        for (const route of routes) {
            const html = await readFile(join(distDirectory, route), 'utf8');
            const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();

            expect(title, `${route} carries no <title>`).toBeTruthy();
            expect(seen.has(title), `${route} shares its title with ${seen.get(title)}: ${title}`).toBe(false);
            seen.set(title, route);
        }
    });
});

describe('guard retirement: the released landing-region name', () => {
    /*
     * The human release of 2026-09-17 (`docs/SCENARIO.md` §Continuity and release
     * controls) makes the landing-region name legal in article 001's built text.
     * The retirement is conditioned on the rest of the guard set staying intact,
     * so both halves are asserted here: the withheld markers and files still fail
     * a build, and the released name passes one.
     */
    it('gates every marker except the released landing-region name', () => {
        expect(gatedTextMarkers).not.toContain('Asteria');
        expect(gatedTextMarkers).toEqual(expect.arrayContaining(['RH-01', 'Pathfinder', '18° 42', '226° 14']));
    });

    it('passes a build output that carries the released name', async () => {
        const sources = await collectGatedSources();
        const dist = await temporaryDirectory('rh-guard-released-');
        await mkdir(join(dist, 'news'), { recursive: true });
        await writeFile(
            join(dist, 'news', 'index.html'),
            '<p>The mission targets Asteria Field, a fictional operational region in Margaritifer Terra.</p>',
        );

        expect(await checkDist({ directory: dist, sources })).toEqual([]);
    });

    it('still fails a build output that carries a withheld marker beside a withheld file', async () => {
        const sources = await collectGatedSources();
        const source = sources.find((entry) => entry.path.startsWith(gatedSourceDirectories[0]));
        const dist = await temporaryDirectory('rh-guard-still-gated-');
        await mkdir(join(dist, 'assets'), { recursive: true });
        await writeFile(join(dist, 'assets', 'planted.html'), `<p>${gatedTextMarkers[0]} reached the page.</p>`);
        await copyFile(source.path, join(dist, 'assets', source.name));

        const kinds = (await checkDist({ directory: dist, sources })).map((offence) => offence.kind);

        expect(kinds).toContain('gated-text');
        expect(kinds).toContain('gated-name');
        expect(kinds).toContain('gated-content');
    });
});

describe('publication and release gate', () => {
    const draft = { id: 'fixture-draft-article', data: { publication: 'draft', order: 1 } };
    const published = { id: 'fixture-published-article', data: { publication: 'published', order: 2 } };
    const alsoPublished = { id: 'fixture-second-article', data: { publication: 'published', order: 3 } };

    it('keeps a draft item out of the published selection', () => {
        expect(selectPublicNews([draft, published]).map((entry) => entry.id)).toEqual(['fixture-published-article']);
    });

    it('orders the published selection by frontmatter order', () => {
        expect(selectPublicNews([alsoPublished, published]).map((entry) => entry.id)).toEqual([
            'fixture-published-article',
            'fixture-second-article',
        ]);
    });

    it('authorises a detail route only for a released slug', () => {
        const selected = selectReleasedNews([draft, published, alsoPublished], ['fixture-draft-article']);

        expect(selected).toEqual([]);
        expect(
            selectReleasedNews([draft, published, alsoPublished], ['fixture-published-article']).map((entry) =>
                entry.id
            ),
        ).toEqual(['fixture-published-article']);
    });

    it('keeps the repository release list empty until a human records a release reference', () => {
        expect(releasedNewsSlugs).toEqual([]);
        expect(selectReleasedNews([draft, published], releasedNewsSlugs)).toEqual([]);
    });
});
