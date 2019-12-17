// @flow
import React from 'react';
import styles from './style.css';
import ClientOnly from '../../../components/clientOnly';
import Testimonial from './testimonial';

type Props = {
  content: string,
  author: string,
  jobRole: string,
  icon: string,
};

const EngagementTestimonialsSlice = ({ content, author, jobRole, icon }: Props) => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.container}>
        <ClientOnly>
          <div className={styles.content}>
            <Testimonial content={content} author={author} jobRole={jobRole} icon={icon} />
          </div>
        </ClientOnly>
      </div>
    </div>
  );
};

export default EngagementTestimonialsSlice;
