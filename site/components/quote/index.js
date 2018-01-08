// @flow
import React from 'react';
import classnames from 'classnames/bind';
import Avatar from '../avatar';

import styles from './style.css';

const cx = classnames.bind(styles);

type Author = {
  name: string,
  title: string,
  image?: string,
};

type QuoteProps = {
  author: Author,
  text: string,
  className?: string,
};

const Quote = ({ author, text, className }: QuoteProps) => {
  return (
    <div className={cx(styles.quotation, className)}>
      <div className={styles.quotation__text}>
        <blockquote className={styles.quotation__quote}>{text}</blockquote>
      </div>

      <div className={styles.quotation__author}>
        {author.image && <Avatar image={author.image} name={author.name} size={70} />}
        <div className={styles.quotation__author__wrapper}>
          <div className={styles.quotation__author__name}>— {author.name}</div>
          <div className={styles.quotation__author__title}>{author.title}</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
