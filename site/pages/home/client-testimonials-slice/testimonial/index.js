// @flow
import React from 'react';

import shortTestimonialStyles from './short-styles.css';
import testimonialStyles from './styles.css';

type TestimonialProps = {
  type: string,
  content: string,
  author: string,
};

const Testimonial = ({ type, content, author }: TestimonialProps) => {
  const styles = type === 'short' ? shortTestimonialStyles : testimonialStyles;

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.centered}>
        <div className={styles.mainWrapper}>
          <div className={styles.main}>{content}</div>
        </div>
        <div className={styles.author}>{author}</div>
      </div>
    </div>
  );
};

export default Testimonial;
