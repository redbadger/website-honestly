// @flow
import React from 'react';
import styles from '../events-list/style.css';

export type Timeline = 'past' | 'future' | 'today';

type EventsTimelineTitleProps = {
  timeline: Timeline,
};

const EventsTimelineTitle = ({ timeline }: EventsTimelineTitleProps) => {
  switch (timeline) {
    case 'past':
      return <h2 className={styles.eventsTimelineTitle}>Past events</h2>;
    case 'future':
      return <h2 className={styles.eventsTimelineTitle}>Upcoming events</h2>;
    case 'today':
      return <h2 className={styles.eventsTimelineTitle}>Today</h2>;
    default:
      return null;
  }
};

export default EventsTimelineTitle;
