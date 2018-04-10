// @flow
// Display list of events
// You can request only displaying events of past or future
// with the `timeline` prop

import React from 'react';
import styles from './style.css';
import EventsTimelineTitle from '../events-timeline-title';
import type { Timeline } from '../events-timeline-title';
import EventsListEntry from '../events-list-entry';
import { splitEvents } from '../../../fetchers/util/events';

type EventsListProps = {
  events: Array<any>,
  timeline: Timeline,
};

const EventsList = ({ events, timeline }: EventsListProps) => {
  const params = {
    events,
    timeline,
    reverse: timeline === 'future',
  };
  const relevantEvents = timeline ? splitEvents(params) : events;

  if (relevantEvents.length > 0) {
    return (
      <div className={styles.eventsListTimelineSection}>
        <EventsTimelineTitle timeline={timeline} />
        <ul className={styles.eventsList}>
          {relevantEvents.map(event => (
            <EventsListEntry {...event} timeline={timeline} type="event" key={`key_${event.id}`} />
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export default EventsList;
