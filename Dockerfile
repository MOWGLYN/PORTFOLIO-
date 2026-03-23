FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY --from=build /app/build ./build
COPY --from=build /app/public ./public
COPY --from=build /app/app/entry.client.tsx ./app/entry.client.tsx
COPY --from=build /app/app/entry.server.tsx ./app/entry.server.tsx
COPY --from=build /app/app/config.json ./app/config.json
COPY --from=build /app/app/global.module.css ./app/global.module.css
COPY --from=build /app/app/reset.module.css ./app/reset.module.css
COPY --from=build /app/app/root.jsx ./app/root.jsx
COPY --from=build /app/app/root.module.css ./app/root.module.css
COPY --from=build /app/app/assets ./app/assets
COPY --from=build /app/app/components ./app/components
COPY --from=build /app/app/hooks ./app/hooks
COPY --from=build /app/app/layouts ./app/layouts
COPY --from=build /app/app/routes ./app/routes
COPY --from=build /app/app/utils ./app/utils


ENV NODE_ENV=production

EXPOSE 3000

CMD ["remix-serve", "./build/server/index.js"]
