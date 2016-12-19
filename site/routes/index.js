import React from 'react';

import { routeDefinitions } from './definitions';
import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import ServerErrorPage from '../pages/server-error';
import WhatWeDoPage from '../pages/what-we-do';
import OfflinePage from '../pages/offline';
import AboutUsPage from '../pages/about-us';

import JoinUsPage from '../../website-next/src/shared/containers/join-us';
import JobPage from '../../website-next/src/shared/containers/job';
import Events from '../../website-next/src/shared/containers/events';
import EventPage from '../../website-next/src/shared/containers/event';

const componentMap = {
  homePage: HomePage,
  whatWeDoPage: WhatWeDoPage,
  joinUs: JoinUsPage,
  job: JobPage,
  event: EventPage,
  events: Events,
  notFoundPage: NotFoundPage,
  serverErrorPage: ServerErrorPage,
  offlinePage: OfflinePage,
  aboutUsPage: AboutUsPage,
};

export default function routes() {
  return routeDefinitions.map(
    route => ({
      ...route,
      component: (routerProps, props) => {
        const Component = componentMap[route.key];
        return (<L {...routerProps}><Component {...props} /></L>);
      },
    }));
}
