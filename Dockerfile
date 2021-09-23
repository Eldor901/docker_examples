FROM node

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN npm install

COPY . .

ENV PORT 3000

EXPOSE $PORT

VOLUME [ "/data" ]

CMD [ "npm", "start" ]