FROM node:23

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn workspaces focus backend --production --immutable

COPY . .

CMD ["yarn", "workspace", "backend", "run", "dev"]
