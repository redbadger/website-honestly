const state = {
  contactUsURL: process.env.CONTACT_US_URL,
  mailingListURL: process.env.MAILING_LIST_URL,
};

module.exports = function getSiteState() {
  return new Promise(resolve => resolve(state));
};
