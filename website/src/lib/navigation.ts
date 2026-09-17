/**
 * Route paths and the single navigation map.
 *
 * Both the header and the footer render `navigation`, so a link is defined
 * once. `homeAnchor` links back to a section of the homepage, which is the only
 * page that carries the mission and progress sections today.
 */
export const routes = {
    home: '/',
    news: '/news/',
    about: '/about/',
    /** Wiki tree root: the index the navigation links to. */
    wiki: '/wiki/',
    /** Detail route for a published article — one per published item, see `./publication.ts`. */
    newsArticle: (slug: string) => `/news/${slug}/`,
    /** Section index — generated only for a section with at least one published page. */
    wikiSection: (section: string) => `/wiki/${section}/`,
    /** Leaf route for a published wiki page. */
    wikiPage: (section: string, slug: string) => `/wiki/${section}/${slug}/`,
} as const;

/** Link to a section of the homepage, from any page. */
export function homeAnchor(id: string): string {
    return `${routes.home}#${id}`;
}

export interface NavItem {
    label: string;
    href: string;
    /**
     * Render this item in the footer only. Both consumers read `navigation`,
     * but the header renders `headerNavigation` below. At the site's own minimum
     * width (`body { min-width: 20rem }`, a 320 px layout viewport) the page's
     * content edge is at 300 px and the four header items measure 187 px of nav,
     * whose right edge lands at 311 px — 11 px into the page's 20 px gutter,
     * measured in the built site (`clientWidth === scrollWidth === 320` with and
     * without `Wiki`, so the item adds no horizontal scroll); the three-item
     * state ends exactly on that edge. A further header item is what overflows,
     * which is why `About` is footer-only. The `About` label itself is unchanged
     * either way.
     */
    footerOnly?: boolean;
}

/**
 * The site's navigation. Labels are the wording the Preparing site already
 * publishes; "News" now points at the real `/news/` index instead of the
 * homepage anchor, which still exists as the `#updates` section id.
 *
 * `Wiki` is the wiki tree's root index. It is the entry point the tree hangs
 * off: the section indexes and the leaf pages appear under it only once a page
 * is published (`src/lib/wiki-query.ts`), so the tree can be built and linked to
 * before any of its content is released.
 *
 * `About` is the Phase 1 link to `/about/`. It is defined once here; the footer
 * renders it as the persistent link the plan asks for, and the header carries
 * the four items that fit its minimum width.
 */
export const navigation: readonly NavItem[] = [
    { label: 'News', href: routes.news },
    { label: 'Wiki', href: routes.wiki },
    { label: 'Mission', href: homeAnchor('mission') },
    { label: 'Progress', href: homeAnchor('timeline') },
    { label: 'About', href: routes.about, footerOnly: true },
];

/** The header's view of `navigation` — every item that is not footer-only. */
export const headerNavigation: readonly NavItem[] = navigation.filter((item) => item.footerOnly !== true);
