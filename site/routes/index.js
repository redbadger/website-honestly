import React from 'react';

import { routeDefinitions } from './definitions';
import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import WhatWeDoPage from '../pages/what-we-do';

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
  };
  return prefixRoutes(routeDefinitions.map(route => ({
    ...route,
    component: componentMap[route.key],
  })));
}
