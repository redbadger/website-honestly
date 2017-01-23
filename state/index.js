import fetch from 'node-fetch';
import Promise from 'bluebird';
import { getFeaturedPosts } from '../site/fetchers/featured-blog-posts';
import { getJobs } from '../site/fetchers/workable';
import { getTweets } from '../site/fetchers/twitter';
import { getPosts } from '../site/fetchers/instagram';
import { getData } from '../site/fetchers/badger-brain';


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
    tweets: getTweets(fetch, process.env.TWITTER_KEY, process.env.TWITTER_SECRET),
    instagramPosts: getPosts(fetch),
    data: getData(),
    ...initialState,
  }).then(({ data: { events, badgers, categories }, ...state }) => ({
    ...state,
    job: toDict(state.jobs, j => j.slug),
    events,
    event: toDict(events, e => e.slug),
    badgers,
    badger: toDict(badgers, b => b.slug),
    categories,
  }))
);

export default getSiteState;
