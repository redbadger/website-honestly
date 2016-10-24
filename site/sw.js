/* disable eslint */

const CACHE_NAME = 'v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/',
      ]);
    })
  );
});

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
        if (url.endsWith('.css') || url.endsWith('.png')) {
          const responseToCache = res.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
        }

        console.log(res);

        return res;
      }).catch(() => {
        return caches.match(event.request)
          .then(response => {
            // Cache hit - return response
            if (response) {
              return response;
            }
          });
      })
  );
});
