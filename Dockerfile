FROM node:16


WORKDIR /code

COPY . .

RUN  npm install

EXPOSE 3000

CMD ["npm", "start"]