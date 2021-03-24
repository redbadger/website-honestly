import { getTweets } from '../site/fetchers/twitter';
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
  Promise.all([getTweets(process.env.TWITTER_KEY, process.env.TWITTER_SECRET), getData()]).then(
    ([tweets, data]) => {
      const fetchErrors = collectErrors({ tweets });
      const fetchSuccess = collectSuccesses({ tweets });
      return {
        data: {
          ...fetchSuccess,
          triedAndTestedBlogPosts: data.triedAndTestedBlogPosts,
          growingTrendsBlogPosts: data.growingTrendsBlogPosts,
          jobLookup: toLookupDict(data.jobs, j => j.slug),
          jobs: data.jobs,
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
