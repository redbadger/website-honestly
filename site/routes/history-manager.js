import { HTML5HistoryManager } from 'navigation';

// By default navigation always preturns a url without a trailing slash
// Tis history manager extends the provided one and supplies a trailing slash.

// The reason we want this is because the site's structure has every route point to a
// subfolder with an index.html. Without the trailing slash we end up looking for a resource
// with the route's name rather than a folder with an index.

// This would be ok as S3 is clever enough to know what you meant and redirect to the corresponding
// folder but it is a temporary redirect which loses any query parameters on the URL.

// The other issue is that if we keep no trailing slashes for internal navigation and trailing slashes for external
// We end up with duplicate URLs in GTM as even though both versions point to the same place they are canonically different.

class TrailingSlashHistoryManager extends HTML5HistoryManager {
  getHref(url) {
    if (url.slice(url.length - 1) === '/') {
      return super.getHref(url);
    }
    return super.getHref(url) + '/';
  }
}

export default TrailingSlashHistoryManager;
