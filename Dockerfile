# Use official Nginx Alpine image as our base
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom Nginx configuration into the container
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

# Copy our calculator files into the Nginx serving directory
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY app.js /usr/share/nginx/html/app.js

# Tell Docker this container listens on port 80
EXPOSE 80

# Start Nginx in the foreground when the container runs
CMD ["nginx", "-g", "daemon off;"]