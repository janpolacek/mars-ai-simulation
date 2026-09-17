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
 * Where a helper overlaps `guards.test.mjs`, the assertion is kept here in the
 * card's own file on purpose: the carousel slide count and the `01 / 0N` counter
 * are this suite's subject, and the two suites must not need each other.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { listFiles, listRoutes, websiteDirectory } from '../scripts/guards.mjs';
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

async function newsFiles() {
    return (await listFiles(newsDirectory)).filter((file) => file.endsWith('.mdx'));
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
        for (const slug of await unpublishedSlugs()) {
            expect(html, `${slug} is not published but its route is linked`).not.toContain(`/news/${slug}/`);
        }
    });

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
        for (const slug of await unpublishedSlugs()) {
            expect(html, `${slug} is not published but the index lists it`).not.toContain(`/news/${slug}/`);
        }
    });
});
