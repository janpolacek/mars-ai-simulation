/*
 * Newsroom-index stacking suite: `/news/` gives every published card its own row.
 *
 * The defect (card `t_fbd05564`, found while working `t_f97d6184`): the carousel
 * fix of `t_89b325e5` placed every slide in the container's single cell with a
 * bare `.news-card { grid-area: 1 / 1 }`. `NewsCard` renders on two surfaces,
 * and on the newsroom index the card is also a grid item of `.news-index-list`
 * (`display: grid; gap: 2rem`), so the same placement dropped every card into
 * row 1 / column 1. Measured on a build of `origin/main` (2026-09-17 ~14:00
 * CEST, cache-disabled CDP session): at 1280x800 both cards sat at top 363 in
 * one 644.562px row — the list measured 645px and the document 1295px, exactly
 * one card tall — and only the payload card was visible, the announcement card
 * painted underneath it; at 390 wide the same single row measured 739.719px
 * (list 740px) at top 279. The pixel numbers live in the card's handoff; this
 * suite asserts the property that removes the overlap.
 *
 * What is asserted: no stylesheet the `/news/` page loads places a news card in
 * a fixed grid cell unless that placement is scoped to the carousel — and the
 * carousel is not on the page — so the index's cards stay auto-placed, the list
 * keeps the section's own `2rem` gap, and each card takes its own row. The
 * carousel's one-height contract (every slide in one cell, an inactive slide
 * invisible but measured) is asserted by `news-carousel-height.test.mjs` and is
 * deliberately neither restated nor weakened here.
 *
 * Every case is non-vacuous in the way `t_b66ef5f9` demands: the cards, the
 * published set and the rules are read from the real build output, a build whose
 * index renders fewer than two comparable cards fails instead of passing
 * quietly, the card's own rule and the list's rule must both be found in the
 * page's corpus, and the detector that decides the question is shown finding a
 * placement in the one place a placement is still wanted — the carousel.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { listFiles, websiteDirectory } from '../scripts/guards.mjs';

const distDirectory = resolve(websiteDirectory, 'dist');
const newsDirectory = resolve(websiteDirectory, 'news');
const indexPage = join(distDirectory, 'news', 'index.html');
const homePage = join(distDirectory, 'index.html');
const hasBuild = existsSync(indexPage) && existsSync(homePage);

/** The properties that decide which grid cell a card is placed in. */
const placementProperties = new Set([
    'grid-area',
    'grid-row',
    'grid-row-start',
    'grid-row-end',
    'grid-column',
    'grid-column-start',
    'grid-column-end',
]);

/** Slugs the site must list: the same `publication: published` predicate the build uses. */
async function publishedSlugs() {
    const slugs = [];
    for (const file of await listFiles(newsDirectory)) {
        if (!file.endsWith('.mdx')) continue;
        const source = await readFile(file, 'utf8');
        const block = source.match(/^---\n([\s\S]*?)\n---/);
        const line = block?.[1].split('\n').find((candidate) => candidate.startsWith('publication:'));
        const state = line?.slice('publication:'.length).trim().replace(/^['"]|['"]$/g, '');
        if (state === 'published') slugs.push(basename(file, '.mdx'));
    }
    return slugs;
}

/**
 * Every stylesheet a built page loads: the files its `<link>` tags name plus the
 * `<style>` blocks Astro inlines into it. The news component's own rules are
 * inlined into the page, so a corpus built from `_astro/*.css` alone would not
 * contain the rule that decides the question and the suite would pass on an
 * empty comparison.
 */
async function pageStyles(file) {
    const html = await readFile(file, 'utf8');
    const parts = [];
    for (const match of html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)) {
        parts.push(await readFile(join(distDirectory, match[1].replace(/^\//, '')), 'utf8'));
    }
    for (const match of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) parts.push(match[1]);
    return parts.join('\n');
}

/**
 * A page's built style rules, flattened: each with the single selector it applies
 * to (selector lists split, comments removed) and its declarations.
 */
function builtRules(styles) {
    const text = styles.replace(/\/\*[\s\S]*?\*\//g, '');
    const rules = [];
    for (const match of text.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
        const prelude = match[1].trim();
        if (prelude.length === 0 || prelude.startsWith('@')) continue;
        const declarations = new Map();
        for (const part of match[2].split(';')) {
            const colon = part.indexOf(':');
            if (colon === -1) continue;
            declarations.set(part.slice(0, colon).trim().toLowerCase(), part.slice(colon + 1).trim());
        }
        for (const selector of prelude.split(',')) {
            const trimmed = selector.trim();
            if (trimmed.length === 0) continue;
            rules.push({ selector: trimmed, declarations });
        }
    }
    return rules;
}

/** Whether a rule declares a grid placement for a news card. */
function placesNewsCard(rule) {
    if (!/\.news-card\b/.test(rule.selector)) return false;
    return [...rule.declarations.keys()].some((property) => placementProperties.has(property));
}

/** The index list's own card elements, in document order, as their opening tags. */
function indexCards(html) {
    const start = html.search(/class="[^"]*\bnews-index-list\b/);
    if (start === -1) return [];
    const sectionEnd = html.indexOf('</section>', start);
    const scope = html.slice(start, sectionEnd === -1 ? html.length : sectionEnd);
    return [...scope.matchAll(/<article\b[^>]*>/g)].map((match) => match[0])
        .filter((tag) => /\bclass="[^"]*\bnews-card\b/.test(tag));
}

const page = hasBuild ? await readFile(indexPage, 'utf8') : '';
const indexRules = hasBuild ? builtRules(await pageStyles(indexPage)) : [];
const homeRules = hasBuild ? builtRules(await pageStyles(homePage)) : [];
const cards = hasBuild ? indexCards(page) : [];
const cardRules = indexRules.filter((rule) => /\.news-card\b/.test(rule.selector));
const listRules = indexRules.filter((rule) => /\.news-index-list\b/.test(rule.selector));
const placements = indexRules.filter(placesNewsCard);

describe('the newsroom index stacks one card per row', () => {
    it.runIf(hasBuild)('renders a comparable set of cards and the rules that decide the question', async () => {
        const published = await publishedSlugs();

        expect(
            published.length,
            'the site publishes fewer than two items, so the index has no second card to compare',
        ).toBeGreaterThan(1);
        expect(cards.length, 'the index does not render one card per published item').toBe(published.length);
        expect(
            cardRules.length,
            'the page loads no rule for the news card, so its placement cannot be compared',
        ).toBeGreaterThan(0);
        expect(
            listRules.length,
            'the page loads no rule for the index list, so its layout cannot be compared',
        ).toBeGreaterThan(0);

        // The detector the next case relies on is shown finding a placement where
        // one is still wanted: the carousel's own shared cell.
        const carouselPlacements = homeRules.filter((rule) =>
            placesNewsCard(rule) && /\bnews-carousel\b/.test(rule.selector)
        );
        expect(
            carouselPlacements.length,
            'no rule places a card inside the carousel, so this suite cannot tell a scoped placement from a missing one',
        ).toBeGreaterThan(0);
    });

    it.runIf(hasBuild)("never places a news card in a fixed cell of the page's own stylesheets", () => {
        // A placement is allowed only as the carousel's shared cell, and the
        // carousel must genuinely be absent from this page: on the index every
        // card would otherwise fall into the one cell the defect showed.
        const unscoped = placements.filter((rule) => !/\bnews-carousel\b/.test(rule.selector)).map((rule) =>
            `${rule.selector} { ${
                [...rule.declarations].map(([property, value]) => `${property}: ${value}`).join('; ')
            } }`
        );
        expect(
            unscoped,
            'a stylesheet this page loads places a news card in a fixed cell, so every card lands in the first row',
        ).toEqual([]);
        expect(
            /class="[^"]*\bnews-carousel\b/.test(page),
            'the index page renders the carousel, whose single cell the cards would share',
        ).toBe(false);

        // An inline style would outrank every rule above and is not part of the
        // corpus this suite reads.
        const inline = cards.filter((card) => /\bstyle="[^"]*(grid-area|grid-row|grid-column)/.test(card));
        expect(inline, 'a card carries its placement as an inline style').toEqual([]);
    });

    it.runIf(hasBuild)('keeps the index list a grid with the section gap that separates the rows', () => {
        const entries = listRules.flatMap((rule) => [...rule.declarations.entries()]);
        const displays = [...new Set(entries.filter(([property]) => property === 'display').map(([, value]) => value))];
        expect(displays, `the index list is not a grid container: ${displays.join(', ')}`).toContain('grid');

        const gaps = [...new Set(entries.filter(([property]) => property === 'gap').map(([, value]) => value))];
        expect(gaps.length, 'the index list declares no gap between its cards').toBeGreaterThan(0);
        expect(gaps.every((value) => /(^|\s)2rem(\s|$)/.test(value)), `the list lost its 2rem gap: ${gaps.join(', ')}`)
            .toBe(true);
    });
});
