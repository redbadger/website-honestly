import React from 'react';
import styles from './style.css';

export default function JobsIntro(props) {
  return (
    <div className={styles.jobs}>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
}
