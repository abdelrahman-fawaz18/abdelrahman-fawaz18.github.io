import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.env.PORTFOLIO_CHECK_DIR ? path.resolve(process.env.PORTFOLIO_CHECK_DIR) : path.resolve(import.meta.dirname, '../dist');
const base = (process.env.PORTFOLIO_BASE_PATH || '/').replace(/\/$/, '');
async function walk(dir) { const entries = await fs.readdir(dir, { withFileTypes: true }); return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : path.join(dir, entry.name)))).flat(); }
const files = await walk(root);
const pages = files.filter(file => file.endsWith('.html'));
const errors = [];
const titles = new Set();
let checkedLinks = 0;
async function resolveTarget(value, file) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return;
  const [rawPath, fragment] = value.split('#');
  const pathname = decodeURIComponent(rawPath.split('?')[0]);
  let target = file;
  if (pathname) {
    const clean = base && pathname.startsWith(base + '/') ? pathname.slice(base.length) : pathname;
    target = clean.startsWith('/') ? path.join(root, clean.slice(1)) : path.resolve(path.dirname(file), clean);
    try { if ((await fs.stat(target)).isDirectory()) target = path.join(target, 'index.html'); } catch { if (!path.extname(target)) target = path.join(target, 'index.html'); }
  }
  checkedLinks++;
  try { await fs.access(target); } catch { errors.push(`${path.relative(root, file)}: missing ${value}`); return; }
  if (fragment && target.endsWith('.html')) {
    const html = await fs.readFile(target, 'utf8');
    if (!html.includes(`id="${decodeURIComponent(fragment)}"`)) errors.push(`${path.relative(root, file)}: missing anchor ${value}`);
  }
}
for (const file of pages) {
  const html = await fs.readFile(file, 'utf8');
  const relative = path.relative(root, file);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  if (!title || titles.has(title)) errors.push(`${relative}: missing or duplicate title`);
  titles.add(title);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) errors.push(`${relative}: expected one h1`);
  if (!html.includes('lang="en"') || !html.includes('name="description"')) errors.push(`${relative}: missing language/description`);
  if (/C:\\|Job Search|Resume_AE_Master|candidate\/preferences|TODO|lorem ipsum/i.test(html)) errors.push(`${relative}: private path or placeholder content`);
  for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(tag[0]) || !/\bwidth="/.test(tag[0]) || !/\bheight="/.test(tag[0])) errors.push(`${relative}: image missing alt or dimensions`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (!value || value === '#') { errors.push(`${relative}: empty link/source`); continue; }
    await resolveTarget(value, file);
  }
  for (const match of html.matchAll(/\bsrcset="([^"]*)"/g)) {
    for (const value of match[1].split(',').map(item => item.trim().split(/\s+/)[0])) await resolveTarget(value, file);
  }
}
const privateFiles = files.filter(file => /(?:\.docx|\.pcap|\.pcapng|\.env|\.xlsx|\.yaml|\.yml)$/i.test(file));
if (privateFiles.length) errors.push('Unexpected source/private-format files in static output');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`PASS: ${pages.length} pages, ${checkedLinks} local links/assets/anchors, unique metadata, image attributes, and output exposure checks.`);
