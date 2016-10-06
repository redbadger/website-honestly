import React from 'react';
import styles from './style.css';
import BlogEntry from './blog-entry';

const homepageBlogSlice = () => {
  return (
    <section className={styles.homepageBlogSlice}>
      <div className={styles.sliceContainer}>
        <h2 className={styles.blogSliceTitle} >We’re opinionated and curious.</h2>
        <ul className={styles.blogLinkList} >
          <BlogEntry
            category="Technology"
            url="http://red-badger.com/blog/2016/06/22/docker-and-assets-and-rails-oh-my/"
            title="Docker and assets and Rails, OH MY!"
            authorName="Jon Yardley"
            authorTitle="Tech Lead"
          />
          <BlogEntry
            category="UX"
            url="https://red-badger.com/ideas/service-blueprint-for-validating-ideas/"
            title="Are your products and services actually adding value?"
            authorName="Sinem Erdemli"
            authorTitle="User experience designer"
          />
          <BlogEntry
            category="Ideas"
            url="https://red-badger.com/ideas/to-drive-value-to-your-customers-faster-you-need-to-re-shape-your-digital-business/"
            title="The world is changing. Can you adapt fast enough?"
            authorName="Cain Ullah"
            authorTitle="CEO & Founder"
          />
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
