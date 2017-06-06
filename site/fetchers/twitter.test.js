/* eslint-disable camelcase */
import { isValidTweet } from './twitter';

const generateTweet = () => {
  return {
    text: 'test tweet',
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

describe('twitter fetcher tweet validation', () => {
  it('passes with valid tweet', () => {
    const result = isValidTweet(generateTweet());
    expect(result).to.equal(true);
  });

  it('fails with null value', () => {
    const result = isValidTweet(null);
    expect(result).to.equal(false);
  });

  it('fails with empty tweet', () => {
    const tweet = {};
    const result = isValidTweet(tweet);
    expect(result).to.equal(false);
  });

  it('fails with no text', () => {
    const tweet = generateTweet();
    tweet.text = '';
    const result = isValidTweet(tweet);
    expect(result).to.equal(false);
  });

  it('fails with no entities property', () => {
    const tweet = generateTweet();
    tweet.entities = null;
    const result = isValidTweet(tweet);
    expect(result).to.equal(false);
  });

  it('fails with no urls property', () => {
    const tweet = generateTweet();
    tweet.entities.urls = null;
    const result = isValidTweet(tweet);
    expect(result).to.equal(false);
  });

  it('fails with no url and no retweet', () => {
    const tweet = generateTweet();
    tweet.entities.urls[0] = null;
    tweet.retweeted_status = null;
    const result = isValidTweet(tweet);
    expect(result).to.equal(false);
  });

  it('fails with invalid retweet count value', () => {
    const tweet = generateTweet();
    tweet.retweet_count = undefined;
    const result = isValidTweet(tweet);
    expect(result).to.equal(false);
  });

  it('fails with invalid favourite count value', () => {
    const tweet = generateTweet();
    tweet.favorite_count = undefined;
    const result = isValidTweet(tweet);
    expect(result).to.equal(false);
  });
});
