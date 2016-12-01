import React from 'react';

import { routeDefinitions } from './definitions';
import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import ServerErrorPage from '../pages/server-error';
import WhatWeDoPage from '../pages/what-we-do';

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

export default function routes({ contactUsURL }) {
  const componentMap = {
    homePage: () => <L><HomePage contactUsURL={contactUsURL} /></L>,
    notFoundPage: () => <L><NotFoundPage /></L>,
    whatWeDoPage: () => <L><WhatWeDoPage /></L>,
    serverErrorPage: () => <L><ServerErrorPage /></L>,
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
