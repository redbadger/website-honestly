// @flow
import React from 'react';

import styles from './style.css';
import JobList from './jobs-list';

type _JobProps = {
  id: number,
  title: string,
  description: string,
  fullDescription: string,
  department?: ?string,
  applicationUrl: string,
  slug?: string,
};

type _JobsProps = {
  jobs: Array<_JobProps>,
};

const Jobs = ({ jobs }: _JobsProps) => {
  console.log(1, jobs);
  const jobsClasses = `jobs ${styles.jobs}`;

  return (
    <div className={jobsClasses}>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Jobs;
export type JobProps = _JobProps;
export type JobsProps = _JobsProps;
