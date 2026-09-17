/*
 * Carousel height suite: the homepage news section keeps one height across its
 * slides, whatever the reader's breakpoint and whatever the published set.
 *
 * The defect (card `t_89b325e5`, human report 2026-09-17): `.news-card` set only
 * `min-height`, every non-active slide carried `hidden`, and the component's own
 * `[hidden]` rule took that slide out of the flow — so the carousel's box was
 * whatever the *active* card happened to need. Measured on the live site with
 * two published items at 1280px: slide 0 was 461px, slide 1 was 645px, a 184px
 * jump of the whole document on every switch.
 *
 * What is asserted is the shape that fixes it, not today's numbers: every slide
 * is a grid item of the carousel and every slide is placed in the *same* cell
 * (`display: grid` on the container, one placement on the slide), so the row is
 * as tall as the tallest slide and the container's height does not depend on
 * which slide is active. An inactive slide stays in that cell and is hidden with
 * `visibility: hidden` instead, which keeps its box measured while removing it
 * from the paint, the tab order and the accessibility tree. No literal height is
 * involved, so a third article or a longer summary cannot invalidate it, and a
 * published set of one is the same shape with one item.
 *
 * Why the assertions read the cascade rather than a browser: this suite runs in
 * the build-then-test order the CI job uses and carries no browser dependency, so
 * it computes the properties that decide the question — `display`, `position`,
 * `visibility`, `content-visibility` and the grid cell — from the built page's
 * own stylesheets, matched against the real emitted markup. Both states a slide
 * can be in are evaluated, so the assertion is the property itself (the
 * carousel's content is the same set of slides in both states) rather than a
 * snapshot of what the boxes measured today; the pixel before/after numbers live
 * in the card's handoff.
 *
 * Every case is non-vacuous in the way `t_b66ef5f9` demands: the slide set is
 * read from the real build output and compared with the published frontmatter,
 * the rule that decides the question must be found in the built stylesheets, and
 * a selector this suite cannot evaluate fails instead of passing quietly.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import vm from 'node:vm';
import { describe, expect, it } from 'vitest';

import { listFiles, websiteDirectory } from '../scripts/guards.mjs';

const distDirectory = resolve(websiteDirectory, 'dist');
const newsDirectory = resolve(websiteDirectory, 'news');
const hasBuild = existsSync(join(distDirectory, 'index.html'));

/** The viewport the component's `max-width: 760px` rules describe. */
const mobileQuery = '(max-width: 760px)';

/** The properties that decide whether a slide's box is measured, and where. */
const flowProperties = new Set([
    'display',
    'position',
    'visibility',
    'content-visibility',
    'grid-area',
    'grid-row',
    'grid-row-start',
    'grid-column',
    'grid-column-start',
]);

/** Regenerate a slide in the state a carousel switch would put it in. */
function withState(slide, { hidden }) {
    const attributes = new Map(slide.attributes);
    if (hidden) attributes.set('hidden', '');
    else attributes.delete('hidden');
    attributes.set('aria-hidden', hidden ? 'true' : 'false');
    return { ...slide, attributes, children: slide.children };
}

/** The grid cell a slide is placed in, from the placement the stylesheet declares. */
function gridCell(computed) {
    const area = computed.get('grid-area');
    if (area !== undefined) {
        const [rowStart, columnStart] = area.split('/').map((part) => part.trim());
        return `${rowStart}/${columnStart}`;
    }
    const row = computed.get('grid-row-start') ?? computed.get('grid-row') ?? 'auto';
    const column = computed.get('grid-column-start') ?? computed.get('grid-column') ?? 'auto';
    return `${row}/${column}`;
}

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
 * Every stylesheet the built homepage applies: the emitted files plus the
 * `<style>` blocks Astro inlines into it. The news component's own rules are
 * inlined into `index.html` — a corpus built from `_astro/*.css` alone would not
 * contain the rule that decides the question and the suite would pass on an
 * empty comparison.
 */
async function distStyles() {
    const parts = [];
    for (const file of await listFiles(distDirectory)) {
        if (file.endsWith('.css')) parts.push(await readFile(file, 'utf8'));
    }
    const index = await readFile(join(distDirectory, 'index.html'), 'utf8');
    for (const match of index.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) parts.push(match[1]);
    return parts.join('\n');
}

/** Split one rule body into its declarations, ignoring `;` inside `clamp(...)`. */
function declarationsIn(body) {
    const declarations = new Map();
    const parts = [];
    let depth = 0;
    let start = 0;
    for (let index = 0; index < body.length; index += 1) {
        const character = body[index];
        if (character === '(') depth += 1;
        else if (character === ')') depth -= 1;
        else if (character === ';' && depth === 0) {
            parts.push(body.slice(start, index));
            start = index + 1;
        }
    }
    parts.push(body.slice(start));
    for (const part of parts) {
        const colon = part.indexOf(':');
        if (colon === -1) continue;
        declarations.set(part.slice(0, colon).trim().toLowerCase(), part.slice(colon + 1).trim());
    }
    return declarations;
}

/**
 * The built page's style rules, flattened, each with the at-rule prelude it sits
 * under (`null` at top level) and its source order — what the cascade needs.
 * Bodies of at-rules that do not contribute rules (`@keyframes` and friends) are
 * not walked, so their `0%` steps never reach the matcher.
 */
function cascadedRules(styles) {
    const text = styles.replace(/\/\*[\s\S]*?\*\//g, '');
    const rules = [];

    const walk = (block, media) => {
        let index = 0;
        while (index < block.length) {
            const open = block.indexOf('{', index);
            if (open === -1) break;
            const prelude = block.slice(index, open).trim();
            let depth = 1;
            let end = open + 1;
            while (end < block.length && depth > 0) {
                if (block[end] === '{') depth += 1;
                else if (block[end] === '}') depth -= 1;
                end += 1;
            }
            const body = block.slice(open + 1, end - 1);
            index = end;
            if (prelude.length === 0) continue;
            if (prelude.startsWith('@')) {
                const atRule = prelude.slice(1).split(/[\s({]/)[0].toLowerCase();
                const inside = atRule === 'media' ? prelude.replace(/^@media\s*/, '').trim() : media;
                if (atRule === 'media' || atRule === 'supports' || atRule === 'layer') walk(body, inside);
                continue;
            }
            for (const selector of prelude.split(',')) {
                const trimmed = selector.trim();
                if (trimmed.length === 0) continue;
                rules.push({ selector: trimmed, media, declarations: declarationsIn(body), order: rules.length });
            }
        }
    };

    walk(text, null);
    return rules;
}

/** The page as a tree: tag, attributes, classes, parent chain, children. */
function parsePage(html) {
    const voidElements = new Set([
        'area',
        'base',
        'br',
        'col',
        'embed',
        'hr',
        'img',
        'input',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
    ]);
    const root = { tag: '#document', attributes: new Map(), classes: [], children: [], parent: null };
    let current = root;
    let index = 0;

    const attributesOf = (tag) => {
        const attributes = new Map();
        const rest = tag.slice(tag.search(/[\s/]/) === -1 ? tag.length : tag.search(/[\s/]/));
        const pattern = /([^\s"'>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
        for (const match of rest.matchAll(pattern)) {
            attributes.set(match[1], match[2] ?? match[3] ?? match[4] ?? '');
        }
        return attributes;
    };

    while (index < html.length) {
        const open = html.indexOf('<', index);
        if (open === -1) break;
        if (html.startsWith('<!--', open)) {
            const commentEnd = html.indexOf('-->', open);
            index = commentEnd === -1 ? html.length : commentEnd + 3;
            continue;
        }
        const close = html.indexOf('>', open);
        if (close === -1) break;
        const tag = html.slice(open + 1, close);
        index = close + 1;
        if (tag.startsWith('/')) {
            const name = tag.slice(1).trim().toLowerCase();
            if (current !== root && current.tag === name) current = current.parent;
            continue;
        }
        if (tag.startsWith('!') || tag.startsWith('?')) continue;
        const name = tag.split(/[\s/]/)[0].toLowerCase();
        const attributes = attributesOf(tag);
        const element = {
            tag: name,
            attributes,
            classes: (attributes.get('class') ?? '').split(/\s+/).filter((value) => value.length > 0),
            children: [],
            parent: current,
        };
        current.children.push(element);
        if (voidElements.has(name) || tag.endsWith('/')) continue;
        current = element;
        if (name === 'script' || name === 'style') {
            const end = html.indexOf(`</${name}`, index);
            if (end !== -1) index = end;
        }
    }

    return root;
}

/** Every element of a subtree the predicate accepts. */
function findAll(element, predicate) {
    const found = [];
    for (const child of element.children) {
        if (predicate(child)) found.push(child);
        found.push(...findAll(child, predicate));
    }
    return found;
}

/** The simple selectors of one compound, or `null` when it cannot be parsed. */
function parseCompound(compound) {
    const parsed = { tag: null, id: null, classes: [], attributes: [], not: [], pseudos: [] };
    let index = 0;
    const tag = /^[a-zA-Z][\w-]*|^\*/.exec(compound);
    if (tag) {
        parsed.tag = tag[0] === '*' ? null : tag[0].toLowerCase();
        index = tag[0].length;
    }
    while (index < compound.length) {
        const rest = compound.slice(index);
        const match = /^\.([\w-]+)/.exec(rest)
            ?? /^#([\w-]+)/.exec(rest)
            ?? /^\[([^\]]*)\]/.exec(rest)
            ?? /^:not\(([^)]*)\)/.exec(rest)
            ?? /^::?([\w-]+)(?:\([^)]*\))?/.exec(rest);
        if (match === null) return null;
        const rest2 = rest.slice(0, match[0].length);
        if (rest2.startsWith('.')) parsed.classes.push(match[1]);
        else if (rest2.startsWith('#')) parsed.id = match[1];
        else if (rest2.startsWith('[')) parsed.attributes.push(match[1]);
        else if (rest2.startsWith(':not(')) parsed.not.push(match[1]);
        else parsed.pseudos.push(match[1].toLowerCase());
        index += match[0].length;
    }
    return parsed;
}

/** Whether the element carries one `[name]` or `[name="value"]` attribute selector. */
function matchesAttribute(attribute, element) {
    const equals = attribute.indexOf('=');
    if (equals === -1) return element.attributes.has(attribute.trim());
    const name = attribute.slice(0, equals).trim();
    const value = attribute.slice(equals + 1).trim().replace(/^["']|["']$/g, '');
    return element.attributes.get(name) === value;
}

/** `true`, `false`, or `null` when the compound uses a selector this suite cannot evaluate. */
function matchesCompound(compound, element) {
    const parsed = parseCompound(compound);
    if (parsed === null) return null;
    if (parsed.tag !== null && element.tag !== parsed.tag) return false;
    if (parsed.id !== null && element.attributes.get('id') !== parsed.id) return false;
    if (!parsed.classes.every((name) => element.classes.includes(name))) return false;
    if (!parsed.attributes.every((attribute) => matchesAttribute(attribute, element))) return false;
    if (parsed.not.some((inner) => matchesCompound(inner, element) === true)) return false;
    // A state pseudo-class (`:hover`, `:focus-visible`) or a pseudo-element puts
    // the rule outside the state being evaluated, so it does not apply here.
    if (parsed.pseudos.length > 0) return false;
    return true;
}

/** Split a selector on its combinators: `.a > .b .c` gives three compounds. */
function splitSelector(selector) {
    const compounds = [];
    const combinators = [];
    let compound = '';
    let combinator = null;
    let depth = 0;
    const flush = () => {
        compounds.push(compound.trim());
        compound = '';
        if (combinator !== null) combinators.push(combinator);
        combinator = null;
    };
    for (const character of selector) {
        if (character === '(' || character === '[') depth += 1;
        else if (character === ')' || character === ']') depth -= 1;
        if (depth === 0 && /[\s>+~]/.test(character)) {
            if (compound.trim().length > 0) flush();
            if (character !== ' ') combinator = character;
            else if (combinator === null) combinator = ' ';
            continue;
        }
        compound += character;
    }
    if (compound.trim().length > 0) flush();
    return { compounds, combinators };
}

/** `true`, `false`, or `null` when any compound of the selector is unevaluable. */
function matchesSelector(selector, element) {
    const { compounds, combinators } = splitSelector(selector);
    if (compounds.length === 0) return null;
    const match = (index, current) => {
        if (current === null || current === undefined) return false;
        const result = matchesCompound(compounds[index], current);
        if (result === null || !result) return result;
        if (index === 0) return true;
        const combinator = combinators[index - 1];
        if (combinator === '>') return match(index - 1, current.parent);
        if (combinator === ' ') {
            for (let ancestor = current.parent; ancestor !== null; ancestor = ancestor.parent) {
                const ancestorResult = match(index - 1, ancestor);
                if (ancestorResult === null || ancestorResult) return ancestorResult;
            }
            return false;
        }
        return null;
    };
    return match(compounds.length - 1, element);
}

/** `[ids, classes, types]`, compared left to right. */
function specificity(selector) {
    const ids = (selector.match(/#[\w-]+/g) ?? []).length;
    const classes = (selector.match(/\.|\[|:(?!:)/g) ?? []).length;
    const types = (selector.match(/(?:^|[\s>+~])([a-zA-Z][\w-]*)/g) ?? []).length;
    return [ids, classes, types];
}

/** Whether a rule's at-rule prelude applies to the viewport being evaluated. */
function mediaApplies(media, query) {
    const normalize = (value) => value.replace(/[\s()]/g, '').toLowerCase();
    if (media === null) return true;
    return query !== null && normalize(media) === normalize(query);
}

/**
 * The computed values of `flowProperties` for one element, under one viewport.
 * Rules are applied in source order, a more specific selector winning over a
 * less specific one and a later rule winning between equals.
 */
function computedStyle(element, rules, query) {
    const computed = new Map();
    const weights = new Map();
    for (const rule of rules) {
        if (!mediaApplies(rule.media, query)) continue;
        const matched = matchesSelector(rule.selector, element);
        if (matched === null) {
            const relevant = /news-card|news-carousel/.test(rule.selector);
            const decides = [...rule.declarations.keys()].some((property) => flowProperties.has(property));
            if (relevant && decides) {
                throw new Error(`this suite cannot evaluate the selector ${rule.selector}`);
            }
            continue;
        }
        if (!matched) continue;
        const weight = specificity(rule.selector);
        for (const [property, value] of rule.declarations) {
            if (!flowProperties.has(property)) continue;
            const previous = weights.get(property);
            if (previous !== undefined && compareWeight(previous, weight) > 0) continue;
            computed.set(property, value);
            weights.set(property, weight);
        }
    }
    return computed;
}

/** `a` versus `b`, in cascade order: specificity first, source order as the tiebreak. */
function compareWeight(a, b) {
    for (let index = 0; index < a.length; index += 1) {
        if (a[index] !== b[index]) return a[index] - b[index];
    }
    return 0;
}

/**
 * One slide for the built carousel script to drive: the attributes the
 * stylesheet keys on, the classes, and the image whose `loading` the script may
 * promote. It implements only what the script is allowed to touch — a write the
 * height contract cannot see (an inline style, say) throws here instead of
 * passing quietly.
 */
function fakeSlide(index) {
    const attributes = new Map([
        ['data-slide', String(index)],
        ['aria-hidden', index === 0 ? 'false' : 'true'],
    ]);
    const classes = new Set(['news-card']);
    if (index === 0) classes.add('is-active');
    else attributes.set('hidden', '');
    const image = { loading: index === 0 ? 'eager' : 'lazy' };
    return {
        image,
        classes,
        attributes,
        classList: {
            toggle: (name, on) => {
                if (on) classes.add(name);
                else classes.delete(name);
            },
        },
        hasAttribute: (name) => attributes.has(name),
        getAttribute: (name) => attributes.get(name) ?? null,
        setAttribute: (name, value) => attributes.set(name, value),
        toggleAttribute: (name, on) => {
            if (on) attributes.set(name, '');
            else attributes.delete(name);
        },
        querySelector: (selector) => (selector === 'img[loading="lazy"]' && image.loading === 'lazy' ? image : null),
    };
}

/**
 * Run the built carousel script (`carousel.client.ts`, inlined into the built
 * page) against a fake document, click `next` as a reader would, and return the
 * slides it left behind.
 */
function runCarousel({ clicks }) {
    const slides = [fakeSlide(0), fakeSlide(1)];
    const counter = { textContent: '01' };
    const listeners = { previous: [], next: [] };
    const button = (kind) => ({
        addEventListener: (event, handler) => listeners[kind].push({ event, handler }),
    });
    const root = { querySelectorAll: (selector) => (selector === '.news-card' ? slides : []) };
    const context = {
        document: {
            querySelector: (selector) => {
                if (selector === '[data-news-carousel]') return root;
                if (selector === '#current-news') return counter;
                if (selector === '#previous-news') return button('previous');
                if (selector === '#next-news') return button('next');
                return null;
            },
        },
    };

    vm.runInNewContext(carouselScript, context);
    const clickHandlers = listeners.next
        .filter((listener) => listener.event === 'click')
        .map((listener) => listener.handler);
    for (let step = 0; step < clicks; step += 1) {
        for (const handler of clickHandlers) handler();
    }

    return { slides, counter, clickHandlers: clickHandlers.length };
}

const homepage = hasBuild ? await readFile(join(distDirectory, 'index.html'), 'utf8') : '';
const styles = hasBuild ? await distStyles() : '';
const rules = cascadedRules(styles);
const page = parsePage(homepage);
const carousel = findAll(page, (element) => element.attributes.has('data-news-carousel'))[0];
const slides = carousel?.children.filter((child) => child.tag === 'article' && child.classes.includes('news-card'))
    ?? [];
const hiddenRules = rules.filter((rule) => /news-card/.test(rule.selector) && /\[hidden\]/.test(rule.selector));
const carouselRules = rules.filter((rule) => /\.news-carousel/.test(rule.selector));
const carouselScript = [...homepage.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .find((source) => source.includes('data-news-carousel')) ?? '';

describe('the homepage carousel keeps one height across slides', () => {
    it.runIf(hasBuild)('renders one slide per published item, so the property has a real set to measure', async () => {
        const published = await publishedSlugs();

        expect(slides.length, 'the homepage carousel has no slide to measure').toBeGreaterThan(0);
        expect(slides.length, 'the carousel and the published set disagree').toBe(published.length);
        expect(hiddenRules.length, 'no built rule hides a slide, so nothing can be compared').toBeGreaterThan(0);
        expect(carouselRules.length, 'no built rule styles the carousel box').toBeGreaterThan(0);
        expect(carouselScript, 'the built page carries no carousel script').toContain('data-news-carousel');

        // Exactly one slide is active; the others are the withheld ones.
        expect(slides.filter((slide) => slide.attributes.has('hidden')).length).toBe(slides.length - 1);
        for (const slide of slides.filter((slide) => slide.attributes.has('hidden'))) {
            expect(slide.attributes.get('aria-hidden'), 'a hidden slide is still announced').toBe('true');
        }
    });

    it.runIf(hasBuild)(
        'keeps every slide in one grid cell of a grid container, so the box is the tallest slide',
        () => {
            const carouselStyle = computedStyle(carousel, rules, null);
            expect(carouselStyle.get('display'), 'the carousel is not a grid container').toBe('grid');

            const cells = slides.map((slide) => gridCell(computedStyle(slide, rules, null)));
            expect(new Set(cells).size, `slides are placed in different cells: ${cells.join(', ')}`).toBe(1);
            expect(cells[0], 'the slides are not placed in an explicit cell').not.toMatch(/auto/);
        },
    );

    it.runIf(hasBuild)('leaves an inactive slide in the flow: measured, invisible, and unfocusable', () => {
        for (const slide of slides) {
            const active = computedStyle(withState(slide, { hidden: false }), rules, null);
            const inactive = computedStyle(withState(slide, { hidden: true }), rules, null);

            expect(active.get('display') ?? 'block', 'the active slide is not rendered').not.toBe('none');
            expect(
                inactive.get('display') ?? 'block',
                'an inactive slide leaves the flow, so the height follows the active card',
            ).not.toBe('none');
            expect(inactive.get('display') ?? 'block', 'the two states differ in flow').toBe(
                active.get('display') ?? 'block',
            );
            expect(inactive.get('content-visibility') ?? 'visible', 'an inactive slide is skipped in layout').not.toBe(
                'hidden',
            );
            for (const state of [active, inactive]) {
                expect(['absolute', 'fixed'], 'a slide is out of the flow').not.toContain(
                    state.get('position') ?? 'static',
                );
            }

            // `visibility: hidden` is what removes the slide from the paint, the
            // tab order and the accessibility tree without removing its box.
            expect(active.get('visibility') ?? 'visible').toBe('visible');
            expect(inactive.get('visibility'), 'an inactive slide is not hidden from the reader').toBe('hidden');

            // An inline style would outrank every rule above and the cascade
            // this suite reads could not see it.
            expect(slide.attributes.has('style'), 'a slide carries an inline style').toBe(false);
        }

        expect(
            hiddenRules.filter((rule) => rule.declarations.get('visibility') === 'hidden').length,
            'no built rule hides an inactive slide with visibility',
        ).toBeGreaterThan(0);
        for (const rule of hiddenRules) {
            expect(rule.declarations.get('display'), `the rule ${rule.selector} removes the slide from the flow`).not
                .toBe('none');
        }
    });

    it.runIf(hasBuild)('holds the same shape at the 760px breakpoint', () => {
        const carouselStyle = computedStyle(carousel, rules, mobileQuery);
        expect(carouselStyle.get('display'), 'the carousel stops being a grid container on a phone').toBe('grid');

        const cells = slides.map((slide) => gridCell(computedStyle(slide, rules, mobileQuery)));
        expect(new Set(cells).size, `slides are placed in different cells: ${cells.join(', ')}`).toBe(1);
        expect(cells[0]).not.toMatch(/auto/);

        for (const slide of slides) {
            const active = computedStyle(withState(slide, { hidden: false }), rules, mobileQuery);
            const inactive = computedStyle(withState(slide, { hidden: true }), rules, mobileQuery);
            expect(active.get('display') ?? 'block').not.toBe('none');
            expect(inactive.get('display') ?? 'block', 'the mobile breakpoint hands the height back to the active card')
                .not.toBe('none');
            expect(inactive.get('visibility'), 'the mobile breakpoint stops hiding an inactive slide').toBe('hidden');
        }
    });

    it.runIf(hasBuild)('switches slides on the attribute the stylesheet keys on, never an inline display', () => {
        const before = runCarousel({ clicks: 0 });
        expect(before.slides[1].image.loading, 'the hidden slide is fetched before it is shown').toBe('lazy');

        const after = runCarousel({ clicks: 1 });

        expect(after.clickHandlers, 'the built script registers no click handler on the next control').toBeGreaterThan(
            0,
        );
        expect(after.counter.textContent, 'the script did not run').toBe('02');
        expect(after.slides[1].hasAttribute('hidden'), 'the shown slide is still marked hidden').toBe(false);
        expect(after.slides[1].getAttribute('aria-hidden')).toBe('false');
        expect(after.slides[1].classes.has('is-active')).toBe(true);
        expect(after.slides[0].hasAttribute('hidden'), 'the slide left behind is still rendered').toBe(true);
        expect(after.slides[0].getAttribute('aria-hidden')).toBe('true');
        expect(after.slides[0].classes.has('is-active')).toBe(false);

        // The slide that stays in the layout is not fetched from behind: its
        // image is promoted when — and only when — the reader shows it.
        expect(after.slides[1].image.loading, 'the shown slide keeps a lazy image, which stays blank').toBe('eager');

        expect(carouselScript, 'the built page carries no carousel script').toContain('data-news-carousel');
    });
});
