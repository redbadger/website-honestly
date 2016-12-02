import React from 'react';
import { renderToString } from 'react-dom/server';
import Navigation from 'navigation';
import makeRoutes from '../routes';
import layoutTemplate from '../index.ejs';
import { cssPath, jsPath } from './asset-paths';

const tracking = !!process.env.INSERT_TRACKING;

export function compileRoutes(siteRoutes, state) {
  const stateNavigator = new Navigation.StateNavigator(
    siteRoutes,
    new Navigation.HTML5HistoryManager()
  );
  return siteRoutes.map(route => {
    const props = route.stateToProps && route.stateToProps(state);
    const title = route.title(props);
    const path = route.filePath;
    const bodyContent = renderToString(route.component({ stateNavigator }, props));
    const body = layoutTemplate({
      title,
      tracking,
      bodyContent,
      cssPath,
      jsPath,
    });

    return { body, path };
  });
}

export function compileSite(state) {
  return compileRoutes(makeRoutes(), state);
}
