/**
 * Publication state filtering.
 *
 * Kept free of `astro:content` imports so the rules can be unit-tested against
 * fixtures: a `publication: draft` item must produce no listing entry, no card,
 * and no route.
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

/** Published items, in the order their frontmatter declares. */
export function selectPublicNews<T extends PublicationEntry>(entries: readonly T[]): T[] {
    return entries.filter(isPublishedEntry).sort((a, b) => a.data.order - b.data.order);
}

/** Published items that a release reference additionally authorises a page for. */
export function selectReleasedNews<T extends PublicationEntry>(
    entries: readonly T[],
    released: readonly string[],
): T[] {
    return selectPublicNews(entries).filter((entry) => released.includes(entry.id));
}
