import React from 'react';

import styles from './style.css';

const QuoteProps = {
  author: Object,
  text: String,
};

const Quote = ({ author, text }: QuoteProps) => {
  return (
    <div className={styles.quotation}>
      <blockquote>
        <p className={styles.quotation__text}>
          {text}
        </p>
      </blockquote>

      <div className={styles.quotation__author}>
        <div className={styles.quotation__imageContainer}>
          <img src={author.image} alt={author.name} />
        </div>
        <div className={styles.quotation__author__wrapper}>
          <span className={styles.quotation__author__name}>— {author.name}</span>
          <span className={styles.quotation__author__title}>{author.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
