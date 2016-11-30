import React from 'react';

import { routeDefinitions } from './definitions';
import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import WhatWeDoPage from '../pages/what-we-do';
import JoinUsPage from '../pages/join-us';
import EventsPage from '../../website-next/src/shared/containers/events';

const TITLE_SUFFIX = 'Red Badger';

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

export default function routes(content) {
  const componentMap = {
    homePage: ({stateNavigator}) => <L stateNavigator={stateNavigator}><HomePage contactUsURL={content.contactUsURL} /></L>,
    notFoundPage: ({stateNavigator}) => <L stateNavigator={stateNavigator}><NotFoundPage /></L>,
    whatWeDoPage: ({stateNavigator}) => <L stateNavigator={stateNavigator}><WhatWeDoPage /></L>,
    joinUs: ({stateNavigator}) => <L stateNavigator={stateNavigator}><JoinUsPage jobs={content.jobs} /></L>,
    job: ({stateNavigator}) => <L stateNavigator={stateNavigator}>Not Implemented</L>,
    events: ({stateNavigator}) => <L stateNavigator={stateNavigator}><EventsPage events={content.events}/></L>
  };

  return prefixRoutes(routeDefinitions.map(
    ({ title, key, route }) => ({
      title: `${title} | ${TITLE_SUFFIX}`,
      key,
      route,
      component: componentMap[key],
    }))
  );
}
