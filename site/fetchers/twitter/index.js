// @flow
import fetch from 'node-fetch';

import handleErrors from '../util/handle-errors';
import type { Tweet } from '../../types/';

type TwitterResponse = {
  id_str: string,
  text: string,
  created_at: string,
  retweet_count: number,
  favorite_count: number,
  entities: {
    urls: [
      {
        url: string,
      },
    ],
  },
  retweeted_status?: {
    entities: {
      urls: [
        {
          url: string,
        },
      ],
    },
  },
};

type TwitterResponseError = {
  errors: [
    {
      code: number,
      message: string,
    },
  ],
};

export const isValidTweet = (tweet: TwitterResponse) => {
  try {
    if (!tweet) {
      throw new Error('Missing tweet');
    }

    if (!tweet.text) {
      throw new Error('Missing text');
    }

    if (!tweet.created_at) {
      throw new Error('Missing date');
    }

    if (tweet.retweet_count === undefined || null) {
      throw new Error('Missing re-tweet count value');
    }

    if (tweet.favorite_count === undefined || null) {
      throw new Error('Missing favourite count value');
    }

    if (!tweet.entities) {
      throw new Error('Missing entities property');
    }

    if (!tweet.entities.urls) {
      throw new Error('Missing urls property');
    }

    if (!tweet.entities.urls[0] && !tweet.retweeted_status) {
      throw new Error('Missing URL and not re-tweeted');
    }
  } catch (e) {
    return false;
  }

  return true;
};

const baseUrl = 'https://api.twitter.com';
const base64 = str => Buffer.from(str).toString('base64');

const getBearerToken = (key, secret) =>
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

/** Flattern the response */
const normaliseTweet = (tweet: TwitterResponse) => {
  return {
    text: tweet.text,
    url: `https://twitter.com/i/web/status/${tweet.id_str}`,
    created: tweet.created_at,
    retweetCount: tweet.retweet_count,
    favouriteCount: tweet.favorite_count,
  };
};

export const getTweets = (
  key: string,
  secret: string,
  username: string = 'redbadgerteam',
): Promise<Array<Tweet>> => {
  if (!key) throw new Error('Missing Twitter key');
  if (!secret) throw new Error('Missing Twitter secret');

  const count = 5;
  const apiQuery = `${baseUrl}/1.1/statuses/user_timeline.json?count=${count}&screen_name=${username}&trim_user=true`;

  return getBearerToken(key, secret)
    .then(token =>
      fetch(apiQuery, {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      }),
    )
    .then(response => response.json())
    .then((data: Array<TwitterResponse> | TwitterResponseError) => {
      if (data && !data.errors) {
        return data.filter(isValidTweet).map(normaliseTweet);
      }
      const emptyResponse: TwitterResponse[] = [];
      return emptyResponse;
    });
};
