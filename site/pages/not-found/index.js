import React from 'react';
import Link from '../../components/link';
import styles from './style.css';
import confusedBadger from './png/confused-badger.png';

export default function NotFoundPage() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionContent}>
        <h1 className={styles.header}>Whaaaaaat?!</h1>
        <p className={styles.content}>
          <img alt="confused badger" className={styles.badger} src={confusedBadger} />
          <span className={styles.copy}>
            Sorry, the page you’re looking for isn’t here.&nbsp;
            <span>Try our <a className={styles.link} href="/blog">blog</a>, or find out more <a className={styles.link} href="/about-us">about us</a>.</span>
          </span>
          <span className={styles.buttonContainer}>
            <Link className={styles.button} to="homePage">Go to home page</Link>
          </span>
          <span className={styles.clear} />
        </p>
      </div>
    </div>
  );
}
