# Abdelrahman Elsayed

Personal portfolio covering electronics, communications, embedded sensing, and system validation.

Website: **https://abdelrahman-fawaz18.github.io/**

Built with Astro, custom CSS, self-hosted typography, and optimized local images. No analytics, database, or external font service is required.

## Develop locally

Use Node.js 24 and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

To check the production output:

```sh
pnpm build
pnpm check:site
pnpm preview --port 4321
```

Local builds disable search indexing by default. Set `PUBLIC_SITE_LIVE=true` for a public build.

## Publish

The `Publish portfolio` workflow builds and checks the site, then deploys `dist/` to GitHub Pages on every push to `main`. It can also run manually from the Actions tab. Repository Settings → Pages must use **GitHub Actions** as its publishing source.

The user-site repository serves from `/`; no repository subpath is required. The workflow enables indexing and validates the sitemap, canonical URLs, page links, and assets before deployment.

## Content

- Homepage: `src/pages/index.astro`
- Projects and experience summaries: `src/data/projects.ts`
- Project pages: `src/pages/work/*.md`
- Resume and professional background: `src/pages/resume.astro` and `src/data/background.ts`
- Publications: `src/data/publications.ts`
- Outside work: `src/pages/outside.astro`, `src/data/personal.ts`, and `src/data/photographs.ts`
- Shared styling: `src/styles/global.css`
- Site metadata and social links: `src/layouts/BaseLayout.astro` and `src/lib/urls.ts`

Prepared media is included in `public/` and `src/assets/`. Original uploads, private planning material, and local review records are retained outside the repository. See `THIRD_PARTY_NOTICES.md` and `public/licenses/` for asset attribution and licensing.
