# The site is the same on every platform, so it's built once on the build machine; the arm64 image then only copies
# files into nginx, nothing runs under emulation.
FROM --platform=$BUILDPLATFORM node:26.13.0-alpine AS build
WORKDIR /app
# No git hooks to install in here (Husky runs on pnpm install).
ENV HUSKY=0
COPY package.json pnpm-lock.yaml ./
# The pnpm version pinned in package.json (packageManager); it needs no install scripts.
RUN npm install --global --ignore-scripts "$(node -p "require('./package.json').packageManager")" \
    && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Runs as uid 101 on port 8080, writing only to /tmp.
FROM nginxinc/nginx-unprivileged:1.31.7-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
