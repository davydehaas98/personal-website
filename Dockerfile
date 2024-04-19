# Get latest nginx image 
FROM nginx:1.25.5@sha256:684889a0cdf28aa111c84055fb79f14a4846231e656a862b1cfdec809daab374

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
