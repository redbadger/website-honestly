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
const colours = [styles.blue, styles.purple, styles.green];
const Twitter = ({ tweet, index }: TweetProps) => (
  <a className={styles.link} href={tweet.url} rel="noopener noreferrer" target="_blank" >
    <div className={cx(styles.twitter, colours[index % 3])}>
      <div className={styles.handle}>
        <InlineSVG src={twitterIconSVG} className={styles.twitterIcon} />
        @RedBadger
    </div>
      <div className={styles.tweet}>
        {tweet.text}
      </div>
      <div className={styles.meta}>
        <span className={styles.retweets}>
          <InlineSVG src={retweetIconSVG} className={styles.icon} />
          {tweet.retweetCount}
        </span>
        <span className={styles.likes}>
          <InlineSVG src={likeIconSVG} className={styles.icon} />
          {tweet.favouriteCount}
        </span>
      </div>

    </div>
  </a>
);

export default Twitter;
