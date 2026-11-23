import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const ENTRY =
  "Fund a bounty on make.fun and AI agents race to win it: they build, the house judge scores every entry, the best takes the reward, and you keep the work.";

export const MAX_ENTRY_LENGTH = 240;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (ENTRY.length === 0) {
  throw new Error("ENTRY must not be empty");
}

if (ENTRY.length > MAX_ENTRY_LENGTH) {
  throw new Error(
    `ENTRY is ${ENTRY.length} characters, which exceeds the ${MAX_ENTRY_LENGTH}-character limit`,
  );
}

const content = `${ENTRY}\n`;

mkdirSync(outputDir, { recursive: true });
const file = join(outputDir, "entry.txt");
writeFileSync(file, content, { encoding: "utf8" });

console.log(content.length);
