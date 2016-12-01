---
layout: default
title: Website Next dev docs
---

# Dev docs

This is official dev documentation of the Website-next project.

If you are looking for user guidelines on how to create new content for the site / edit existing content - we have [**dedicated user documentation**](http://webdocs.red-badger.com) for that.

Live site: [https://www.red-badger.com/about-us/](https://www.red-badger.com/about-us/)

Staging site: [https://www-staging.red-badger.com/about-us/](https://www-staging.red-badger.com/about-us/)

## Infrastructure and dev process

<a href="assets/infrastructure-chart.png"><img src="assets/infrastructure-chart.png"></a>

Website-next is a node app with an isomorphic React JS frontend. The application is deployed as a docker image to Dockerhub and then to Elastic Beanstalk, the AWS platform as a service. As a result deployment and infrastructure is largely automated for AWS. For information on Elastic Beanstalk see the [official documentation][eb-docs].

[eb-docs]: http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html

The backend is deployed as a [docker](https://www.docker.com/) image, so we
need to build the image before we can deploy it. [CircleCI](https://circleci.com) is a third party continuous integration service that we use to run our test suite whenever new code is pushed to GitHub.

If the tests pass and the code is on the master branch CircleCI will do the
following deployment steps:

1. Build a new docker image from the updated app code.
2. Push the image to Dockerhub, the docker image registry we use.
3. Register a new Elastic Beanstalk application version that uses this new
   docker image.
4. Instruct Elastic Beanstalk to deploy the new application version to
   Website [staging environment](https://www-staging.red-badger.com/). This
   will take a few minutes to roll out.

Once code has been verified as working on staging we can deploy to production.
To do that, [create a new release](https://help.github.com/articles/creating-releases/) on the Github repository - this will initialise a new CircleCI build, which will perform production deploy of the current master branch.

## Old site and new site

Website Next app exists side-by-side with the old staticly generated [red-badger.com](https://www.red-badger.com) site. They share look and feel, but are implemented in two very different ways.

Historically main **red-badger.com** site is a staticly generated set of pages. Docpad is used as the generator. The biggest problem as of today is speed of the content editing. In order to push a simple copy update you'll have to clone the current site, make an edit, regenerate the whole site (~30 min) then push the update to Github where this change will start another build, and another ~40 min later the change will be available live. This speed became unacceptable, and a new website app was born.

Key idea behind the new implementation is that content can be managed and published to the end user in a much faster way.

However Website Next doesn't cover all aspects of the old website. This is why both implementations exist today. We are using [**website-next-proxy**](https://github.com/redbadger/website-next-proxy) to route traffic to old and new apps, depending on the requested URL.

All traffic related to `events`, `news`, `join-us` are redirected to the new app. All other traffic is redirected to the old static app. **Website-next-proxy** is hosted on a separate EB instance and is using Nginx with regexes to detect traffic URL routes, and redirect users to a correct instance.

**Website-next-proxy** provides essential mechanism for gradual take over of the old site. Eventually new implementation should completely take over the old static site.


