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
  Promise.props({
    jobs: getJobs(fetch, process.env.WORKABLE_API_KEY),
    featuredBlogPosts: getFeaturedPosts(),
    events: getEvents(),
    ...initialState,
  }).then(state => ({
    ...state,
    job: toDict(state.jobs, j => j.slug),
    event: toDict(state.events, j => j.slug),
  }))
);

export default getSiteState;
