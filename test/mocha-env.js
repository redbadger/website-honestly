import cssHook from 'css-modules-require-hook';
import { hook as requireHook } from 'node-hook';
import { jsdom } from 'jsdom';
import { DOMParser } from 'xmldom';

const chai = require('chai'); // eslint-disable-line import/no-extraneous-dependencies

global.expect = chai.expect; // Register test tools globally

/* Polyfill CSS Modules */
cssHook({
  generateScopedName: '[name]__[hash:base64:5]',
});

/* Polyfill file loader */
const assetFileTypes = ['png', 'jpg', 'jpeg', 'eot', 'ttf', 'woff', 'svg'];

const loadAsset = (source, name) => {
  return `module.exports = ${JSON.stringify(name)}`;
};

assetFileTypes.forEach(ext => {
  requireHook(`.${ext}`, loadAsset);
});

/* Polyfill EJS template loader */
requireHook('.ejs', () =>
  `module.exports = function(data) {
    return data.bodyContent;
  }`
);


/* Polyfill DOM api */
global.document = jsdom('');
global.window = global.document.defaultView;
global.window.DOMParser = DOMParser;
global.navigator = {
  userAgent: 'node.js',
};
