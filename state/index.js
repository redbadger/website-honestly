import fetch from 'node-fetch';
import Promise from 'bluebird';
import { getFeaturedPosts } from '../site/fetchers/featured-blog-posts';
import { getJobs } from '../site/fetchers/workable';
import { getData } from '../site/fetchers/badger-brain';

const initialState = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const toDict = (array, keyFn) => array.reduce((obj, item) => ({
  ...obj,
  [keyFn(item)]: item,
}), {});

const getCategories = badgers => (
  Object.keys(badgers
    .reduce((uniqueTags, badger) => (
      badger.tags
        .reduce((tags, tag) => ({ ...tags, [tag]: 1 }), uniqueTags)
    ), {}))
);

const getSiteState = () => (
  Promise.props({
    jobs: getJobs(fetch, process.env.WORKABLE_API_KEY),
    featuredBlogPosts: getFeaturedPosts(),
    data: getData(),
    ...initialState,
  }).then(({ data, ...state }) => ({
    ...state,
    job: toDict(state.jobs, j => j.slug),
    events: data.events,
    event: toDict(data.events, j => j.slug),
    badgers: data.badgers,
    categories: getCategories(data.badgers),
  }))
);

export default getSiteState;
