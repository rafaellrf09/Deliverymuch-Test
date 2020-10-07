FROM node:12.18-alpine

ENV NODE_ENV development

WORKDIR /usr/src/recipes

COPY .env.example .env

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm i -g nodemon && npm install

COPY . .

EXPOSE 3333

CMD npm run start