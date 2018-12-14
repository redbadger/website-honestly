import fetch from 'node-fetch';
import { getJobs } from '../site/fetchers/workable';
import { getTweets } from '../site/fetchers/twitter';
import { getPosts } from '../site/fetchers/instagram';
import { getBlogPosts } from '../site/fetchers/blog-posts';
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
    getBlogPosts(['5834972778']), // tried-and-tested
    getBlogPosts(['5834972328']), // growing-trends
    getTweets(fetch, process.env.TWITTER_KEY, process.env.TWITTER_SECRET),
    getPosts(fetch, process.env.INSTAGRAM_ACCESS_TOKEN),
    getData(),
  ]).then(
    ([jobs, triedAndTestedBlogPosts, growingTrendsBlogPosts, tweets, instagramPosts, data]) => ({
      jobs,
      triedAndTestedBlogPosts,
      growingTrendsBlogPosts,
      tweets,
      instagramPosts,
      jobLookup: toLookupDict(jobs, j => j.slug),
      events: data.events,
      eventsBanner: data.eventsBanner[0],
      eventLookup: toLookupDict(data.events, e => e.slug),
      badgers: data.badgers,
      badgerLookup: toLookupDict(data.badgers, b => b.slug),
      categories: data.categories,
      qAndAs: data.qAndAs,
    }),
  );

export default getSiteState;
