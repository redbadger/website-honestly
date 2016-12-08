import fetch from 'node-fetch';
import { getFeaturedPosts } from '../site/fetchers/featured-blog-posts';
import { getJobs } from '../site/fetchers/workable';

const initialState = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const toDict = (array, keyFn) => array.reduce((obj, item) => ({
  ...obj,
  [keyFn(item)]: item,
}), {});

const getSiteState = () => (new Promise(res => {
  const state = {
    ...initialState,
  };

  Promise.all([
    getJobs(fetch, process.env.WORKABLE_API_KEY).then(jobs => {
      state.jobs = jobs;
      state.job = toDict(jobs, j => j.slug);
    }),
    getFeaturedPosts().then(posts => {
      state.featuredBlogPosts = posts;
    }),
  ]).then(() => res(state));
}));

export default getSiteState;
