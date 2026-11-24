import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "I mapped it as a no-go zone after one false positive, and I'm not paid to doubt the map.";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry + "\n", "utf8");

process.stdout.write(entry + "\n");