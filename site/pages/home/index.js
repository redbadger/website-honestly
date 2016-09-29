import React from 'react';
import Link from '../../components/link';
import styles from './index.css';

export default function HomePage() {
  return (
    <div>
      <h1 className={styles.hello}>Hi Andy.</h1>
      <Link to="notFoundPage">Go somewhere?</Link>
    </div>
  );
}
