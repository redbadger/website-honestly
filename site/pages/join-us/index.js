import React from 'react';

import ComponentRenderer from '../../components/component-renderer';
import Container from '../../components/container';
import Jobs from './jobs';
import Section from '../../components/section';
import styles from './style.css';
import Video from '../../components/video';
import HR from '../../components/hr';
import { Grid, Cell } from '../../components/grid';

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
            <span>
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
          children: `We love doing fantastic work for our clients. We do this
          in integrated teams which are completely open with each other and our
          customers. It's all about communication and collaboration. It's about
          being innovative, being inspired, having fun and making magical
          things happen.`,
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
    children: 'Current Vacancies',
  },
};

export default function JoinUs({ jobs }) {
  return (
    <div className={styles.background}>
      <Section>
        <Container>
          <ComponentRenderer data={titles} />
          <Grid>
            <Cell size={6}>
              <ComponentRenderer data={join} />
            </Cell>
            <Cell size={6}>
              <Video title="Red Badger selfie video" id="9Ph7XJfWPys" type="youtube" />
            </Cell>
          </Grid>
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
    }),
  ),
};
