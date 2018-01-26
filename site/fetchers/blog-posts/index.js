/* @flow */

import take from 'lodash.take';
import flatten from 'lodash.flatten';
import moment from 'moment';
import fetchRetry from '../util/fetch-retry';

type Author = {
  role: string,
  name: string,
};

type BlogPost = {
  slug: string,
  category: string,
  title: string,
  author: Author,
};

const getQueryString = params => {
  return Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
};

const getUrl = params => {
  return `https://blog.red-badger.com/blog/?&format=json&${getQueryString(params)}`;
};

export const sanitiseAuthorBio = (bio: string = ''): string => {
  const role = bio.match(/<.+>(.*)<.+>/);
  return (role && role[1]) || bio;
};

export const sanitiseExcerpt = (excerpt: string = ''): string => {
  const text = excerpt.match(/<.+>(.*)<.+>/);
  return (text && text[1]) || excerpt;
};

export const mapDataToState = (data: Object): Array<BlogPost> =>
  data.map((post: Object): BlogPost => ({
    slug: post.urlId,
    category: post.categories[0],
    title: post.title,
    excerpt: sanitiseExcerpt(post.excerpt) || 'Click to read more!',
    date: moment(post.publishOn),
    author: {
      role: sanitiseAuthorBio(post.author.bio) || 'Badger blogger',
      name: post.author.displayName,
    },
  }));

const getPostsForTag = params =>
  fetchRetry(getUrl(params), { timeout: 10000, retryDelay: 200 })
    .then(response => response.json())
    .then(json => {
      const posts = json.items;
      if (!posts) {
        return [];
      }
      if (json.pagination && json.pagination.nextPage) {
        const newParams = {
          ...params,
          offset: json.pagination.nextPageOffset,
        };

        return getPostsForTag(newParams).then(newPosts => mapDataToState(posts.concat(newPosts)));
      }
      return mapDataToState(posts);
    });

const getPosts = tags => Promise.all(tags.map(tag => getPostsForTag({ tag }))).then(flatten);

export const getBlogPosts = (tags: Array<string>, cap: number = 3) =>
  getPosts(tags)
    .then(posts => posts.sort((a, b) => b.date - a.date))
    .then(posts => take(posts, cap));
