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
    /** Detail route for a released article. Gated — see `./releases.ts`. */
    newsArticle: (slug: string) => `/news/${slug}/`,
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
     * but the header renders `headerNavigation` below: at the site's own 320 px
     * minimum width (`body { min-width: 20rem }`) a fourth header item pushes
     * the nav past the header box, measured at 321 px of nav against a 300 px
     * header edge. The `About` label itself is unchanged either way.
     */
    footerOnly?: boolean;
}

/**
 * The site's navigation. Labels are the wording the Preparing site already
 * publishes; "News" now points at the real `/news/` index instead of the
 * homepage anchor, which still exists as the `#updates` section id.
 *
 * `About` is the Phase 1 link to `/about/`. It is defined once here; the footer
 * renders it as the persistent link the plan asks for, and the header carries
 * the three items that fit its minimum width.
 */
export const navigation: readonly NavItem[] = [
    { label: 'News', href: routes.news },
    { label: 'Mission', href: homeAnchor('mission') },
    { label: 'Progress', href: homeAnchor('timeline') },
    { label: 'About', href: routes.about, footerOnly: true },
];

/** The header's view of `navigation` — every item that is not footer-only. */
export const headerNavigation: readonly NavItem[] = navigation.filter((item) => item.footerOnly !== true);
