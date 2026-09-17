import { routes } from '../../lib/navigation';

/**
 * The public progress log.
 *
 * A curated list, not a generated one: the steps the published record carries,
 * the step the programme is working on now, and the steps after it. No string
 * here may describe a fact the record has not released, and `link` points only
 * at a published article. Move the current flag and add the link when a step's
 * article is published.
 */
export interface ProgressStep {
    /** Small label above the milestone title. */
    state: string;
    title: string;
    detail: string;
    /** Marks the milestone the programme is working on now. */
    current?: boolean;
    /** The published article that carries this step, if one is published. */
    link?: { href: string; label: string };
}

export const progressHeading = {
    eyebrow: 'Progress log',
    title: 'One step at a time.',
    description:
        'The public record moves one step at a time. Published steps link to the article that carries them; the highlighted step is the work in hand, and the steps after it are not settled yet.',
};

export const progressSteps: readonly ProgressStep[] = [
    {
        state: 'Announced',
        title: 'Coalition and purpose',
        detail: 'Ten national programme teams, one uncrewed lander and rover, and a mission to work out how water changed an ancient equatorial landscape.',
        link: { href: routes.newsArticle('001-project-announcement'), label: 'Read the announcement' },
    },
    {
        state: 'Current progress',
        title: 'Mission architecture',
        detail: 'Turning the announced objective into a mission: what the rover carries, who builds what, and how the mission reaches Mars.',
        current: true,
    },
    {
        state: 'Later',
        title: 'Surface operations',
        detail: 'Using the rover on the surface to survey terrain and examine rocks in context.',
    },
];
