FROM node:20.0.0@sha256:942fa0013e9adfbde06ad07433bdb0a67cc2ac0d5a3db38f12a9c8f710b41f1c AS build

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
