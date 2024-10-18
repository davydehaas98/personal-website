FROM node:22.10.0-alpine@sha256:fc95a044b87e95507c60c1f8c829e5d98ddf46401034932499db370c494ef0ff AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27.2@sha256:a6b75a320a9a95bcaed28484349557d1ec7426041be35a62386dfa6609225ad3 AS runtime

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
