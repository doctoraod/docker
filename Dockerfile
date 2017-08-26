FROM ubuntu:latest

RUN apt update -y
RUN apt install -y nodejs
ENTRYPOINT ["echo", "Hello world"]