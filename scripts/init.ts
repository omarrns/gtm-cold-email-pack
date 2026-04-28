#!/usr/bin/env tsx
/**
 * Interactive scaffolder for sender-profile.md
 *
 * Usage: npx tsx scripts/init.ts
 *
 * Asks a short series of questions and writes config/sender-profile.md
 * (which is gitignored). Skills read from this file at runtime.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const PROFILE_PATH = join(process.cwd(), "config", "sender-profile.md");
const EXAMPLE_PATH = join(process.cwd(), "config", "sender-profile.example.md");

async function main() {
  if (existsSync(PROFILE_PATH)) {
    const rl = createInterface({ input, output });
    const overwrite = await rl.question(
      "sender-profile.md already exists. Overwrite? (y/N) ",
    );
    rl.close();
    if (overwrite.trim().toLowerCase() !== "y") {
      console.log("Aborted. Existing profile untouched.");
      process.exit(0);
    }
  }

  const rl = createInterface({ input, output });

  console.log("\nLet's build your sender profile.\n");
  console.log(
    "This file describes you to the email skills. It stays local (gitignored).\n",
  );

  const currentStatus = await rl.question(
    "Current status (one paragraph: what you just left, what you're doing now, what you're looking for):\n> ",
  );

  console.log(
    "\nHero achievements — 3 metric-led bullets the skills can pull from.",
  );
  const hero1 = await rl.question("Hero 1: ");
  const hero2 = await rl.question("Hero 2: ");
  const hero3 = await rl.question("Hero 3: ");

  console.log(
    "\nEcosystem connections — products/companies you have genuine product or builder ties to.",
  );
  console.log('Comma-separated, format: "Product — how you used it"');
  const ecosystem = await rl.question("> ");

  console.log("\nVoice rules.");
  const voiceIn = await rl.question(
    "In (writing patterns to keep, comma-separated): ",
  );
  const voiceOut = await rl.question(
    "Out (writing patterns to forbid, comma-separated): ",
  );

  console.log("\nDealbreakers — hard rules the skills must never violate.");
  const dealbreakers = await rl.question("> ");

  rl.close();

  const profile = `# Sender Profile

## Current status

${currentStatus}

## Hero achievements

- ${hero1}
- ${hero2}
- ${hero3}

## Ecosystem connections

${ecosystem
  .split(",")
  .map((s) => `- ${s.trim()}`)
  .join("\n")}

## Voice rules

**In:**
${voiceIn
  .split(",")
  .map((s) => `- ${s.trim()}`)
  .join("\n")}

**Out:**
${voiceOut
  .split(",")
  .map((s) => `- ${s.trim()}`)
  .join("\n")}

## Dealbreakers

${dealbreakers
  .split(",")
  .map((s) => `- ${s.trim()}`)
  .join("\n")}
`;

  writeFileSync(PROFILE_PATH, profile, "utf8");
  console.log(`\nWrote ${PROFILE_PATH}`);
  console.log(
    "Next: symlink or copy skills/* into ~/.claude/skills/, then try /pick-frame.",
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
