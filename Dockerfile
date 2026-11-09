FROM node:26.13.0-alpine@sha256:b2646ba6d774dc22c24d89fc37103fcf4c4467e870c78b9519aa403300b2835a AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.31.7-alpine@sha256:c3bcf3d1a53a027bfa515b9fe4fbbe7bf6b791476a5af853de439ad494b145bd AS runtime

# Replace the main config entirely; drop the stock server block that listens on 8080 as well.
COPY --chown=root:root nginx.conf security-headers.conf /etc/nginx/
COPY --chown=root:root --from=build /app/build /usr/share/nginx/html

USER root
RUN rm -f /etc/nginx/conf.d/default.conf
USER 101

EXPOSE 8080
