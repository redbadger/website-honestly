import 'picturefill';

// We need these polyfills for non-es6 compliant browsers
// like IE11 and older Webkits on Android (eg. UC Browsers on Galaxy S7)
import 'core-js/es/array';
import 'core-js/es/symbol';

import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';

import createStateNavigator from '../routes';

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

  const tagManagerArgs = {
    gtmId: 'GTM-WKH5X5W',
    dataLayer: {
      domain: `Red Badger: ${process.env.ENVIRONMENT_NAME} environment`,
    },
  };

  TagManager.initialize(tagManagerArgs);

  const stateNavigator = createStateNavigator();
  stateNavigator.onNavigate((oldRoute, route, params) => {
    const props = route.stateToProps && route.stateToProps(state, params);
    const pageTitle = typeof route.title === 'function' ? route.title(props) : route.title;
    const title = `${pageTitle} | ${TITLE_SUFFIX}`;
    stateNavigator.stateContext.title = title;
    const component = route.component({ stateNavigator, title }, props);
    ReactDOM.render(component, element, scrollTo(params));
    const page = stateNavigator.getNavigationLink(route.key, params);
    const location = window.location.origin;
    TagManager.dataLayer({
      dataLayer: {
        page,
        location,
      },
      dataLayerName: 'PageDataLayer',
    });
  });

  return stateNavigator;
}
