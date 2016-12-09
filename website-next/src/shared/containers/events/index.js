import Container from '../../components/container';
import React from 'react';
import Section from '../../components/section';
import styles from './style.css';
import EventsList from '../../components/events-list';
import BannerReactConf from '../../components/banner-react-conf';

export default ({ events }) => (
  <div>
    <h1 className={styles.h1}>Events</h1>
    <BannerReactConf />
    <Section>
      <Container>
        <EventsList events={events} timeline='today' />
        <EventsList events={events} timeline='future' />
        <EventsList events={events} timeline='past' />
      </Container>
    </Section>
  </div>
);
