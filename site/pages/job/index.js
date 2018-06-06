/* eslint-disable max-len */
// @flow
import React from 'react';
import RawHtml from '../../components/raw-html';
import { Grid, Cell } from '../../components/grid';
import Container from '../../components/container';
import Section from '../../components/section';
import Note from '../../components/note';
import Hr from '../../components/hr';
import Link from '../../components/link';
import Social from '../../components/social';

import metaImage from './meta-image.jpg';

import typography from '../../components/component-renderer/styles.css';
import styles from './style.css';

type JobProps = {
  job: {
    title?: string,
    description?: string,
    fullDescription: string,
    applicationUrl?: string,
    slug: string,
  },
};

// Move this to GraphQl at nearest op:
// workable does not provide a description without html,
// so we use a naive regex to strip it.
const removeHtml = (str: string) => {
  return str.replace(/<\/?[a-z]+ ?\/?>/g, '');
};

export default function Job({ job }: JobProps) {
  const social = {
    title: job.title ? `${job.title} | Red Badger` : 'Join us | Red Badger',
    url: `https://red-badger.com/jobs/${job.slug}`,
    description: job.description ? removeHtml(job.description) : '',
    altText: 'Polaroids of our team.',
    metaImage,
  };

  return (
    <div className={styles.background}>
      <Social {...social} />
      <Section>
        <Container>
          <Grid>
            <Cell size={8}>
              <h1 className={styles.jobTitle}>{job.title}</h1>
              <RawHtml>{job.fullDescription}</RawHtml>
              <Hr color="grey" />
              <Link className={styles.linkBack} to="joinUs">
                &lt; See all vacancies
              </Link>
            </Cell>
            <Cell size={4}>
              <Note>
                <h2 className={styles.noteTitle}>How to Apply</h2>
                <p className={typography.p}>
                  {
                    "If you'd like to know more or you want to apply please get in touch with your CV, Stackoverflow profile, Github, code, portfolio and anything else you think we might be interested in."
                  }
                </p>
                <p className={typography.p}>
                  <a
                    className={styles.sidebarApplyLink}
                    href={job.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply here
                  </a>
                </p>
              </Note>
            </Cell>
          </Grid>
        </Container>
      </Section>
    </div>
  );
}
