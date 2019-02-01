// @flow
import React, { Component } from 'react';

import HR from '../../../../components/hr';
import { Grid, Cell } from '../../../../components/grid';
import JobTitle from '../job-title';
import RawHtml from '../../../../components/raw-html';
import styles from '../jobs-list/style.css';
import type { JobProps } from '../';

type JobsListEntryState = {
  open: boolean,
};

class JobsListEntry extends Component<JobProps, JobsListEntryState> {
  constructor(props: JobProps) {
    super(props);
    this.state = {
      open: false,
    };
  }

  props: JobProps;

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const { id, title, description, slug } = this.props;
    const { open } = this.state;
    const eventLink = {
      slug,
    };

    return (
      <li
        key={`entry_${id}`}
        className={styles.jobItem}
        itemScope
        itemType="http://schema.org/JobPosting"
      >
        <Grid fit={false}>
          <Cell size={12} breakOn="smallScreen">
            <button
              onClick={this.handleClick}
              aria-expanded={open}
              aria-label={`expand ${title} job description`}
              className={styles.jobEntry__more}
            >
              <span className={open ? styles.jobEntry__arrowDown : styles.jobEntry__arrow} />
            </button>
            <div className={styles.jobEntryHeaderContainer}>
              <div className={styles.jobEntryHeader}>
                <JobTitle jobLink={eventLink} jobTitle={title} />
              </div>
              <div
                className={open ? styles.jobDescription__visible : styles.jobDescription__hidden}
              >
                <div className={styles.jobDescription}>
                  <RawHtml>{description}</RawHtml>
                </div>
              </div>
            </div>
            <HR color="black" customClassName={styles.mobileHorizontalLine} />
          </Cell>
        </Grid>
      </li>
    );
  }
}

export default JobsListEntry;
