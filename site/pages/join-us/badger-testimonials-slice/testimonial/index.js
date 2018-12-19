// @flow
import React from 'react';

import styles from './styles.css';

type TestimonialProps = {
  content: string,
  author: string,
  role: string,
  icon: string,
};

const Testimonial = ({ content, author, role, icon }: TestimonialProps) => {
  return (
    <div className={styles.contentWrapper}>
      <div>
        <div className={styles.mainWrapper}>
          <div className={styles.main}>{content}</div>
        </div>
        <div className={styles.attribution}>
          <img className={styles.icon} alt={`${author} headshot`} src={icon} />
          <div>
            <div className={styles.author}>– {author},</div>
            <div className={styles.role}>{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
