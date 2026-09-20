/**
 * Route paths and the single navigation map.
 *
 * The header renders `navigation` (`headerNavigation` below); the footer no
 * longer renders links — it carries the label and note only — so the map has a
 * single consumer and no footer-only concept remains. `homeAnchor` links back
 * to a section of the homepage, which is the only page that carries the
 * mission and progress sections today.
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

/** The repository this fictional mission is built and published from. */
export const githubUrl = 'https://github.com/janpolacek/mars-ai-simulation';

export interface NavItem {
    label: string;
    href: string;
    /**
     * Render this item as an external link: it opens in a new tab and drops
     * the referrer. The header applies `rel="noreferrer noopener" target="_blank"`
     * to items that set it.
     */
    external?: boolean;
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
 * `About` is the Phase 1 link to `/about/`, defined once here and rendered in
 * the header like the rest. `GitHub` is the repository link, the header's only
 * external item. Whether an item wraps onto a second line at the site's
 * minimum width is a layout property the header measures, not a property of
 * the map (see `media-and-layout-contracts.md`).
 */
export const navigation: readonly NavItem[] = [
    { label: 'News', href: routes.news },
    { label: 'Wiki', href: routes.wiki },
    { label: 'Mission', href: homeAnchor('mission') },
    { label: 'Roadmap', href: homeAnchor('timeline') },
    { label: 'About', href: routes.about },
    { label: 'GitHub', href: githubUrl, external: true },
];

/** The header's view of `navigation` — every item; the footer renders no links. */
export const headerNavigation: readonly NavItem[] = navigation;
