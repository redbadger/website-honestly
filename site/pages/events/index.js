// @flow

import React from 'react';
import Container from '../../components/container';
import Section from '../../components/section';
import styles from './style.css';
import EventsList from './events-list';
import EventsBanner from '../../components/events-banner';

type Props = {
  events: Array<Object>, // TODO: Add correct event type
  eventsBanner: {
    url: string,
    altText: string,
    desktopURL: string,
    tabletURL: string,
    mobileURL: string,
  },
};

export default function Events({ events, eventsBanner }: Props) {
  const { url, altText, desktopURL, tabletURL, mobileURL } = eventsBanner;
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
