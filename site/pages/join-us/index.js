import React from 'react';

import ComponentRenderer from '../../components/component-renderer';
import Container from '../../components/container';
import Jobs from './jobs';
import Section from '../../components/section';
import styles from './style.css';
import Video from '../../components/video';
import HR from '../../components/hr';
import Picture from '../../components/picture';
import bestCompanyLogo from './2018-best-small-companies-logo.jpg';

const titles = {
  type: 'Content',
  props: {
    children: [
      {
        type: 'Title1',
        props: {
          children: 'Join us',
        },
      },
      {
        type: 'Title3',
        props: {
          // eslint-disable-next-line max-len, comma-dangle
          children: (
            <span className={styles.subHeading}>
              Are we what you’re looking <span className={styles.noWrap}>for?*</span>
            </span>
          ),
        },
      },
    ],
  },
};

const join = {
  type: 'Content',
  props: {
    children: [
      {
        type: 'Paragraph',
        props: {
          children: `We are consultants - what does that mean? On top of our chosen discipline, we are great communicators, able to drop the jargon in favour of helping everyone understand a problem... and a solution, whether they are technical or not.`,
        },
      },
      {
        type: 'Paragraph',
        props: {
          children: `Our consultants have conversations, workshop solutions and present back to multiple members of the teams. They collaborate and work hard to optimise their team's performance, not just their apps.`,
        },
      },
      {
        type: 'Paragraph',
        props: {
          children: [
            {
              type: 'Strong',
              props: {
                children: '* And vice versa',
              },
            },
          ],
        },
      },
    ],
  },
};

const apply = {
  type: 'Content',
  props: {
    children: [
      {
        type: 'Title2',
        props: {
          children: 'How to Apply',
        },
      },
      {
        type: 'Paragraph',
        props: {
          children: [
            `If you'd like more information, you want to apply, or you'd simply
            like to say 'hello', then please get in touch with your CV,
            Stackoverflow profile, Github, code, portfolio and anything else
            you think we might be interested in, at: `,
            {
              type: 'Link',
              props: {
                href: 'mailto:jobs@red-badger.com',
                children: 'jobs@red-badger.com.',
              },
            },
          ],
          align: 'center',
        },
      },
    ],
  },
};

const vacancies = {
  type: 'Title2',
  props: {
    children: <span className={styles.vacancyHeader}>Current Vacancies</span>,
  },
};

export default function JoinUs({ jobs }) {
  return (
    <div className={styles.background}>
      <Section>
        <Container>
          <div className={styles.headerContainer}>
            <Picture className={styles.bestCompanyLogo} smallSrc={bestCompanyLogo} />
            <ComponentRenderer data={titles} />
          </div>
          <div className={styles.upperBodyContainer}>
            <ComponentRenderer data={join} />
            <div className={styles.bodyPictureContainer}>
              <Picture className={styles.bestCompanyLogo} smallSrc={bestCompanyLogo} />
            </div>
          </div>
          <div className={styles.videoContainer}>
            <Video title="Red Badger selfie video" id="dqJuBdCf-rA" type="youtube" />
          </div>
          <HR color="red" />
          <ComponentRenderer data={vacancies} />
          <Jobs jobs={jobs} />
        </Container>
      </Section>
      <HR color="red" />
      <div className={styles.apply}>
        <Section>
          <Container>
            <ComponentRenderer data={apply} />
          </Container>
        </Section>
      </div>
    </div>
  );
}

JoinUs.propTypes = {
  jobs: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string,
      title: React.PropTypes.string,
    })
  ),
};
