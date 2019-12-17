// @flow
import React from 'react';

import styles from './styles.css';

type TestimonialProps = {
  content: string,
  author: string,
  jobRole: string,
  icon: string,
};

const Testimonial = ({ content, author, jobRole, icon }: TestimonialProps) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentContainer}>
        <div className={styles.mainWrapper}>
          <div className={styles.main}>{content}</div>
        </div>
        <div className={styles.attribution}>
          <img className={styles.icon} alt={`${author} headshot`} src={icon} />
          <div>
            <div className={styles.author}>{author},</div>
            <div className={styles.role}>{jobRole}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
