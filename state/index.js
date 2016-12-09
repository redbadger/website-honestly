import fetch from 'node-fetch';
import { getJobs } from '../site/fetchers/workable';
import { getEvents } from '../site/fetchers/badger-brain';

const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const toDict = (array, keyFn) => array.reduce((obj, item) => ({
  ...obj,
  [keyFn(item)]: item,
}), {});

const getSiteState = () => (
  getJobs(fetch, process.env.WORKABLE_API_KEY)
    .then(jobs => ({ jobs, job: toDict(jobs, j => j.slug), ...state }))
    .then(jobState => getEvents().then(events => ({ ...jobState, events }))
  )
);

export default getSiteState;
