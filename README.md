# personal-website

Source of [davydehaas.nl](https://davydehaas.nl): a single scrolling page with a short intro, experience, a few
GitHub projects and contact links. Built with React and [Vite](https://vite.dev), styled with [Tailwind CSS](https://tailwindcss.com), and
pre-rendered to static HTML at build time ([`scripts/prerender.js`](scripts/prerender.js)), so the content is there
without JavaScript.

To change the content:

- intro text: [`src/components/home/Home.tsx`](src/components/home/Home.tsx), with the photo in `src/assets/me.webp`, and the
  tech stack under it:
  [`src/components/home/stack.json`](src/components/home/stack.json) (a logo from `logos.ts` and the name to show)
- experience and education: [`src/components/experience/experience.json`](src/components/experience/experience.json),
  newest first, dates as `YYYY-MM` (leave `end` out for the current job; durations are worked out like LinkedIn's)
- certifications: [`src/components/experience/badges.json`](src/components/experience/badges.json), with the badge
  images in `src/assets/badges/` as WebP, named in `image` (copied from Credly, as the CSP only allows images from the site itself)
- link previews (LinkedIn, Slack, …): the `og:` tags in [`index.html`](index.html) and the image
  [`public/og-image.jpg`](public/og-image.jpg) (1200×630); update both when the role or photo changes
- projects: [`src/components/projects/projects.json`](src/components/projects/projects.json) (name, `owner/repo`, description,
  logos); a logo name must exist in [`logos.ts`](src/components/logos/logos.ts), which imports it from
  [Simple Icons](https://simpleicons.org)
- colours (light and dark), font and breakpoints: the `@theme` in [`src/index.css`](src/index.css); shared pieces
  (section, pill link, bubble) are in [`src/components/ui/`](src/components/ui)
- contact links: [`src/components/contact/Contact.tsx`](src/components/contact/Contact.tsx)

## Requirements

- Node.js: pnpm downloads and uses the version in `devEngines` in [`package.json`](package.json) (current LTS) by
  itself, so no `nvm` is needed. The Dockerfile's base image has the same version.
- [pnpm](https://pnpm.io), version in `packageManager` in [`package.json`](package.json):
  `npm install --global pnpm@<that version>`. It refuses packages published less than a day ago (`minimumReleaseAge`).
- Docker or Podman, only for building the container image.

## Scripts

| Command           | What it does                                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`    | Install dependencies.                                                                                                         |
| `pnpm dev`        | Start the Vite dev server with hot reload on http://localhost:5173.                                                           |
| `pnpm build`      | Build the static site into `build/` and pre-render its HTML (no type check: `pnpm check` does that).                          |
| `pnpm preview`    | Serve the production build from `build/` locally.                                                                             |
| `pnpm test`       | Run the tests once with Vitest (jsdom).                                                                                       |
| `pnpm test:watch` | Run Vitest in watch mode.                                                                                                     |
| `pnpm check`      | Check formatting, lint (type-aware; warnings fail too) and types. The pre-commit hook and CI run it.                          |
| `pnpm lint`       | Lint with [oxlint](https://oxc.rs/docs/guide/usage/linter) (`.oxlintrc.json`), including type-aware rules; warnings fail too. |
| `pnpm lint:fix`   | Lint and apply safe fixes.                                                                                                    |
| `pnpm format`     | Format and sort imports with [oxfmt](https://oxc.rs/docs/guide/usage/formatter) (`.oxfmtrc.json`).                            |
| `pnpm lighthouse` | Run Lighthouse CI 3 times against the live site (`.github/lighthouserc.json`); needs Chrome, or its path in `CHROME_PATH`.    |

Before each commit, a [Husky](https://typicode.github.io/husky) hook ([`.husky/pre-commit`](.husky/pre-commit)) runs
`pnpm check` (about 1.5 s); `pnpm install` sets it up. Tests and the build run in CI.

Static files that are copied as-is (images, `manifest.json`, `robots.txt`, `.well-known/`) live in `public/`.

## Container image

The [`Dockerfile`](Dockerfile) builds the site on Node (alpine) and serves `build/` with
[`nginxinc/nginx-unprivileged`](https://hub.docker.com/r/nginxinc/nginx-unprivileged) (alpine):

- listens on **8080** and runs as a non-root user (uid 101);
- works with a read-only root filesystem: nginx's pid and temp paths are under `/tmp`, so only `/tmp` must be writable;
- redirects the old page URLs (`/about`, `/projects`, `/contact`) to the matching section (`/#projects`, …),
  and answers unknown paths with the home page and a 404 status;
- caches Vite's fingerprinted output in `/static/` for a year and revalidates everything else (`index.html`, images in `public/`).

Security headers are not set here: the cluster's gateway adds them, including a strict Content-Security-Policy
(`default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'`).
The build contains no inline scripts or styles, so keep it that way: Tailwind compiles to one static CSS file, but
CSS-in-JS libraries that inject `<style>` tags at runtime, or `style` attributes, break under this policy.

Build and run it locally the way the cluster runs it:

```bash
docker build -t personal-website .
```

```bash
docker run --rm -p 8080:8080 --read-only --tmpfs /tmp --cap-drop ALL --user 101:101 personal-website
```

Then open http://localhost:8080.

## CI/CD

- **Build** (`build.yaml`) checks the formatting and runs lint, tests and the build on pull requests and pushes to `main`
  (pushes that only change docs or `renovate.json` are skipped). On `main`, its **Release** job then pushes a
  multi-arch image (`linux/amd64`, `linux/arm64`) to `ghcr.io/davydehaas98/personal-website` and tags the commit in
  git, only once the checks have passed. **Run workflow** under Actions > Build does the same by hand.
  Versions are calendar versions `YYYY.M.N`: year, month (no leading zero) and the release number within that month,
  e.g. `2026.11.0`, `2026.11.1`, then `2026.12.0`. There is no `latest` or other moving tag: pin an exact version.
- **Daily test** (`test.yaml`) runs `pnpm lighthouse` (every category must score at least 90), a ZAP baseline scan and a k6
  load test against the live site. Actions > Daily test > Run workflow starts it by hand.
