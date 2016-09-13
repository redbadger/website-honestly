const state = {};

module.exports = function getSiteState() {
  return new Promise(resolve => resolve(state));
};
