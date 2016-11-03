import React from 'react';
import styles from './style.css';
import BlogEntry from './blog-entry';

const blogSlice = () => {
  return (
    <section className={styles.blogSlice}>
      <div className={styles.sliceContainer}>
        <h2 className={styles.blogSliceTitle} >We’re opinionated and curious.</h2>
        <ul className={styles.blogLinkList} >
          <BlogEntry
            category="Technology"
            url="http://red-badger.com/blog/2016/11/01/serverless-evil-queen-tooth-fairy/"
            title="Serverless - Evil Queen or Tooth Fairy?"
            authorName="Anna Doubkova"
            authorTitle="Software Engineer"
          />
          <BlogEntry
            category="Agile"
            url="http://red-badger.com/blog/2016/10/27/really-stand-agile-glossary/"
            title="Do I Really Have to Stand? – An Agile Glossary"
            authorName="Roisi Proven"
            authorTitle="Project Manager"
          />
          <BlogEntry
            category="Technology"
            url="http://red-badger.com/blog/2016/10/17/whats-coming-next/"
            title="Tech Predictions 2017 - What's Coming up Next?"
            authorName="Marcel Cutts"
            authorTitle="Software Engineer"
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

export default blogSlice;
