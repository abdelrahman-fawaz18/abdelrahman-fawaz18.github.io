import type { APIRoute } from 'astro';
import { local } from '../lib/urls';
export const GET: APIRoute = () => new Response(
  import.meta.env.PUBLIC_SITE_LIVE === 'true'
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL(local('sitemap.xml'), 'https://abdelrahman-fawaz18.github.io')}\n`
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
