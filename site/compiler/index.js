import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { uniq } from '../../lib/array';
import makeRoutes from '../routes';
import { parseRouter, routeFilePath } from './parse-router';


function compilePage(routes, location) {
  return new Promise((resolve, reject) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error || redirectLocation || !renderProps) {
        reject(`Unable to render path ${location}`);
      }
      resolve(renderToString(<RouterContext {...renderProps} />));
    });
  });
}

export function compileRoutes(siteRoutes) {
  const routes = uniq(parseRouter(siteRoutes).map(r => r.path));
  const promises = routes.map(route => (
    compilePage(siteRoutes, route)
      .then(body => ({
        path: routeFilePath(route),
        body,
      }))
    )
  );
  return Promise.all(promises);
}

export function compileSite(data) {
  return compileRoutes(makeRoutes(data));
}
