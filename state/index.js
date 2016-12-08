import fetch from 'node-fetch';
import { getFeaturedPosts } from '../dev/content-fetcher/squarespace-blog';
import { getJobs } from '../site/fetchers/workable';

const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const toDict = (array, keyFn) => array.reduce((obj, item) => ({
  ...obj,
  [keyFn(item)]: item,
}), {});

const getSiteState = async () => {
  const jobs = await getJobs(fetch, process.env.WORKABLE_API_KEY);

  return {
    jobs,
    job: toDict(jobs, j => j.slug),
    featuredBlogPosts: await getFeaturedPosts(),
    ...state,
  };
};

export default getSiteState;
