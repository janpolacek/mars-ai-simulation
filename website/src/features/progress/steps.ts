import { routes } from '../../lib/navigation';

/**
 * The public progress log.
 *
 * A curated list, not a generated one: the steps the published record carries,
 * the step the programme is working on now, and the steps after it. No string
 * here may describe a fact the record has not released, and `link` points only
 * at a published article. Add a step when the record carries a new body of
 * work; add a step's link when its article is published, and re-choose it when
 * a newer article carries the step; move the current flag only when the
 * record carries the next step's opening.
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
        title: 'Programme and purpose',
        detail:
            'Ten national programme teams, one uncrewed lander and rover, and a mission to work out how water changed an ancient equatorial landscape. The schedule frame is a launch window in 2031.',
        link: { href: routes.newsArticle('001-project-announcement'), label: 'Read the announcement' },
    },
    {
        state: 'In hand',
        title: 'Mission architecture',
        detail:
            "The first rover's design is frozen, the payload scope is agreed, and the delivery architecture is chosen. The mission around the rover is still being assembled.",
        current: true,
        link: { href: routes.newsArticle('004-launch-provider'), label: 'Read the architecture decision' },
    },
    {
        state: 'Ahead',
        title: 'Integration and readiness',
        detail:
            'Bringing the elements together into one stack, testing them against the conditions the mission will face, and closing the reviews.',
    },
    {
        state: 'Ahead',
        title: 'Surface operations',
        detail: 'Using the rover on the surface to survey terrain and examine rocks in context.',
    },
];
