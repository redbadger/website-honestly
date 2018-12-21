FROM node:6.11.5-alpine

RUN apk add --no-cache make git openssh zip curl

# Install aws cli
RUN apk add --no-cache \
  python \
  py-pip \
  groff \
  less \
  mailcap \
  && \
  pip install --upgrade awscli==1.14.5 s3cmd==2.0.1 python-magic

# Install code climate reporter
RUN curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
RUN chmod +x ./cc-test-reporter

RUN apk -v --purge del py-pip

