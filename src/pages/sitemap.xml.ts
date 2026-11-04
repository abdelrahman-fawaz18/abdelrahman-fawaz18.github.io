import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { local } from '../lib/urls';
export const GET: APIRoute = () => {
  const routes = ['', 'work/', 'about/', 'publications/', 'outside/', 'resume/', ...projects.map(project => `work/${project.slug}/`)];
  const urls = routes.map(route => `<url><loc>${new URL(local(route), 'https://abdelrahman-fawaz18.github.io')}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
