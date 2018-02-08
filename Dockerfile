# Our base image
FROM alpine:3.7

# Create app directory
WORKDIR /usr/src/app

# Install node and npm
RUN apk add --update nodejs nodejs-npm

# Install node modules needed by the node app
COPY package*.json ./
RUN npm Install

# Copy files required for the app to run
COPY . .

# Tell the port number the container should expose
EXPOSE 5000

# Run the app
CMD ["npm", "start"]