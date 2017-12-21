import fetch from 'node-fetch';
import { getBlogPosts } from '../site/fetchers/blog-posts';
import { getJobs } from '../site/fetchers/workable';
import { getTweets } from '../site/fetchers/twitter';
import { getPosts } from '../site/fetchers/instagram';
import { getData } from '../site/fetchers/badger-brain';

const initialState = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const toDict = (array, keyFn) =>
  array.reduce(
    (obj, item) => ({
      ...obj,
      [keyFn(item)]: item,
    }),
    {},
  );

const getSiteState = () =>
  Promise.all([
    getJobs(fetch, process.env.WORKABLE_API_KEY),
    getBlogPosts(['featured']),
    getBlogPosts(['tried-and-tested', 'tried and tested'], 5),
    getBlogPosts(['growing-trends', 'growing trends'], 5),
    getTweets(fetch, process.env.TWITTER_KEY, process.env.TWITTER_SECRET),
    getPosts(fetch),
    getData(),
  ]).then(
    (
      [
        jobs,
        featuredBlogPosts,
        triedAndTestedBlogPosts,
        growingTrendsBlogPosts,
        tweets,
        instagramPosts,
        data,
      ],
    ) => ({
      ...initialState,
      jobs,
      featuredBlogPosts,
      triedAndTestedBlogPosts,
      growingTrendsBlogPosts,
      tweets,
      instagramPosts,
      job: toDict(jobs, j => j.slug),
      events: data.events,
      event: toDict(data.events, e => e.slug),
      badgers: data.badgers,
      badger: toDict(data.badgers, b => b.slug),
      categories: data.categories,
      qAndAs: data.qAndAs,
    }),
  );

export default getSiteState;
