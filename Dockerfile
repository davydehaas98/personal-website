# Get latest nginx image 
FROM nginx:1.25.5@sha256:61f40f031b933dff30d60750ee0331a95ffd4107c74aed204c45f3c6e3ead27a

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
