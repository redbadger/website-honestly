import 'es6-promise/auto';
import 'whatwg-fetch';

import { makeApp } from '../site/client';

const element = document.querySelector('.js-app');
const state = JSON.parse(document.getElementById('state').value);

makeApp({ element, state }).start();
