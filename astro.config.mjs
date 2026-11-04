import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://abdelrahman-elsayed.com',
  base: process.env.PORTFOLIO_BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
