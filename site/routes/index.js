import React from 'react';

import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import CaseStudies from '../pages/case-studies';


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
    {
      key: 'caseStudiesPage',
      route: 'case-studies',
      component: () => <L><CaseStudies /></L>,
    },
  ]);
}
