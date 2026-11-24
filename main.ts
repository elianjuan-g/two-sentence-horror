// Two-Sentence Horror — u-suroto-two-sentence-horror-acea9253
// Writes one horror story of exactly two sentences to /output/entry.txt.
// The text has no trailing newline: the gate counts characters 1-400 and
// the judge reads the text exactly as written, so nothing extra rides along.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My mother has called me every Sunday at six for twenty years, even after the funeral, even after I changed my number twice. Last Sunday I finally answered, and the voice on the other end was mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
