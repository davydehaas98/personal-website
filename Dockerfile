# Get latest nginx image 
FROM nginx:1.26.1@sha256:ec881e8e2b068e388e992e0e12360ff9f93737f90eb3e346d0ceac83710383d8

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
