import React from 'react';
import styles from './style.css';
import BlogEntry from './blog-entry';

const matchAuthorTitle = title => {
  const match = title.match(/<.+>(.*)<.+>/);
  return match && match[1] || title;
}

const renderFeaturedBlogPosts = featuredBlogPosts => (
  featuredBlogPosts.map((featuredBlogPost, ind) => (
    <BlogEntry
      key={ind}
      category={featuredBlogPost.categories[0]}
      url={'http://red-badger.com/blog/' + featuredBlogPost.urlId}
      title={featuredBlogPost.title}
      authorName={featuredBlogPost.author.displayName}
      authorTitle={matchAuthorTitle(featuredBlogPost.author.bio)}
    />
  ))
);

const blogSlice = ({ featuredBlogPosts }) => {
  return (
    <section className={styles.blogSlice}>
      <div className={styles.sliceContainer}>
        <h2 className={styles.blogSliceTitle} >We’re opinionated and curious.</h2>
        <ul className={styles.blogLinkList} >
          {renderFeaturedBlogPosts(featuredBlogPosts)}
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
