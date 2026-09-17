/*
 * Guard suite for the public build.
 *
 * This replaces `sync-assets.test.mjs`. That test asserted that a copy step
 * withheld the gated renders and pruned stale copies; the copy step is gone, so
 * the suite now asserts the stronger property directly: a reference into a
 * withheld directory fails, a withheld file in the build output fails (by name,
 * by name, by leading name token, or by content hash), a withheld marker in built
 * text fails, and an item the content schema holds back produces no card, no
 * listing entry, and no route.
 *
 * The listing set and the routable set are asserted to be the same set: every
 * `publication: published` item is listed on both surfaces with a working
 * `/news/<slug>/` link, and every other item yields none of the three.
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
    listGeneratedRoutes,
    listPassthroughRoutes,
    listRoutes,
    projectDirectory,
    scanSourceForGatedReferences,
    websiteDirectory,
} from '../scripts/guards.mjs';
import { selectPublicNews } from '../src/lib/publication';

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

/**
 * All CSS the built site would apply: the inlined `<style>` blocks (Astro inlines
 * small scoped stylesheets) plus every emitted stylesheet.
 */
async function distStyles() {
    const parts = [];
    for (const file of (await listFiles(distDirectory)).filter((entry) => entry.endsWith('.css'))) {
        parts.push(await readFile(file, 'utf8'));
    }
    for (const file of (await listFiles(distDirectory)).filter((entry) => entry.endsWith('.html'))) {
        const source = await readFile(file, 'utf8');
        for (const match of source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) parts.push(match[1]);
    }
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

/** The publication state the content schema would apply: a missing field is `draft`. */
async function publicationState(file) {
    return (await frontmatterValue(file, 'publication')) ?? 'draft';
}

/** Slugs the site must both list and route: `publication: published`. */
async function publishedSlugs() {
    const slugs = [];
    for (const file of await newsFiles()) {
        if ((await publicationState(file)) === 'published') slugs.push(basename(file, '.mdx'));
    }
    return slugs;
}

/** Slugs the site must neither list nor route. */
async function unpublishedSlugs() {
    const slugs = [];
    for (const file of await newsFiles()) {
        if ((await publicationState(file)) !== 'published') slugs.push(basename(file, '.mdx'));
    }
    return slugs;
}

/** The `href` of every `<a class="card-label">` on a page, whatever the attribute order. */
function cardLabelHrefs(html) {
    return [...html.matchAll(/<a\b[^>]*>/g)]
        .map((match) => match[0])
        .filter((tag) => /class="card-label"/.test(tag))
        .map((tag) => tag.match(/href="([^"]+)"/)?.[1]);
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

    it.runIf(hasBuild)('generates the home and news index routes and a detail route per published item', async () => {
        const routes = await listRoutes();
        const published = await publishedSlugs();

        expect(routes).toContain('/index.html');
        expect(routes).toContain('/news/index.html');
        expect(published.length).toBeGreaterThan(0);

        for (const slug of published) {
            expect(routes, `${slug} is published but has no detail route`).toContain(`/news/${slug}/index.html`);
        }

        // The route set and the published set are the same set — no listed item
        // without a page, and no page for an item the newsroom does not list.
        const detailRoutes = routes.filter((route) => /^\/news\/.+\/index\.html$/.test(route));
        expect(detailRoutes.sort()).toEqual(published.map((slug) => `/news/${slug}/index.html`).sort());
    });

    it.runIf(hasBuild)('keeps every unpublished article body out of the build', async () => {
        const corpus = await distText();
        const checked = [];

        for (const slug of await unpublishedSlugs()) {
            const closing = await closingBodySentence(join(newsDirectory, `${slug}.mdx`));
            expect(closing.length).toBeGreaterThan(20);
            expect(corpus, `${slug} is unpublished but its closing sentence reached the build`).not.toContain(closing);
            checked.push(slug);
        }

        expect(checked.length).toBeGreaterThan(0);
    });

    it.runIf(hasBuild)('links every listed card to its own generated route', async () => {
        const routes = new Set(await listRoutes());
        const published = await publishedSlugs();

        for (const surface of ['index.html', 'news/index.html']) {
            const html = await readFile(join(distDirectory, surface), 'utf8');
            const hrefs = cardLabelHrefs(html);

            // One article link per listed card, and no inert label left behind.
            expect(hrefs.length, `${surface} article link count`).toBe(published.length);
            expect(html, `${surface} still renders an inert card label`).not.toMatch(/<span class="card-label"/);

            for (const slug of published) {
                expect(hrefs, `${surface} does not link ${slug}`).toContain(`/news/${slug}/`);
            }
            for (const href of hrefs) {
                expect(href, `${surface} carries a card label with no href`).toBeTruthy();
                expect(routes.has(`${href}index.html`), `${surface} links ${href}, which has no route`).toBe(true);
            }
        }
    });

    it.runIf(hasBuild)('keeps a hidden carousel slide out of the layout and the tab order', async () => {
        const styles = await distStyles();

        // `hidden` is the carousel's only hiding mechanism, and this component's
        // own `display: grid` beats the UA's `[hidden]` rule on its own. Without
        // this rule a non-active slide stays rendered and its article link stays
        // tabbable (measured in the browser on the built homepage). Astro scopes
        // the selector, so the `[hidden]` part is matched with the scope
        // attribute in between.
        expect(styles).toMatch(/\.news-card[^{]*\[hidden\][^{]*\{[^}]*display:\s*none/);
    });

    it.runIf(hasBuild)('renders no page, no listing entry, and no card for an unpublished article', async () => {
        const corpus = await distText();
        const routes = await listRoutes();
        const html = await distHtml();
        const unpublished = [];

        for (const slug of await unpublishedSlugs()) {
            const file = join(newsDirectory, `${slug}.mdx`);
            unpublished.push({
                slug,
                state: await publicationState(file),
                title: await frontmatterValue(file, 'title'),
            });
        }

        expect(unpublished.length).toBeGreaterThan(0);
        expect(unpublished.some((entry) => entry.state === 'draft')).toBe(true);

        for (const entry of unpublished) {
            expect(corpus, `${entry.slug} title reached the build`).not.toContain(collapse(entry.title));
            expect(routes).not.toContain(`/news/${entry.slug}/index.html`);
            expect(html).not.toContain(`/news/${entry.slug}/`);
        }
    });
});

describe('route identity', () => {
    /*
     * Two routes once shipped one document title: `/` and `/news/` both rendered
     * the site default, so the two pages competed for one identity in a result
     * list. The defect survived a build and a test suite because nothing
     * asserted it. This is that assertion — every route a page generated carries
     * its own non-empty `<title>`, so a page that forgets to pass one fails here
     * instead of shipping.
     *
     * The assertion runs over `listGeneratedRoutes()`, not over every `.html`
     * under `dist/`. Astro copies `website/public/` into the output byte for
     * byte, so those files are *served*, not generated: their content is authored
     * outside the page pipeline, no layout or route can give them a `<title>`,
     * and the file that surfaced this — `googlef5c43421bd049659.html`, the
     * Google Search Console verification file whose whole content is prescribed
     * by that verification method — has none by design. Asserting a title over
     * the served set failed on a document no author may change. The separation
     * is itself asserted below, so narrowing this route set is not a way to pass
     * this block: two generated routes that ship one title still fail here.
     */
    it.runIf(hasBuild)('gives every generated route a distinct, non-empty title', async () => {
        const routes = await listGeneratedRoutes();
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

    it.runIf(hasBuild)('counts a verbatim public/ copy as served, not as a generated route', async () => {
        const routes = await listRoutes();
        const generated = await listGeneratedRoutes();
        const served = (await listPassthroughRoutes()).filter((route) => route.endsWith('.html'));

        // Non-vacuity: the document this defect surfaced on is a permanent member
        // of the served set while the human's Search Console verification depends
        // on it living at exactly that path, so this loop has something to check.
        expect(served.length).toBeGreaterThan(0);

        for (const route of served) {
            expect(routes, `${route} is in website/public/ but missing from the build output`).toContain(route);
            expect(generated, `${route} is served from website/public/, not generated`).not.toContain(route);
        }

        // The generated set is the whole route set minus the served set — a rule,
        // not a hand-maintained allowlist that could quietly excuse a real page.
        expect(generated.sort()).toEqual(routes.filter((route) => !served.includes(route)).sort());
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

describe('publication gate', () => {
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

    it('is the one selection behind listing and routing, so a draft yields neither', () => {
        const selection = selectPublicNews([draft, published, alsoPublished]);

        // `NewsCarousel`/`NewsList` render this array as cards, and
        // `src/pages/news/[slug].astro` maps the same query to routes, so a draft
        // is absent from both surfaces at once instead of being listed without a
        // page or routed without a card.
        expect(selection.map((entry) => entry.id)).toEqual(['fixture-published-article', 'fixture-second-article']);
        expect(selection.map((entry) => `/news/${entry.id}/`)).toEqual([
            '/news/fixture-published-article/',
            '/news/fixture-second-article/',
        ]);
        expect(selectPublicNews([draft])).toEqual([]);
    });

    it('keeps the content schema fail-closed for a missing publication field', async () => {
        const schema = await readFile(resolve(websiteDirectory, 'src', 'content.config.ts'), 'utf8');

        expect(schema).toMatch(/publication:\s*z\s*\.enum\(\['draft', 'published'\]\)\s*\.default\('draft'\)/);
    });
});
