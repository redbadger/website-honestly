import React from 'react';
import { Link } from 'react-router';
import styles from './index.css';

export default function HomePage() {
  return (
    <div>
      <h1 className={styles.hello}>Homepage</h1>
      <Link to="/somewhere">Go somewhere?</Link>
    </div>
  );
}
