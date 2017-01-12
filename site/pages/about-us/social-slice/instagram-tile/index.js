// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';
import cx from 'classnames';

import styles from './styles.css';
import instagramIconSVG from '../icons/instagram/instagram.svg';
import likeIconSVG from '../icons/like/like.svg';
import commentIconSVG from '../icons/comment/comment.svg';
import type { InstagramPost } from '../../../../types/';

type InstagramProps = {
  post: InstagramPost;
  index: number;
}
const colours = [styles.blue, styles.mauve, styles.green];

/** Renders the instagram tile on the social slice */
const Instagram = ({ post, index }: InstagramProps) => {
  const text = post.text.length > 70 ? post.text.substr(0, 70) + '...' : post.text;

  return (
    <a className={styles.link} href={post.link} rel="noopener noreferrer" target="_blank">
      <div className={cx(styles.instagram, colours[index % 3])}>

        <div className={styles.handle} tabIndex={0}>
          <InlineSVG src={instagramIconSVG} className={styles.instagramIcon} />
          <span className={styles.handleText}>@redbadgerteam</span>
        </div>
        <img
          className={styles.image}
          alt={post.text}
          src={post.image.url}
          />
        <div className={styles.meta}>
          <div className={styles.text} tabIndex={0}>{text}</div>
          <div>
            <span className={styles.likes} tabIndex={0}>
              <InlineSVG src={likeIconSVG} className={styles.icon} />
              {post.likes}
            </span>
            <span className={styles.comments} tabIndex={0}>
              <InlineSVG src={commentIconSVG} className={styles.icon} />
              {post.comments}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Instagram;
