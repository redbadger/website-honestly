// @flow
import React from 'react';

type TestimonialProps = {
  styles: Object,
  content: string,
  author: string,
};

const Testimonial = ({ styles, content, author }: TestimonialProps) => {
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
