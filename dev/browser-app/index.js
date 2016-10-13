import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from 'navigation';

import { registerStateNavigator } from '../../site/components/link';
import makeRoutes from '../../site/routes';

const element = document.querySelector('.js-app');
const data = {};
const routes = makeRoutes(data);
const stateNavigator = new Navigation.StateNavigator(
  routes
);
registerStateNavigator(stateNavigator);

routes.forEach(route => {
  const render = () => {
    const Component = route.component;
    ReactDOM.render(<Component />, element);
  };
  stateNavigator.states[route.key].navigated = render;
});
stateNavigator.start();
