import 'es6-promise/auto';
import 'whatwg-fetch';
import decode from 'ent/decode';
import Navigation from 'navigation';
import { makeApp } from '../site/client';

const element = document.querySelector('.js-app');
const history = new Navigation.HTML5HistoryManager();
const state = JSON.parse(document.getElementById('state').value, (key, value) => (
  typeof value === 'string' ? decode(value) : value
));

makeApp({ element, state }).start();
