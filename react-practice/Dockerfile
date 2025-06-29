# Development Dockerfile
FROM node:20-slim

# Update system packages to reduce vulnerabilities
RUN apt-get update && apt-get upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Install dependencies (will be re-used unless package.json changes)
COPY package*.json ./
RUN npm install && npm audit fix --force || true

# Copy source code (optional here, since we’ll mount it anyway)
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev:watch"]