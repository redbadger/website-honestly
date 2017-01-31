import 'whatwg-fetch';
import { makeApp } from '../../site/client';

const element = document.querySelector('.js-app');

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

fetch('/state.json').then(handleErrors).then(r => r.json()).then(state => {
  const app = makeApp({ element, state });
  app.start();
});
