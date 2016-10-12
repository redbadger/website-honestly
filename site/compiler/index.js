import React from 'react';
import { renderToString } from 'react-dom/server';
import Navigation from 'navigation';
import makeRoutes, { fullPath } from '../routes';
import { registerStateNavigator } from '../../site/components/link';
import layoutTemplate from '../index.ejs';
import assetsDigest from './assets-digest'; // eslint-disable-line import/no-unresolved

const cssPath = '/' + fullPath(assetsDigest[assetsDigest.metadata.bundleName].css);

export function compileRoutes(siteRoutes) {
  const stateNavigator = new Navigation.StateNavigator(
    siteRoutes,
    new Navigation.HTML5HistoryManager()
  );
  registerStateNavigator(stateNavigator);
  return siteRoutes.map(route => {
    const Component = route.component;
    const path = route.filePath;
    const bodyContent = renderToString(<Component />);
    const body = layoutTemplate({ bodyContent, cssPath });
    return { body, path };
  });
}

export function compileSite(data) {
  return compileRoutes(makeRoutes(data));
}
