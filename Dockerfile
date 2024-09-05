FROM node:22.8.0-alpine@sha256:008735b83ef98c7635b5b73cb9b597172fe1895619a8d65378fa7110e427abb5 AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27.1@sha256:0e4fe3ef42d60ff3586428b7892f9e5d0156206117c701e4e2282f1b29e129b5 AS runtime

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
