FROM node:8.15.1-alpine

# Alpine Linux includes musl libc, but Flow is linked against GNU libc, so we need to install it.
# See https://github.com/sgerrand/alpine-pkg-glibc
ENV GLIBC_VERSION 2.25-r0
RUN apk add --no-cache ca-certificates && \
  apk add --no-cache --virtual .build-deps-glibc \
  curl \
  && cd /etc/apk/keys \
  && curl -fsSLO --compressed https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
  && cd /tmp \
  && curl -fsSLO https://github.com/sgerrand/alpine-pkg-glibc/releases/download/$GLIBC_VERSION/glibc-$GLIBC_VERSION.apk \
  && apk add --no-cache glibc-$GLIBC_VERSION.apk \
  && rm glibc-$GLIBC_VERSION.apk /etc/apk/keys/sgerrand.rsa.pub \
  && apk del --no-cache .build-deps-glibc

RUN apk add --no-cache make git openssh zip curl libpng zlib

# Install aws cli
RUN apk add --no-cache \
  python \
  py-pip \
  groff \
  less \
  mailcap && \
  pip install --upgrade awscli==1.14.5 s3cmd==2.0.1 python-magic && \
  apk -v --purge del py-pip


# Install code climate reporter
RUN curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter \
  && chmod +x ./cc-test-reporter
