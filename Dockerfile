FROM node:24.13.1-alpine@sha256:4f696fbf39f383c1e486030ba6b289a5d9af541642fc78ab197e584a113b9c03 AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.31.6@sha256:60f0d4e986561e08804f75c211dcaf7fc5455699eada29f42cbe8a0a7253dd86 AS runtime

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
