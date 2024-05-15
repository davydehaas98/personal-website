# Get latest nginx image 
FROM nginx:1.26.0@sha256:192e88a0053c178683ca139b9d9a2afb0ad986d171fae491949fe10970dd9da9

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
