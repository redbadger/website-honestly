// @flow
import React, { Component } from 'react';

import HR from '../../../../components/hr';
import Link from '../../../../components/link';
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
    const { id, title, description, slug, datePosted } = this.props;
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
        <div itemProp="jobLocation" itemScope itemType="http://schema.org/Place">
          <meta itemProp="streetAddress" content="4th Floor, 2 Old Street Yard" />
          <meta itemProp="addressLocality" content="London" />
          <meta itemProp="addressRegion" content="Greater London" />
          <meta itemProp="postalCode" content="EC1Y 8AF" />
        </div>
        <meta itemProp="hiringOrganization" content="Red Badger" />
        <meta itemProp="datePosted" content={new Date(datePosted)} />
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
              <div className={styles.jobEntryHeader} itemProp="title">
                <JobTitle jobLink={eventLink} jobTitle={title} />
              </div>
              <div
                className={open ? styles.jobDescription__visible : styles.jobDescription__hidden}
              >
                <div className={styles.jobDescription} itemProp="description">
                  <RawHtml>{description}</RawHtml>
                </div>
                <Link to="job" navigationData={eventLink} className={styles.applyBtn}>
                  Read more
                </Link>
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
