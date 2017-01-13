import React from 'react';
import Link from '../../../../components/link';
import styles from './style.css';

const JobAdvert = () => (
  <Link to="joinUs" className={styles.jobAdvert}>
    <div className={styles.question}>Are you a potential Badger?</div>
    <div className={styles.hiring}>We're hiring</div>
  </Link>
);

export default JobAdvert;
