// import classnames from 'classnames/bind';
import React from 'react';
import styles from './style.css';

// const cx = classnames.bind(styles);

const NewsletterSlice = () => {
  return (
    <section className={styles.newsletter}>
      <h1 className={styles.title}>
        Sign up to BadgerNews to hear more from us
      </h1>
      <h2 className={styles.subTitle}>
        (every 6 weeks or so)
      </h2>
      <p>
        We work with you to deliver digital products that
        make a difference to people.
      </p>
    </section>
  );
};

export default NewsletterSlice;
