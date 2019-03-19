// @flow

import React from 'react';
import cx from 'classnames';

import styles from './styles.css';
import type { Tweet } from '../../../../types/';
import TwitterLogo from '../../../../components/icons/twitter';
import Retweet from '../../../../components/icons/retweet';
import Like from '../../../../components/icons/like';

type TweetProps = {
  tweet: Tweet,
  index: number,
};
const colours = [styles.blue, styles.mauve, styles.green];
const Twitter = ({ tweet, index }: TweetProps) => (
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
      <div className={styles.tweet}>{tweet.text}</div>
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

export default Twitter;
