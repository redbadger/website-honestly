import React from 'react';
import Container from '../../components/container';
import Section from '../../components/section';
import styles from './style.css';
import EventsList from './events-list';
import EventsBanner from '../../components/events-banner';

export default function Events({ events }) {
  return (
    <div className={styles.events}>
      <h1 className={styles.h1}>Events</h1>
      <EventsBanner />
      <Section>
        <Container>
          <EventsList events={events} timeline="today" />
          <EventsList events={events} timeline="future" />
          <EventsList events={events} timeline="past" />
        </Container>
      </Section>
    </div>
  );
}

Events.propTypes = {
  events: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
