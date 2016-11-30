import getRoutes from '../shared/routes';
import createStore from '../shared/create-store';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory, match } from 'react-router';

import { googleAnalyticsUA } from '../shared/config';

import * as ReactGA from 'react-ga';
ReactGA.initialize(googleAnalyticsUA);

const initialStateString = document.getElementById('initialState').textContent;
const initialState = JSON.parse(initialStateString);
const store = createStore(browserHistory, initialState);

const mountNode = document.getElementById('mount');

match({
  routes: getRoutes(store),
  location: window.location,
  history: browserHistory,
}, (error, redirectLocation, renderProps) => {
  const routerUpdate = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);

    if (renderProps && !(store.getState().routing.location.hash)) {
      // Scroll to top when a hash doesn't exist, and we're on a valid route.
      window.scrollTo(0, 0);
    }
  };

  const Application = (
    <Provider store={store}>
      <Router {...renderProps}
        history={browserHistory}
        onUpdate={routerUpdate} />
    </Provider>
  );

  render(Application, mountNode);
});
