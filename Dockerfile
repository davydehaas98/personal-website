FROM node:22.9.0-alpine@sha256:c9bb43423a6229aeddf3d16ae6aaa0ff71a0b2951ce18ec8fedb6f5d766cf286 AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27.1@sha256:287ff321f9e3cde74b600cc26197424404157a72043226cbbf07ee8304a2c720 AS runtime

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
