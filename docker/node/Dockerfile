FROM alpine:3.6

# Alpine Linux includes musl libc, but Flow is linked against GNU libc, so we need to install it.
# See https://github.com/sgerrand/alpine-pkg-glibc
ENV GLIBC_VERSION 2.25-r0
RUN apk add --no-cache ca-certificates && \
    apk add --no-cache --virtual .build-deps-glibc \
        curl \
 && cd /etc/apk/keys \
 && curl -fsSLO https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
 && cd /tmp \
 && curl -fsSLO https://github.com/sgerrand/alpine-pkg-glibc/releases/download/$GLIBC_VERSION/glibc-$GLIBC_VERSION.apk \
 && apk add --no-cache glibc-$GLIBC_VERSION.apk \
 && rm glibc-$GLIBC_VERSION.apk /etc/apk/keys/sgerrand.rsa.pub \
 && apk del --no-cache .build-deps-glibc

ENV NODE_VERSION 8.15.1
ENV NPM_CONFIG_LOGLEVEL info
ENV NPM_GPG_KEY DD8F2338BAE7501E3DD5AC78C273792F7D83545D
RUN addgroup -g 1000 node \
 && adduser -u 1000 -G node -s /bin/sh -D node \
 && apk add --no-cache \
        libstdc++ \
 && apk add --no-cache --virtual .build-deps-node \
        binutils-gold \
        curl \
        g++ \
        gcc \
        gnupg \
        libgcc \
        linux-headers \
        make \
        python \
 && gpg --keyserver pool.sks-keyservers.net --recv-keys "$NPM_GPG_KEY" \
        || gpg --keyserver pgp.mit.edu --recv-keys "$NPM_GPG_KEY" \
        || gpg --keyserver keyserver.pgp.com --recv-keys "$NPM_GPG_KEY" \
 && curl -fsSLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION.tar.xz" \
 && curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
 && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
 && grep " node-v$NODE_VERSION.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
 && tar -xf "node-v$NODE_VERSION.tar.xz" \
 && cd "node-v$NODE_VERSION" \
 && ./configure \
 && make -j$(getconf _NPROCESSORS_ONLN) \
 && make install \
 && cd .. \
 && rm -Rf "node-v$NODE_VERSION" \
 && rm "node-v$NODE_VERSION.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt \
 && apk del --no-cache .build-deps-node

ENV YARN_VERSION 1.3.2
ENV YARN_GPG_KEY 6A010C5166006599AA17F08146C2130DFD2497F5
RUN apk add --no-cache --virtual .build-deps-yarn \
        curl \
        gnupg \
        tar \
 && gpg --keyserver ha.pool.sks-keyservers.net --recv-keys "$YARN_GPG_KEY" \
        || gpg --keyserver pgp.mit.edu --recv-keys "$YARN_GPG_KEY" \
        || gpg --keyserver keyserver.pgp.com --recv-keys "$YARN_GPG_KEY" \
 && curl -fsSLO "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
 && curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz.asc" \
 && gpg --batch --verify yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz \
 && mkdir -p /opt/yarn \
 && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/yarn --strip-components=1 \
 && ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn \
 && rm yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz \
 && apk del --no-cache .build-deps-yarn

CMD [ "node" ]