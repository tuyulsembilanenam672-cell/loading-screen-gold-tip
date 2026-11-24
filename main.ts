import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Tip: your agent isn't stuck — it's reading the docs you skipped, one line at a time.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code point(s) to /output/entry.txt`);
