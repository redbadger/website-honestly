import { makeApp } from '../../site/client';

const element = document.querySelector('.js-app');
const data = {};
const app = makeApp({ element, data });
app.start();
