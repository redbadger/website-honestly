// @flow
import * as React from 'react';
import styles from '../jobs-list/style.css';
import Link from '../../../../components/link';

type JobTitleProps = {
  jobLink: {
    children?: React.Node,
  },
  jobTitle: string,
  jobPage?: boolean,
};

const JobTitle = ({ jobLink, jobTitle }: JobTitleProps) => (
  <h3 className={styles.jobTitle} itemProp="name">
    <Link to="job" navigationData={jobLink} className={styles.jobTitleLink}>
      <span>{jobTitle}</span>
    </Link>
  </h3>
);

export default JobTitle;
