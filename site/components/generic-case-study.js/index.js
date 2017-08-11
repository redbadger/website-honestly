import React from 'react';

import styles from './style.css';

type GenericCaseStudyProps = {
  title: string,
  headerImage: string,
  headerImageAlt: string,
  children: node
};

const GenericCaseStudy = ({
  title,
  headerImage,
  headerImageAlt,
  children,
}: GenericCaseStudyProps) =>
  <div>
    <div className={styles.title}>title</div>
    <img alt={headerImageAlt} src={headerImage} />
    {children}
  </div>;

export default GenericCaseStudy;
