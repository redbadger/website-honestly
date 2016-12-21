import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles.css';

const IntroCard = ({ name }) => (
  <li className={styles.intro}>
    <span>
      From our social feed
    </span>
  </li>
);

const colours = [styles.blue, styles.purple, styles.green];
const Twitter = ({ handle, tweet, retweetCount, likeCount, index = 1 }) => (
  <li className={cx(styles.twitter, colours[index % 3])}>
    <div className={styles.handle}>{handle}</div>
    <div className={styles.tweet}>
      {tweet}
    </div>
    <div className={styles.meta}>
      <span className={styles.retweets}>{retweetCount}</span>
      <span className={styles.likes}>{likeCount}</span>
    </div>
  </li>
);

const Instagram = ({handle, image, alt, likeCount, commentCount}) => (
  <li className={styles.instagram}>
    <div className={styles.handle}>{handle}</div>
    <img
      className={styles.image}
      alt={alt}
      src={image}
    />
    <div className={styles.meta}>
      <span className={styles.likes}>{likeCount}</span>
      <span className={styles.comments}>{commentCount}</span>
    </div>
  </li>
);

const SocialSlice = () => (
  <section className={styles.socialSlice}>
    <ul className={styles.cards}>
      <IntroCard />
      <Instagram
        handle="@redbadgerteam"
        image="https://cdn.zeplin.io/57c8297fc3cf63795b6a4520/assets/90B70B12-B358-48D5-BA5E-DCA61BEE2A03.png"
        alt="pic from the gram"
        likeCount={88}
        commentCount={88}
      />
      <Twitter
        handle="@redbadgerteam"
        tweet="What on earth is #git?! @nicollecastrog explains all in plain english here – http://bit.ly/2gWDcyk #versioncontrol #techexplained #github"
        retweetCount={88}
        likeCount={88}
        index={0}
      />
      <Twitter
        handle="@redbadgerteam"
        tweet="What on earth is #git?! @nicollecastrog explains all in plain english here – http://bit.ly/2gWDcyk #versioncontrol #techexplained #github"
        retweetCount={88}
        likeCount={88}
        index={1}
      />
    </ul>
  </section>
);

export default SocialSlice;
