export default class BlogFetcher {
  constructor(fetch) {
    this.fetch = fetch;
  }

  getFeaturedPosts() {
    return this.getPosts({ tag: 'featured' });
  }

  async getPosts(params = {}) {
    const url = this.getUrl(params);
    const response = await this.fetch(url);
    const json = await response.json();
    const posts = json.items;
    if (json.pagination && json.pagination.nextPage) {
      const newParams = {
        ...params,
        offset: json.pagination.nextPageOffset,
      };
      return posts.concat(await this.getPosts(newParams));
    }
    return posts;
  }

  static getUrl(params) {
    return 'https://blog.red-badger.com/blog/?&format=json&' + BlogFetcher.getQueryString(params);
  }

  static getQueryString(params) {
    return Object.keys(params).map(
      k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
    ).join('&');
  }
}
