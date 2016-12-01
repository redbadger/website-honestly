import fetch from 'node-fetch';
import WorkableAPI from '../site/fetchers/workable';

const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const getSiteState = () => {
  const workable = new WorkableAPI(fetch, process.env.WORKABLE_API_KEY);
  return workable.getJobs().then(jobs => ({ jobs, ...state }));
};

export default getSiteState;
