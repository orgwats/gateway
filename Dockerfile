FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./

ARG PERSONAL_ACCESS_TOKEN
RUN echo "//npm.pkg.github.com/:_authToken=${PERSONAL_ACCESS_TOKEN}" > .npmrc

RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./


ARG PERSONAL_ACCESS_TOKEN
RUN echo "//npm.pkg.github.com/:_authToken=${PERSONAL_ACCESS_TOKEN}" > .npmrc

RUN npm install --omit=dev

CMD ["node", "dist/gateway/src/main.js"]