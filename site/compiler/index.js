import React from 'react';
import { renderToString } from 'react-dom/server';
import Navigation from 'navigation';
import makeRoutes from '../routes';
import { registerStateNavigator } from '../../site/components/link';
import layoutTemplate from '../index.ejs';
import { cssPath, jsPath } from './asset-paths';

const tracking = !!process.env.INSERT_TRACKING;

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
    const body = layoutTemplate({ tracking, bodyContent, cssPath, jsPath });
    return { body, path };
  });
}

export function compileSite(data) {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log('compileSite');
  console.log('process.env.CONTACT_US_URL', process.env.CONTACT_US_URL);
  return compileRoutes(makeRoutes(data));
}
