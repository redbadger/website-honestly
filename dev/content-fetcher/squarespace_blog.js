import fetch from 'node-fetch';

const getPosts = async (params = {}) => {
  const url = getUrl(params);
  const response = await fetch(url);
  const json = await response.json();
  const posts = json.items;
  if (json.pagination && json.pagination.nextPage) {
    const newParams = {
      ...params,
      offset: json.pagination.nextPageOffset,
    };
    return posts.concat(await getPosts(newParams));
  }
  return posts;
}

const getUrl = params => {
  return `https://blog.red-badger.com/blog/?&format=json&${getQueryString(params)}`;
}

const getQueryString = params => {
  return Object.keys(params).map(
    k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
  ).join('&');
}

export const getFeaturedPosts = () => getPosts({ tag: 'featured' });
