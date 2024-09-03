FROM node:22.0.0-alpine@sha256:9459e243f620fff19380c51497493e91db1454f5a30847efe5bc5e50920748d5 AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27.1@sha256:1540e37eebb9abc5afa4256de1bade6542d50bf69b61b1dd855cb7804aaaf444 AS runtime

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
