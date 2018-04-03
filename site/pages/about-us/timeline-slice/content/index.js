// @flow
import React from 'react';
import styles from './style.css';

type ContentProps = {
  year: string,
  title: string,
  text: string,
  fact: string,
  image: string,
  mobileImage: string,
  flip: boolean,
};

const Content = ({ year, title, text, fact, image, flip }: ContentProps) => {
  const topRowClassName = flip ? styles.topRowFlipped : styles.topRow;

  return (
    <div>
      <div className={styles.largeScreen}>
        <div className={topRowClassName}>
          <div className={styles.imageWrapper}>
            <img src={image} alt={`year ${year}`} className={styles.image} />
          </div>
          <div className={styles.copy}>
            <div className={styles.year}>{year}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{text}</div>
            <div className={styles.fact}>
              <span className={styles.factTitle}>Random fact of the year: </span>
              {fact}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.smallScreen}>
        <div className={styles.copy}>
          <div className={styles.year}>{year}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.body}>{text}</div>
          <div className={styles.fact}>
            <span className={styles.factTitle}>Random fact of the year: </span>
            {fact}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
