FROM ubuntu:latest

RUN apt update -y
RUN apt install -y npm curl
RUN npm install -g n
RUN n latest

RUN mkdir /var/source
ADD . /var/source
WORKDIR /var/source
RUN npm install

ENTRYPOINT ["node", "index.js"]