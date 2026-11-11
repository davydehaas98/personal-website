# personal-website

Source of [davydehaas.nl](https://davydehaas.nl): a single scrolling page with a short intro, experience, a few
GitHub projects and contact links. Built with React and [Vite](https://vite.dev), styled with [Tailwind CSS](https://tailwindcss.com), and
pre-rendered to static HTML at build time ([`scripts/prerender.js`](scripts/prerender.js)), so the content is there
without JavaScript.

To change the content:

- intro text and photo: [`src/components/home/Home.tsx`](src/components/home/Home.tsx), and the tech stack under it:
  [`src/components/home/stack.json`](src/components/home/stack.json) (a logo from `logos.ts` and the name to show)
- experience and education: [`src/components/experience/experience.json`](src/components/experience/experience.json),
  newest first, dates as `YYYY-MM` (leave `end` out for the current job; durations are worked out like LinkedIn's)
- certifications: [`src/components/experience/badges.json`](src/components/experience/badges.json), with the badge
  images in `public/assets/images/badges/` (copied from Credly, as the CSP only allows images from the site itself)
- link previews (LinkedIn, Slack, …): the `og:` tags in [`index.html`](index.html) and the image
  [`public/og-image.jpg`](public/og-image.jpg) (1200×630); update both when the role or photo changes
- projects: [`src/components/projects/projects.json`](src/components/projects/projects.json) (name, `owner/repo`, description,
  languages, logos); a logo name must exist in [`logos.ts`](src/components/logos/logos.ts), which imports it from
  [Simple Icons](https://simpleicons.org), and a new language needs its GitHub colour in
  [`Projects.tsx`](src/components/projects/Projects.tsx)
- colours (light and dark), font and breakpoints: the `@theme` in [`src/index.css`](src/index.css); shared pieces
  (section, pill link, bubble) are in [`src/components/ui/`](src/components/ui)
- contact links: [`src/components/contact/Contact.tsx`](src/components/contact/Contact.tsx)

## Requirements

- Node.js, version in [`.nvmrc`](.nvmrc) (current LTS); `nvm use` picks it up.
- [pnpm](https://pnpm.io), version in `packageManager` in [`package.json`](package.json):
  `npm install --global pnpm@<that version>`. It refuses packages published less than a day ago (`minimumReleaseAge`).
- Docker or Podman, only for building the container image.

## Scripts

| Command             | What it does                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`      | Install dependencies.                                                                                                         |
| `pnpm dev`          | Start the Vite dev server with hot reload on http://localhost:5173.                                                           |
| `pnpm build`        | Type-check, build the static site into `build/` and pre-render its HTML.                                                      |
| `pnpm preview`      | Serve the production build from `build/` locally.                                                                             |
| `pnpm test`         | Run the tests once with Vitest (jsdom).                                                                                       |
| `pnpm test:watch`   | Run Vitest in watch mode.                                                                                                     |
| `pnpm typecheck`    | Type-check only (`tsc --noEmit`).                                                                                             |
| `pnpm lint`         | Lint with [oxlint](https://oxc.rs/docs/guide/usage/linter) (`.oxlintrc.json`), including type-aware rules; warnings fail too. |
| `pnpm lint:fix`     | Lint and apply safe fixes.                                                                                                    |
| `pnpm format`       | Format and sort imports with [oxfmt](https://oxc.rs/docs/guide/usage/formatter) (`.oxfmtrc.json`).                            |
| `pnpm format:check` | Check the formatting (CI does this).                                                                                          |

Before each commit, a [Husky](https://typicode.github.io/husky) hook ([`.husky/pre-commit`](.husky/pre-commit)) runs
`pnpm format:check`, `pnpm lint` and `pnpm typecheck` (about 1.5 s); `pnpm install` sets it up. Tests and the build
run in CI.

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

- **Build** (`build.yaml`) checks the formatting and runs lint, tests and the build on every push and pull request.
- **Release** (`release.yaml`) runs on every push to `main` (except docs-only changes), or by hand with **Run workflow**
  under Actions > Release: it tests and lints, then pushes a multi-arch image (`linux/amd64`, `linux/arm64`) to
  `ghcr.io/davydehaas98/personal-website` and tags the commit in git.
  Versions are calendar versions `YYYY.M.N`: year, month (no leading zero) and the release number within that month,
  e.g. `2026.11.0`, `2026.11.1`, then `2026.12.0`. There is no `latest` or other moving tag: pin an exact version.
- **Daily test** (`test.yaml`) runs Lighthouse, a ZAP baseline scan and a k6 load test against the live site.
