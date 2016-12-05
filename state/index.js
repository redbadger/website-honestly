import fetch from 'node-fetch';
import Promise from 'bluebird';
import BlogFetcher from '../dev/content-fetcher/squarespace_blog';

const state = {
  contactUsURL: process.env.CONTACT_US_SERVICE_URL,
};

const blogFetcher = new BlogFetcher(fetch);

const getSiteState = () => {
  return Promise.props({
        featured_blog_posts: blogFetcher.getFeaturedPosts()
      }).then((fetched) => ({ ...fetched, ...state }));
};

export default getSiteState;
