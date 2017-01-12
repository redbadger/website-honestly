// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';
import cx from 'classnames';

import styles from './styles.css';
import likeIconSVG from '../icons/like/like.svg';
import twitterIconSVG from '../icons/twitter/twitter.svg';
import retweetIconSVG from '../icons/retweet/retweet.svg';
import type { Tweet } from '../../../../types/';

type TweetProps = {
  tweet: Tweet;
  index: number;
}
const colours = [styles.blue, styles.mauve, styles.green];
const Twitter = ({ tweet, index }: TweetProps) => (
  <a className={styles.link} href={tweet.url} rel="noopener noreferrer" target="_blank" tabIndex={0} >
    <div className={cx(styles.twitter, colours[index % 3])}>
      <div className={styles.handle}>
        <InlineSVG src={twitterIconSVG} className={styles.twitterIcon} />
        <span className={styles.handleText}>@RedBadger</span>
      </div>
      <div className={styles.tweet}>
        {tweet.text}
      </div>
      <div className={styles.meta}>
        <span>
          <InlineSVG src={retweetIconSVG} className={cx(styles.icon, styles.retweets)} />
          {tweet.retweetCount}
        </span>
        <span>
          <InlineSVG src={likeIconSVG} className={styles.icon} />
          {tweet.favouriteCount}
        </span>
      </div>

    </div>
  </a>
);

export default Twitter;
