import React from 'react';
import styles from './style.css';
import BlogEntry from './blog-entry';

const blogSlice = ({ featuredBlogPosts }) => {
  return (
    <section className={styles.blogSlice}>
      <div className={styles.sliceContainer}>
        <h2 className={styles.blogSliceTitle} >We’re opinionated and curious.</h2>
        <ul className={styles.blogLinkList} >
          {featuredBlogPosts.map((featuredBlogPost, ind) => (
            <BlogEntry key={ind} featuredBlogPost={featuredBlogPost} />
          ))}
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

blogSlice.propTypes = {
  featuredBlogPosts: React.PropTypes.array,
};

export default blogSlice;
