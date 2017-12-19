import Helmet from 'react-helmet';

import { renderToString } from 'react-dom/server';

import createStateNavigator from '../routes';
import layoutTemplate from '../index.ejs';
import { cssPath, jsPath } from './asset-paths';

const tracking = !!process.env.INSERT_TRACKING;

const TITLE_SUFFIX = 'Red Badger';

const titleFor = (def, props) => {
  if (typeof def.title === 'function') {
    return def.title(props);
  }

  return def.title;
};

/*
  Routes: /, /about-us/join-us/{slug}
  Expanded: /, /about-us/join-us/software-engineer etc.
*/

const routeFilePath = path => {
  if (path === '') {
    return 'index.html';
  }
  if (path === '404') {
    return '404.html';
  }
  return `${path}/index.html`;
};

const filePathFor = (stateNavigator, key, params) => {
  const route = stateNavigator.getNavigationLink(key, params);
  if (!route) {
    throw new Error(
      `The route could not be matched for key: ${key}, params: ${JSON.stringify(params)}`,
    );
  }
  return { link: route, filePath: routeFilePath(route.substring(1)) };
};

export const expandRoutes = (state, stateNavigator) => {
  const routeDefs = Object.keys(stateNavigator.states).map(key => stateNavigator.states[key]);
  const staticRoutes = routeDefs.filter(def => !def.gen).map(def => ({
    ...def,
    title: titleFor(def, def.stateToProps && def.stateToProps(state)),
    ...filePathFor(stateNavigator, def.key),
    props: def.stateToProps && def.stateToProps(state),
  }));

  const dynamicRoutes = routeDefs.filter(def => !!def.gen).map(def => {
    return def.gen(state).map(params => ({
      ...def,
      title: titleFor(def, def.stateToProps && def.stateToProps(state, params)),
      ...filePathFor(stateNavigator, def.key, params),
      props: def.stateToProps && def.stateToProps(state, params),
    }));
  });

  const flattened = dynamicRoutes.reduce((flat, arr) => flat.concat(arr), []);

  return staticRoutes.concat(flattened);
};

export function compileRoutes(state) {
  const stateNavigator = createStateNavigator();

  const stateHash = Date.now();
  const stateFile = {
    body: state ? JSON.stringify(state) : '{}',
    path: `${process.env.URL_BASENAME || ''}state-${stateHash}.json`,
  };

  const compile = route => {
    const path = (process.env.URL_BASENAME || '') + route.filePath;

    const title = `${route.title} | ${TITLE_SUFFIX}`;

    stateNavigator.navigateLink(route.link, 'none');
    const renderStart = Date.now();
    const bodyContent = renderToString(route.component({ stateNavigator, title }, route.props));
    const meta = typeof window === 'undefined' ? Helmet.rewind().meta : null;
    const renderMs = Date.now() - renderStart;

    const ejsStart = Date.now();
    const body = layoutTemplate({
      title,
      tracking,
      bodyContent,
      cssPath,
      jsPath,
      meta,
      stateHash,
    });
    const ejsMs = Date.now() - ejsStart;
    console.log(`Compiled ${route.filePath} render=${renderMs} ejs=${ejsMs}`); // eslint-disable-line no-console

    return { body, path };
  };

  const routeFiles = expandRoutes(state, stateNavigator).map(compile);

  return [stateFile, ...routeFiles];
}

export function compileSite(state) {
  return compileRoutes(state);
}
