# Step 1: Build the React app
FROM node:23 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . ./

# Build the React app
RUN npm run build

# Step 2: Set up Nginx to serve the React app
FROM nginx:alpine

# Copy the build files from the previous stage to the Nginx server
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80