FROM node:alpine
COPY . /app
WORKDIR /app
EXPOSE 8080
CMD npm start