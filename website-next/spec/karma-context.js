/*
 * require.context all src to instrument the code coverage tool
 */

require("babel-polyfill"); // Polyfills for phantom..
const sharedContext = require.context('../src/shared/', true, /\.js$/);

sharedContext.keys().forEach(sharedContext);
