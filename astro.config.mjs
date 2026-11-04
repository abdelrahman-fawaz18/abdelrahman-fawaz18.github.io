import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://abdelrahman-fawaz18.github.io',
  base: process.env.PORTFOLIO_BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
