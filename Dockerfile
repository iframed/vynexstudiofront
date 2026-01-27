FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

RUN npm ci --only=production

EXPOSE 4000

ENV PORT=4000
ENV NODE_ENV=production

# Utiliser le script npm au lieu du chemin direct
CMD ["node", "dist/logi-tech/server/server.mjs"]