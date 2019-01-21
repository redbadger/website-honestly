import React from 'react';
import { HTML5HistoryManager, StateNavigator } from 'navigation';

import { routeDefinitions } from './definitions';
import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';
import ServerErrorPage from '../pages/server-error';
import WhatWeDoPage from '../pages/what-we-do';
import OfflinePage from '../pages/offline';
import BrowserNotSupported from '../pages/browser-not-supported';
import AboutUsPage from '../pages/about-us';
import CookiePolicyPage from '../pages/cookie-policy';
import PrivacyPolicyPage from '../pages/privacy-policy';
import TermsAndConditions from '../pages/terms-and-conditions';

import JoinUsPage from '../pages/join-us';
import JobPage from '../pages/job';
import Events from '../pages/events';
import EventPage from '../pages/event';
import OurWorkPage from '../pages/our-work';
import MeetOurTeam from '../pages/meet-our-team';
import BadgerProfile from '../pages/badger-profile';
import Technology from '../pages/technology';

import BankCaseStudy from '../pages/our-work/case-study/bank';
import BMWCaseStudy from '../pages/our-work/case-study/bmw';
import BBCCaseStudy from '../pages/our-work/case-study/bbc';
import CamdenMarketCaseStudy from '../pages/our-work/case-study/camden-market';
import CarTrawlerCaseStudy from '../pages/our-work/case-study/car-trawler';
import CarTrawlerMyAccountCaseStudy from '../pages/our-work/case-study/car-trawler-my-account';
import FinancialTimesCaseStudy from '../pages/our-work/case-study/ft';
import FMTeaCaseStudy from '../pages/our-work/case-study/fortnum-and-mason-digital-transformation';
import FortnumAndMasonCaseStudy from '../pages/our-work/case-study/fortnum-and-mason';
import HallerCaseStudy from '../pages/our-work/case-study/haller';
import PrideCaseStudy from '../pages/our-work/case-study/pride';
import FidelityCaseStudy from '../pages/our-work/case-study/fidelity';
import RetailerCaseStudy from '../pages/our-work/case-study/retailer';
import SkyCaseStudy from '../pages/our-work/case-study/sky';
import SkyCMSCaseStudy from '../pages/our-work/case-study/sky-cms';

const componentMap = {
  aboutUsPage: AboutUsPage,
  badger: BadgerProfile,
  badgers: MeetOurTeam,
  bankCaseStudy: BankCaseStudy,
  bbcCaseStudy: BBCCaseStudy,
  bmwCaseStudy: BMWCaseStudy,
  browserNotSupported: BrowserNotSupported,
  camdenMarketCaseStudy: CamdenMarketCaseStudy,
  carTrawlerCaseStudy: CarTrawlerCaseStudy,
  carTrawlerMyAccountCaseStudy: CarTrawlerMyAccountCaseStudy,
  cookiePolicy: CookiePolicyPage,
  event: EventPage,
  events: Events,
  financialTimesCaseStudy: FinancialTimesCaseStudy,
  fMTeaCaseStudy: FMTeaCaseStudy,
  fortnumAndMasonCaseStudy: FortnumAndMasonCaseStudy,
  hallerCaseStudy: HallerCaseStudy,
  homePage: HomePage,
  job: JobPage,
  joinUs: JoinUsPage,
  notFoundPage: NotFoundPage,
  offlinePage: OfflinePage,
  ourWorkPage: OurWorkPage,
  prideCaseStudy: PrideCaseStudy,
  fidelityCaseStudy: FidelityCaseStudy,
  privacyPolicy: PrivacyPolicyPage,
  retailerCaseStudy: RetailerCaseStudy,
  serverErrorPage: ServerErrorPage,
  skyCaseStudy: SkyCaseStudy,
  skyCMSCaseStudy: SkyCMSCaseStudy,
  technology: Technology,
  termsAndConditions: TermsAndConditions,
  whatWeDoPage: WhatWeDoPage,
};

function routes() {
  return routeDefinitions.map(route => ({
    ...route,
    component: (routerProps, props) => {
      const Component = componentMap[route.key];
      if (route.noLayout) {
        return <Component {...props} />;
      }

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
    const {
      state,
      data: { contactUs, ...rest },
    } = stateNavigator.parseLink(url);
    if (contactUs) {
      newUrl = stateNavigator.getNavigationLink(state.key, rest);
      hash = '#contactUs';
    }
    return getHref(newUrl) + hash;
  };
  historyManager.addHistory = url => {
    const href = historyManager.getHref(url);
    if (window.location.pathname + window.location.search + window.location.hash !== href) {
      window.history.pushState(null, null, href);
    }
  };
  return historyManager;
};

export default () => {
  const stateNavigator = new StateNavigator(
    routes(),
    new HTML5HistoryManager((process.env.URL_BASENAME || '').slice(0, -1)),
  );
  handleContactUsHash(stateNavigator);
  stateNavigator.onNavigate((oldState, state) => {
    const page = routeDefinitions.find(obj => obj.key === state.key);
    if (typeof document !== 'undefined') {
      const metaDescription = page.description || '';
      const tag = document.getElementsByName('description')[0];
      if (tag) tag.setAttribute('content', metaDescription);
    }
  });

  return stateNavigator;
};
