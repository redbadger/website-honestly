import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from 'navigation';

import makeRoutes from '../../site/routes';

export function makeApp({ element, data, history }) {
  const routes = makeRoutes(data);
  const stateNavigator = new Navigation.StateNavigator(
    routes,
    history
  );

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(location.origin + '/sw.js');
  }

  routes.forEach(route => {
    const render = () => {
      window.scrollTo(0, 0);
      const Component = route.component;
      ReactDOM.render(<Component stateNavigator={stateNavigator} {...route.props} />, element);
    };
    stateNavigator.states[route.key].navigated = render;
  });
  return stateNavigator;
}
