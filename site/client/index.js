import ReactDOM from 'react-dom';
import Navigation from 'navigation';

import makeRoutes from '../../site/routes';

const TITLE_SUFFIX = 'Red Badger';

export function makeApp({ element, state, history }) {
  const routes = makeRoutes();
  const stateNavigator = new Navigation.StateNavigator(
    routes,
    history
  );

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(location.origin + '/sw.js');
  }

  routes.forEach(route => {
    const render = ({ slug }) => {
      window.scrollTo(0, 0);
      const props = route.stateToProps && route.stateToProps(state, slug);
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
