// Every JSON manifest must parse, and the versioned ones must agree: each assistant reads its own.
import { readdirSync, readFileSync } from 'node:fs';
import { sep } from 'node:path';

const versioned = [
  '.claude-plugin/plugin.json',
  '.codex-plugin/plugin.json',
  '.cursor-plugin/plugin.json',
  'gemini-extension.json',
  'server.json',
];
const jsonFiles = readdirSync('.', { recursive: true })
  .map(String)
  .filter((path) => path.endsWith('.json') && !path.startsWith(`.git${sep}`));

const failures = [];
const manifests = new Map();
for (const path of jsonFiles) {
  try {
    manifests.set(path, JSON.parse(readFileSync(path, 'utf8')));
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
  }
}

const versions = versioned.map((path) => [path, manifests.get(path.replaceAll('/', sep))?.version]);
if (new Set(versions.map(([, version]) => version)).size !== 1) {
  failures.push(`versions differ: ${versions.map(([path, version]) => `${path}=${version}`).join(', ')}`);
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`${jsonFiles.length} JSON files parse; manifests at ${versions[0][1]}`);
