FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV EUREKA = discovery

EXPOSE 3007

CMD ["npm", "start"]


