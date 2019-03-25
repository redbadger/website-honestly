// @flow
import React from 'react';
import JobsListEntry from '../jobs-list-entry';
import styles from '../jobs-list/style.css';
import HR from '../../../../components/hr';
import type { JobProps } from '..';

type JobsListSectionProps = {
  title?: ?string,
  jobs: Array<JobProps>,
};

const JobsListSection = ({ title, jobs }: JobsListSectionProps) => {
  return (
    <React.Fragment>
      <HR color="black" />
      <div className={styles.jobSectionContainer}>
        <h2 className={styles.jobSectionHeader}>{title}</h2>
        <ul className={styles.jobsList}>
          {jobs.map(job => (
            <JobsListEntry {...job} type="job" key={`key_${job.title}`} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default JobsListSection;
