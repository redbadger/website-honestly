import React from 'react';
import awardsImage from './awards-april-2018.jpg?min=320&max=1440&steps=6';
import styles from './style.css';

export default () => (
  <div className={styles.awardsContainer} data-cy="awards-slice">
    <div className={styles.awards}>
      <img
        src={awardsImage}
        srcSet={awardsImage.srcSet}
        sizes="(min-width: 1440px) 1440px, 100vw"
        className={styles.awardsImage}
        alt="Awards"
      />
    </div>
  </div>
);
