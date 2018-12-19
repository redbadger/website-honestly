// @flow
import React from 'react';

import styles from './style.css';
import JobList from './jobs-list';

type JobsProps = {
  jobs: Array<{
    description: string,
    title: string,
    slug?: string,
  }>,
};

export default function Jobs({ jobs }: JobsProps) {
  const jobsClasses = `jobs ${styles.jobs}`;

  return (
    <div className={jobsClasses}>
      <JobList jobs={jobs} />
    </div>
  );
}
