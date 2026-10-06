// Copies the inner-site build into the room's static folder, where the
// 3D monitor loads it from (/os/index.html).
import { cpSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const from = join(root, 'inner-site', 'build');
const to = join(root, 'room', 'static', 'os');

if (!existsSync(from)) {
    console.error('inner-site/build not found. Run "npm run build:os" first.');
    process.exit(1);
}

cpSync(from, to, { recursive: true, force: true });
console.log('Copied inner-site/build -> room/static/os');
