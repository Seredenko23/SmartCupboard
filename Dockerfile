FROM node:latest AS builder

WORKDIR /app
COPY package.json ./package.json
RUN npm i @angular/cli -g
COPY . /app

RUN rm -rf node_modules

RUN npm cache verify
RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /app
COPY --from=builder /app/dist/smart-cupboard .
RUN cp -R /app/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
