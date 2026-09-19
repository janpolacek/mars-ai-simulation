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
        "The programme's steps, in the order it reaches them. Every step is complete; the full mission record is now closed.",
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
        state: 'Complete',
        title: 'Mission architecture',
        detail:
            "RH-01 Pathfinder's design is frozen, the payload scope is agreed, and the delivery architecture is chosen. The mission around the rover is now assembled and launched.",
        link: { href: routes.newsArticle('004-launch-provider'), label: 'Read the architecture decision' },
    },
    {
        state: 'Complete',
        title: 'Integration and readiness',
        detail:
            'The flight stack reached the launch campaign site, was tested against mission conditions, and the mission launched on 17 February 2031.',
        link: {
            href: routes.newsArticle('milestone-2031-launch-readiness-review'),
            label: 'Read the readiness review',
        },
    },
    {
        state: 'Complete',
        title: 'Surface operations',
        detail:
            'RH-01 Pathfinder operated on the surface at Asteria Field, surveying terrain and examining rocks in context. Two Mars years of surface operation were completed on 21 June 2035.',
        link: { href: routes.newsArticle('008-landing'), label: 'Read the landing confirmation' },
    },
    {
        state: 'Complete',
        title: 'Closeout and record closure',
        detail:
            "Supported surface operations ended on 21 June 2035 and a thirty-day listening campaign began as closeout. The campaign ended on 21 July 2035 and the mission was declared at end of life. The calibrated science archive and final engineering report were both completed on 30 June 2036, closing the mission's public record.",
        link: { href: routes.newsArticle('011-archive-final-report'), label: 'Read the archive final report' },
    },
];
