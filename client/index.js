import Navigation from 'navigation';
import { makeApp } from '../site/client';

const element = document.querySelector('.js-app');
const data = {};
const history = new Navigation.HTML5HistoryManager();
const app = makeApp({ element, data, history });
app.start();
