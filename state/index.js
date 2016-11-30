import fetch from 'node-fetch';
import WorkableAPI from '../site/fetchers/workable';
import { getEvents } from '../site/fetchers/badger-brain';

const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL
};

const getSiteState = () => {
  const workable = new WorkableAPI(fetch, process.env.WORKABLE_API_KEY);
  // return workable.getJobs().then(jobs => ({ jobs, ...state }));
  return getEvents().then(events => ({events, ...state}));
};

export default getSiteState;
