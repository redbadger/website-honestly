import fetch from 'node-fetch';
import { getBlogPosts } from '../site/fetchers/blog-posts';
import { getJobs } from '../site/fetchers/workable';
import { getTweets } from '../site/fetchers/twitter';
import { getPosts } from '../site/fetchers/instagram';
import { getData } from '../site/fetchers/badger-brain';

const toLookupDict = (array, keyFn) =>
  array.reduce(
    (obj, item, index) => ({
      ...obj,
      [keyFn(item)]: index,
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
      jobs,
      featuredBlogPosts,
      triedAndTestedBlogPosts,
      growingTrendsBlogPosts,
      tweets,
      instagramPosts,
      jobLookup: toLookupDict(jobs, j => j.slug),
      events: data.events,
      eventLookup: toLookupDict(data.events, e => e.slug),
      badgers: data.badgers,
      badgerLookup: toLookupDict(data.badgers, b => b.slug),
      categories: data.categories,
      qAndAs: data.qAndAs,
    }),
  );

export default getSiteState;
