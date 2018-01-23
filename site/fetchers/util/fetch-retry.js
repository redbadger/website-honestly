import fetch from 'node-fetch';

// Code inspired from https://github.com/jonbern/fetch-retry/blob/master/index.js but using node-fetch
// instead of isomorphic-fetch
// Another difference is that it retries if the response is not ok
export default function fetchRetry(url, options) {
  let retries = 3;
  let retryDelay = 1000;
  if (options && options.retries) {
    retries = options.retries;
  }
  if (options && options.retryDelay) {
    retryDelay = options.retryDelay;
  }
  return new Promise((resolve, reject) => {
    const wrappedFetch = n => {
      const retryOrRejectCall = error => {
        if (n > 0) {
          setTimeout(() => {
            wrappedFetch(n - 1);
          }, retryDelay);
        } else {
          reject(error);
        }
      };
      fetch(url, options)
        .then(response => {
          if (response.ok) {
            resolve(response);
          } else {
            retryOrRejectCall(new Error(`${response.statusText} for request: ${response.url}`));
          }
        })
        .catch(retryOrRejectCall);
    };
    wrappedFetch(retries);
  });
}
