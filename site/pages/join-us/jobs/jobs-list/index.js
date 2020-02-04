// @flow
// Display list of jobs

import React from 'react';
import styles from './style.css';
import JobsListSection from '../jobs-list-section';
import type { JobsProps } from '..';

const getDepartments = jobs => {
  return jobs
    .map(job => job.department)
    .filter((department, index, self) => self.indexOf(department) === index);
};

const groupByDepartment = jobs => {
  const grouped = [];
  getDepartments(jobs).forEach(department => {
    grouped.push(
      jobs
        .filter(job => job.department === department)
        .sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        }),
    );
  });
  return grouped;
};

const JobsList = ({ jobs }: JobsProps) => {
  const groupedJobs = groupByDepartment(jobs);
  return (
    <div className={styles.jobsListTimelineSection}>
      <h1 className={styles.jobsTimelineTitle}>We’re hiring</h1>
      <div className={styles.jobsTimelineIntro}>
        <p>
          We believe in creating opportunity for all. We benefit from diversity. That said,
          we&apos;re far from perfect – we want to be more diverse and representative. Join us and
          help make that happen.
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
