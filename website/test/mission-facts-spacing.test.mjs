/*
 * Mission fact spacing suite: every fact label has the grid's own breathing room
 * above it, in every cell and at every breakpoint.
 *
 * The defect (card `t_f950608b`, human report 2026-09-17: *"mission brief on
 * homepage -> Launch date text (headline) has no space above it"*): every fact
 * cell carried `padding: 0 1.5rem 1.5rem`, so a cell's only vertical padding sat
 * below its value. Measured on the live site at 1280px, "Launch date" sat at
 * exactly `y = 1085` — the bottom edge of the row above it, flush against the
 * hairline that closes that row — with 0px of space above the label, while the
 * full-width "Objective" row measured 24px (`.fact-wide { padding-top: 1.5rem }`).
 * Every label after the first row reproduced it, at 1,280px and at 390px alike.
 *
 * What is asserted is the property that fixes it, not today's numbers: every fact
 * cell carries a non-zero top padding, the same value in every cell and at every
 * breakpoint, and nothing pulls the label back up (no negative margin on the
 * label), so the space the browser paints above a label is the cell's own
 * padding rather than a coincidence of one row. The intended value is the 1.5rem
 * the `.fact-wide` row already carried — the panel's own rhythm, not a third
 * value. The hairline lattice is pinned beside it: one drawn left rule per
 * column, one drawn bottom rule per row, and no top rule that would double the
 * line already drawn above a cell.
 *
 * Why the assertions read the cascade rather than a browser: this suite runs in
 * the build-then-test order the CI job uses and carries no browser dependency, so
 * it computes the properties that decide the question — the cell's padding and
 * border longhands, the label's `margin-top` — from the built page's own
 * stylesheets, matched against the real emitted markup. The pixel before/after
 * numbers live in the card's handoff.
 *
 * Every case is non-vacuous in the way `t_b66ef5f9` demands: the cell set is read
 * from the real build output and compared with the fact module it renders from,
 * the winning padding rule must be the panel's own (not a global reset that
 * happens to help), and a selector this suite cannot evaluate that would decide
 * one of those properties fails instead of passing quietly.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { listFiles, websiteDirectory } from '../scripts/guards.mjs';
import { missionFacts } from '../src/features/mission/facts';

const distDirectory = resolve(websiteDirectory, 'dist');
const hasBuild = existsSync(join(distDirectory, 'index.html'));

/** The viewport the component's `max-width: 760px` rules describe. */
const mobileQuery = '(max-width: 760px)';

/**
 * The longhands this suite evaluates. Shorthands are expanded into these, so a
 * rule written `padding: 1.5rem` and one written `padding-top: 1.5rem` are read
 * the same way the browser resolves them.
 */
const evaluated = new Set([
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    ...['top', 'right', 'bottom', 'left'].flatMap((side) => [
        `border-${side}-width`,
        `border-${side}-style`,
        `border-${side}-color`,
    ]),
]);

const borderStyles = new Set([
    'none',
    'hidden',
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
]);

/** Split a declaration value on whitespace, keeping `var(...)`/`clamp(...)` whole. */
function splitTokens(value) {
    const tokens = [];
    let depth = 0;
    let token = '';
    for (const character of value.trim()) {
        if (character === '(') depth += 1;
        else if (character === ')') depth -= 1;
        if (/\s/.test(character) && depth === 0) {
            if (token.length > 0) tokens.push(token);
            token = '';
            continue;
        }
        token += character;
    }
    if (token.length > 0) tokens.push(token);
    return tokens;
}

/** The longhands a declaration sets: box shorthands and `border*` expanded. */
function expand(property, value) {
    if (property === 'padding' || property === 'margin') {
        const [first, second = first, third = first, fourth = second] = splitTokens(value);
        return [
            [`${property}-top`, first],
            [`${property}-right`, second],
            [`${property}-bottom`, third],
            [`${property}-left`, fourth],
        ];
    }

    const border = /^border(?:-(top|right|bottom|left))?$/.exec(property);
    if (border !== null) {
        const sides = border[1] === undefined ? ['top', 'right', 'bottom', 'left'] : [border[1]];
        const tokens = splitTokens(value);
        const width = tokens.find((token) =>
            /^(0|[\d.]+(px|rem|em|%))$/.test(token) || /^(thin|medium|thick)$/.test(token)
        )
            ?? 'medium';
        const style = tokens.find((token) => borderStyles.has(token)) ?? 'none';
        const color = tokens.filter((token) => token !== width && token !== style);
        return sides.flatMap((side) => [
            [`border-${side}-width`, width],
            [`border-${side}-style`, style],
            ...(color.length > 0 ? [[`border-${side}-color`, color.join(' ')]] : []),
        ]);
    }

    return [[property, value]];
}

/** Split one rule body into its declarations, ignoring `;` inside `var(...)`. */
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
        const property = part.slice(0, colon).trim().toLowerCase();
        const value = part.slice(colon + 1).trim();
        if (value.length === 0) continue;
        for (const [longhand, longhandValue] of expand(property, value)) declarations.set(longhand, longhandValue);
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

/** One `An+B` argument, as `[step, offset]`, or `null` when it is not a form this suite knows. */
function nthFormula(argument) {
    const value = argument.trim().toLowerCase().replace(/\s/g, '');
    if (value === 'odd') return [2, 1];
    if (value === 'even') return [2, 0];
    const signed = /^([+-]?\d*)n([+-]\d+)?$/.exec(value);
    if (signed !== null) {
        const step = signed[1] === '' || signed[1] === '+' ? 1 : signed[1] === '-' ? -1 : Number(signed[1]);
        return [step, signed[2] === undefined ? 0 : Number(signed[2])];
    }
    const index = /^[+-]?\d+$/.exec(value);
    return index === null ? null : [0, Number(value)];
}

/** Whether an element's 1-based position among its element siblings satisfies `An+B`. */
function matchesNth(argument, position) {
    const formula = nthFormula(argument);
    if (formula === null) return null;
    const [step, offset] = formula;
    if (step === 0) return position === offset;
    const distance = position - offset;
    return distance % step === 0 && distance / step >= 0;
}

/** The simple selectors of one compound, or `null` when it cannot be parsed. */
function parseCompound(compound) {
    const parsed = { tag: null, id: null, classes: [], attributes: [], not: [], nthChild: [], pseudos: [] };
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
            ?? /^:nth-child\(([^)]*)\)/.exec(rest)
            ?? /^::?([\w-]+)(?:\([^)]*\))?/.exec(rest);
        if (match === null) return null;
        const matched = rest.slice(0, match[0].length);
        if (matched.startsWith('.')) parsed.classes.push(match[1]);
        else if (matched.startsWith('#')) parsed.id = match[1];
        else if (matched.startsWith('[')) parsed.attributes.push(match[1]);
        else if (matched.startsWith(':not(')) parsed.not.push(match[1]);
        else if (matched.startsWith(':nth-child(')) parsed.nthChild.push(match[1]);
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
    for (const argument of parsed.nthChild) {
        const position = element.parent === null ? -1 : element.parent.children.indexOf(element) + 1;
        const matched = matchesNth(argument, position);
        if (matched === null) return null;
        if (!matched) return false;
    }
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

/** `a` versus `b`, in cascade order: specificity first, source order as the tiebreak. */
function compareWeight(a, b) {
    for (let index = 0; index < a.length; index += 1) {
        if (a[index] !== b[index]) return a[index] - b[index];
    }
    return 0;
}

/**
 * The computed value of every evaluated longhand for one element under one
 * viewport, each with the rule that won it: rules apply in source order, a more
 * specific selector winning over a less specific one and a later rule winning
 * between equals.
 */
function computedStyle(element, rules, query) {
    const computed = new Map();
    for (const rule of rules) {
        if (!mediaApplies(rule.media, query)) continue;
        const matched = matchesSelector(rule.selector, element);
        if (matched === null) {
            const relevant = /mission-facts|fact-wide/.test(rule.selector);
            const decides = [...rule.declarations.keys()].some((property) => evaluated.has(property));
            if (relevant && decides) {
                throw new Error(`this suite cannot evaluate the selector ${rule.selector}`);
            }
            continue;
        }
        if (!matched) continue;
        const weight = specificity(rule.selector);
        for (const [property, value] of rule.declarations) {
            if (!evaluated.has(property)) continue;
            const previous = computed.get(property);
            if (previous !== undefined && compareWeight(previous.weight, weight) > 0) continue;
            computed.set(property, { value, weight, selector: rule.selector });
        }
    }
    return computed;
}

/** The computed value of one property, or the browser's initial value for it. */
function valueOf(style, property, initial = '0') {
    return style.get(property)?.value ?? initial;
}

/** The rule that decided one property, or `undefined` when nothing set it. */
function selectorOf(style, property) {
    return style.get(property)?.selector;
}

/**
 * Every stylesheet the built homepage applies: the emitted files plus the
 * `<style>` blocks Astro may inline into the page. The panel's own rules land in
 * an emitted stylesheet today, but a corpus built from one source alone would
 * quietly miss the rule that decides the question.
 */
async function distStyles() {
    const parts = [];
    for (const file of await listFiles(distDirectory)) {
        if (file.endsWith('.css')) parts.push(await readFile(file, 'utf8'));
    }
    const homepage = await readFile(join(distDirectory, 'index.html'), 'utf8');
    for (const match of homepage.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) parts.push(match[1]);
    return parts.join('\n');
}

const homepage = hasBuild ? await readFile(join(distDirectory, 'index.html'), 'utf8') : '';
const styles = hasBuild ? await distStyles() : '';
const rules = cascadedRules(styles);
const page = parsePage(homepage);
const panel = findAll(page, (element) => element.classes.includes('mission-panel'))[0];
const grid = findAll(page, (element) => element.classes.includes('mission-facts'))[0];
const cells = grid?.children.filter((child) => child.tag === 'div') ?? [];
const labels = [...homepage.matchAll(/<dt[^>]*>([\s\S]*?)<\/dt>/g)].map((match) =>
    match[1].replace(/<[^>]*>/g, '').trim()
);

describe('every mission fact label has the panel’s own space above it', () => {
    it.runIf(hasBuild)('renders one cell per mission fact, with the label first in every cell', () => {
        expect(cells.length, 'the homepage mission brief has no fact cell to measure').toBeGreaterThan(0);
        expect(cells.length, 'the grid and the fact module disagree').toBe(missionFacts.length);
        expect(labels, 'the rendered labels are not the module’s labels in order').toEqual(
            missionFacts.map((fact) => fact.label),
        );

        // The property below is about the cell's top edge and the label's own top
        // edge being the same edge — true only while the label is the cell's
        // first in-flow child.
        for (const [index, cell] of cells.entries()) {
            expect(cell.children[0]?.tag, `cell ${index + 1} does not start with its label`).toBe('dt');
            expect(cell.children[1]?.tag, `cell ${index + 1} does not carry its value second`).toBe('dd');
            expect(cell.attributes.has('style'), `cell ${index + 1} carries an inline style`).toBe(false);
        }

        // Non-vacuity: the corpus must contain the rules the assertions read.
        expect(
            rules.filter((rule) => /mission-facts/.test(rule.selector)).length,
            'no built rule styles the fact grid, so the cascade below would be empty',
        ).toBeGreaterThan(0);
    });

    it.runIf(hasBuild)('keeps every fact label clear of its cell’s top edge, at desktop and at 760px', () => {
        for (const [viewport, query] of [['desktop', null], ['max-width: 760px', mobileQuery]]) {
            const gaps = cells.map((cell) => valueOf(computedStyle(cell, rules, query), 'padding-top'));

            for (const [index, gap] of gaps.entries()) {
                expect(gap, `cell ${index + 1} has no top padding at ${viewport}`).toBeDefined();
                expect(gap, `cell ${index + 1} is flush against its top edge at ${viewport}`).not.toBe('0');
            }

            expect(new Set(gaps).size, `the cells disagree on the gap above the label at ${viewport}: ${gaps}`)
                .toBe(1);
            expect(gaps[0], `the gap above a label is not the panel's own rhythm at ${viewport}`).toBe('1.5rem');

            // Nothing may pull the label back towards the edge the padding opens.
            for (const [index, cell] of cells.entries()) {
                const label = cell.children[0];
                const margin = valueOf(computedStyle(label, rules, query), 'margin-top');
                expect(margin, `cell ${index + 1} pulls its label up at ${viewport}`).toMatch(/^0(px)?$/);
            }

            // The winning declaration has to be the panel's own, not a global
            // reset that happens to write the same number.
            for (const [index, cell] of cells.entries()) {
                const selector = selectorOf(computedStyle(cell, rules, query), 'padding-top');
                expect(selector, `cell ${index + 1} takes its top padding from outside the grid at ${viewport}`)
                    .toMatch(
                        /mission-facts/,
                    );
            }
        }
    });

    it.runIf(hasBuild)('keeps the hairline lattice: a left rule per column, a bottom rule per row, no doubling', () => {
        const drawnColours = new Set();

        for (const [index, cell] of cells.entries()) {
            const style = computedStyle(cell, rules, null);
            const wide = cell.classes.includes('fact-wide');
            const firstColumn = index % 2 === 0;

            // `.mission-facts div` draws the left rule; `div:nth-child(2n)` drops
            // it, and the full-width row drops both.
            const leftWidth = valueOf(style, 'border-left-width');
            const leftStyle = valueOf(style, 'border-left-style', 'none');
            expect(leftWidth, `cell ${index + 1} draws the wrong left rule`).toBe(
                !wide && firstColumn ? '1px' : '0',
            );
            if (!wide && firstColumn) {
                expect(leftStyle, `cell ${index + 1} does not draw its left rule`).toBe('solid');
            }

            // Only bottom rules close a row: a top rule would double the line the
            // row above already drew at that same edge.
            const bottomWidth = valueOf(style, 'border-bottom-width');
            expect(bottomWidth, `cell ${index + 1} draws the wrong bottom rule`).toBe(wide ? '0' : '1px');
            expect(valueOf(style, 'border-top-width'), `cell ${index + 1} doubles a hairline from above`).toBe('0');

            for (const side of ['left', 'bottom']) {
                if (valueOf(style, `border-${side}-width`) === '0') continue;
                drawnColours.add(valueOf(style, `border-${side}-color`, ''));
            }
        }

        expect(drawnColours.size, `the drawn hairlines use ${drawnColours.size} colours`).toBe(1);

        // The panel's outer rules stay: the grid's lattice is not the reason they
        // were there, so it must not have consumed them.
        const panelStyle = computedStyle(panel, rules, null);
        expect(valueOf(panelStyle, 'border-top-width'), 'the panel lost its top rule').toBe('1px');
        expect(valueOf(panelStyle, 'border-bottom-width'), 'the panel lost its bottom rule').toBe('1px');
    });
});
