import React from 'react';

import { routeDefinitions } from './definitions';
import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import ServerErrorPage from '../pages/server-error';
import WhatWeDoPage from '../pages/what-we-do';
import JoinUsPage from '../../website-next/src/shared/containers/join-us';
import JobPage from '../../website-next/src/shared/containers/job';

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
    homePage: ({ stateNavigator }) => <L stateNavigator={stateNavigator}><HomePage contactUsURL={content.contactUsURL} /></L>,
    whatWeDoPage: ({ stateNavigator }) => <L stateNavigator={stateNavigator}><WhatWeDoPage /></L>,
    joinUs: ({ stateNavigator }) => <L stateNavigator={stateNavigator}><JoinUsPage jobs={content.jobs} /></L>,
    job: ({ stateNavigator, slug }) => <L stateNavigator={stateNavigator}><JobPage job={content.job[slug]} /></L>,
    notFoundPage: ({ stateNavigator }) => <L stateNavigator={stateNavigator}><NotFoundPage /></L>,
    serverErrorPage: ({ stateNavigator }) => <L stateNavigator={stateNavigator}><ServerErrorPage /></L>,
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
