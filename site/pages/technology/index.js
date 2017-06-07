import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';

import BlogSlice from './blog-slice';

import techRoundTableImage from './images/techroundtable.png';
import arrowSVG from '../../../assets/images/SVG/arrow.svg';

export default function Technology() {
  return (
    <div className={styles.technologyPage}>
      <section className={styles.intro}>
        <img className={styles.techRoundTable} src={techRoundTableImage} alt="tech roundtable" />
        <h1 className={styles.mainHeader}>Technology</h1>
        <p className={styles.description}>
          Technology does not stand still and neither do we. On a regular basis we get our whole
          tech team together and review all the tech we have used across all our projects to derive
          what is hot and what is not in our world of tech.
        </p>
        <a className={styles.latestRoundTableLink}>Read our latest tech round table</a>
        <InlineSVG src={arrowSVG} className={styles.arrow} />
      </section>
      <section className={styles.pastAndFuture}>
        <div className={styles.leftBlogs}>
          <BlogSlice blogPosts={[]} title={'Tried and tested'} />
        </div>
        <div className={styles.rightBlogs}>
          <BlogSlice blogPosts={[]} title={'Growing Trends'} />
        </div>
      </section>
    </div>
  );
}
