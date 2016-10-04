import React from 'react';
import Link from '../../components/link';
import Brie from './brie-slice';
import styles from './index.css';

export default function HomePage() {
  return (
    <div>
      <h1 className={styles.hello}>Homepage</h1>
      <Link to="notFoundPage">Go somewhere?</Link>
      <Brie />
    </div>
  );
}
