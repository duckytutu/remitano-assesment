FROM node:16.15.1

WORKDIR /app

COPY package.json ./

# RUN npm i --location=global yarn

RUN yarn

COPY . .

EXPOSE 5000

CMD [ "yarn", "start:dev" ]