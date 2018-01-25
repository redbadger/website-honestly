import React, { PropTypes } from 'react';
import Container from '../../components/container';
import Section from '../../components/section';
import styles from './style.css';
import EventsList from './events-list';
import EventsBanner from '../../components/events-banner';

export default function Events({ events, eventsBanner }) {
  const { url, altText, desktopURL, tabletURL, mobileURL } = eventsBanner[0];
  return (
    <div className={styles.events}>
      <h1 className={styles.h1}>Events</h1>
      <EventsBanner
        url={url}
        altText={altText}
        desktopURL={desktopURL}
        tabletURL={tabletURL}
        mobileURL={mobileURL}
      />
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
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  eventsBanner: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    altText: PropTypes.string,
    desktopURL: PropTypes.string,
    tabletURL: PropTypes.string,
    mobileURL: PropTypes.string,
  })),
};
