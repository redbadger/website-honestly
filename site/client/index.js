import ReactDOM from 'react-dom';

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
    navigator.serviceWorker.register(location.origin + '/sw.js');
  }

  const stateNavigator = createStateNavigator();
  stateNavigator.onNavigate((oldRoute, route, params) => {
    const props = route.stateToProps && route.stateToProps(state, params);
    const pageTitle = typeof route.title === 'function' ? route.title(props) : route.title;
    const title = `${pageTitle} | ${TITLE_SUFFIX}`;
    stateNavigator.stateContext.title = title;
    const component = route.component({ stateNavigator, title }, props);
    ReactDOM.render(component, element, scrollTo(params));

    // Google Analytics is defined in the main ejs file
    // We need to update GA on user navigation event
    if ('ga' in window) {
      ga('set', { // eslint-disable-line
        page: '/' + route.route,
        title: route.title + ' | Red Badger',
      });
      ga('send', 'pageview'); // eslint-disable-line
    }
  });
  return stateNavigator;
}
