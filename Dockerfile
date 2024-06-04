# Get latest nginx image 
FROM nginx:1.27.0@sha256:0f04e4f646a3f14bf31d8bc8d885b6c951fdcf42589d06845f64d18aec6a3c4d

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
