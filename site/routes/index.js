import React from 'react';

import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';

const routePrefix = process.env.URL_BASENAME || '';

function prefixRoutes(rs) {
  return rs.map(route => {
    return Object.assign({}, route, { route: `${routePrefix}${route.route}` });
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
      key: 'notFoundPage',
      route: '404',
      component: () => <L><NotFoundPage /></L>,
    },
  ]);
}
