/* global console */
import { syncAssets } from './assets.mjs';

const { gated, pruned } = await syncAssets();

if (gated.length > 0) {
    console.log(
        `[sync-assets] withheld ${gated.length} gated asset(s) from the public build: ${gated.join(', ')}`,
    );
}

if (pruned.length > 0) {
    console.log(`[sync-assets] pruned gated asset(s) left by an earlier run: ${pruned.join(', ')}`);
}
