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

const expand = (routeDefs, state) => {
  const staticRoutes = routeDefs.filter(def => !def.gen).map(def => ({
    ...def,
    routingKey: def.key,
    title: def.title(def.stateToProps && def.stateToProps(state)),
    props: def.stateToProps && def.stateToProps(state),
  }));

  const dynamicRoutes = routeDefs.filter(def => !!def.gen);

  let i = 0;
  const expanded = dynamicRoutes.map(def => {
    return def.gen(state).map(slug => ({
      ...def,
      routingKey: (i += 1),
      title: def.title(def.stateToProps(state, slug)),
      route: def.route.replace('{slug}', slug),
      props: def.stateToProps(state, slug),
    }));
  });

  const flattened = expanded.reduce((flat, arr) => flat.concat(arr), []);

  return staticRoutes.concat(flattened);
};

const componentMap = {
  homePage: HomePage,
  whatWeDoPage: WhatWeDoPage,
  joinUs: JoinUsPage,
  job: JobPage,
  notFoundPage: NotFoundPage,
  serverErrorPage: ServerErrorPage,
};

export default function routes(content) {
  const expanded = expand(routeDefinitions, content);
  return prefixRoutes(expanded.map(
    ({ title, key, route, props, routingKey }) => ({
      title: `${title} | ${TITLE_SUFFIX}`,
      key: routingKey,
      route,
      component: routerProps => {
        const Component = componentMap[key];
        return (<L {...routerProps}><Component {...props} /></L>);
      },
      props,
    })));
}
