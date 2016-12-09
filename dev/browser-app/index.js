import 'whatwg-fetch';
import Navigation from 'navigation';
import { makeApp } from '../../site/client';

// Hot reloading when state changes
import _ from '../../assets/state.json'; // eslint-disable-line no-unused-vars, import/extensions, import/no-unresolved

const element = document.querySelector('.js-app');

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

fetch('/state.json').then(handleErrors).then(r => r.json()).then(state => {
  const history = new Navigation.HTML5HistoryManager();
  const app = makeApp({ element, state, history });
  app.start();
});
