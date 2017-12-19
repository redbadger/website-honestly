import 'es6-promise/auto';
import 'whatwg-fetch';

import { makeApp } from '../site/client';

const element = document.querySelector('.js-app');
const stateHash = document.getElementById('state-hash').value;

fetch(`/${process.env.URL_BASENAME || ''}state-${stateHash}.json`)
  .then(response => response.json())
  .then(state => {
    makeApp({ element, state }).start();
  });
