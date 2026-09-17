/**
 * The simulated record date: the date, inside the fiction, on which an article
 * was written.
 *
 * One module owns the whole public surface of the field — the accepted shape,
 * the label, and the wording of the line — so the article page and the newsroom
 * card cannot state the same value two different ways. Nothing here derives a
 * machine-readable date: the value is in-fiction prose and must never reach
 * `datePublished`, `dateModified`, Open Graph, a sitemap or `<time datetime>`.
 *
 * Kept free of `astro:` imports (like `./publication`) so the rules can be
 * unit-tested against fixtures, and free of `Intl`/locale data so the same value
 * renders the same string in every environment.
 */

/**
 * `YYYY-MM-DD`, with a real month and a plausible day: the shape
 * `mars-ai-simulator-editor` writes into the article frontmatter. Bounded here so
 * an out-of-range value fails the build rather than rendering `1 undefined 2026`.
 */
export const simulatedDatePattern = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/;

/**
 * The public label. The reader is told this is a date inside the fiction, which
 * is what keeps the value from being read as a real publication date — the
 * published surface never states one.
 */
export const simulatedDateLabel = 'Simulated record date';

/** The separator between the label and the value, as the site writes it (U+00B7). */
export const simulatedDateSeparator = '·';

/** Month names, spelled out, in calendar order — the en-GB form the label uses. */
const monthNames = [
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

/**
 * The `YYYY-MM-DD` calendar date a frontmatter value states, or `undefined` when
 * it states none.
 *
 * Both shapes the YAML frontmatter can deliver are accepted: the string, and the
 * `Date` a parser produces from an unquoted `2026-10-12` (js-yaml resolves a bare
 * date at UTC midnight, so the UTC getters are what keep the day from shifting
 * under a local timezone). Normalising here is what lets the schema accept either
 * form without the value's meaning depending on how it was quoted.
 */
export function toCalendarDate(value: string | Date): string | undefined {
    if (typeof value === 'string') return simulatedDatePattern.test(value) ? value : undefined;
    if (Number.isNaN(value.getTime())) return undefined;
    const iso = value.toISOString().slice(0, 10);
    return simulatedDatePattern.test(iso) ? iso : undefined;
}

/**
 * The value as public prose: `12 October 2026` — day and month unpadded, the
 * month spelled out. `undefined` when the value states no calendar date, so a
 * caller renders nothing rather than a broken date.
 */
export function formatSimulatedDate(value: string | Date): string | undefined {
    const iso = toCalendarDate(value);
    if (iso === undefined) return undefined;
    const [year, month, day] = iso.split('-');
    return `${Number(day)} ${monthNames[Number(month) - 1]} ${year}`;
}

/**
 * The one line both surfaces render:
 * `Simulated record date · 12 October 2026`.
 */
export function simulatedDateText(value: string | Date): string | undefined {
    const formatted = formatSimulatedDate(value);
    if (formatted === undefined) return undefined;
    return `${simulatedDateLabel} ${simulatedDateSeparator} ${formatted}`;
}
