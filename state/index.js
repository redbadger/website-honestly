import fetch from 'node-fetch';
import Promise from 'bluebird';
import { getBlogPosts } from '../site/fetchers/blog-posts';
import { getJobs } from '../site/fetchers/workable';
import { getTweets } from '../site/fetchers/twitter';
import { getPosts } from '../site/fetchers/instagram';
import { getData } from '../site/fetchers/badger-brain';

const initialState = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const toLookupDict = (array, keyFn) =>
  array.reduce(
    (obj, item, index) => ({
      ...obj,
      [keyFn(item)]: index,
    }),
    {},
  );

const getSiteState = () =>
  Promise.props({
    jobs: getJobs(fetch, process.env.WORKABLE_API_KEY),
    featuredBlogPosts: getBlogPosts(['featured']),
    triedAndTestedBlogPosts: getBlogPosts(['tried-and-tested', 'tried and tested'], 5),
    growingTrendsBlogPosts: getBlogPosts(['growing-trends', 'growing trends'], 5),
    tweets: getTweets(fetch, process.env.TWITTER_KEY, process.env.TWITTER_SECRET),
    instagramPosts: getPosts(fetch),
    data: getData(),
    ...initialState,
  }).then(({ data: { events, badgers, categories, qAndAs }, ...state }) => ({
    ...state,
    jobLookup: toLookupDict(state.jobs, j => j.slug),
    events,
    eventLookup: toLookupDict(events, e => e.slug),
    badgers,
    badgerLookup: toLookupDict(badgers, b => b.slug),
    categories,
    qAndAs,
  }));

export default getSiteState;
