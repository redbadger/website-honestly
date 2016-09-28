import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from 'navigation';

import { registerStateNavigator } from '../../site/components/link';
import makeRoutes from '../../site/routes';

document.writeln('<main/>');
const main = document.querySelector('main');

const data = {};
const routes = makeRoutes(data);
const stateNavigator = new Navigation.StateNavigator(
  routes,
  new Navigation.HTML5HistoryManager()
);
registerStateNavigator(stateNavigator);

routes.forEach(route => {
  const render = () => {
    const Component = route.component;
    ReactDOM.render(<Component />, main);
  };
  stateNavigator.states[route.key].navigated = render;
});
stateNavigator.start();
