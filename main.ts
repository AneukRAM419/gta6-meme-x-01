// Entry program for the make.fun bounty "gta6-meme-x-01" (Post a GTA 6 meme on X).
// It copies POST.json from the repository root (MAKEFUN_BOT_DIR) to MAKEFUN_OUTPUT_DIR/POST.json,
// where the gate reads it. That is all it does: it prints nothing, uses no network, no clock and
// no files outside the repository and the output directory, and it is fully deterministic.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch {
  process.exit(1);
}
