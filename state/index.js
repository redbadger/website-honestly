import { getFeaturedPosts } from '../dev/content-fetcher/squarespace_blog';

const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const getSiteState = async () => ({
  featured_blog_posts: await getFeaturedPosts(),
  ...state
});

export default getSiteState;
