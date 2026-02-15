#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");

const replacements = [
  [/\(702\) 919-7702/g, "(702) 744-2993"],
  [/tel:\+17029197702/g, "tel:+17027442993"],
  [/\+17029197702/g, "+17027442993"],
];

function walk(dir, ext, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (name === "node_modules" || name === ".next") continue;
    if (statSync(p).isDirectory()) walk(p, ext, out);
    else if (ext.test(name)) out.push(p);
  }
  return out;
}

const files = walk(root, /\.(ts|tsx|js|jsx|md|txt)$/);
let total = 0;
for (const p of files) {
  let c = readFileSync(p, "utf8");
  let changed = false;
  for (const [from, to] of replacements) {
    if (from.test(c)) { c = c.replace(from, to); changed = true; }
  }
  if (changed) { writeFileSync(p, c); total++; console.log(p.replace(root, "")); }
}
console.log("Updated", total, "files.");
