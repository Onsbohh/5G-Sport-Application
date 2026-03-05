# Use Node.js image
FROM node:18-alpine

# Install ffmpeg
RUN apk add --no-cache ffmpeg

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port (assuming 3001 or something, check package.json)
EXPOSE 5000

# Start the server
CMD ["node", "streamServer.js"]
