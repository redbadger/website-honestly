import 'es6-promise/auto';
import 'whatwg-fetch';

import Navigation from 'navigation';
import { makeApp } from '../site/client';

const element = document.querySelector('.js-app');
const history = new Navigation.HTML5HistoryManager();
const state = window.state;

makeApp({ element, state, history }).start();
