/*
 * Simulated record date suite: the field is optional, a present value renders
 * under its label, and no machine-readable date reaches the built site.
 *
 * The field (`src/content.config.ts`, news collection) is the date, inside the
 * fiction, on which an article was written. `mars-ai-simulator-editor` assigns
 * and verifies the value, so this suite's job is the contract around it, not the
 * dates themselves: an article that carries none must build and render nothing,
 * an article that carries one must state it under the exact label
 * `Simulated record date`, and neither shape may produce a real publication,
 * modification or sitemap date.
 *
 * The three halves are deliberately different inputs, because each can only
 * prove part of that:
 *
 * - the unit half reads `src/lib/simulated-date.ts` directly — the wording, the
 *   accepted shape and the two frontmatter shapes (`string`, and the `Date` an
 *   unquoted `YYYY-MM-DD` parses into) — with no build involved;
 * - the built-site half reads the real `dist/` and pairs every published
 *   article's frontmatter with its own page, so the two must agree in both
 *   directions: a page may state the date only if its frontmatter declares one,
 *   and a declaration must be stated. That is also what proves the field is
 *   optional *in a real build* — the build ran with articles that declare none;
 * - the fixture half is the only input that can prove a value renders at all,
 *   because no article in `website/news/` carries one yet. It builds the real
 *   site in a throwaway root with two fixture articles of its own, one carrying
 *   an unquoted `simulatedDate` (the shape the editorial card writes) and one
 *   omitting the field entirely.
 *
 * The fixture is built rather than written into an existing build: an article
 * written after the build was never in it, so the assertions would pass without
 * checking anything. It is built outside the repository because `website/` is
 * shared by every profile (`workspace_kind: dir`) and a fixture article inside
 * `website/news/` would be picked up by a sibling card's concurrent build and by
 * every other suite. The approach is the one already reviewed in
 * `news-listing.test.mjs` — a copy of the real site beside its own `news/`
 * directory, built by the real Astro CLI, with the packages linked one by one so
 * the content-layer cache (`node_modules/.astro`) stays inside the throwaway
 * root. The suites stay independent on purpose and share the approach, not code.
 */
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { cp, mkdir, mkdtemp, readdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import { execPath } from 'node:process';
import { promisify } from 'node:util';
import { afterAll, describe, expect, it } from 'vitest';

import { listFiles, projectDirectory, websiteDirectory } from '../scripts/guards.mjs';
import { formatSimulatedDate, simulatedDateLabel, simulatedDateText, toCalendarDate } from '../src/lib/simulated-date';

const distDirectory = resolve(websiteDirectory, 'dist');
const newsDirectory = resolve(websiteDirectory, 'news');
const configFile = resolve(websiteDirectory, 'src', 'content.config.ts');
const hasBuild = existsSync(join(distDirectory, 'index.html'));

/**
 * Every token a machine-readable date could be emitted as. A `<time>` element
 * needs a `datetime`, so the element name alone is an offence; the site ships no
 * sitemap and no JSON-LD, so their names appearing at all is one too.
 */
const machineDateTokens = [
    'datePublished',
    'dateModified',
    'lastmod',
    'article:published_time',
    'article:modified_time',
    'og:updated_time',
    'application/ld+json',
    '<time',
    'datetime=',
    '<sitemap',
];

/** How many times a fixed string occurs — a count, not a line (built HTML is one line). */
function countOccurrences(html, text) {
    return html.split(text).length - 1;
}

/** The frontmatter block of an article, or the empty string when it has none. */
async function frontmatter(file) {
    const source = await readFile(file, 'utf8');
    return source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
}

/** The raw value a frontmatter line declares, unquoted; `undefined` when absent. */
async function frontmatterValue(file, key) {
    const line = (await frontmatter(file)).split('\n').find((candidate) => candidate.startsWith(`${key}:`));
    if (line === undefined) return undefined;
    return line.slice(key.length + 1).trim().replace(/^['"]|['"]$/g, '');
}

/** Slugs the site must both list and route: the schema's `publication` predicate. */
async function publishedSlugs() {
    const slugs = [];
    for (const file of await listFiles(newsDirectory)) {
        if (!file.endsWith('.mdx')) continue;
        if ((await frontmatterValue(file, 'publication')) === 'published') slugs.push(basename(file, '.mdx'));
    }
    return slugs;
}

/** Every built HTML document under a directory, as `{ file, html }`. */
async function builtPages(directory) {
    const pages = [];
    for (const file of await listFiles(directory)) {
        if (!file.endsWith('.html')) continue;
        pages.push({ file, html: await readFile(file, 'utf8') });
    }
    return pages;
}

/** Assert that no built page emits any machine-readable form of a date. */
async function expectNoMachineDate(directory, label) {
    const pages = await builtPages(directory);
    expect(pages.length, `${label} holds no built page, so this check would pass vacuously`).toBeGreaterThan(1);

    for (const page of pages) {
        for (const token of machineDateTokens) {
            expect(page.html, `${page.file} emits ${token}`).not.toContain(token);
        }
    }
}

describe('the simulated record date is in-fiction prose', () => {
    it('labels it as a date inside the fiction, in one fixed wording', () => {
        expect(simulatedDateLabel).toBe('Simulated record date');
        expect(simulatedDateText('2026-10-12')).toBe('Simulated record date · 12 October 2026');
    });

    it('states the value en-GB, with the month spelled out and no padded day', () => {
        expect(formatSimulatedDate('2026-10-12')).toBe('12 October 2026');
        expect(formatSimulatedDate('2027-03-19')).toBe('19 March 2027');
        expect(formatSimulatedDate('2029-07-13')).toBe('13 July 2029');
        expect(formatSimulatedDate('2026-01-05')).toBe('5 January 2026');

        // One case per month, so a wrong name in the table cannot hide behind
        // the three dates the milestones happen to use.
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        months.forEach((month, index) => {
            expect(formatSimulatedDate(`2026-${String(index + 1).padStart(2, '0')}-09`)).toBe(`9 ${month} 2026`);
        });
    });

    /*
     * Both shapes the YAML frontmatter can deliver, and the same wording from
     * each: a bare `2026-10-12` is a UTC-midnight `Date` once parsed (js-yaml),
     * a quoted one stays a string. The formatter reads the UTC fields, so a
     * local timezone cannot shift the day.
     */
    it('renders the same wording whether the frontmatter value arrived as a string or as a Date', () => {
        expect(toCalendarDate('2026-10-12')).toBe('2026-10-12');
        expect(toCalendarDate(new Date('2026-10-12'))).toBe('2026-10-12');
        expect(simulatedDateText(new Date('2026-10-12'))).toBe(simulatedDateText('2026-10-12'));
    });

    it('refuses a value that states no calendar date instead of rendering a broken one', () => {
        for (const value of ['12 October 2026', '2026/10/12', '2026-1-1', '2026-13-01', '2026-00-10', '']) {
            expect(toCalendarDate(value), `${value} is not a YYYY-MM-DD calendar date`).toBeUndefined();
            expect(formatSimulatedDate(value), `${value} was formatted anyway`).toBeUndefined();
            expect(simulatedDateText(value)).toBeUndefined();
        }

        expect(toCalendarDate(new Date('nonsense'))).toBeUndefined();
    });

    /*
     * The card that builds the field may not widen it: the wiki collection has
     * its own schema, and a date of writing belongs to a news item.
     */
    it('declares the field for the news collection and not for the wiki collection', async () => {
        const source = await readFile(configFile, 'utf8');
        const wikiStart = source.indexOf('const wiki = defineCollection');
        expect(wikiStart, 'the content config no longer declares a wiki collection').toBeGreaterThan(-1);

        expect(source.slice(0, wikiStart), 'the news schema does not declare simulatedDate').toContain('simulatedDate');
        expect(source.slice(wikiStart), 'the wiki schema declares simulatedDate').not.toContain('simulatedDate');
    });
});

describe('the built site pairs every page with what its frontmatter declares', () => {
    it.runIf(hasBuild)('states the date on exactly the articles that declare one', async () => {
        const published = await publishedSlugs();
        expect(published.length, 'no published article to assert against').toBeGreaterThan(0);

        for (const slug of published) {
            const file = join(newsDirectory, `${slug}.mdx`);
            const page = join(distDirectory, 'news', slug, 'index.html');
            expect(existsSync(page), `${slug} is published but has no built page to read`).toBe(true);

            const html = await readFile(page, 'utf8');
            const declared = await frontmatterValue(file, 'simulatedDate');
            const occurrences = countOccurrences(html, simulatedDateLabel);

            if (declared === undefined) {
                expect(occurrences, `${slug} states a simulated record date its frontmatter does not declare`).toBe(0);
                continue;
            }

            const text = simulatedDateText(declared);
            expect(text, `${slug} declares a simulatedDate this site cannot render: ${declared}`).toBeTruthy();
            expect(occurrences, `${slug} declares a simulated record date but states it ${occurrences} times`).toBe(1);
            expect(html, `${slug} does not state its simulated record date as ${text}`).toContain(text);
        }
    });

    it.runIf(hasBuild)('emits no machine-readable date anywhere in dist/', async () => {
        await expectNoMachineDate(distDirectory, 'the site build');
    });
});

/*
 * ---------------------------------------------------------------------------
 * The self-contained fixture
 * ---------------------------------------------------------------------------
 *
 * Two fixture articles, both published: one that declares an unquoted
 * `simulatedDate`, and one that omits the field. The dated one is what proves a
 * value reaches the page (and the card) under the label; the undated one is what
 * proves the field is optional in a build, and it is the non-vacuity control —
 * the same fixture page must carry the dated article's line and no line for the
 * other.
 */

/** Throwaway roots, removed once the suite has run. */
const temporaryDirectories = [];

afterAll(async () => {
    for (const directory of temporaryDirectories) {
        await rm(directory, { recursive: true, force: true });
    }
});

/** How long the fixture build may take before a case fails. */
const fixtureBuildTimeout = 180_000;

/** The fixture, named in every failure message so a broken fixture is obvious. */
const fixtureName = 'the simulated-date fixture (rh-simdate-fixture-*)';

/** The article that carries the unquoted date the editorial card writes. */
const datedArticle = {
    slug: '901-simulated-date-fixture-dated',
    title: 'Simulated date fixture: an article that states when it was written',
    order: 901,
    simulatedDate: '2026-10-12',
};

/** The article that declares no date at all, which must build and state none. */
const undatedArticle = {
    slug: '902-simulated-date-fixture-undated',
    title: 'Simulated date fixture: an article whose date of writing is not yet decided',
    order: 902,
    simulatedDate: undefined,
};

/**
 * One fixture article, in the shape the content schema expects. An unquoted
 * `simulatedDate` is written deliberately: that is how the field reads in the
 * frontmatter an editor writes, and a YAML parser turns it into a UTC-midnight
 * `Date` rather than a string.
 */
function fixtureArticleSource({ title, order, simulatedDate }) {
    const date = simulatedDate ? `simulatedDate: ${simulatedDate}\n` : '';
    return `---
title: '${title}'
category: Simulated date fixture
status: Published
publication: published
${date}summary: 'An article the simulated-date suite writes for itself into a throwaway project root.'
linkLabel: 'Simulated date fixture'
order: ${order}
---

The fixture article's own body sentence, which the fixture build must render.
`;
}

/** The real site, minus its content directory, copied into the fixture root. */
const fixtureProjectEntries = ['src', 'public', 'scripts', 'astro.config.mjs', 'tsconfig.json', 'package.json'];

/** How the fixture states a date, for a reader comparing it with the built page. */
const datedArticleText = simulatedDateText(datedArticle.simulatedDate);

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
 * package rather than one symlink to the shared tree: Astro's content-layer cache
 * (`node_modules/.astro`) follows `node_modules`, so a single symlink would make
 * every fixture root share one store and one config digest with the other suites.
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
 * with the real site build run in it. `src/lib/assets.ts` imports the canonical
 * media from `../../../docs/...`, so the root carries a `docs` symlink beside the
 * copied `website/`; nothing is written inside the repository.
 */
async function buildFixtureProject() {
    const root = await mkdtemp(join(tmpdir(), 'rh-simdate-fixture-'));
    temporaryDirectories.push(root);
    const site = join(root, 'website');
    await mkdir(site, { recursive: true });

    for (const entry of fixtureProjectEntries) {
        await cp(join(websiteDirectory, entry), join(site, entry), { recursive: true });
    }
    await symlink(join(projectDirectory, 'docs'), join(root, 'docs'), 'dir');
    await linkPackages(join(site, 'node_modules'));

    const news = join(site, 'news');
    await mkdir(news, { recursive: true });
    for (const article of [datedArticle, undatedArticle]) {
        await writeFile(join(news, `${article.slug}.mdx`), fixtureArticleSource(article));
    }

    await astroBuild(site);

    return { root, site, news, dist: join(site, 'dist') };
}

/** The fixture build, made once per suite run and shared by the cases below. */
let fixtureProjectBuild;
function fixtureBuild() {
    fixtureProjectBuild ??= buildFixtureProject();
    return fixtureProjectBuild;
}

describe('a fixture build states the date a fixture article declares', () => {
    it('renders the labelled line on the article page and on the card, from one value', async () => {
        const fixture = await fixtureBuild();
        const datedPage = join(fixture.dist, 'news', datedArticle.slug, 'index.html');
        const undatedPage = join(fixture.dist, 'news', undatedArticle.slug, 'index.html');

        expect(existsSync(datedPage), `${fixtureName} built no page for the dated article`).toBe(true);
        expect(
            existsSync(undatedPage),
            `${fixtureName} built no page for the undated article, so optionality is not exercised`,
        ).toBe(true);

        const datedHtml = await readFile(datedPage, 'utf8');
        const undatedHtml = await readFile(undatedPage, 'utf8');

        // Non-vacuity: the page that must carry the date really rendered, and the
        // page that must not carry it rendered too.
        expect(datedHtml, `${fixtureName} rendered no title on the dated page`).toContain(datedArticle.title);
        expect(undatedHtml, `${fixtureName} rendered no title on the undated page`).toContain(undatedArticle.title);

        expect(datedArticleText, 'this suite cannot render the fixture value').toBe(
            'Simulated record date · 12 October 2026',
        );
        expect(countOccurrences(datedHtml, simulatedDateLabel), 'the dated page does not state its date once').toBe(1);
        expect(datedHtml, 'the dated page does not state the value in the labelled form').toContain(datedArticleText);

        expect(
            countOccurrences(undatedHtml, simulatedDateLabel),
            'the undated page states a simulated record date, so the field is not optional in what it renders',
        ).toBe(0);

        const homeHtml = await readFile(join(fixture.dist, 'index.html'), 'utf8');
        expect(
            countOccurrences(homeHtml, simulatedDateLabel),
            'the homepage carousel states the date for something other than the one dated fixture article',
        ).toBe(1);
        expect(homeHtml, 'the homepage card does not state the value in the labelled form').toContain(datedArticleText);
        expect(homeHtml, 'the homepage card does not link the dated fixture article').toContain(
            `/news/${datedArticle.slug}/`,
        );
    }, fixtureBuildTimeout);

    it('emits no machine-readable date from the fixture build either', async () => {
        const fixture = await fixtureBuild();
        await expectNoMachineDate(fixture.dist, `${fixtureName} build`);
    }, fixtureBuildTimeout);
});
