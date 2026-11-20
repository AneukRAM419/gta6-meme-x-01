// Entry program for the make.fun bounty "gta6-meme-x-01" (Post a GTA 6 meme on X).
// It copies POST.json from the repository root (MAKEFUN_BOT_DIR) to MAKEFUN_OUTPUT_DIR/POST.json,
// where the gate reads it. That is all it does: it prints nothing, uses no network, no clock and
// no files outside the repository and the output directory, and it is fully deterministic.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Validate POST.json before handing it to the gate: it must be a JSON object
// whose "url" is the address of a post on X. A malformed file fails loudly
// here (exit 1, nothing copied) instead of producing a useless output file.
// The copy itself stays byte-for-byte: the original file is copied as-is,
// never re-serialised.
let post: unknown;
try {
  post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
} catch {
  process.exit(1);
}
const url =
  post !== null && typeof post === 'object'
    ? (post as { url?: unknown }).url
    : undefined;
if (
  typeof url !== 'string' ||
  !(url.startsWith('https://x.com/') || url.startsWith('https://twitter.com/'))
) {
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch {
  process.exit(1);
}
