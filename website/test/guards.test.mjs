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
 * The two "a draft yields nothing" cases read a build this suite makes itself
 * out of its own fixture articles (see "The self-contained draft fixture"
 * below), so whether the guard has anything to check no longer depends on which
 * articles the repository happens to carry.
 *
 * It also pins both retirements: the landing-region name released for article
 * 001 and the surface-vehicle dossier released at step 003 (both 2026-09-17)
 * are no longer gated, while every other marker and every withheld path — the
 * whole mission timeline, the vehicle dossier's scene image on its own, and the
 * two Ariane 64 plates step 004 withheld — stays in force. The released Ariane
 * 64 plate must stay outside that set; the guard block at the bottom measures
 * both halves.
 */
import { execFile } from 'node:child_process';
import { existsSync, lstatSync, realpathSync } from 'node:fs';
import { copyFile, cp, mkdir, mkdtemp, readdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { execPath } from 'node:process';
import { promisify } from 'node:util';
import { afterAll, describe, expect, it } from 'vitest';

import {
    checkDist,
    collectGatedSources,
    gatedDirectoryNames,
    gatedSourceDirectories,
    gatedSourceFiles,
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
async function distText(directory) {
    const files = (await listFiles(directory)).filter((file) =>
        /\.(css|html|js|json|svg|txt|webmanifest|xml)$/.test(file)
    );
    const parts = [];
    for (const file of files) parts.push(stripMarkup(await readFile(file, 'utf8')));
    return collapse(parts.join('\n'));
}

/** All HTML the built site would serve, as one string. */
async function distHtml(directory) {
    const files = (await listFiles(directory)).filter((file) => file.endsWith('.html'));
    const parts = [];
    for (const file of files) parts.push(await readFile(file, 'utf8'));
    return parts.join('\n');
}

/**
 * All CSS the built site would apply: the inlined `<style>` blocks (Astro inlines
 * small scoped stylesheets) plus every emitted stylesheet.
 */
async function distStyles(directory) {
    const parts = [];
    for (const file of (await listFiles(directory)).filter((entry) => entry.endsWith('.css'))) {
        parts.push(await readFile(file, 'utf8'));
    }
    for (const file of (await listFiles(directory)).filter((entry) => entry.endsWith('.html'))) {
        const source = await readFile(file, 'utf8');
        for (const match of source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) parts.push(match[1]);
    }
    return parts.join('\n');
}

async function newsFiles(directory = newsDirectory) {
    return (await listFiles(directory)).filter((file) => file.endsWith('.mdx'));
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
async function publishedSlugs(directory = newsDirectory) {
    const slugs = [];
    for (const file of await newsFiles(directory)) {
        if ((await publicationState(file)) === 'published') slugs.push(basename(file, '.mdx'));
    }
    return slugs;
}

/** Slugs the site must neither list nor route. */
async function unpublishedSlugs(directory = newsDirectory) {
    const slugs = [];
    for (const file of await newsFiles(directory)) {
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

/*
 * ---------------------------------------------------------------------------
 * The self-contained draft fixture
 * ---------------------------------------------------------------------------
 *
 * The two cases below that assert "a draft produces nothing in the build" used
 * to loop over `unpublishedSlugs()` in the repository's own `website/news/`.
 * That made their input the repository's content state, and once the last draft
 * article was published (2026-09-17, card `t_b429a50d`) the loop iterated over
 * nothing but the `toBeGreaterThan(0)` fixture-presence assertion still fired:
 * a red suite that proved nothing about a leak, which is the opposite of what
 * those assertions exist for.
 *
 * The input is now a fixture this suite owns. A throwaway project root carries
 * the real site — `src/`, `scripts/`, `astro.config.mjs` — beside its own
 * `news/` directory holding two draft-shaped articles and one published
 * control, and the real Astro CLI builds it. The assertions therefore still
 * read a genuine build output, produced by the real listing and the real route
 * generator, while what is being checked no longer depends on which articles
 * the repository happens to hold.
 *
 * Why the fixture has to be *built* rather than written into a build that
 * already exists: `distText()`, `listRoutes()` and `distHtml()` read a build
 * output, so a draft written after the build was never in the build and the
 * assertion would pass without checking anything.
 *
 * Why it is built outside the repository: `website/` is shared by every profile
 * (`workspace_kind: dir`), so an article written into `website/news/` for the
 * length of one test would be picked up by a sibling card's concurrent
 * `npm run build` and by `test/news-listing.test.mjs`.
 *
 * The published control is not decoration — it is the non-vacuity half. A build
 * that rendered nothing at all would satisfy "the draft's body is not in the
 * build" and "the draft has no route" trivially, so the control's own route,
 * its card on both listing surfaces and its body in the same corpus are
 * asserted beside those claims.
 */

/** How long the fixture build may take before the case fails. */
const fixtureBuildTimeout = 180_000;

/** The draft-shaped article that says `publication: draft` outright. */
const fixtureDraft = {
    slug: '901-guard-fixture-draft',
    title: 'Guard fixture: an explicit draft no build may serve',
    closing: 'The explicit draft closes on this sentence, which no build may serve.',
    order: 901,
    publication: 'draft',
};

/** The draft-shaped article that omits `publication`, which must fail closed. */
const fixtureWithheldByDefault = {
    slug: '902-guard-fixture-withheld-by-default',
    title: 'Guard fixture: no publication field at all, held back by default',
    closing: 'The defaulted draft closes on this second sentence, which no build may serve.',
    order: 902,
    publication: undefined,
};

/** The published article that proves the fixture build really rendered news. */
const fixturePublishedControl = {
    slug: '903-guard-fixture-published-control',
    title: 'Guard fixture: the published control that proves the build is real',
    closing: 'The published control closes on this sentence, which the build must serve.',
    order: 903,
    publication: 'published',
};

const fixtureArticles = [fixtureDraft, fixtureWithheldByDefault, fixturePublishedControl];

/** One fixture article, written in the shape the content schema expects. */
function fixtureArticleSource({ title, closing, order, publication }) {
    const state = publication ? `publication: ${publication}\n` : '';
    return `---
title: '${title}'
category: Guard fixture
status: ${publication === 'published' ? 'Published' : 'Draft'}
${state}summary: 'An article the guard suite writes for itself into a throwaway project root.'
linkLabel: 'Guard fixture'
order: ${order}
---

${closing}
`;
}

/** The real site, minus its content directory, copied into the fixture root. */
const fixtureProjectEntries = ['src', 'public', 'scripts', 'astro.config.mjs', 'tsconfig.json', 'package.json'];

/**
 * Run the Astro CLI this project installs, in the given project root, and return
 * everything it printed. The CLI entry point is read from the installed
 * package's own `bin` field rather than hard-coded, so a packaging change fails
 * here with the path it could not find instead of a bare module error.
 */
async function astroBuild(root) {
    const manifest = JSON.parse(
        await readFile(resolve(websiteDirectory, 'node_modules', 'astro', 'package.json'), 'utf8'),
    );
    const cli = resolve(websiteDirectory, 'node_modules', 'astro', manifest.bin.astro);

    try {
        const { stdout, stderr } = await promisify(execFile)(execPath, [cli, 'build'], {
            cwd: root,
            maxBuffer: 32 * 1024 * 1024,
        });
        return `${stdout}${stderr}`;
    } catch (error) {
        const output = `${error.stdout ?? ''}${error.stderr ?? ''}`;
        throw new Error(`the fixture build failed in ${root}:\n${output || error.message}`);
    }
}

/**
 * A `node_modules` directory the fixture owns, holding one symlink per installed
 * package rather than one symlink to the shared tree.
 *
 * A single symlink to `website/node_modules` is not enough: Astro's `cacheDir`
 * defaults to `./node_modules/.astro`
 * (`astro/dist/core/config/schemas/defaults.js`), so a fixture root pointing at
 * the shared tree reads and writes the *shared* content-layer store — the same
 * store the repository's own build and every other fixture root use. Measured
 * 2026-09-17: this fixture's three articles landed in that one store, and the
 * sibling fixture build in the same `vitest run` died rendering this suite's
 * `903-guard-fixture-published-control` (`UnknownContentCollectionError`).
 * Linking the packages individually leaves `.astro` to be created inside the
 * throwaway root, where it is private and removed with the root.
 */
async function linkPackages(directory) {
    const shared = join(websiteDirectory, 'node_modules');
    await mkdir(directory, { recursive: true });

    for (const entry of await readdir(shared)) {
        // Dot entries are npm's own bookkeeping and the caches (`.astro`, `.vite`)
        // whose sharing is the defect; every installed package is a plain name.
        if (entry.startsWith('.')) continue;
        await symlink(join(shared, entry), join(directory, entry));
    }
}

/**
 * A throwaway project root holding the real site and its own `news/` directory,
 * with the real site build run in it.
 *
 * `src/lib/assets.ts` imports the canonical media from `../../../docs/...`, so
 * the root carries a `docs` symlink beside the copied `website/`; the packages
 * are linked in one by one rather than the shared `node_modules` being
 * symlinked, so the content-layer cache is the fixture's own (see
 * `linkPackages`). Nothing is written inside the repository, and
 * `temporaryDirectories` removes the whole root in `afterAll`.
 */
async function buildFixtureProject() {
    const root = await temporaryDirectory('rh-guard-draft-fixture-');
    const site = join(root, 'website');
    await mkdir(site, { recursive: true });

    for (const entry of fixtureProjectEntries) {
        await cp(join(websiteDirectory, entry), join(site, entry), { recursive: true });
    }
    await symlink(join(projectDirectory, 'docs'), join(root, 'docs'), 'dir');
    await linkPackages(join(site, 'node_modules'));

    const news = join(site, 'news');
    await mkdir(news, { recursive: true });
    for (const article of fixtureArticles) {
        await writeFile(join(news, `${article.slug}.mdx`), fixtureArticleSource(article));
    }

    await astroBuild(site);

    return { root, site, news, dist: join(site, 'dist') };
}

/** The fixture build, made once per suite run and shared by both cases below. */
let fixtureProjectBuild;
function fixtureBuild() {
    fixtureProjectBuild ??= buildFixtureProject();
    return fixtureProjectBuild;
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

    /*
     * The fixture build must not read or write another build's content-layer
     * store. Astro's `cacheDir` is `./node_modules/.astro` under the project
     * root, so a whole-tree symlink to the shared `website/node_modules` put
     * every fixture root — and the repository's own build — on one store, where
     * two fixture builds in one run fed each other's `news` entries and the
     * later one died (`UnknownContentCollectionError`, measured 2026-09-17).
     * A case rather than a line inside the builder: a builder that quietly
     * stopped isolating its cache would otherwise only show up as the next
     * fixture build failing, somewhere else.
     */
    it.runIf(hasBuild)("keeps the fixture build's content-layer cache inside its throwaway root", async () => {
        const fixture = await fixtureBuild();
        const nodeModules = join(fixture.site, 'node_modules');

        expect(
            lstatSync(nodeModules).isSymbolicLink(),
            'the fixture root points at the shared website/node_modules',
        ).toBe(false);

        const cache = realpathSync(join(nodeModules, '.astro'));
        expect(cache.startsWith(fixture.root), `the fixture's content-layer cache is ${cache}`).toBe(true);
        expect(
            cache.startsWith(websiteDirectory),
            `the fixture's content-layer cache is the shared one: ${cache}`,
        ).toBe(false);

        // Non-vacuity: the cache is the one this fixture build wrote, and it
        // holds this fixture's own articles rather than any other build's.
        const store = await readFile(join(cache, 'data-store.json'), 'utf8');
        expect(store, 'the fixture build wrote no content-layer store of its own').toContain(
            fixturePublishedControl.slug,
        );
    }, fixtureBuildTimeout);

    it.runIf(hasBuild)('keeps every unpublished article body out of the build', async () => {
        const fixture = await fixtureBuild();
        const corpus = await distText(fixture.dist);
        const checked = [];

        for (const slug of await unpublishedSlugs(fixture.news)) {
            const closing = await closingBodySentence(join(fixture.news, `${slug}.mdx`));
            expect(closing.length).toBeGreaterThan(20);
            expect(corpus, `${slug} is unpublished but its closing sentence reached the build`).not.toContain(closing);
            checked.push(slug);
        }

        expect(checked.length).toBeGreaterThan(0);

        // Non-vacuity: a fixture build that served no article body at all would
        // satisfy every assertion above without the guard having checked
        // anything, so the published control's body must be in that same corpus.
        const control = await closingBodySentence(join(fixture.news, `${fixturePublishedControl.slug}.mdx`));
        expect(corpus, 'the fixture build served no article body at all').toContain(control);
    }, fixtureBuildTimeout);

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

    it.runIf(hasBuild)('keeps an inactive carousel slide invisible, unfocusable, and in the flow', async () => {
        const styles = await distStyles(distDirectory);

        // `hidden` is the carousel's only hiding mechanism, and this component's
        // own `display: grid` beats the UA's `[hidden]` rule on its own. Without
        // the rule below a non-active slide stays rendered and its article link
        // stays tabbable (measured in the browser on the built homepage). It is
        // hidden with `visibility` rather than `display: none` because the slide
        // must keep its box: the carousel's height is the tallest slide of the
        // published set, so a hidden slide that leaves the flow resizes the
        // section and the page jumps on every switch (card `t_89b325e5`,
        // `test/news-carousel-height.test.mjs`). Astro scopes the selector, so
        // the `[hidden]` part is matched with the scope attribute in between.
        expect(styles).toMatch(/\.news-card[^{]*\[hidden\][^{]*\{[^}]*visibility:\s*hidden/);
        expect(styles, 'an inactive slide is taken out of the flow, which resizes the carousel').not.toMatch(
            /\.news-card[^{]*\[hidden\][^{]*\{[^}]*display:\s*none/,
        );
    });

    it.runIf(hasBuild)('renders no page, no listing entry, and no card for an unpublished article', async () => {
        const fixture = await fixtureBuild();
        const corpus = await distText(fixture.dist);
        const routes = await listRoutes(fixture.dist);
        const html = await distHtml(fixture.dist);
        const unpublished = [];

        for (const slug of await unpublishedSlugs(fixture.news)) {
            const file = join(fixture.news, `${slug}.mdx`);
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

        // Non-vacuity: the same build routes and lists the published control, so
        // the three assertions above are a withholding rather than a build that
        // emitted no newsroom at all.
        const published = await publishedSlugs(fixture.news);
        expect(published).toContain(fixturePublishedControl.slug);
        for (const slug of published) {
            expect(routes, `${slug} is published but the fixture build has no route for it`).toContain(
                `/news/${slug}/index.html`,
            );
        }
        for (const surface of ['index.html', 'news/index.html']) {
            const hrefs = cardLabelHrefs(await readFile(join(fixture.dist, surface), 'utf8'));
            expect(hrefs, `${surface} does not list the published fixture`).toContain(
                `/news/${fixturePublishedControl.slug}/`,
            );
        }
    }, fixtureBuildTimeout);
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

describe('guard retirement: the released vehicle material and the withheld scene image', () => {
    /*
     * Two release decisions of 2026-09-17 are pinned here, each conditioned on
     * the rest of the guard set staying intact, so both halves of each are
     * asserted: the withheld markers and withheld files still fail a build, and
     * the released material passes one.
     *
     *  - the human story owner released the landing-region name for article 001
     *    (`docs/SCENARIO.md` §Continuity and release controls);
     *  - step 003 released the surface-vehicle dossier's prose and its approved
     *    studio references (`.agents/work/reviews/003-vehicle-design.md` §8.1),
     *    which is why the dossier's directory name is no longer withheld.
     *
     * The scene image is the part step 003 did not release, and it is why this
     * block is shaped the way it is: retiring the directory name took away the
     * only rule that protected that file, so it now has a per-file rule that
     * both scanners enforce. The landing-region coordinate markers are read
     * through `gatedTextMarkers` rather than written out here.
     */
    it('gates the coordinate markers only, and retires both released names', () => {
        expect(gatedTextMarkers).not.toContain('Asteria');
        expect(gatedTextMarkers).not.toContain('RH-01');
        expect(gatedTextMarkers).not.toContain('Pathfinder');
        // The count is asserted instead of the values, so this file carries no
        // withheld coordinate: two markers stay, and no third joins them.
        expect(gatedTextMarkers).toHaveLength(2);
    });

    it('retires the vehicle dossier directory and keeps the timeline withheld', () => {
        expect(gatedDirectoryNames).toContain('timeline');
        expect(gatedDirectoryNames).not.toContain('vehicle');
        // Non-vacuity for the per-file rule below: exactly two files are
        // withheld individually — the surface-vehicle dossier's scene image and
        // the one Ariane 64 plate step 004 withheld that step 005 did not
        // release (the pad lift-off plate was retired on the 005 build card).
        expect(gatedSourceFiles.map((file) => basename(file)).sort()).toEqual([
            'contact-arm-scene.png',
            'travelling-to-mars.png',
        ]);
    });

    it('passes a build output that carries the released vehicle strings', async () => {
        const sources = await collectGatedSources();
        const dist = await temporaryDirectory('rh-guard-vehicle-released-');
        await mkdir(join(dist, 'news'), { recursive: true });
        await writeFile(
            join(dist, 'news', 'index.html'),
            '<p>RH-01 Pathfinder is a fictional surface vehicle, shown here in its studio baseline configuration.</p>',
        );

        expect(await checkDist({ directory: dist, sources })).toEqual([]);
    });

    it('passes a source reference into the released vehicle dossier', async () => {
        const root = await temporaryDirectory('rh-guard-vehicle-reference-');
        const file = join(root, 'src', 'lib', 'planted.ts');
        await mkdir(join(root, 'src', 'lib'), { recursive: true });
        await writeFile(file, `import plate from '../../../docs/vehicles/pathfinder/canonical.png';\n`);

        expect(await scanSourceForGatedReferences({ directory: root })).toEqual([]);
    });

    it('still fails a source reference that resolves to the withheld scene image', async () => {
        const root = await temporaryDirectory('rh-guard-scene-reference-');
        const file = join(root, 'src', 'lib', 'planted.ts');
        await mkdir(join(root, 'src', 'lib'), { recursive: true });
        /*
         * Written so this file holds no literal path into the withheld file: the
         * `./` segment is normalised away by the resolution, which is then the
         * only reason the offence fires. The literal half of the rule is pinned
         * by the case after this one.
         */
        const withheld = gatedSourceFiles[0];
        const reference = `${relative(dirname(file), dirname(withheld))}/./${basename(withheld)}`;
        await writeFile(file, `import scene from '${reference}';\n`);

        const offences = await scanSourceForGatedReferences({ directory: root });

        expect(offences.map((offence) => offence.kind)).toEqual(['gated-file-reference']);
        expect(offences[0].file).toBe(file);
        expect(offences[0].detail).toBe(reference);
    });

    it('still fails a source file that names the withheld scene image outright', async () => {
        const root = await temporaryDirectory('rh-guard-scene-literal-');
        const file = join(root, 'src', 'pages', 'planted.astro');
        await mkdir(join(root, 'src', 'pages'), { recursive: true });
        const withheld = relative(projectDirectory, gatedSourceFiles[0]).split('/').join('/');
        await writeFile(file, `<img src="/${withheld}" alt="" />\n`);

        const offences = await scanSourceForGatedReferences({ directory: root });

        expect(offences.map((offence) => offence.kind)).toContain('gated-file');
        expect(offences[0].file).toBe(file);
    });

    it('still fails a build output that carries the withheld scene image', async () => {
        const sources = await collectGatedSources();
        const source = sources.find((entry) => basename(entry.path) === basename(gatedSourceFiles[0]));
        expect(source, 'the withheld scene image is not in the withheld-source set').toBeDefined();

        // A copied file fails by name and by content hash...
        const copied = await temporaryDirectory('rh-guard-scene-copied-');
        await mkdir(join(copied, 'assets'), { recursive: true });
        await copyFile(source.path, join(copied, 'assets', source.name));
        const copiedKinds = (await checkDist({ directory: copied, sources })).map((offence) => offence.kind);

        expect(copiedKinds).toContain('gated-name');
        expect(copiedKinds).toContain('gated-content');

        // ...and a re-encoded derivative fails by leading name token, which is
        // the name an emitted copy of it would carry.
        const emitted = await temporaryDirectory('rh-guard-scene-emitted-');
        await mkdir(join(emitted, '_astro'), { recursive: true });
        await writeFile(join(emitted, '_astro', `${source.stem}.ABCD1234.webp`), 're-encoded placeholder bytes');
        const emittedKinds = (await checkDist({ directory: emitted, sources })).map((offence) => offence.kind);

        expect(emittedKinds).toContain('gated-name-stem');
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

describe('guard scope: the Ariane 64 plates step 004 withheld', () => {
    /*
     * Step 004's plate review (card A, `t_58c90eb5`) admitted one plate for
     * the public `launch-vehicle-reference` key and withheld two plates
     * fail-closed: the pad lift-off (`lunch.png`) and the in-transit plate.
     * Step 005 released the pad lift-off on 2026-09-19
     * (`.agents/work/reviews/005-launch.md` §10) and the 005 build card
     * retired it from this guard set, so the remaining withheld plate below
     * carries the same per-file rule as the surface-vehicle scene image, and
     * the released designations are deliberately outside it — a marker that
     * gated a released plate would be the wrong direction for this release.
     * Both halves are measured here: a reference into the withheld plate fails
     * the source scan, a copied or re-encoded derivative of it fails the build
     * output, the retired pad lift-off plate passes everywhere, and the
     * released studio plate keeps passing everywhere.
     */
    const withheldArianePlates = ['travelling-to-mars.png'];

    it('withholds exactly the one Ariane 64 plate still gated and keeps the released plates out', () => {
        const names = gatedSourceFiles.map((file) => basename(file));
        for (const name of withheldArianePlates) {
            expect(names).toContain(name);
        }
        expect(names).not.toContain('lunch.png');
        expect(names).not.toContain('canonical.png');
    });

    it('passes a source reference into the released Ariane 64 plates', async () => {
        const root = await temporaryDirectory('rh-guard-ariane-released-');
        const file = join(root, 'src', 'lib', 'planted.ts');
        await mkdir(join(root, 'src', 'lib'), { recursive: true });
        await writeFile(
            file,
            "import studio from '../../../docs/vehicles/ariane/canonical.png';\nimport liftOff from '../../../docs/vehicles/ariane/lunch.png';\n",
        );

        expect(await scanSourceForGatedReferences({ directory: root })).toEqual([]);
    });

    it('passes a build output that carries the released Ariane 64 plate derivatives', async () => {
        const sources = await collectGatedSources();
        const dist = await temporaryDirectory('rh-guard-ariane-released-dist-');
        await mkdir(join(dist, '_astro'), { recursive: true });
        await writeFile(join(dist, '_astro', 'canonical.ABCD1234.webp'), 're-encoded placeholder bytes');
        await writeFile(join(dist, '_astro', 'lunch.ABCD1234.webp'), 're-encoded placeholder bytes');

        expect(await checkDist({ directory: dist, sources })).toEqual([]);
    });

    for (const withheldName of withheldArianePlates) {
        it(`still fails a source reference that resolves to the withheld ${withheldName}`, async () => {
            const root = await temporaryDirectory('rh-guard-ariane-reference-');
            const file = join(root, 'src', 'lib', 'planted.ts');
            await mkdir(join(root, 'src', 'lib'), { recursive: true });
            const withheld = gatedSourceFiles.find((entry) => basename(entry) === withheldName);
            expect(withheld, `${withheldName} is not in the withheld-source set`).toBeDefined();
            /*
             * Written so this file holds no literal path into the withheld
             * file: the `./` segment is normalised away by the resolution,
             * which is then the only reason the offence fires.
             */
            const reference = `${relative(dirname(file), dirname(withheld))}/./${basename(withheld)}`;
            await writeFile(file, `import plate from '${reference}';\n`);

            const offences = await scanSourceForGatedReferences({ directory: root });

            expect(offences.map((offence) => offence.kind)).toEqual(['gated-file-reference']);
            expect(offences[0].file).toBe(file);
            expect(offences[0].detail).toBe(reference);
        });

        it(`still fails a source file that names the withheld ${withheldName} outright`, async () => {
            const root = await temporaryDirectory('rh-guard-ariane-literal-');
            const file = join(root, 'src', 'pages', 'planted.astro');
            await mkdir(join(root, 'src', 'pages'), { recursive: true });
            const withheld = gatedSourceFiles.find((entry) => basename(entry) === withheldName);
            expect(withheld, `${withheldName} is not in the withheld-source set`).toBeDefined();
            const withheldPath = relative(projectDirectory, withheld).split('/').join('/');
            await writeFile(file, `<img src="/${withheldPath}" alt="" />\n`);

            const offences = await scanSourceForGatedReferences({ directory: root });

            expect(offences.map((offence) => offence.kind)).toContain('gated-file');
            expect(offences[0].file).toBe(file);
        });

        it(`still fails a build output that carries the withheld ${withheldName} or a derivative`, async () => {
            const sources = await collectGatedSources();
            const source = sources.find((entry) => basename(entry.path) === withheldName);
            expect(source, `${withheldName} is not in the withheld-source set`).toBeDefined();

            // A copied file fails by name and by content hash...
            const copied = await temporaryDirectory('rh-guard-ariane-copied-');
            await mkdir(join(copied, 'assets'), { recursive: true });
            await copyFile(source.path, join(copied, 'assets', source.name));
            const copiedKinds = (await checkDist({ directory: copied, sources })).map((offence) => offence.kind);

            expect(copiedKinds).toContain('gated-name');
            expect(copiedKinds).toContain('gated-content');

            // ...and a re-encoded derivative fails by leading name token,
            // which is the name an emitted copy of it would carry.
            const emitted = await temporaryDirectory('rh-guard-ariane-emitted-');
            await mkdir(join(emitted, '_astro'), { recursive: true });
            await writeFile(join(emitted, '_astro', `${source.stem}.ABCD1234.webp`), 're-encoded placeholder bytes');
            const emittedKinds = (await checkDist({ directory: emitted, sources })).map((offence) => offence.kind);

            expect(emittedKinds).toContain('gated-name-stem');
        });
    }
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
