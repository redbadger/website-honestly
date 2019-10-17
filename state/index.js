import { getJobs } from '../site/fetchers/workable';
import { getTweets } from '../site/fetchers/twitter';
import { getPosts } from '../site/fetchers/instagram';
import { getBlogPosts } from '../site/fetchers/blog-posts';
import { getData } from '../site/fetchers/badger-brain';

const toLookupDict = (array, keyFn) => {
  return array.reduce(
    (obj, item, index) => ({
      ...obj,
      [keyFn(item)]: index,
    }),
    {},
  );
};

const collect = (sources, reducer) => Object.keys(sources).reduce(reducer, {});

const collectErrors = sources =>
  collect(sources, (acc, key) =>
    sources[key] instanceof Error ? { ...acc, [key]: sources[key].message } : acc,
  );

const collectSuccesses = sources =>
  collect(sources, (acc, key) => ({
    ...acc,
    [key]: sources[key] instanceof Error ? [] : sources[key],
  }));

const getSiteState = () =>
  Promise.all([
    getJobs(process.env.WORKABLE_API_KEY),
    getBlogPosts(['5834972778']), // tried-and-tested
    getBlogPosts(['5834972328']), // growing-trends
    getTweets(process.env.TWITTER_KEY, process.env.TWITTER_SECRET),
    getPosts(process.env.INSTAGRAM_ACCESS_TOKEN),
    getData(),
  ]).then(
    ([jobs, triedAndTestedBlogPosts, growingTrendsBlogPosts, tweets, instagramPosts, data]) => {
      const fetchErrors = collectErrors({ jobs, tweets, instagramPosts });
      const fetchSuccess = collectSuccesses({ jobs, tweets, instagramPosts });

      return {
        data: {
          ...fetchSuccess,
          triedAndTestedBlogPosts,
          growingTrendsBlogPosts,
          jobLookup: toLookupDict(fetchSuccess.jobs, j => j.slug),
          events: data.events,
          eventsBanner: data.eventsBanner[0],
          eventLookup: toLookupDict(data.events, e => e.slug),
          badgers: data.badgers,
          badgerLookup: toLookupDict(data.badgers, b => b.slug),
          categories: data.categories,
          qAndAs: data.qAndAs,
          goldCoinPages: data.goldCoinPages,
        },
        fetchErrors,
      };
    },
  );

export default getSiteState;
