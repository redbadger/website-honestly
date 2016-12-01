import 'es6-promise/auto';
import 'whatwg-fetch';

import Navigation from 'navigation';
import { makeApp } from '../site/client';
import getSiteState from '../state';

getSiteState()
  .then(state => {
    const element = document.querySelector('.js-app');
    const history = new Navigation.HTML5HistoryManager();
    return makeApp({ element, state, history });
  })
  .then(app => {
    app.start();
  });
