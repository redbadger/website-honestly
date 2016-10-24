import 'es6-promise/auto';
import 'whatwg-fetch';

import Navigation from 'navigation';
import { makeApp } from '../site/client';
import getSiteState from '../state';

getSiteState()
  .then(data => {
    const element = document.querySelector('.js-app');
    const history = new Navigation.HTML5HistoryManager();
    return makeApp({ element, data, history });
  })
  .then(app => {
    app.start();
  });
