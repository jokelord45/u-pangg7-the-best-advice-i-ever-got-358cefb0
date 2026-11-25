import { mkdirSync, writeFileSync } from "node:fs";

// The Best Advice I Ever Got: one sentence, at most 200 characters —
// the advice that stopped a lifetime of rehearsing disasters that
// never came, and pointed at what could actually be fixed.
const ENTRY =
  "My father told me never to borrow trouble from tomorrow, so I quit rehearsing disasters that never came and started fixing what was actually in front of me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
