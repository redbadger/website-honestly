import fetch from 'node-fetch';
import { getJobs } from '../site/fetchers/workable';

const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const toDict = (array, keyFn) => array.reduce((obj, item) => ({
  ...obj,
  [keyFn(item)]: item,
}), {});

const getSiteState = () => {
  return getJobs(fetch, process.env.WORKABLE_API_KEY).then(jobs =>
    ({ jobs, job: toDict(jobs, j => j.slug), ...state })
  );
};

export default getSiteState;
