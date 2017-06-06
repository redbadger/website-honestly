import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import createStateNavigator from '../../site/routes';

const TITLE_SUFFIX = 'Red Badger';

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
  console.log('init GA')
  ReactGA.initialize('UA-16654919-1', { debug: true });
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
