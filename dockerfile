FROM node:20-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN  yarn run build

CMD ["yarn", "run", "start:dev"]