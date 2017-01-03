// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';
import cx from 'classnames';

import styles from './styles.css';
import likeIconSVG from '../icons/like/like.svg';
import twitterIconSVG from '../icons/twitter/twitter.svg';
import retweetIconSVG from '../icons/retweet/retweet.svg';

type TwitterProps = {
  handle: string,
  tweet: string,
  index: number,
  retweetCount: number,
  likeCount: number,
}

const colours = [styles.blue, styles.purple, styles.green];
const Twitter = ({ handle, tweet, retweetCount, likeCount, index }: TwitterProps) => (
  <li className={cx(styles.twitter, colours[index ? index % 3 : 1 % 3])}>
    <div className={styles.handle}>
      <InlineSVG src={twitterIconSVG} className={styles.twitterIcon} />
      {handle}
    </div>
    <div className={styles.tweet}>
      {tweet}
    </div>
    <div className={styles.meta}>
      <span className={styles.retweets}>
        <InlineSVG src={retweetIconSVG} className={styles.icon} />
        {retweetCount}
      </span>
      <span className={styles.likes}>
        <InlineSVG src={likeIconSVG} className={styles.icon} />
        {likeCount}
      </span>
    </div>
  </li>
);

export default Twitter;
