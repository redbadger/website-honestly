Website. Honestly.
==================

[![CircleCI](https://circleci.com/gh/redbadger/website-honestly.svg?style=shield)](https://circleci.com/gh/redbadger/website-honestly)

Red Badger Website Episode 6: Return of the Jedi.

* [Usage](#usage)
* [Dev setup](#dev-setup)
* [Technical Overview](#technical-overview)
* [Deployment](#deployment)
* [Environment Variables](https://github.com/redbadger/website-honestly/blob/master/docs/environment-variables.md)


## Usage

```sh
make                   # Print the help
make fetch             # Fetch and stash dynamic data for development
make dev               # Run the dev server
make clean dev-static  # Compile the site locally

# Deploy to dev lambda environment
make clean services-deploy

# Invoke dev lambdas
make services-invoke-publish
```


## Dev setup

```sh
# Install the package manager
npm install --global yarn
# Install the deps
yarn

# Set up the environment variables
make get-secrets
make decrypt-env

# Deploy a AWS stack and lambda (if you want one!)
# Provisioning from scratch takes quite a while.
# Go make a cup of tea.
make services-deploy
```


## Technical Overview

This site is a static site hosted on AWS S3 behind a proxy that provides HTTPS.
You can find the proxy here: https://github.com/redbadger/website-next-proxy

The code used to build the HTML and CSS used to build the site can be found in
the `site/` directory. It's mostly React components and CSS modules.

The same React app in the `site/` directory is used on the front end for
interactive features such as the "Contact Us" form. The entry point for the
front end Javascript can be found in the `client/` directory.

The content for the site is (will be) pulled from the [Badger Brain][bb] GraphQL
service before compilation. The code for fetching and preprocessing this data
can be found in the `state/` directory.

[bb]: https://github.com/redbadger/badger-brain

Generation of the site is done on AWS Lambda so there are no production servers
to look after. This lambda function is to be called any time there is a content
update on the Prismic CMS. This and other lambda functions can be found in the
`services/` directory.

The lambda functions are managed and deployed using Serverless framework, and
AWS CloudFormation is used with Serverless to provision the rest of the new site
infrastructure.

The `dev/` directory contains two entrypoints to the application. The first is
`browser-app/`, which is the site mounted as a regular React app in the browser.

Test data is loaded from `assets/state.json` during development, and can be
re-fetched by running `make fetch`.

When `make dev` is run this app will be served with `webpack-dev-server`,
allowing for a fast feedback loop development. This is likely to be where you
will spend most your time while working on this application.

The other entrypoint in `dev/` is `static/` which is similar to the site
generator on lambda, but it runs locally and writes the pages to the local
filesystem instead of to AWS S3. This is useful for checking functionality that
might not work with the front end `dev` app.


## Deployment

We use CircleCI for running tests, building the app, and deploying the app.

When a branch is pushed to CircleCI will compile the app, copy the CSS and
client side JS to a folder in the staging S3 bucket and deploy the lambda to a
staging environment. The staging lambda is invoked, writing the HTML pages to
the same folder in the staging bucket. Lastly a "View deployment" link is added
to any pull request open on GitHub for that branch so it can be tested and
reviewed.

When the master branch is updated CircleCI will do the same deploy + invoke
process, writing to the root of the staging bucket. The staging site always
reflects the current state of master.

There is only one staging lambda function instance, so there is no guarantee
that the correct version will be currently deployed when viewing a branch
preview. This matters if you are testing the "contact us" form, for example.

Deploys to the live prod environment are done by starting a parameterised build
on CircleCI that does the deploy + invoke process for the production lambda
service and S3 bucket. This build can be started via @badgerbot on Slack.

See `bin/ci-deploy.sh` for more detail on deployment.


## Assets

Any static assets committed to the repo should be compressed first. There is a
`make compress-assets` command that will do this for common image formats.
