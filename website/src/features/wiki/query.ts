import { type CollectionEntry, getCollection } from 'astro:content';

import { isPublishedWikiEntry, selectPublicWiki } from '../../lib/wiki-query';

export type WikiPageEntry = CollectionEntry<'wiki'>;

/**
 * Published wiki pages, in frontmatter order — the one selection every wiki
 * surface consumes: the root index, the section indexes, and the leaf-route
 * generator.
 *
 * The publication state is filtered at collection-query level as well as in the
 * selection helper (`src/lib/wiki-query.ts`), so a draft cannot reach an index
 * entry or a route by accident, and a published page is listed and openable from
 * that one frontmatter field. Adding a page is therefore one new `.mdx` file:
 * nothing in this module, in `src/lib/navigation.ts`, or in a page has to change.
 */
export async function getPublishedWiki(): Promise<WikiPageEntry[]> {
    return selectPublicWiki(await getCollection('wiki', isPublishedWikiEntry));
}
