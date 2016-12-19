import React from 'react';

import { routeDefinitions } from './definitions';
import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import ServerErrorPage from '../pages/server-error';
import WhatWeDoPage from '../pages/what-we-do';
import OfflinePage from '../pages/offline';
import AboutUsPage from '../pages/about-us';

import JoinUsPage from '../../website-next/src/shared/containers/join-us';
import JobPage from '../../website-next/src/shared/containers/job';
import Events from '../../website-next/src/shared/containers/events';
import EventPage from '../../website-next/src/shared/containers/event';

const componentMap = {
  homePage: HomePage,
  whatWeDoPage: WhatWeDoPage,
  joinUs: JoinUsPage,
  job: JobPage,
  event: EventPage,
  events: Events,
  notFoundPage: NotFoundPage,
  serverErrorPage: ServerErrorPage,
  offlinePage: OfflinePage,
  aboutUsPage: AboutUsPage,
};

export default function routes() {
  return routeDefinitions.map(
    route => ({
      ...route,
      component: (routerProps, props) => {
        const Component = componentMap[route.key];
        return (<L {...routerProps}><Component {...props} /></L>);
      },
    }));
}

export const handleContactUsHash = stateNavigator => {
  const { historyManager } = stateNavigator;
  const getUrl = historyManager.getUrl.bind(historyManager);
  historyManager.getUrl = hrefElement => {
    const url = getUrl(hrefElement);
    if (hrefElement.hash === '#contactUs') {
      return url + '?contactUs=true';
    }
    return url;
  };
  const getHref = historyManager.getHref.bind(historyManager);
  historyManager.getHref = url => {
    const href = getHref(url);
    const { state, data } = stateNavigator.parseLink(url);
    if (state.key === 'homePage' && data.contactUs === true) {
      return '/#contactUs';
    }
    return href;
  };
  historyManager.addHistory = url => {
    const href = historyManager.getHref(url);
    if (location.pathname + location.search + location.hash !== href) {
      window.history.pushState(null, null, href);
    }
  };
  return historyManager;
};
