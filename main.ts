// ai-joke-02 entry: writes one joke about AI coding agents to /output/entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ONE_LINER = "My AI agent wrote the code, the tests, and the review. It's the only employee with unanimous approval.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ONE_LINER);
