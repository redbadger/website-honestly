// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';

import styles from './styles.css';
import instagramIconSVG from '../icons/instagram/instagram.svg';
import likeIconSVG from '../icons/like/like.svg';
import commentIconSVG from '../icons/comment/comment.svg';

type InstaProps = {
  handle: string,
  image: string,
  alt: string,
  likeCount: number,
  commentCount: number,
}

/** Renders the instagram tile on the social slice */
const Instagram = ({ handle, image, alt, likeCount, commentCount }: InstaProps) => (
  <li className={styles.instagram}>
    <div className={styles.handle}>
      <InlineSVG src={instagramIconSVG} className={styles.instagramIcon} />
      {handle}
    </div>
    <img
      className={styles.image}
      alt={alt}
      src={image}
    />
    <div className={styles.meta}>
      <span className={styles.likes}>
        <InlineSVG src={likeIconSVG} className={styles.icon} />
        {likeCount}
      </span>
      <span className={styles.comments}>
        <InlineSVG src={commentIconSVG} className={styles.icon} />
        {commentCount}
      </span>
    </div>
  </li>
);

export default Instagram;
