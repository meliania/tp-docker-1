FROM node

LABEL mainteiner="meliania"

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --prod

COPY . .

EXPOSE 80

CMD [ "node", "server.js" ]

