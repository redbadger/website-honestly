FROM node:12.2.0-stretch-slim


LABEL "com.github.actions.name"="Lighthouse"
LABEL "com.github.actions.description"="Reports on the performance of the website"
LABEL "com.github.actions.icon"="activity"
LABEL "com.github.actions.color"="red"


# Install Google Chrome & dumb-init (https://github.com/Yelp/dumb-init)
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get -y upgrade \
    && apt-get install -y google-chrome-stable dumb-init --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /src/*.deb


# Install dependencies
ENV NODE_ENV=production
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production


# Add a chrome user and setup home dir
# RUN groupadd --system chrome && \
#     useradd --system --create-home --gid chrome --groups audio,video chrome && \
#     mkdir --parents /home/chrome/reports && \
#     chown --recursive chrome:chrome /home/chrome

# USER chrome


COPY . ./

#VOLUME /home/chrome/reports
#WORKDIR /home/chrome/reports

# Disable Lighthouse error reporting to prevent prompt.
# ENV CI=true


EXPOSE 8080


ENTRYPOINT ["dumb-init", "--", "node", "runner.js"]
