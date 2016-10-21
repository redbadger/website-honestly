const state = {};

module.exports = function getSiteState() {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log('getSiteState');
  console.log('process.env', process.env);
  console.log('process.env.CONTACT_US_URL', process.env.CONTACT_US_URL);
  return new Promise(resolve => resolve(state));
};
