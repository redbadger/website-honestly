import fetch from 'node-fetch';
import Promise from 'bluebird';

import WorkableAPI from '../site/fetchers/workable';
import { getEvents } from '../site/fetchers/badger-brain';

const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL
};

const workable = new WorkableAPI(fetch, process.env.WORKABLE_API_KEY);

const getSiteState = () => {
  return Promise.props({
    events: getEvents(),
    jobs: workable.getJobs()
  }).then((fetched) => ({ ...fetched, ...state }));
};

export default getSiteState;
