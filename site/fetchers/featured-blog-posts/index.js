/* @flow */

import fetch from 'node-fetch';
import type { BlogPost } from '../../pages/home/blog-slice/blog-entry';
import handleErrors from '../handle-errors';

const getQueryString = params => {
  return Object.keys(params).map(
    k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
  ).join('&');
};

const getUrl = params => {
  return `https://blog.red-badger.com/blog/?&format=json&${getQueryString(params)}`;
};

export const sanitiseAuthorBio = (bio: string = ''): string => {
  const role = bio.match(/<.+>(.*)<.+>/);
  return (role && role[1]) || bio;
};

export const mapDataToState = (data: Object): Array<BlogPost> => (
  data.map((post: Object): BlogPost => ({
    slug: post.urlId,
    category: post.categories[0],
    title: post.title,
    author: {
      role: sanitiseAuthorBio(post.author.bio),
      name: post.author.displayName,
    },
  }))
);

const getPosts = params => (new Promise(res => (
  fetch(getUrl(params))
  .then(handleErrors)
  .then(response => response.json())
  .then(json => {
    const posts = json.items;

    if (json.pagination && json.pagination.nextPage) {
      const newParams = {
        ...params,
        offset: json.pagination.nextPageOffset,
      };

      return getPosts(newParams).then(newPosts => res(mapDataToState(posts.concat(newPosts))));
    }

    return res(mapDataToState(posts));
  })
)));

export const getFeaturedPosts = () => getPosts({ tag: 'featured' });
