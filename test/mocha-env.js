import cssHook from 'css-modules-require-hook';
import 'isomorphic-fetch';
import { hook as requireHook } from 'node-hook';
import { jsdom } from 'jsdom';
import { DOMParser } from 'xmldom';
import chaiAsPromised from 'chai-as-promised';
import chai from 'chai'; // eslint-disable-line import/no-extraneous-dependencies

process.env.SECRET_ENCRYPTION_KEY = 'secret';

global.expect = chai.expect; // Register test tools globally
chai.use(chaiAsPromised);

// Polyfill CSS Modules
cssHook({
  generateScopedName: '[name]__[hash:base64:5]',
});

// Polyfill file loader
const assetFileTypes = ['png', 'jpg', 'jpeg', 'eot', 'ttf', 'woff', 'svg'];

const loadAsset = (source, name) => {
  return `module.exports = ${JSON.stringify(name)}`;
};

assetFileTypes.forEach(ext => {
  requireHook(`.${ext}`, loadAsset);
});

// Polyfill EJS template loader
requireHook(
  '.ejs',
  () =>
    `module.exports = function(data) {
    return data.bodyContent;
  }`,
);

// Polyfill DOM api
global.document = jsdom('');
global.window = global.document.defaultView;
global.window.DOMParser = DOMParser;
global.window.SVGPathSeg = () => {};
global.window.SVGPathSegList = () => {};
global.navigator = {
  userAgent: 'node.js',
};
