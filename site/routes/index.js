import React from 'react';
import loadable from '@loadable/component';
import { HTML5HistoryManager, StateNavigator } from 'navigation';

import { routeDefinitions } from './definitions';

const L = loadable(() => import('../layout'));
const HomePage = loadable(() => import('../pages/home'));
const NotFoundPage = loadable(() => import('../pages/not-found'));
const ServerErrorPage = loadable(() => import('../pages/server-error'));
const WhatWeDoPage = loadable(() => import('../pages/what-we-do'));
const OfflinePage = loadable(() => import('../pages/offline'));
const BrowserNotSupported = loadable(() => import('../pages/browser-not-supported'));
const AboutUsPage = loadable(() => import('../pages/about-us'));
const CookiePolicyPage = loadable(() => import('../pages/cookie-policy'));
const PrivacyPolicyPage = loadable(() => import('../pages/privacy-policy'));
const TermsAndConditions = loadable(() => import('../pages/terms-and-conditions'));

const JoinUsPage = loadable(() => import('../pages/join-us'));
const JobPage = loadable(() => import('../pages/job'));
const Events = loadable(() => import('../pages/events'));
const EventPage = loadable(() => import('../pages/event'));
const OurWorkPage = loadable(() => import('../pages/our-work'));
const MeetOurTeam = loadable(() => import('../pages/meet-our-team'));
const BadgerProfile = loadable(() => import('../pages/badger-profile'));
const Technology = loadable(() => import('../pages/technology'));

const BankCaseStudy = loadable(() => import('../pages/our-work/case-study/bank'));
const BMWCaseStudy = loadable(() => import('../pages/our-work/case-study/bmw'));
const BBCCaseStudy = loadable(() => import('../pages/our-work/case-study/bbc'));
const CamdenMarketCaseStudy = loadable(() => import('../pages/our-work/case-study/camden-market'));
const CarTrawlerCaseStudy = loadable(() => import('../pages/our-work/case-study/car-trawler'));
const CarTrawlerMyAccountCaseStudy = loadable(() =>
  import('../pages/our-work/case-study/car-trawler-my-account'),
);
const FinancialTimesCaseStudy = loadable(() => import('../pages/our-work/case-study/ft'));
const FMTeaCaseStudy = loadable(() =>
  import('../pages/our-work/case-study/fortnum-and-mason-digital-transformation'),
);
const FortnumAndMasonCaseStudy = loadable(() =>
  import('../pages/our-work/case-study/fortnum-and-mason'),
);
const HallerCaseStudy = loadable(() => import('../pages/our-work/case-study/haller'));
const PrideCaseStudy = loadable(() => import('../pages/our-work/case-study/pride'));
const FidelityCaseStudy = loadable(() => import('../pages/our-work/case-study/fidelity'));
const RetailerCaseStudy = loadable(() => import('../pages/our-work/case-study/retailer'));
const SkyCaseStudy = loadable(() => import('../pages/our-work/case-study/sky'));
const SkyCMSCaseStudy = loadable(() => import('../pages/our-work/case-study/sky-cms'));

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
