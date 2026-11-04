import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.env.PORTFOLIO_CHECK_DIR || 'dist');
const origin = 'https://abdelrahman-elsayed.com';
const sitemap = await fs.readFile(path.join(root, 'sitemap.xml'), 'utf8');
const robots = await fs.readFile(path.join(root, 'robots.txt'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]));
if (urls.length !== 17) throw new Error(`Expected 17 sitemap URLs; found ${urls.length}.`);
if (!robots.includes('Allow: /') || robots.includes('Disallow: /') || !robots.includes(`${origin}/sitemap.xml`)) {
  throw new Error('The public robots.txt must allow indexing and reference the live sitemap.');
}
for (const url of urls) {
  if (url.origin !== origin || url.search || url.hash) throw new Error(`Unexpected sitemap URL: ${url}`);
  const html = await fs.readFile(path.join(root, url.pathname, 'index.html'), 'utf8');
  if (/name="robots"[^>]*content="[^"]*noindex/.test(html)) throw new Error(`${url.pathname} is still noindex.`);
  if (!html.includes(`rel="canonical" href="${url.href}"`)) throw new Error(`${url.pathname} has an incorrect canonical URL.`);
  if (!html.includes(`property="og:url" content="${url.href}"`)) throw new Error(`${url.pathname} has an incorrect sharing URL.`);
  if (!html.includes(`property="og:image" content="${origin}/social-preview.png"`)) throw new Error(`${url.pathname} has an incorrect sharing image URL.`);
  if (/https?:\/\/(?:127\.0\.0\.1|localhost)(?::\d+)?/i.test(html)) throw new Error(`${url.pathname} includes a local preview URL.`);
}
console.log(`PASS: ${urls.length} indexable pages, live canonical URLs, sitemap, and robots.txt.`);
