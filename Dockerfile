# Get latest nginx image 
FROM nginx:1.27.0@sha256:cfe5f9a63c7c5098a2122fe87a07dffe5e9bd7178d8e804a019dc831ad8f4d0d

RUN rm -rf /usr/share/nginx/html/*

COPY ./build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
