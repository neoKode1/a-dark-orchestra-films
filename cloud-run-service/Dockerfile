FROM node:18-slim

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . ./

# Set the PORT environment variable
ENV PORT=8080

# Expose the port
EXPOSE 8080

# Start the server
CMD [ "npm", "start" ] 