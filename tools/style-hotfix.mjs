#!/usr/bin/env node
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
let theme = "auto";
for (const a of args) if (a.startsWith("--theme=")) theme = a.split("=")[1];

const href =
  theme === "dark"
    ? "https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
    : theme === "light"
    ? "https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
    : "https://cdn.jsdelivr.net/npm/water.css@2/out/water.css";

const files = ["index.html", "osteen-files.html"];
let touched = 0;

for (const f of files) {
  const fp = path.resolve(process.cwd(), f);
  if (!fs.existsSync(fp)) { console.log(`[skip] ${f} not found`); continue; }
  let html = fs.readFileSync(fp, "utf8");

  const linkTag = `<link rel="stylesheet" href="${href}">`;
  const waterRe = /<link\s+[^>]*href="https:\/\/cdn\.jsdelivr\.net\/npm\/water\.css@2\/out\/[^"]+"[^>]*>/i;

  if (waterRe.test(html)) {
    html = html.replace(waterRe, linkTag);        // why: keep idempotent; replace old Water.css link
  } else if (/<head[^>]*>/i.test(html)) {
    html = html.replace(/<head([^>]*)>/i, (m) => `${m}\n    ${linkTag}`);
  } else {
    html = `${linkTag}\n${html}`;                 // fallback if head is missing
  }

  fs.writeFileSync(fp, html);
  console.log(`[patched] ${f}`);
  touched++;
}

console.log(touched ? `Done. Patched ${touched} file(s).` : "No target files found.");
