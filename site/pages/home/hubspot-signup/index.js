// @flow
import React from 'react';
import styles from '../newsletter-slice/style.css';

export default function HubspotSignup() {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.title}>
        Sign up to Badger News
        <span className={styles.subTitle}>
          Be the first to hear about webinars, events blogs and more.
        </span>
      </h2>
      <a href="" className={styles.submitButton}>
        Sign up
      </a>
    </section>
  );
}
