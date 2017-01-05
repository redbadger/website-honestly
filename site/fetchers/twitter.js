// @flow
import handleErrors from './handle-errors';
import type { Tweet } from '../types/';

type TwitterResponse = {
  text: string;
  created_at: string;
  retweet_count: number,
  favorite_count: number,
  entities: {
    urls: [{
      url: string;
    }]
  },
  retweeted_status?: {
    entities: {
      urls: [{
        url: string;
      }]
    },
  }
};

const baseUrl = 'https://api.twitter.com';
const base64 = str => Buffer.from(str).toString('base64');

const getBearerToken = (fetch, key, secret) =>
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
    .then(response => response.access_token);


/** The URL of the Tweet is usually the property tweet.entities.url[0].url
 * However if it's a re-tweet then the entities.url is an empty array and the URL is contained in
 */
const getTweetUrl = (tweet: TwitterResponse) => {
  if (tweet.entities.urls && tweet.entities.urls.length > 0) {
    return tweet.entities.urls[0].url;
  }

  if (tweet.retweeted_status && tweet.retweeted_status.entities.urls.length > 0) {
    return tweet.retweeted_status.entities.urls[0].url;
  }

  return '';
};

export const getTweets = (fetch: any, key: string, secret: string, username: string = 'redbadgerteam'): Promise<Array<Tweet>> => {
  const count = 5;
  const apiQuery = `${baseUrl}/1.1/statuses/user_timeline.json?count=${count}&screen_name=${username}&trim_user=true`;
  return getBearerToken(fetch, key, secret)
    .then(token => (
      fetch(apiQuery, {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
    ))
    .then(handleErrors)
    .then(response => response.json())
    .then((data: Array<TwitterResponse>) => {
      const normalised = data.map(tweet => {
        return {
          text: tweet.text,
          url: getTweetUrl(tweet),
          created: tweet.created_at,
          retweetCount: tweet.retweet_count,
          favouriteCount: tweet.favorite_count,
        };
      });

      // Sort by most recent
      const ordered = normalised.sort(o => new Date(o.created));
      return ordered;
    });
};
