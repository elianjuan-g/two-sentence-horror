// Local gate check for the Two-Sentence Horror entry.
// Runs main.ts, then verifies /output/entry.txt against the competition gate
// (exactly two sentences, 1-400 characters, valid UTF-8, no trailing newline)
// and that the text is exactly the chosen story.
import { execFileSync } from "node:child_process";
import { readFileSync, rmSync } from "node:fs";
import assert from "node:assert/strict";

const STORY =
  "My mother has called me every Sunday at six for twenty years, even after the funeral, even after I changed my number twice. Last Sunday I finally answered, and the voice on the other end was mine.";

function sentences(text) {
  const parts = text.trim().split(/(?<=[.!?])\s+/).filter((s) => s.length > 0);
  for (const s of parts) {
    assert.ok(/[.!?]$/.test(s), `sentence lacks terminal punctuation: ${s}`);
  }
  return parts;
}

rmSync("/output/entry.txt", { force: true });
execFileSync(process.execPath, ["main.ts"], { cwd: import.meta.dirname, stdio: "inherit" });

const bytes = readFileSync("/output/entry.txt");
assert.ok(!(bytes.length >= 3 && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf), "entry starts with a UTF-8 BOM");
const text = bytes.toString("utf8");

assert.equal(text, STORY, "entry text is not the chosen story");
assert.equal(Buffer.from(text, "utf8").toString("utf8"), text, "not valid UTF-8");
assert.ok(!text.endsWith("\n"), "trailing newline present");
assert.ok(text.trim().length > 0, "entry is only whitespace");
assert.ok([...text].length >= 1 && [...text].length <= 400, "character count outside 1-400");
assert.equal(sentences(text).length, 2, "entry is not exactly two sentences");

console.log(`OK: ${[...text].length} chars, ${bytes.length} bytes, 2 sentences, exact match`);
