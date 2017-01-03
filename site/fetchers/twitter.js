import handleErrors from './handle-errors';

const baseUrl = 'https://api.twitter.com';
const base64 = str => Buffer.from(str).toString('base64');

const getBearerToken = (fetch, key, secret) => (
  fetch(baseUrl + '/oauth2/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${base64(`${key}:${secret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    timeout: 10000,
    body: 'grant_type=client_credentials',
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => response.access_token)
);

export const getTweets = (fetch, key, secret, username = 'redbadgerteam') => (
  getBearerToken(fetch, key, secret)
  .then(token => (
    fetch(baseUrl + '/1.1/statuses/user_timeline.json?screen_name=' + username, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    })
  ))
  .then(handleErrors)
  .then(response => response.json())
);
