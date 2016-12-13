import React from 'react';

import { routeDefinitions } from './definitions';
import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import ServerErrorPage from '../pages/server-error';
import WhatWeDoPage from '../pages/what-we-do';
import OfflinePage from '../pages/offline';

import JoinUsPage from '../../website-next/src/shared/containers/join-us';
import JobPage from '../../website-next/src/shared/containers/job';

const componentMap = {
  homePage: HomePage,
  whatWeDoPage: WhatWeDoPage,
  joinUs: JoinUsPage,
  job: JobPage,
  notFoundPage: NotFoundPage,
  serverErrorPage: ServerErrorPage,
  offlinePage: OfflinePage,
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
