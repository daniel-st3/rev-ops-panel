const fs = require("fs");
const path = require("path");

const root = process.cwd();

const requiredFiles = [
  "index.html",
  path.join("assets", "gladly-icon.png"),
  path.join("assets", "salesforce-logo.png"),
  path.join("assets", "marketo-logo.webp"),
  "vercel.json"
];

const requiredSnippets = [
  'id="setup"',
  'id="fit"',
  'id="timing"',
  'id="clay"',
  'id="claude"',
  'id="salesforce"',
  'id="marketo"',
  'id="summary"',
  "Gladly Account Scoring Engine",
  "function computeScores"
];

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

for (const snippet of requiredSnippets) {
  if (!html.includes(snippet)) {
    throw new Error(`Missing required markup or code snippet: ${snippet}`);
  }
}

console.log("Static build check passed.");
