FROM node:12-alpine

ARG APPHOME=/home/node/app

ENV PORT 5555

RUN mkdir -p ${APPHOME}
RUN chown -R node:node ${APPHOME}

WORKDIR ${APPHOME}

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . ${APPHOME}

EXPOSE ${PORT}

CMD [ "npm", "start" ]