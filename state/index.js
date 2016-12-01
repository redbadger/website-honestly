const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const getSiteState = () => {
  return new Promise(resolve => resolve(state));
};

export default getSiteState;
