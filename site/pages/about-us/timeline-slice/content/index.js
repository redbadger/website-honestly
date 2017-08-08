import React from 'react';
import styles from './style.css';

const Content = ({ year, title, text, fact, image, mobileImage, flip }) => {
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
        <img src={mobileImage} alt={title} className={styles.image} />
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

Content.propTypes = {
  year: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  fact: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  mobileImage: React.PropTypes.string.isRequired,
  flip: React.PropTypes.bool,
};

export default Content;
