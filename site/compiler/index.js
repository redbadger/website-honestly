import { renderToString } from 'react-dom/server';
import Navigation from 'navigation';
import xssFilters from 'xss-filters';

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

export const expandRoutes = (routeDefs, state) => {
  const staticRoutes = routeDefs.filter(def => !def.gen).map(def => ({
    ...def,
    title: titleFor(def, def.stateToProps && def.stateToProps(state)),
    props: def.stateToProps && def.stateToProps(state),
  }));

  const dynamicRoutes = routeDefs.filter(def => !!def.gen).map(def => {
    return def.gen(state).map(slug => ({
      ...def,
      slug,
      title: titleFor(def, def.stateToProps && def.stateToProps(state, slug)),
      route: def.route.replace('{slug}', slug),
      filePath: def.filePath.replace('{slug}', slug),
      props: def.stateToProps && def.stateToProps(state, slug),
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
    new Navigation.HTML5HistoryManager()
  );

  const compile = route => {
    const path = route.filePath;
    const props = route.stateToProps && route.stateToProps(state, route.slug);

    const title = `${route.title} | ${TITLE_SUFFIX}`;
    const bodyContent = renderToString(route.component({ stateNavigator, title }, props));
    const body = layoutTemplate({
      title,
      tracking,
      bodyContent,
      cssPath,
      jsPath,
      state: xssFilters.inDoubleQuotedAttr(JSON.stringify(state)),
    });

    return { body, path };
  };

  return expandRoutes(siteRoutes, state).map(compile);
}

export function compileSite(state) {
  return compileRoutes(makeRoutes(), state);
}
