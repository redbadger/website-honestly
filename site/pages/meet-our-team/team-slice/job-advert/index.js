import React from 'react';
import Link from '../../../../components/link';
import styles from './style.css';

const JobAdvert = () => (
  <div className={styles.badgerWrapper} >
    <Link to="joinUs" className={styles.jobAdvert}>
      <div className={styles.question}>Are you a potential Badger?</div>
      <div className={styles.hiring}>We&rsquo;re hiring</div>
    </Link>
  </div>
);

export default JobAdvert;
