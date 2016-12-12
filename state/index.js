import fetch from 'node-fetch';
import Promise from 'bluebird';
import { getFeaturedPosts } from '../site/fetchers/featured-blog-posts';
import { getJobs } from '../site/fetchers/workable';
import { getEvents } from '../site/fetchers/badger-brain';

const initialState = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const toDict = (array, keyFn) => array.reduce((obj, item) => ({
  ...obj,
  [keyFn(item)]: item,
}), {});

const getSiteState = () => (
  getJobs(fetch, process.env.WORKABLE_API_KEY)
    .then(jobs => Promise.props({
      jobs,
      job: toDict(jobs, j => j.slug),
      featuredBlogPosts: getFeaturedPosts(),
      ...initialState,
    }))
    .then(jobState => getEvents().then(events => ({ ...jobState, events }))
  )
);

export default getSiteState;
