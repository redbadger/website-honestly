import { renderToString } from 'react-dom/server';
import Navigation from 'navigation';
import encode from 'ent/encode';

import makeRoutes from '../routes';
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

const routeFilePath = path => (path === '' ? `${path}index.html` : `${path}/index.html`);

export const expandRoutes = (routeDefs, state, stateNavigator) => {
  const staticRoutes = routeDefs.filter(def => !def.gen).map(def => ({
    ...def,
    title: titleFor(def, def.stateToProps && def.stateToProps(state)),
    filePath: routeFilePath(stateNavigator.getNavigationLink(def.key).substring(1)),
    props: def.stateToProps && def.stateToProps(state),
  }));

  const dynamicRoutes = routeDefs.filter(def => !!def.gen).map(def => {
    return def.gen(state).map(params => ({
      ...def,
      title: titleFor(def, def.stateToProps && def.stateToProps(state, params)),
      filePath: routeFilePath(stateNavigator.getNavigationLink(def.key, params).substring(1)),
      props: def.stateToProps && def.stateToProps(state, params),
    }));
  });

  const flattened = dynamicRoutes.reduce((flat, arr) => flat.concat(arr), []);

  return staticRoutes.concat(flattened);
};

export function compileRoutes(siteRoutes, state) {
  /*
    We only register unexpanded routes with stateNavigator, so we can
    continue to use named routes.
  */
  const stateNavigator = new Navigation.StateNavigator(
    siteRoutes,
    new Navigation.HTML5HistoryManager((process.env.URL_BASENAME || '').substring(1))
  );

  const compile = route => {
    const path = (process.env.URL_BASENAME || '') + route.filePath;
    const props = route.stateToProps && route.stateToProps(state, route.slug);

    const title = `${route.title} | ${TITLE_SUFFIX}`;
    const bodyContent = renderToString(route.component({ stateNavigator, title }, props));
    const body = layoutTemplate({
      title,
      tracking,
      bodyContent,
      cssPath,
      jsPath,
      state: (state && encode(JSON.stringify(state))),
    });

    return { body, path };
  };

  return expandRoutes(siteRoutes, state, stateNavigator).map(compile);
}

export function compileSite(state) {
  return compileRoutes(makeRoutes(), state);
}
