import { routes } from '../../lib/navigation';

/**
 * The public progress log.
 *
 * A curated list, not a generated one: the steps the published record carries,
 * the step the programme is working on now, and the steps after it. No string
 * here may describe a fact the record has not released, and `link` points only
 * at a published article. Add a step's link when its article is published; move
 * the current flag only when the record carries the next step's opening.
 */
export interface ProgressStep {
    /** Small label above the milestone title. */
    state: string;
    title: string;
    detail: string;
    /** Marks the milestone the programme is working on now. */
    current?: boolean;
    /** The published article that carries this step, if one is published. */
    link?: { href: string; label: string; };
}

export const progressHeading = {
    eyebrow: 'Mission roadmap',
    title: 'One step at a time.',
    description:
        "The programme's steps, in the order it reaches them. The highlighted step is the work in hand; the step after it is not settled yet.",
};

export const progressSteps: readonly ProgressStep[] = [
    {
        state: 'Announced',
        title: 'Coalition and purpose',
        detail:
            'Ten national programme teams, one uncrewed lander and rover, and a mission to work out how water changed an ancient equatorial landscape. The schedule frame is a launch window in 2031.',
        link: { href: routes.newsArticle('001-project-announcement'), label: 'Read the announcement' },
    },
    {
        state: 'In hand',
        title: 'Mission architecture',
        detail:
            "The first rover's design is frozen and the payload scope is agreed. The mission around the rover is still being assembled.",
        current: true,
        link: { href: routes.newsArticle('003-vehicle-design'), label: 'Read the rover design' },
    },
    {
        state: 'Ahead',
        title: 'Surface operations',
        detail: 'Using the rover on the surface to survey terrain and examine rocks in context.',
    },
];
