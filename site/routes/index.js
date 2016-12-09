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

export function fullPath(route) {
  const routePrefix = process.env.URL_BASENAME || '';
  return `${routePrefix}${route}`;
}

function routeFilePath(path) {
  switch (path) {
    case '':
      return `${fullPath(path)}index.html`;

    default:
      return `${fullPath(path)}/index.html`;
  }
}

function prefixRoutes(rs) {
  return rs.map(route => {
    const fullRoute = fullPath(route.route);
    return Object.assign({}, route, {
      route: fullRoute,
      filePath: routeFilePath(route.route),
    });
  });
}

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
  return prefixRoutes(routeDefinitions.map(
    route => ({
      ...route,
      component: (routerProps, props) => {
        const Component = componentMap[route.key];
        return (<L {...routerProps}><Component {...props} /></L>);
      },
    })));
}
