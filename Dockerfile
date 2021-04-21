FROM node

LABEL mainteiner="meliania"

RUN mkdir /app

COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

COPY package.json /app
COPY yarn.lock /app
COPY index.js /app

WORKDIR /app

RUN yarn install --prod

CMD [ "/app/docker-entrypoint.sh" ]

