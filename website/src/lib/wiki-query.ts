/**
 * The wiki tree: its sections, the labels and descriptions its surfaces render,
 * its publication rule, and the grouping and cross-link helpers every surface
 * consumes.
 *
 * Kept free of `astro:content` imports so the rules can be unit-tested against
 * fixtures, exactly as `src/lib/publication.ts` is: a `publication: draft` page
 * must produce no index entry, no section entry, and no route, and a page that
 * omits the field entirely is held back by the same fail-closed default the
 * content schema applies (`src/content.config.ts`).
 *
 * One selection decides all three wiki surfaces — the root index
 * (`pages/wiki/index.astro`), a section index (`pages/wiki/[section]/index.astro`)
 * and the leaf-route generator (`pages/wiki/[section]/[slug].astro`) — so a page
 * cannot be listed without also being openable, and the frontmatter field, not a
 * second hand-edited list, is what holds a draft back.
 */

/** The tree's top-level nodes, in the order the index lists them. */
export const wikiSections = ['area', 'vehicle', 'project'] as const;

export type WikiSection = (typeof wikiSections)[number];

export type WikiPublicationState = 'draft' | 'published';

interface WikiEntry {
    id: string;
    data: {
        publication: WikiPublicationState;
        order: number;
        section: WikiSection;
    };
}

/** The collection-query filter: only published pages are public. */
export function isPublishedWikiEntry({ data }: { data: { publication: WikiPublicationState; }; }): boolean {
    return data.publication === 'published';
}

/**
 * Published wiki pages, in the order their frontmatter declares.
 *
 * This is both the listing set and the routable set, so the index and the leaf
 * pages cannot disagree about what is public.
 */
export function selectPublicWiki<T extends WikiEntry>(entries: readonly T[]): T[] {
    return entries.filter(isPublishedWikiEntry).sort((a, b) => a.data.order - b.data.order);
}

export function isWikiSection(value: string): value is WikiSection {
    return (wikiSections as readonly string[]).includes(value);
}

/**
 * The public label for each section: the reviewed wording the tree renders
 * wherever it *names* a section — the root index's group heading, a section
 * index's title and `H1`, and a leaf page's breadcrumb — while the section
 * value stays the URL key (`area`, `vehicle`, `project`). One definition, so
 * those surfaces cannot disagree about what a section is called, and a label
 * cannot drift from the section it labels without changing this map.
 *
 * Reviewed wording. `Landing Zones` is the human story owner's settled term for
 * `area` (2026-09-17); `Vehicles` and `Project` are the editorial gate's
 * approved labels. Do not paraphrase or re-punctuate.
 */
export const wikiSectionLabels: Record<WikiSection, string> = {
    area: 'Landing Zones',
    vehicle: 'Vehicles',
    project: 'Project',
};

/** The public label for a section, wherever the tree names one. */
export function wikiSectionLabel(section: WikiSection): string {
    return wikiSectionLabels[section];
}

/**
 * The document description of each section index, and of the tree's root index
 * — reviewed and approved as one set, one definition per string, so a built
 * `<meta name="description">` is byte-for-byte the reviewed wording and no page
 * composes its own fallback.
 *
 * The three section descriptions share one frame deliberately: a section index
 * exists only when it lists at least one published page
 * (`wikiSectionsWithPages`), so `Published …` is true there, whereas the root
 * index is live with an empty listing and must not claim one — it states the
 * collection's purpose instead.
 */
export const wikiSectionDescriptions: Record<WikiSection, string> = {
    area: 'Published reference pages about landing zones in the fictional Red Horizon Mars exploration project.',
    vehicle: 'Published reference pages about vehicles in the fictional Red Horizon Mars exploration project.',
    project: 'Published reference pages about the fictional Red Horizon Mars exploration project.',
};

/** The root index's document description, which promises no inventory. */
export const wikiIndexDescription = 'Reference pages for Red Horizon, a fictional Mars exploration project.';

/** One section and the published pages it holds, empty sections removed. */
export interface WikiSectionGroup<T> {
    readonly section: WikiSection;
    readonly entries: T[];
}

/**
 * A published selection grouped by section, in `wikiSections` order and
 * frontmatter order within each group, with empty groups dropped — a section
 * with nothing published has no index page and appears nowhere in the tree.
 */
export function groupWikiBySection<T extends WikiEntry>(entries: readonly T[]): WikiSectionGroup<T>[] {
    return wikiSections
        .map((section) => ({ section, entries: entries.filter((entry) => entry.data.section === section) }))
        .filter((group) => group.entries.length > 0);
}

/** The sections that have at least one published page — the section-index route set. */
export function wikiSectionsWithPages<T extends WikiEntry>(entries: readonly T[]): WikiSection[] {
    return groupWikiBySection(entries).map((group) => group.section);
}

/**
 * The pages a `related:` list names, in the order it names them.
 *
 * Resolved against the published selection, so an id that is unknown, or that
 * names a page the publication gate holds back, produces no link rather than a
 * link into a route `getStaticPaths` never generated.
 */
export function selectRelatedWiki<T extends WikiEntry>(
    entries: readonly T[],
    related: readonly string[] | undefined,
): T[] {
    if (related === undefined || related.length === 0) return [];

    const byId = new Map(entries.map((entry) => [entry.id, entry]));
    return related.map((id) => byId.get(id)).filter((entry): entry is T => entry !== undefined);
}
