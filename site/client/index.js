import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from 'navigation';

import { registerStateNavigator } from '../../site/components/link';
import makeRoutes from '../../site/routes';


export function makeApp({ element, data, history }) {
  const routes = makeRoutes(data);
  const stateNavigator = new Navigation.StateNavigator(
    routes,
    history
  );
  registerStateNavigator(stateNavigator);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
      }).catch(error => {
        // registration failed
        console.log('Registration failed with ' + error);
      });
  }

  routes.forEach(route => {
    const render = () => {
      window.scrollTo(0, 0);
      const Component = route.component;
      ReactDOM.render(<Component />, element);
    };
    stateNavigator.states[route.key].navigated = render;
  });
  return stateNavigator;
}
