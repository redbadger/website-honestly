import { getFeaturedPosts } from '../dev/content-fetcher/squarespace-blog';

const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const getSiteState = async () => ({
  featuredBlogPosts: await getFeaturedPosts(),
  ...state,
});

export default getSiteState;
