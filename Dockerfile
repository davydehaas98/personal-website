# Get latest nginx image 
FROM nginx:1.26.0@sha256:3f28ecedbd787b3ff0a6d56cd4a1b13901acda532c717e3b7351fcc786973d79

# Copy build into nginx image
COPY ./build /var/www

# Copy nginx config file to default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run server
# -g daemon off; is used so Docker can track the process properly,
# otherwise the container will stop immediately after starting
CMD ["nginx", "-g", "daemon off;"]
