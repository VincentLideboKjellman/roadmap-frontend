FROM node:14.13.0-alpine
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
# Bundle app source
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]