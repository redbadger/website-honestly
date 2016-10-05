import React from 'react';
import styles from './style.css';

const homepageBlogSlice = () => {
  return (
    <section className={styles.homepageBlogSlice}>
      <div className={styles.sliceContainer}>
        <h2 className={styles.blogSliceTitle} >We’re opinionated and curious.</h2>
        <ul className={styles.blogLinkList} >
          <li>
            <h3 className={styles.category}>Technology</h3>
            <a
              href="http://red-badger.com/blog/2016/06/22/docker-and-assets-and-rails-oh-my/"
              className={styles.link}
            >
              Docker and assets and Rails, OH MY!
            </a>
          </li>
          <li>
            <h3 className={styles.category}>UX</h3>
            <a
              href="https://red-badger.com/ideas/service-blueprint-for-validating-ideas/"
              className={styles.link}
            >
              Are your products and services actually adding value?
            </a>
          </li>
          <li>
            <h3 className={styles.category}>Ideas</h3>
            <a
              href="https://red-badger.com/ideas/to-drive-value-to-your-customers-faster-you-need-to-re-shape-your-digital-business/"
              className={styles.link}
            >
              The world is changing. Can you adapt fast enough?
            </a>
          </li>
        </ul>
        <a
          href="http://red-badger.com/blog"
          className={styles.blogLink}
        >
          Read our blog
        </a>
      </div>
    </section>
  );
};

export default homepageBlogSlice;
