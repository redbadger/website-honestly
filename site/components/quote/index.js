import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const QuoteProps = {
  author: Object,
  text: String,
};

const Quote = ({ author, text } : QuoteProps) => {
  return (
    <div className={styles.quotation}>
      <blockquote>
        <p className={styles.quotation__text}>
          {text}
        </p>
      </blockquote>

      <div className={styles.quotation__author}>
        <img src={author.image} alt={author.name} />
        <div className={styles.quotation__author__wrapper}>
          <span className={styles.quotation__author__name}>— {author.name}</span>
          <span  className={styles.quotation__author__title}>{author.title}</span>
        </div>
      </div>
    </div>
  )
};

export default Quote;
