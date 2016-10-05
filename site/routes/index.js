import React from 'react';

import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';

const routePrefix = process.env.URL_BASENAME || '';

function routeFilePath(path) {
  switch (path) {
    case '':
      return `${routePrefix}index.html`;

    default:
      return `${routePrefix}${path}/index.html`;
  }
}

function prefixRoutes(rs) {
  return rs.map(route => {
    const fullRoute = `${routePrefix}${route.route}`;
    return Object.assign({}, route, {
      route: fullRoute,
      filePath: routeFilePath(route.route),
    });
  });
}

export default function routes() {
  return prefixRoutes([
    {
      key: 'homePage',
      route: '',
      component: () => <L><HomePage /></L>,
    },
    {
      key: 'servicesPage',
      route: 'services',
      component: () => <L><NotFoundPage /></L>,
    },
    {
      key: 'notFoundPage',
      route: '404',
      component: () => <L><NotFoundPage /></L>,
    },
  ]);
}
