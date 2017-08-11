/* eslint-disable no-console */
const fs = require('fs');
const gradient = require('gradient-string');

const badger = fs.readFileSync('./assets/badger.txt', 'utf8');

console.log(gradient.rainbow(badger));
