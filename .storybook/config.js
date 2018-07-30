import { configure } from '@storybook/react';

const req = require.context('../site', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
