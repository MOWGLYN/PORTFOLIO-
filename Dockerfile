# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install ALL dependencies
COPY package.json package-lock.json ./
COPY scripts scripts/
RUN npm ci --legacy-peer-deps

# Copy everything and build
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS production
WORKDIR /app

# Only install production dependencies
COPY package.json package-lock.json ./
COPY scripts scripts/
RUN npm ci --omit=dev --legacy-peer-deps

# ONLY copy the generated build and the static assets
# This is where your 3D models live!
COPY --from=build /app/build/client ./public
COPY --from=build /app/build/server ./build/server

# Set environment and port
ENV NODE_ENV=production
EXPOSE 3000

# Start the server
CMD ["npx", "remix-serve", "./build/server/index.js"]