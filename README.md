# personal-website

Source of [davydehaas.nl](https://davydehaas.nl): a React single-page app built with [Vite](https://vite.dev),
routed in the browser with [React Router](https://reactrouter.com) and styled with CSS Modules.

## Requirements

- Node.js, version in [`.nvmrc`](.nvmrc) (current LTS); `nvm use` picks it up.
- Docker or Podman, only for building the container image.

## Scripts

| Command             | What it does                                                         |
| ------------------- | -------------------------------------------------------------------- |
| `npm install`       | Install dependencies.                                                |
| `npm run dev`       | Start the Vite dev server with hot reload on http://localhost:5173. |
| `npm run build`     | Type-check, then build the static site into `build/`.               |
| `npm run preview`   | Serve the production build from `build/` locally.                  |
| `npm test`          | Run the tests once with Vitest (jsdom).                              |
| `npm run test:watch`| Run Vitest in watch mode.                                            |
| `npm run typecheck` | Type-check only (`tsc --noEmit`).                                    |
| `npm run lint`      | Lint with [oxlint](https://oxc.rs/docs/guide/usage/linter) (`.oxlintrc.json`). |
| `npm run lint:fix`  | Lint and apply safe fixes.                                           |

Static files that are copied as-is (images, `manifest.json`, `robots.txt`, `.well-known/`) live in `public/`.

## Container image

The [`Dockerfile`](Dockerfile) builds the site on Node (alpine) and serves `build/` with
[`nginxinc/nginx-unprivileged`](https://hub.docker.com/r/nginxinc/nginx-unprivileged) (alpine):

- listens on **8080** and runs as a non-root user (uid 101);
- works with a read-only root filesystem: nginx's pid and temp paths are under `/tmp`, so only `/tmp` must be writable;
- falls back to `index.html` for unknown paths, so deep links like `/projects` work;
- sends a strict Content-Security-Policy (`default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'`).
  The build contains no inline scripts or styles, so keep it that way: CSS-in-JS libraries that inject `<style>` tags at runtime break under this policy.

Build and run it locally the way the cluster runs it:

```bash
docker build -t personal-website .
```

```bash
docker run --rm -p 8080:8080 --read-only --tmpfs /tmp --cap-drop ALL --user 101:101 personal-website
```

Then open http://localhost:8080.

## CI/CD

- **Build** (`build.yaml`) and **Analyse** (`analyse.yaml`) run build, tests and lint on every push and pull request.
- **Release** (`release.yaml`) runs on a version tag (`x.y.z`) and pushes a multi-arch image (`linux/amd64`, `linux/arm64`)
  to `ghcr.io/davydehaas98/personal-website`, tagged with the version and `latest`.
- **Daily test** (`test.yaml`) runs Lighthouse, a ZAP baseline scan and a k6 load test against the live site.
