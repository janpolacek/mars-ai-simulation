/*
 * Listing contract suite: a published item reaches the public site without any
 * per-article edit.
 *
 * One frontmatter field decides all three surfaces — the homepage carousel, the
 * newsroom index and the `/news/<slug>/` routes — because all three consume the
 * one published selection (`src/features/news/query.ts` → `src/lib/publication.ts`).
 * This suite asserts that the *built site* shows exactly that set, so a future
 * change that makes a surface read a second, hand-edited list fails here.
 *
 * The unit half runs without a build: it is the count > 1 case, driven by
 * fixtures rather than by publishing a second article. The build half runs
 * against `dist/` when one exists, and is what the CI job's build-before-test
 * order makes run rather than skip.
 *
 * The build half has two inputs, deliberately. The *published* set is measured
 * against the real `dist/`, because that is the shipped build and this suite's
 * subject. The *withheld* set is measured against a build this suite makes for
 * itself out of its own fixture articles (see "The self-contained draft fixture"
 * below): `website/news/` no longer holds a draft to check — both articles are
 * published (2026-09-17, card `t_b429a50d`) — and a `for` loop over an empty list
 * reports green while checking nothing.
 *
 * Where a helper overlaps `guards.test.mjs`, the assertion is kept here in the
 * card's own file on purpose: the carousel slide count and the `01 / 0N` counter
 * are this suite's subject, and the two suites must not need each other. The
 * fixture below is restated in the shape the guards review settled on, for the
 * same reason — see the note at the fixture for why it is not a shared module.
 */
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { cp, mkdir, mkdtemp, readdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import { execPath } from 'node:process';
import { promisify } from 'node:util';
import { afterAll, describe, expect, it } from 'vitest';

import { listFiles, listRoutes, projectDirectory, websiteDirectory } from '../scripts/guards.mjs';
import { selectPublicNews } from '../src/lib/publication';

const distDirectory = resolve(websiteDirectory, 'dist');
const newsDirectory = resolve(websiteDirectory, 'news');
const hasBuild = existsSync(join(distDirectory, 'index.html'));

/** Collapse runs of whitespace, as a reader would see the rendered text. */
const collapse = (value) => value.replace(/\s+/g, ' ').trim();

/** Read one frontmatter value without pulling in a YAML parser. */
async function frontmatterValue(file, key) {
    const source = await readFile(file, 'utf8');
    const block = source.match(/^---\n([\s\S]*?)\n---/);
    if (!block) return undefined;
    const line = block[1].split('\n').find((candidate) => candidate.startsWith(`${key}:`));
    return line?.slice(key.length + 1).trim().replace(/^['"]|['"]$/g, '');
}

/** The publication state the content schema applies: a missing field is `draft`. */
async function publicationState(file) {
    return (await frontmatterValue(file, 'publication')) ?? 'draft';
}

/** Slugs the site must both list and route. */
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

async function newsFiles(directory = newsDirectory) {
    return (await listFiles(directory)).filter((file) => file.endsWith('.mdx'));
}

/** How many times a pattern matches — not how many lines, which is what `grep -c` counts. */
function countMatches(html, pattern) {
    return (html.match(pattern) ?? []).length;
}

/**
 * The carousel counter as rendered text. The markup is
 * `<span class="carousel-count"><span id="current-news">01</span> / 02</span>`, so
 * the number and its total sit in different nodes and the tags have to be dropped
 * before the string can be compared. Astro's scope attribute sits on both spans.
 */
function carouselCounterText(html) {
    const region = html.match(/class="carousel-count"[^>]*>([\s\S]*?)<button/)?.[1];
    if (region === undefined) return undefined;
    return collapse(region.replace(/<[^>]*>/g, ' '));
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
 * The two withheld-item assertions below used to loop over `unpublishedSlugs()`
 * in the repository's own `website/news/`. That made their input the repository's
 * content state, and once the last draft article was published (2026-09-17, card
 * `t_b429a50d`) the loops iterated over nothing while both cases still reported
 * green — silent coverage loss, which is the opposite of what those assertions
 * exist for.
 *
 * The input is now a fixture this suite owns: a throwaway project root carrying
 * the real site — `src/`, `public/`, `scripts`, `astro.config.mjs` — beside its
 * own `news/` directory holding two draft-shaped articles and one published
 * control, built by the real Astro CLI. The assertions therefore still read a
 * genuine build output produced by the real listing and the real route
 * generator, while what is being checked no longer depends on which articles the
 * repository happens to hold.
 *
 * Why the fixture has to be *built* rather than written into a build that
 * already exists: these assertions read `index.html` and `news/index.html` from
 * a build output, so a draft written after the build was never in the build and
 * the assertion would pass without checking anything.
 *
 * Why it is built outside the repository: `website/` is shared by every profile
 * (`workspace_kind: dir`), so an article written into `website/news/` for the
 * length of one test would be picked up by a sibling card's concurrent
 * `npm run build` and by the other suites.
 *
 * Why this is a second copy rather than a module shared with `guards.test.mjs`:
 * the two suites are deliberately independent — neither may need the other's
 * test-time machinery — and the two fixtures carry different articles feeding
 * different assertions, so a shared builder would be parameterised for one call
 * site each. The approach is what is shared, not the code, and it is the one
 * already reviewed in `guards.test.mjs`.
 *
 * The published control is the non-vacuity half: a build that rendered no card
 * at all would satisfy "the withheld item is not linked" trivially, so the
 * control's own card is asserted on the same fixture page, and the withheld set
 * itself is asserted to be the two articles named here.
 */

/** Throwaway roots, removed once the suite has run. */
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

/** How long the fixture build may take before a case fails. */
const fixtureBuildTimeout = 180_000;

/** The fixture, named in every failure message so a broken fixture is obvious. */
const fixtureName = 'the listing fixture (rh-listing-draft-fixture-*)';

/** The draft-shaped article that says `publication: draft` outright. */
const fixtureDraft = {
    slug: '801-listing-fixture-draft',
    title: 'Listing fixture: an explicit draft no listing may link',
    closing: 'The explicit draft closes on this sentence, which no listing may link.',
    order: 801,
    publication: 'draft',
};

/** The draft-shaped article that omits `publication`, which must fail closed. */
const fixtureWithheldByDefault = {
    slug: '802-listing-fixture-withheld-by-default',
    title: 'Listing fixture: no publication field at all, held back by default',
    closing: 'The defaulted draft closes on this second sentence, which no listing may link.',
    order: 802,
    publication: undefined,
};

/** The published article that proves the fixture build really rendered a newsroom. */
const fixturePublishedControl = {
    slug: '803-listing-fixture-published-control',
    title: 'Listing fixture: the published control that proves the build is real',
    closing: 'The published control closes on this sentence, which the build must link.',
    order: 803,
    publication: 'published',
};

const fixtureArticles = [fixtureDraft, fixtureWithheldByDefault, fixturePublishedControl];

/** One fixture article, written in the shape the content schema expects. */
function fixtureArticleSource({ title, closing, order, publication }) {
    const state = publication ? `publication: ${publication}\n` : '';
    return `---
title: '${title}'
category: Listing fixture
status: ${publication === 'published' ? 'Published' : 'Draft'}
${state}summary: 'An article the listing suite writes for itself into a throwaway project root.'
linkLabel: 'Listing fixture'
order: ${order}
---

${closing}
`;
}

/** The real site, minus its content directory, copied into the fixture root. */
const fixtureProjectEntries = ['src', 'public', 'scripts', 'astro.config.mjs', 'tsconfig.json', 'package.json'];

/**
 * Run the Astro CLI this project installs, in the given project root, and return
 * everything it printed. The CLI entry point is read from the installed package's
 * own `bin` field rather than hard-coded, so a packaging change fails here with
 * the path it could not find instead of a bare module error.
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
 * (`astro/dist/core/config/schemas/defaults.js`), so every fixture root pointing
 * at the shared tree also shares one content-layer store and one config digest.
 * Two fixture builds in the same test run then read each other's `news` entries
 * and the later build cannot render the earlier one's articles — measured
 * 2026-09-17, this suite's build failed on the guards fixture's
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
    const root = await temporaryDirectory('rh-listing-draft-fixture-');
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

/**
 * The withheld articles the two cases below assert against, read from the
 * fixture's own `news/` directory. Each case asserts the set it got, so a fixture
 * that lost a draft fails that case instead of quietly reducing the loop to zero
 * iterations.
 */
async function fixtureWithheldSlugs(fixture) {
    return unpublishedSlugs(fixture.news);
}

describe('the published selection is the listing set', () => {
    /**
     * More than one published item, in scrambled frontmatter order, plus a draft
     * and an item with no `publication` field at all. The schema defaults that
     * missing field to `draft` (`src/content.config.ts`), so it must be held back
     * exactly like the explicit draft.
     */
    const fixtures = [
        { id: '003-third-mission-update', data: { publication: 'published', order: 3 } },
        { id: '001-project-announcement', data: { publication: 'published', order: 1 } },
        { id: '004-unreleased', data: { publication: 'draft', order: 4 } },
        { id: '002-payload-selection', data: { publication: 'published', order: 2 } },
        { id: '005-no-state-declared', data: { order: 5 } },
    ];

    it('selects every published item, in frontmatter order, and nothing else', () => {
        const selected = selectPublicNews(fixtures);

        expect(selected.length).toBeGreaterThan(1);
        expect(selected.map((entry) => entry.id)).toEqual([
            '001-project-announcement',
            '002-payload-selection',
            '003-third-mission-update',
        ]);
    });

    it('holds back a draft and an item that declares no publication state', () => {
        const selected = selectPublicNews(fixtures);

        expect(selected.map((entry) => entry.id)).not.toContain('004-unreleased');
        expect(selected.map((entry) => entry.id)).not.toContain('005-no-state-declared');
    });

    it('gives one listing entry per published item, so no surface can disagree', () => {
        expect(selectPublicNews(fixtures).length).toBe(3);
    });

    /**
     * The regression this card exists to prevent: a surface reading its own list.
     */
    it('drives the carousel, the newsroom index and the route generator from the one query', async () => {
        const consumers = [
            'src/features/news/NewsCarousel.astro',
            'src/features/news/NewsList.astro',
            'src/pages/news/[slug].astro',
        ];

        for (const consumer of consumers) {
            const source = await readFile(join(websiteDirectory, consumer), 'utf8');
            expect(source, `${consumer} does not use the published query`).toMatch(
                /import \{ getPublishedNews \} from '[^']*query'/,
            );
        }
    });
});

describe('the built site lists every published item', () => {
    it.runIf(hasBuild)('renders one carousel slide per published item, and the matching counter', async () => {
        const html = await readFile(join(distDirectory, 'index.html'), 'utf8');
        const published = await publishedSlugs();

        expect(published.length, 'no published item to assert against').toBeGreaterThan(0);

        // One slide and one article link per published item. Counted, not assumed:
        // `class="news-card` cannot match the `news-carousel` wrapper or the client
        // script's `.news-card` selector literal, but the count must still be exact.
        expect(countMatches(html, /class="news-card\b/g)).toBe(published.length);
        expect(cardLabelHrefs(html).length).toBe(published.length);

        // The counter starts at the first slide and totals the whole published set.
        expect(carouselCounterText(html)).toBe(`01 / ${String(published.length).padStart(2, '0')}`);

        for (const slug of published) {
            expect(cardLabelHrefs(html), `the carousel does not link ${slug}`).toContain(`/news/${slug}/`);
        }

        // The withheld half, on the fixture build: `dist/` holds no draft to
        // check, and a loop over an empty list would prove nothing.
        const fixture = await fixtureBuild();
        const fixtureHtml = await readFile(join(fixture.dist, 'index.html'), 'utf8');
        const withheld = await fixtureWithheldSlugs(fixture);

        expect(withheld.sort(), `${fixtureName} no longer holds both withheld articles`).toEqual(
            [fixtureDraft.slug, fixtureWithheldByDefault.slug].sort(),
        );

        for (const slug of withheld) {
            expect(fixtureHtml, `${slug} is withheld but the carousel links /news/${slug}/`).not.toContain(
                `/news/${slug}/`,
            );
        }

        expect(cardLabelHrefs(fixtureHtml), `${fixtureName} rendered no carousel card at all`).toContain(
            `/news/${fixturePublishedControl.slug}/`,
        );
    }, fixtureBuildTimeout);

    it.runIf(hasBuild)('lists every published item on /news/ and links it to a generated route', async () => {
        const html = await readFile(join(distDirectory, 'news', 'index.html'), 'utf8');
        const routes = new Set(await listRoutes());
        const published = await publishedSlugs();
        const hrefs = cardLabelHrefs(html);

        expect(countMatches(html, /class="news-card\b/g)).toBe(published.length);
        expect(hrefs.length).toBe(published.length);
        expect(html, 'the index still renders an inert card label').not.toMatch(/<span class="card-label"/);

        for (const slug of published) {
            expect(hrefs, `the index does not list ${slug}`).toContain(`/news/${slug}/`);
            expect(routes, `${slug} is listed but has no route`).toContain(`/news/${slug}/index.html`);
        }
        for (const href of hrefs) {
            expect(href, 'a card label has no href').toBeTruthy();
            expect(routes.has(`${href}index.html`), `${href} is linked but has no route`).toBe(true);
        }

        // The withheld half, on the fixture build: the newsroom index in `dist/`
        // has no draft to leave out, so the fixture's own index is measured.
        const fixture = await fixtureBuild();
        const fixtureHtml = await readFile(join(fixture.dist, 'news', 'index.html'), 'utf8');
        const withheld = await fixtureWithheldSlugs(fixture);

        expect(withheld.sort(), `${fixtureName} no longer holds both withheld articles`).toEqual(
            [fixtureDraft.slug, fixtureWithheldByDefault.slug].sort(),
        );

        for (const slug of withheld) {
            expect(fixtureHtml, `${slug} is withheld but the newsroom index lists it`).not.toContain(`/news/${slug}/`);
        }

        expect(cardLabelHrefs(fixtureHtml), `${fixtureName} rendered no newsroom card at all`).toContain(
            `/news/${fixturePublishedControl.slug}/`,
        );
    }, fixtureBuildTimeout);
});
