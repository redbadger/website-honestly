/* @flow */

import flatten from 'lodash.flatten';
import moment from 'moment';
import fetchRetry from '../util/fetch-retry';

type BlogPost = {
  url: string,
  title: string,
  author: string,
  excerpt: string,
  date: string,
};

const getQueryString = params => {
  return Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
};

const getUrl = params => {
  const { HUBSPOT_BLOG_ENDPOINT, HUBSPOT_API_KEY } = process.env;

  if (!HUBSPOT_BLOG_ENDPOINT || !HUBSPOT_API_KEY) {
    throw new Error(`Hubspot blog env variables are not defined`);
  }

  return `${HUBSPOT_BLOG_ENDPOINT}?hapikey=${HUBSPOT_API_KEY}&limit=5&${getQueryString(params)}`;
};

export const sanitiseExcerpt = (excerpt: string = ''): string =>
  excerpt.replace(/<(?:.|\n)*?>/gm, '');

export const mapDataToState = (data: Object): Array<BlogPost> =>
  data.map(
    (post: Object): BlogPost => ({
      url: post.absolute_url,
      title: post.page_title,
      excerpt: sanitiseExcerpt(post.post_summary) || 'Click to read more!',
      date: moment(post.publish_date),
      author: post.blog_author.display_name,
    }),
  );

const getPostsForTag = params =>
  fetchRetry(getUrl(params), { timeout: 10000, retryDelay: 200 })
    .then(response => response.json())
    .then(json => {
      const posts = json.objects;
      if (!posts) {
        return [];
      }
      return mapDataToState(posts);
    });

/* eslint-disable camelcase */
const getPosts = (tags: Array<string>) =>
  (Promise.all(tags.map(topicId => getPostsForTag({ topic_id: topicId }))).then(
    flatten,
  ): Promise<any>);
/* eslint-enable camelcase */

export const getBlogPosts = (tags: Array<string>) =>
  (getPosts(tags).then(posts => posts.sort((a, b) => b.date - a.date)): Promise<any>);
