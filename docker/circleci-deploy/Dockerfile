FROM node:8.15.1-jessie-slim

# Install aws cli
RUN apt-get update && apt-get install -y \
  python-pip \
  && rm -rf /var/lib/apt/lists/* \
  && pip install --upgrade pip \
  && pip install --upgrade awscli==1.14.5 s3cmd==2.0.1 python-magic

# Install code climate reporter
RUN curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter \
  && chmod +x ./cc-test-reporter
