FROM node:22.13.1-alpine@sha256:e2b39f7b64281324929257d0f8004fb6cb4bf0fdfb9aa8cedb235a766aec31da AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27.4@sha256:91734281c0ebfc6f1aea979cffeed5079cfe786228a71cc6f1f46a228cde6e34 AS runtime

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
