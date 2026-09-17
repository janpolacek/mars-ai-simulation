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
export type PublicationState = 'draft' | 'published';

interface PublicationEntry {
    id: string;
    data: { publication: PublicationState; order: number; };
}

/** The collection-query filter: only published material is public. */
export function isPublishedEntry({ data }: { data: { publication: PublicationState; }; }): boolean {
    return data.publication === 'published';
}

/**
 * Published items, in the order their frontmatter declares.
 *
 * This is both the listing set and the routable set: the same array feeds the
 * card lists and `getStaticPaths`, so the newsroom can never advertise an item
 * that has no page behind it.
 */
export function selectPublicNews<T extends PublicationEntry>(entries: readonly T[]): T[] {
    return entries.filter(isPublishedEntry).sort((a, b) => a.data.order - b.data.order);
}
