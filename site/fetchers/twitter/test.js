import nock from 'nock';

/* eslint-disable camelcase */
import { isValidTweet, getTweets } from './index';

const generateTweet = () => {
  return {
    full_text: 'test tweet',
    created_at: '01/01/2016',
    retweet_count: 0,
    favorite_count: 0,
    entities: {
      urls: [
        {
          url: 'asd',
        },
      ],
    },
    retweeted_status: {
      entities: {
        urls: [
          {
            url: 'asd',
          },
        ],
      },
    },
  };
};

describe('site/fetchers/twitter', () => {
  describe('twitter fetcher tweet validation', () => {
    it('passes with valid tweet', () => {
      const result = isValidTweet(generateTweet());
      expect(result).toEqual(true);
    });

    it('fails with null value', () => {
      const result = isValidTweet(null);
      expect(result).toEqual(false);
    });

    it('fails with empty tweet', () => {
      const tweet = {};
      const result = isValidTweet(tweet);
      expect(result).toEqual(false);
    });

    it('fails with no text', () => {
      const tweet = generateTweet();
      tweet.full_text = '';
      const result = isValidTweet(tweet);
      expect(result).toEqual(false);
    });

    it('fails with no entities property', () => {
      const tweet = generateTweet();
      tweet.entities = null;
      const result = isValidTweet(tweet);
      expect(result).toEqual(false);
    });

    it('fails with no urls property', () => {
      const tweet = generateTweet();
      tweet.entities.urls = null;
      const result = isValidTweet(tweet);
      expect(result).toEqual(false);
    });

    it('fails with no url and no retweet', () => {
      const tweet = generateTweet();
      tweet.entities.urls[0] = null;
      tweet.retweeted_status = null;
      const result = isValidTweet(tweet);
      expect(result).toEqual(false);
    });

    it('fails with invalid retweet count value', () => {
      const tweet = generateTweet();
      tweet.retweet_count = undefined;
      const result = isValidTweet(tweet);
      expect(result).toEqual(false);
    });

    it('fails with invalid favourite count value', () => {
      const tweet = generateTweet();
      tweet.favorite_count = undefined;
      const result = isValidTweet(tweet);
      expect(result).toEqual(false);
    });
  });

  describe('fetching tweets', () => {
    it('returns error if request has incorrect access credentials', async () => {
      nock('https://api.twitter.com')
        .post(/.*oauth*/)
        .reply(403, {});

      const error = await getTweets('bad key', 'bad secret');
      expect(error.message).toContain('Forbidden');
    });

    it('throws if key is missing', () => {
      expect(() => getTweets(null, 'bad secret')).toThrow();
    });

    it('throws if secret is missing', () => {
      expect(() => getTweets('bad key', null)).toThrow();
    });
  });
});
