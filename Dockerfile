FROM node:12.4.0

RUN mkdir /notes-nodejs-es6
WORKDIR /notes-nodejs-es6

COPY  . ${WORKDIR}

RUN ["npm", "install"]
RUN ["npm", "run", "build"]

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
