/**
 * Site metadata strings that more than one part of the site renders.
 *
 * These are the wording the Preparing site already publishes. Moving a string
 * here is a code change only — the text itself is unchanged.
 */
export const site = {
    /** Programme name, used in the wordmark, splash, and page titles. */
    name: 'Red Horizon',
    /** Owner label in the footer. */
    project: 'Mars AI Simulation',
    /** Combined footer label, exactly as the Preparing footer renders it. */
    footerLabel: 'Red Horizon / Mars AI Simulation',
    footerNote: 'Built as an ongoing public experiment.',
    defaultTitle: 'Red Horizon | A Mars mission in progress',
    defaultDescription:
        'Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface.',
    /**
     * Document title for the newsroom index, applied by the about-method SEO
     * pass and confirmed by the 001 re-pass, which settled this string over
     * `News | Red Horizon` (kept as the recorded fallback) because the page's
     * own word for itself is the newsroom. Shared here because the page and any
     * future listing of it must agree.
     */
    newsTitle: 'Red Horizon newsroom | Every published step so far',
    splashLabel: 'Loading',
    /** The disclosure shown at the foot of every page. */
    disclosure: {
        mark: 'AI',
        title: 'This is AI-generated fiction.',
        body:
            'Red Horizon is a fictional Mars mission created with AI-assisted writing, design, and development. It is not affiliated with or endorsed by any real space agency.',
    },
} as const;

export type SiteStrings = typeof site;
