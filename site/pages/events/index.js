// @flow

import React from 'react';
import Container from '../../components/container';
import Section from '../../components/section';
import styles from './style.css';
import EventsList from './events-list';
import EventsBanner from '../../components/events-banner';
import Social from '../../components/social';

import metaImage from './meta-image.jpg';

type Props = {
  events: Array<Object>, // TODO: Add correct event type
  eventsBanner?: {
    // events banner image details are set in prismic.io, check slack for login details
    url: string,
    altText: string,
    campaignName: string,
    desktopURL: string,
    tabletURL: string,
    mobileURL: string,
  },
};

const social = {
  title: 'Events | Red Badger',
  description:
    'Upcoming events including We Love _ Tech, React London Community, UXD exchange and more.',
  metaImage,
  altText: 'An illustration for our event ‘An Introduction to React’',
  url: 'https://red-badger.com/events',
};

export default function Events({ events, eventsBanner }: Props) {
  console.log(events);
  return (
    <div className={styles.events}>
      <Social {...social} />
      <h1 className={styles.h1}>Events</h1>
      {eventsBanner && <EventsBanner {...eventsBanner} />}
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
