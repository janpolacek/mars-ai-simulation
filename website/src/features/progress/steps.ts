/**
 * The public progress log.
 *
 * These are the three milestones the Preparing homepage already publishes;
 * later ones are added as the public record develops.
 */
export interface ProgressStep {
    /** Small label above the milestone title. */
    state: string;
    title: string;
    detail: string;
    /** Marks the milestone the programme is working on now. */
    current?: boolean;
}

export const progressHeading = {
    eyebrow: 'Progress log',
    title: 'One step at a time.',
    description:
        'The public story moves with the project. The highlighted step is where Red Horizon is now; later milestones will be added as the record develops.',
};

export const progressSteps: readonly ProgressStep[] = [
    {
        state: 'Current progress',
        title: 'Coalition planning',
        detail: 'Setting the mission’s purpose, partners, and operating principles.',
        current: true,
    },
    {
        state: 'Next chapter',
        title: 'Mission architecture',
        detail: 'Turning a shared objective into a testable vehicle and science plan.',
    },
    {
        state: 'Later',
        title: 'Surface operations',
        detail: 'Using the surface vehicle to survey terrain and examine rocks in context.',
    },
];
