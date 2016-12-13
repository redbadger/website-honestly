/* disable eslint */

const CACHE_NAME = 'v1';
const OFFLINE_URL = 'offline';

self.addEventListener('fetch', event => {
  const { url } = event.request;
  event.respondWith(
    fetch(event.request)
      .then(res => {
        // Check if we received a valid response
        if (!res || res.status !== 200 || res.type !== 'basic') {
          return res;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        if (/\.(css|js|png)$/i.test(url)) {
          const responseToCache = res.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
        }

        return res;
      }).catch(() => {
        // This ONLY happens when fetch() throws an exception, so it will NOT
        // BE TRIGGERED by 4xx/5xx errors, only by things like disconnects.
        return caches.match(event.request)
          .then(response => {
            // Cache hit - return response
            if (response) {
              return response;
            }

            // No cache available, return offline page
            return caches.match(OFFLINE_URL);
          });
      })
  );
});
