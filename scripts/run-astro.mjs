import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const require = createRequire(import.meta.url);
const packagePath = require.resolve('astro/package.json');
const info = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const bin = typeof info.bin === 'string' ? info.bin : info.bin.astro;
const child = spawn(process.execPath, [path.resolve(path.dirname(packagePath), bin), ...process.argv.slice(2)], {
  stdio: 'inherit', env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
});
child.on('error', error => { console.error(error.message); process.exit(1); });
child.on('exit', code => process.exit(code ?? 1));
process.once('SIGINT', () => child.kill('SIGINT'));
process.once('SIGTERM', () => child.kill('SIGTERM'));
