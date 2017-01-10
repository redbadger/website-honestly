// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';
import cx from 'classnames';

import styles from './styles.css';
import instagramIconSVG from '../icons/instagram/instagram.svg';
import likeIconSVG from '../icons/like/like.svg';
import type { InstagramPost } from '../../../../types/';

type InstagramProps = {
  post: InstagramPost;
  index: number;
}
const colours = [styles.blue, styles.purple, styles.green];

/** Renders the instagram tile on the social slice */
const Instagram = ({ post, index }: InstagramProps) => (
  <button className={styles.link} onClick={() => window.open(post.url)}>
    <div className={cx(styles.instagram, colours[index % 3])}>

      <div className={styles.handle}>
        <InlineSVG src={instagramIconSVG} className={styles.instagramIcon} />
        @redbadgerteam
      </div>
      <img
        className={styles.image}
        alt={post.text}
        src={post.image.url}
      />
      <div className={styles.meta}>
        <span className={styles.likes}>
          <InlineSVG src={likeIconSVG} className={styles.icon} />
          {post.likes}
        </span>
      </div>
    </div>
  </button>
);

export default Instagram;
