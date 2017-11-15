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
      <blockquote>
        <p className={styles.quotation__text}>{text}</p>
      </blockquote>

      <div className={styles.quotation__author}>
        {author.image && <Avatar image={author.image} name={author.name} size={70} />}
        <div className={styles.quotation__author__wrapper}>
          <span className={styles.quotation__author__name}>— {author.name}</span>
          <span className={styles.quotation__author__title}>{author.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
