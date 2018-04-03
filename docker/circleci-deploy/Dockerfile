FROM redbadger/website-honestly-node:2

RUN apk add --no-cache make git openssh zip curl

# Install aws cli
RUN apk add --no-cache \
        python \
        py-pip \
        groff \
        less \
        mailcap \
        && \
    pip install --upgrade awscli==1.14.5 s3cmd==2.0.1 python-magic && \
    apk -v --purge del py-pip

