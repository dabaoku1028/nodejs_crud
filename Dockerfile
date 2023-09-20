#REF: https://medium.com/10coding/node-js-docker-系列-一-dockerfile-設定-4b809bae24d5

# Base image
FROM node:alpine
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install 
# Bundle app source
COPY . /usr/src/app
CMD [ "npm", "start" ]