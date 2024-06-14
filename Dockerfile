# Get latest nginx image 
FROM nginx:1.27.0@sha256:56b388b0d79c738f4cf51bbaf184a14fab19337f4819ceb2cae7d94100262de8

RUN rm -rf /usr/share/nginx/html/*

COPY ./build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
