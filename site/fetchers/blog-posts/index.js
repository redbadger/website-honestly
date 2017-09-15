/* @flow */

import fetch from 'node-fetch';
import take from 'lodash.take';
import moment from 'moment';
import type { BlogPost } from '../../pages/home/blog-slice/blog-entry';
import handleErrors from '../handle-errors';

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

const getPosts = params =>
  fetch(getUrl(params), { timeout: 10000 })
    .then(handleErrors)
    .then(response => response.json())
    .then(json => {
      const posts = json.items;

      if (json.pagination && json.pagination.nextPage) {
        const newParams = {
          ...params,
          offset: json.pagination.nextPageOffset,
        };

        return getPosts(newParams).then(newPosts => mapDataToState(posts.concat(newPosts)));
      }

      return mapDataToState(posts);
    });

export const getBlogPosts = (tag: string, cap: number = 3) =>
  getPosts({ tag }).then(posts => take(posts, cap));
