FROM node:18
LABEL maintainer ivanmondragonmanchay@gmail.com
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
CMD [ "npm","start" ]