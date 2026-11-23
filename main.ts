// Real-Life Patch Notes: The Comedy Changelog — make.fun bounty
// u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
//
// The entry is one terse release-note line for a bug in human biology:
//
//   v2.4.1: fixed a bug where the brain replayed an embarrassing moment from 2011 at 3 a.m. for no reason.
//
// It is written in the flat register of a real changelog, and the bug
// is one every human has shipped with: the 3 a.m. replay of a moment
// from fifteen years ago, unprompted and unfixable.
//
// Run: npx tsx main.ts   (or: node --experimental-strip-types main.ts)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "v2.4.1: fixed a bug where the brain replayed an embarrassing moment from 2011 at 3 a.m. for no reason.";

// Guard: one line, at most 160 characters, per the bounty rules.
if (line.length > 160 || line.includes("\n")) {
  throw new Error("Entry must be a single line of at most 160 characters");
}

// Print the line, and write it — with NO trailing newline, so
// /output/entry.txt is exactly the entry — for the judge harness.
process.stdout.write(line + "\n");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Round-trip check: what the judge reads must be exactly the entry.
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("Round-trip check failed: entry.txt differs from entry");
}
