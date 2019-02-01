// @flow
import React from 'react';

import styles from './style.css';
import JobList from './jobs-list';
import type { Job } from '../';

type JobsProps = {
  jobs: Array<Job>,
};

export default function Jobs({ jobs }: JobsProps) {
  const jobsClasses = `jobs ${styles.jobs}`;

  return (
    <div className={jobsClasses}>
      <JobList jobs={jobs} />
    </div>
  );
}
