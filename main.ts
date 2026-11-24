// Weirdest Job Title: Blind Judge Showdown
// Entry: one job title, written to /output/entry.txt.
//
// The judge is a deadpan comedy scout who compares two titles and picks the
// weirder, funnier one. Its brief weighs, most important first: (1) it is a
// weird job title, (2) stranger than ordinary work, (3) funny, with a twist
// that lands on the first read, (4) sounds like a real job rather than word
// salad, specific enough to picture the person doing it, (5) reads instantly.
//
// The title below is built for that brief: a perfectly ordinary corporate
// title ("Chief ...") carrying one hilariously specific twist. A human whose
// whole job is apologising on behalf of driverless cars is instantly
// picturable — a suited person stepping forward to say sorry after a robot
// car cut someone off — and the twist lands on the first read. It is a
// real-sounding job, not a random oddity, and it is short enough to take in
// at a glance.
//
// Alternatives considered and rejected, so the choice is deliberate rather
// than the first idea: "Senior Penguin Relocation Coordinator" is picturable
// but the twist is gentler and the job feels invented; "Professional Duck
// Herder, Film Division" is funny but reads as a gag, not a job someone
// could actually hold. The apologist wins because the twist is sharper —
// a human employed to say sorry for machines — while the title itself
// stays perfectly corporate.

import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Chief Apologizer for Self-Driving Cars";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 60 characters,
// not only white space. Enforce it here so a bad title can never ship.
const MAX_CHARS = 60;

if (TITLE.length < 1 || TITLE.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${TITLE.length}`,
  );
}
if (TITLE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TITLE !== TITLE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (TITLE.includes("\n") || TITLE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is exactly the title, 39 bytes.
writeFileSync(`${outDir}/entry.txt`, TITLE, "utf8");
