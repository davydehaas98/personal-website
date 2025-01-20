FROM node:22.13.0-alpine@sha256:f2dc6eea95f787e25f173ba9904c9d0647ab2506178c7b5b7c5a3d02bc4af145 AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27.3@sha256:0a399eb16751829e1af26fea27b20c3ec28d7ab1fb72182879dcae1cca21206a AS runtime

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
