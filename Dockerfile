FROM node:22.12.0-alpine@sha256:6e80991f69cc7722c561e5d14d5e72ab47c0d6b6cfb3ae50fb9cf9a7b30fdf97 AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27.3@sha256:fb197595ebe76b9c0c14ab68159fd3c08bd067ec62300583543f0ebda353b5be AS runtime

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
