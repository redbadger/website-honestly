// @flow

import React from 'react';
import cx from 'classnames';

import styles from './styles.css';
import type { Tweet } from '../../../../types';
import TwitterLogo from '../../../../components/icons/twitter';
import Retweet from '../../../../components/icons/retweet';
import Like from '../../../../components/icons/like';

type TweetProps = {
  tweet: Tweet,
  index: number,
};

const renderedImageData = (tweet: Tweet) => {
  if (!tweet.image) return null;

  const {
    smallSize: { width, height },
    url,
  } = tweet.image;
  const renderedWidth = 350;

  const ratio = renderedWidth / width;

  return {
    url,
    width: renderedWidth,
    height: Math.round(height * ratio),
  };
};

const maxTextLengthWithImage = 130;

const ensureEscapedText = text => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(`<!doctype html><body>${text}`, 'text/html').body
    .textContent;
  return decodedString;
};

const truncate = text =>
  text.length > maxTextLengthWithImage ? text.slice(0, maxTextLengthWithImage) + '...' : text;

const colours = [styles.blue, styles.mauve, styles.green];

const Twitter = ({ tweet, index }: TweetProps) => {
  const image = renderedImageData(tweet);

  const shrinkTextSize = image && image.height >= 200;

  const parsedText = ensureEscapedText(tweet.text);

  return (
    <a
      className={styles.link}
      href={tweet.url}
      rel="noopener noreferrer"
      target="_blank"
      tabIndex={-1}
    >
      <div className={cx(styles.twitter, colours[index % 3])} tabIndex={0}>
        <div className={styles.handle}>
          <TwitterLogo className={styles.twitterIcon} />
          <span className={styles.handleText}>@RedBadger</span>
        </div>
        {image ? <img width={image.width} height={image.height} src={image.url} alt="" /> : null}
        <div
          className={cx(
            styles.tweet,
            shrinkTextSize ? styles.tweetWithLargeImage : styles.tweetWithNoImage,
          )}
        >
          {tweet.image ? truncate(parsedText) : parsedText}
        </div>
        <div className={styles.meta}>
          <span>
            <Retweet className={cx(styles.icon, styles.retweets)} />
            {tweet.retweetCount}
          </span>
          <span>
            <Like className={styles.icon} />
            {tweet.favouriteCount}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Twitter;
