import { type CollectionEntry, getCollection } from 'astro:content';

import { isPublishedEntry, selectPublicNews, selectReleasedNews } from '../../lib/publication';
import { releasedNewsSlugs } from '../../lib/releases';

export type NewsEntry = CollectionEntry<'news'>;

/**
 * Published news items, in frontmatter order.
 *
 * The publication state is filtered at collection-query level as well as in the
 * selection helper, so a draft cannot reach a listing or a card by accident.
 */
export async function getPublishedNews(): Promise<NewsEntry[]> {
    return selectPublicNews(await getCollection('news', isPublishedEntry));
}

/**
 * Published news items a human release reference also authorises a detail page
 * for. Empty while `releasedNewsSlugs` is empty.
 */
export async function getReleasedNews(): Promise<NewsEntry[]> {
    return selectReleasedNews(await getCollection('news', isPublishedEntry), releasedNewsSlugs);
}
