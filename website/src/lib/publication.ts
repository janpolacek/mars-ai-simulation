/**
 * Publication state filtering.
 *
 * Kept free of `astro:content` imports so the rules can be unit-tested against
 * fixtures: a `publication: draft` item must produce no listing entry, no card,
 * and no route.
 *
 * One predicate decides all three surfaces. `src/features/news/query.ts` exposes
 * this selection to the homepage carousel, the newsroom index *and* the
 * `/news/<slug>/` route generator, so an item cannot be listed without also being
 * openable, and the frontmatter field — not a second, hand-edited slug list —
 * is what holds a draft back.
 */
import { toCalendarDate } from './simulated-date';

export type PublicationState = 'draft' | 'published';

interface PublicationEntry {
    id: string;
    data: {
        publication: PublicationState;
        order: number;
        /**
         * The simulated record date — the date, inside the fiction, on which
         * the article was written, as `YYYY-MM-DD` or the `Date` an unquoted
         * frontmatter date parses into. Optional on purpose: the editor assigns
         * the value, and an article that has none yet is valid rather than a
         * schema-invented date. Here it is the sort key and nothing else —
         * no machine-readable form of it is ever emitted.
         */
        simulatedDate?: string | Date;
    };
}

/** The collection-query filter: only published material is public. */
export function isPublishedEntry({ data }: { data: { publication: PublicationState; }; }): boolean {
    return data.publication === 'published';
}

/**
 * Published items, newest simulated record date first.
 *
 * This is both the listing set and the routable set: the same array feeds the
 * card lists and `getStaticPaths`, so the newsroom can never advertise an item
 * that has no page behind it.
 *
 * The sort key is the simulated record date — the in-fiction writing date, and
 * the release order the milestone table implies. `simulatedDate` is optional
 * and editor-assigned, so the order is defined for every input:
 *
 * - an entry with a simulated date sorts before one without, and dated entries
 *   sort newest date first (`YYYY-MM-DD` compares chronologically as text);
 * - every pair without a date, and two entries with the same date, sort by
 *   frontmatter `order` ascending — the deterministic fallback and tie-break,
 *   which keeps the undated set in exactly the sequence its frontmatter
 *   already declared.
 */
export function selectPublicNews<T extends PublicationEntry>(entries: readonly T[]): T[] {
    return entries.filter(isPublishedEntry).sort((a, b) => {
        const dateA = a.data.simulatedDate === undefined ? undefined : toCalendarDate(a.data.simulatedDate);
        const dateB = b.data.simulatedDate === undefined ? undefined : toCalendarDate(b.data.simulatedDate);

        if (dateA !== undefined && dateB !== undefined) {
            if (dateA !== dateB) return dateA < dateB ? 1 : -1;
            return a.data.order - b.data.order;
        }
        if (dateA !== undefined) return -1;
        if (dateB !== undefined) return 1;
        return a.data.order - b.data.order;
    });
}
