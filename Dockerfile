# Get latest nginx image 
FROM nginx:1.27.0@sha256:98f8ec75657d21b924fe4f69b6b9bff2f6550ea48838af479d8894a852000e40

RUN rm -rf /usr/share/nginx/html/*

COPY ./build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
