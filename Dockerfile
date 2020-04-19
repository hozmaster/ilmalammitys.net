### STAGE 1: Build ###
# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:10 as build
RUN  mkdir /usr/src/app
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Copies package.json and package-lock.json to Docker environment
COPY package.json /usr/src/app/package.json
# Installs all node packages
RUN npm install --silent
RUN npm install react-scripts -g --silent
# Copies everything over to Docker environment
COPY . /usr/src/app
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

