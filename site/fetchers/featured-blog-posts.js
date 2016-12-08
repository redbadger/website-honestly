import fetch from 'node-fetch';

const getQueryString = params => {
  return Object.keys(params).map(
    k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
  ).join('&');
};

const getUrl = params => {
  return `https://blog.red-badger.com/blog/?&format=json&${getQueryString(params)}`;
};

const getPosts = params => (new Promise(res => (
  fetch(getUrl(params))
    .then(response => response.json())
    .then(json => {
      const posts = json.items;

      if (json.pagination && json.pagination.nextPage) {
        const newParams = {
          ...params,
          offset: json.pagination.nextPageOffset,
        };

        return getPosts(newParams).then(newPosts => res(posts.concat(newPosts)));
      }

      return res(posts);
    })
)));

export const getFeaturedPosts = () => getPosts({ tag: 'featured' });
