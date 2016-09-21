import cssHook from 'css-modules-require-hook';
import { hook as requireHook } from 'node-hook';

const chai = require('chai'); // eslint-disable-line import/no-extraneous-dependencies

global.expect = chai.expect; // Register test tools globally

/* Polyfill CSS Modules */
cssHook({
  generateScopedName: '[name]__[hash:base64:5]',
});

/* Polyfill File Loader */

const fileTypes = ['png', 'jpg', 'jpeg', 'eot', 'ttf', 'woff', 'svg'];

const loadAsset = (source, name) => {
  return JSON.stringify(name);
};

fileTypes.forEach(ext => {
  requireHook(`.${ext}`, loadAsset);
});
