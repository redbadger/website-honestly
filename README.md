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

## Zeplin to Css

The Zeplin designs are based on a grid layout. The grid is made up of columns
and gutters. You can turn this on in Zeplin by flicking the Grid switch in the
right hand panel. Here’s an example of the large screen design for the "Q and A"
slice with the Grid switched on. The grid is made up of 12 columns and 24
gutters (each column has a gutter to its left and right). The width of a gutter
is 10px. The width of a column is not fixed but changes as the screen resizes.

![Zeplin Grid](https://cloud.githubusercontent.com/assets/1761227/25279187/92393d68-269d-11e7-8335-b40568a98e90.png)

Each element in the design takes up a number of columns and gutters. The
"Q and A" container takes up 10 columns and 18 gutters. The category title
occupies 2 columns and 4 gutters. The questions are 8 columns and 14 gutters
wide and the answer is 6 columns 10 gutters wide.

We use these grid columns and gutters to create the css that’s a faithful
representation of the Zeplin designs. The "Q and A" container div takes up the
whole screen but has padding on the left and right. We’ll calculate the width of
this padding based on the width of the screen. The width of the screen is 12
columns and 24 gutters. So,
```
12 x column + 24 x gutter = 100%
 1 x column +  2 x gutter = 100% / 12
```
The left (and right) padding is 1 column and 3 gutters wide. Substituting the
calculation above we get,
```
container left padding = 1 x column + 3 x gutter
                       = 1 x column + 2 x gutter + 1 x gutter
                       = 100% / 12 + 10px
```

Which we can use to set the css on the container
```
.container {
    padding-left: calc(100% / 12 + 10px)
}
```
We can use the same technique to calculate the width of the category div. This
div sits inside the container so 100% here refers to the width of the container
(excluding padding) rather than the width of the screen. The width of the
container is 10 columns and 18 gutters.
```
10 x column + 18 x gutter = 100%
10 x column + 20 x gutter = 100% + 2 x gutter
 1 x column +  2 x gutter = (100% + 2 x gutter) / 10 = (100% + 20px) / 10
```
The category div is 2 columns and 4 gutters wide,
```
category width = 2 x column + 4 x gutter
               = 2 x (1 x column + 2 x gutter)
               = 2 x (100% + 20px) / 10 = (100% + 20px) / 5
```
And the css,
```
.category {
  width: calc((100% + 20px) / 5)
}
```
The questions div sits inside the same container as the category div. It is 8
columns and 14 gutters wide.
```
questions width = 8 x column + 14 x gutter
                = 8 x column + 16 x gutter - 2 x gutter
                = 8 x (1 x column + 2 x gutter) - 2 x gutter
                = 8 x (100% + 20px) / 10 - 20px = (100% + 20px) x 4 / 5 - 20px
```
And the css,
```
.category {
  width: calc((100% + 20px) x 4 / 5 - 20px)
}
```
The answer div goes inside the questions div so 100% refers to the width of the
questions div. The width of the questions div is 8 columns and 14 gutters.
```
8 x column + 14 x gutter = 100%
8 x column + 16 x gutter = 100% + 20px
1 x column +  2 x gutter = (100% + 20px) / 8
```
The answer div is 6 columns and 10 gutters wide,
```
answer width = 6 x column + 10 x gutter
             = 6 x column + 12 x gutter - 2 x gutter
             = 6 x (1 x column + 2 x gutter) - 2 x gutter
             = 6 x (100% + 20px) / 8 - 20px = (100% + 20px) x 3 / 4 - 20px
```
Which gives,
```
.answer {
  width: calc((100% + 20px) x 3 / 4 - 20px)
}
```
With just these few lines of css we’ve replicated the Zeplin design. We can test
that the css works using [Design Grid Overlay](https://chrome.google.com/webstore/detail/design-grid-overlay/kmaadknbpdklpcommafmcboghdlopmbi?hl=en)
chrome plugin. It adds grid lines to the web page so we can check that the
elements sit exactly in place.

There are three different grid layouts in Zeplin, one for each of the three
screen size breakpoints. The medium and small size grids have 6 columns and 12
gutters, with the gutters of size 5px for the small size. We must repeat the
steps above for each screen size and wrap the resulting css in the relevant media
query.

The "Q and A" slice is the example to copy from because this is the first story
where this technique was used.

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
