import 'picturefill';

// We need these polyfills for non-es6 compliant browsers
// like IE11 and older Webkits on Android (eg. UC Browsers on Galaxy S7)
import 'core-js/es6/array';
import 'core-js/es6/symbol';

import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import createStateNavigator from '../../site/routes';

import { initGreyscaleModeBar } from './greyscale';

const TITLE_SUFFIX = 'Red Badger';
const A11Y_DAY_MODE_ENABLED = false;

if (A11Y_DAY_MODE_ENABLED) {
  initGreyscaleModeBar();
}

const scrollTo = params => () => {
  if (params.contactUs) {
    let el = document.getElementById('contactUs');

    if (el && el.scrollIntoView) {
      el.scrollIntoView();
    }
    el = document.getElementById('contactUsMessage');
    if (el) {
      el.focus();
    }
  } else {
    window.scrollTo(0, 0);
  }
};

export function makeApp({ element, state }) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(r => {
      if (r) {
        r.unregister();
      }
    });
  }

  // init Google Analytics tracker and publish a page view at '/'
  const { GOOGLE_ANALYTICS_TRACKER } = process.env;
  ReactGA.initialize(GOOGLE_ANALYTICS_TRACKER);
  ReactGA.pageview('/');

  const stateNavigator = createStateNavigator();
  stateNavigator.onNavigate((oldRoute, route, params) => {
    const props = route.stateToProps && route.stateToProps(state, params);
    const pageTitle = typeof route.title === 'function' ? route.title(props) : route.title;
    const title = `${pageTitle} | ${TITLE_SUFFIX}`;
    stateNavigator.stateContext.title = title;
    const component = route.component({ stateNavigator, title }, props);
    ReactDOM.render(component, element, scrollTo(params));

    // Update GA on user navigation event
    const page = `/${route.route}`;
    ReactGA.set({ page, title });
    ReactGA.pageview(page);
  });
  return stateNavigator;
}
