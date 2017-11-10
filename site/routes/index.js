import React from 'react';
import { HTML5HistoryManager, StateNavigator } from 'navigation';

import { routeDefinitions } from './definitions';
import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import ServerErrorPage from '../pages/server-error';
import WhatWeDoPage from '../pages/what-we-do';
import OfflinePage from '../pages/offline';
import AboutUsPage from '../pages/about-us';

import JoinUsPage from '../pages/join-us';
import JobPage from '../pages/job';
import Events from '../pages/events';
import EventPage from '../pages/event';
import OurWorkPage from '../pages/our-work';
import MeetOurTeam from '../pages/meet-our-team';
import BadgerProfile from '../pages/badger-profile';
import Technology from '../pages/technology';

import FortnumAndMasonCaseStudy from '../pages/our-work/case-study/fortnum-and-mason';
import RetailerCaseStudy from '../pages/our-work/case-study/retailer';
import CamdenMarketCaseStudy from '../pages/our-work/case-study/camden-market';
import FinancialTimesCaseStudy from '../pages/our-work/case-study/ft';
import SkyCMSCaseStudy from '../pages/our-work/case-study/sky-cms';
import SkyCaseStudy from '../pages/our-work/case-study/sky';
import BMWCaseStudy from '../pages/our-work/case-study/bmw';
import BBCCaseStudy from '../pages/our-work/case-study/bbc';
import HallerCaseStudy from '../pages/our-work/case-study/haller';

const componentMap = {
  homePage: HomePage,
  whatWeDoPage: WhatWeDoPage,
  ourWorkPage: OurWorkPage,
  joinUs: JoinUsPage,
  job: JobPage,
  event: EventPage,
  events: Events,
  notFoundPage: NotFoundPage,
  serverErrorPage: ServerErrorPage,
  offlinePage: OfflinePage,
  aboutUsPage: AboutUsPage,
  badgers: MeetOurTeam,
  badger: BadgerProfile,
  fortnumAndMasonCaseStudy: FortnumAndMasonCaseStudy,
  retailerCaseStudy: RetailerCaseStudy,
  camdenMarketCaseStudy: CamdenMarketCaseStudy,
  financialTimesCaseStudy: FinancialTimesCaseStudy,
  skyCMSCaseStudy: SkyCMSCaseStudy,
  skyCaseStudy: SkyCaseStudy,
  bmwCaseStudy: BMWCaseStudy,
  bbcCaseStudy: BBCCaseStudy,
  hallerCaseStudy: HallerCaseStudy,
  technology: Technology,
};

function routes() {
  return routeDefinitions.map(route => ({
    ...route,
    component: (routerProps, props) => {
      const Component = componentMap[route.key];
      return (
        <L {...routerProps}>
          <Component {...props} />
        </L>
      );
    },
  }));
}

/*
  When the contact us menu item (only appears in the mobile menu) is clicked
  the window should scroll to the contacts us section of the home page (see
  https://github.com/redbadger/website-honestly/issues/274).

  There's a contactUs hash in the URL so that the scrolling works without
  JavaScript. The problem is that the state navigator doesn't cater for hashes
  in the URL. What follows is a workaround for using hashes with the state
  navigator.

  The HistoryManager handles converting Urls to Hrefs and Hrefs to Urls. That
  means we can pass the contactUs indicator in the query string internally, to
  keep the state navigator happy, and only convert it to and from a hash when
  it appears in an href (anchor tag or browser location).

  Also need a custom addHistory to include the hash in the check to see if the
  url's changed. Otherwise clicking on contact us and then the home page won't
  change the url because they only differ on the hash.
*/
const handleContactUsHash = stateNavigator => {
  const { historyManager } = stateNavigator;
  const getUrl = historyManager.getUrl.bind(historyManager);
  historyManager.getUrl = hrefElement => {
    let url = getUrl(hrefElement);
    if (hrefElement.hash === '#contactUs') {
      const { state, data } = stateNavigator.parseLink(url);
      url = stateNavigator.getNavigationLink(state.key, { ...data, contactUs: true });
    }
    return url;
  };
  const getHref = historyManager.getHref.bind(historyManager);
  historyManager.getHref = url => {
    let newUrl = url;
    let hash = '';
    const { state, data: { contactUs, ...rest } } = stateNavigator.parseLink(url);
    if (contactUs) {
      newUrl = stateNavigator.getNavigationLink(state.key, rest);
      hash = '#contactUs';
    }
    return getHref(newUrl) + hash;
  };
  historyManager.addHistory = url => {
    const href = historyManager.getHref(url);
    if (location.pathname + location.search + location.hash !== href) {
      window.history.pushState(null, null, href);
    }
  };
  return historyManager;
};

export default () => {
  const stateNavigator = new StateNavigator(
    routes(),
    new HTML5HistoryManager((process.env.URL_BASENAME || '').slice(0, -1))
  );
  handleContactUsHash(stateNavigator);
  return stateNavigator;
};
