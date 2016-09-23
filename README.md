Website. Honestly.
==================

[![CircleCI](https://circleci.com/gh/redbadger/website-honestly.svg?style=shield)](https://circleci.com/gh/redbadger/website-honestly)

Red Badger Website Episode 6: Return of the Jedi.

* [Usage](#usage)
* [Dev setup](#dev-setup)
* [Technical Overview](#technical-overview)


## Usage

```sh
make                   # Print the help
make dev               # Run the dev server
make clean dev-compile # Compile the site locally

# Deploy to dev lambda environment
make clean publish-service-deploy

# Invoke dev lambda
make publish-service-invoke
```


## Dev setup

```sh
# Install the deps
make install

# Set up the environment variables
cp .env.example .env
vi .env

# Deploy a AWS stack and lambda (if you want one!)
# Provisioning from scratch takes quite a while.
# Go make a cup of tea.
make publish-service-deploy
```

## Technical Overview

This site is a static site hosted on AWS S3 behind AWS Cloudfront.

The React template system is used to compile the pages, and it is run on AWS
Lambda.
