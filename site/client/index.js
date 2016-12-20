import ReactDOM from 'react-dom';

import createStateNavigator from '../../site/routes';

const TITLE_SUFFIX = 'Red Badger';

export function makeApp({ element, state }) {
  const stateNavigator = createStateNavigator();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(location.origin + '/sw.js');
  }

  stateNavigator.onNavigate((oldRoute, route, params) => {
    const props = route.stateToProps && route.stateToProps(state, params);
    const pageTitle = typeof route.title === 'function' ? route.title(props) : route.title;
    const title = `${pageTitle} | ${TITLE_SUFFIX}`;
    stateNavigator.stateContext.title = title;
    const component = route.component({ stateNavigator, title }, props);
    ReactDOM.render(component, element, () => {
      if (params.contactUs) {
        const el = document.getElementById('contactUsMessage');
        if (el) {
          if (el.scrollIntoView) {
            el.scrollIntoView();
          }
          el.focus();
        }
      } else {
        window.scrollTo(0, 0);
      }
    });
  });
  return stateNavigator;
}
