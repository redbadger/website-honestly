// @flow

import React from 'react';
import cx from 'classnames';

import styles from './styles.css';
import type { InstagramPost } from '../../../../types';
import Like from '../../../../components/icons/like';
import Comment from '../../../../components/icons/comment';
import InstagramLogo from '../../../../components/icons/instagram';

type InstagramProps = {
  post: InstagramPost,
  index: number,
};
const colours = [styles.blue, styles.mauve, styles.green];

const shorten = text => text.slice(0, text.indexOf(' ', 30)) + '…';

/** Renders the instagram tile on the social slice */
const Instagram = ({ post, index }: InstagramProps) => {
  const text = post.text.length > 70 ? post.text.substr(0, 70) + '...' : post.text;

  return (
    <a className={styles.link} href={post.link} rel="noopener noreferrer" target="_blank">
      <div className={cx(styles.instagram, colours[index % 3])}>
        <div className={styles.handle} tabIndex={0}>
          <InstagramLogo className={styles.instagramIcon} />
          <span className={styles.handleText}>@redbadgerteam</span>
        </div>
        <img className={styles.image} alt={shorten(post.text)} src={post.image.url} />
        <div className={styles.meta}>
          <div className={styles.text} tabIndex={0}>
            {text}
          </div>
          <div>
            <span className={styles.likes} tabIndex={0}>
              <Like className={styles.icon} />
              {post.likes}
            </span>
            <span className={styles.comments} tabIndex={0}>
              <Comment className={styles.icon} />
              {post.comments}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Instagram;
