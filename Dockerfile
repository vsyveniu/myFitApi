FROM node:15.10.0-alpine3.10

RUN mkdir -p /src/myFitApi && chown node:node /src/myFitApi

USER node

WORKDIR /src/myFitApi

COPY --chown=node:node package.json package-lock.json ./

RUN npm install

RUN node -v
RUN npm -v

RUN ls -la node_modules



