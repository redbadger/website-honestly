import React from 'react';

import Note from '../../../components/note';
import RawHtml from '../../../components/raw-html';
import styles from './style.css';
import Link from '../../../components/link';
import Wall from '../../../components/wall';

export default function Jobs({ jobs }) {
  const listings = jobs.map((job, index) => (
    <Note key={index}>
      <Link className={styles.title} to="job" navigationData={{ slug: job.slug }}>
        {job.title}
      </Link>
      <RawHtml>{job.description}</RawHtml>
    </Note>
  ));

  const jobsClasses = `jobs ${styles.jobs}`;

  return (
    <div className={jobsClasses}>
      <Wall cols={3}>{listings}</Wall>
    </div>
  );
}

Jobs.propTypes = {
  jobs: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string,
      title: React.PropTypes.string,
    }),
  ),
};
