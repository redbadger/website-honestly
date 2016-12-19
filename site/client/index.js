import ReactDOM from 'react-dom';
import { HTML5HistoryManager, StateNavigator } from 'navigation';

import makeRoutes, { handleContactUsHash } from '../../site/routes';

const TITLE_SUFFIX = 'Red Badger';

export function makeApp({ element, state }) {
  const routes = makeRoutes();
  const history = new HTML5HistoryManager((process.env.URL_BASENAME || '').slice(0, -1));
  const stateNavigator = new StateNavigator(
    routes,
    history
  );
  handleContactUsHash(stateNavigator);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(location.origin + '/sw.js');
  }

  routes.forEach(route => {
    const render = params => {
      window.scrollTo(0, 0);
      const props = route.stateToProps && route.stateToProps(state, params);
      const pageTitle = typeof route.title === 'function' ? route.title(props) : route.title;
      const title = `${pageTitle} | ${TITLE_SUFFIX}`;
      stateNavigator.stateContext.title = title;
      const component = route.component({ stateNavigator, title }, props);
      ReactDOM.render(component, element);
    };
    stateNavigator.states[route.key].navigated = render;
  });
  return stateNavigator;
}
