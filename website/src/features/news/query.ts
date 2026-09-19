import { type CollectionEntry, getCollection } from 'astro:content';

import { isPublishedEntry, selectPublicNews } from '../../lib/publication';

export type NewsEntry = CollectionEntry<'news'>;

/**
 * Published news items, newest simulated record date first — the one selection
 * every surface consumes: the homepage carousel (`NewsCarousel.astro`), the
 * newsroom index (`NewsList.astro`) and the detail-route generator
 * (`src/pages/news/[slug].astro`).
 *
 * The publication state is filtered at collection-query level as well as in the
 * selection helper, so a draft cannot reach a listing, a card, or a route by
 * accident — and a published item is listed and openable from that one field,
 * without a second decision that could disagree with it.
 */
export async function getPublishedNews(): Promise<NewsEntry[]> {
    return selectPublicNews(await getCollection('news', isPublishedEntry));
}
