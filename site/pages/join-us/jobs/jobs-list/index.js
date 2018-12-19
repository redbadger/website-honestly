// @flow
// Display list of jobs

import React from 'react';
import styles from './style.css';
import JobsListSection from '../jobs-list-section';

type JobsListProps = {
  jobs: Array<any>,
};

const getDepartments = jobs => {
  return jobs
    .map(job => job.department)
    .filter((department, index, self) => self.indexOf(department) === index);
};

const groupByDepartment = jobs => {
  const grouped = [];
  getDepartments(jobs).forEach(department => {
    grouped.push(jobs.filter(job => job.department === department));
  });
  return grouped;
};

const JobsList = ({ jobs }: JobsListProps) => {
  const groupedJobs = groupByDepartment(jobs);
  return (
    <div className={styles.jobsListTimelineSection}>
      <h1 className={styles.jobsTimelineTitle}>We’re hiring</h1>
      <div className={styles.jobsTimelineIntro}>
        <p>
          We believe in creating opportunity for all. We benefit from diversity. That said,
          we&apos;re far from perfect – we want to be more diverse and representative. Here are the
          roles we&apos;re currently looking to hire for.
        </p>
      </div>
      {groupedJobs.map(jobGroup => (
        <JobsListSection
          jobs={jobGroup}
          key={jobGroup[0].department}
          title={jobGroup[0].department}
        />
      ))}
    </div>
  );
};

export default JobsList;
