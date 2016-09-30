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

/* Polyfill File Loader */
const fileTypes = ['png', 'jpg', 'jpeg', 'eot', 'ttf', 'woff', 'svg'];

const loadAsset = (source, name) => {
  return `module.exports = ${JSON.stringify(name)}`;
};

fileTypes.forEach(ext => {
  requireHook(`.${ext}`, loadAsset);
});


/* Polyfill DOM api */
global.document = jsdom('');
global.window = global.document.defaultView;
global.window.DOMParser = DOMParser;
global.navigator = {
  userAgent: 'node.js',
};
