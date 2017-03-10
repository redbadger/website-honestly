import React, { PropTypes } from 'react';
import styles from '../events-list/style.css';

const EventsTimelineTitle = ({
  timeline,
}) => {
  switch (timeline) {
    case 'past':
      return (<h2 className={styles.eventsTimelineTitle}>Past events</h2>);
    case 'future':
      return (<h2 className={styles.eventsTimelineTitle}>Upcoming events</h2>);
    case 'today':
      return (<h2 className={styles.eventsTimelineTitle}>Today</h2>);
    default:
      return (<noscript />);
  }
};

EventsTimelineTitle.propTypes = {
  timeline: PropTypes.oneOf(['past', 'future', 'today']),
};

export default EventsTimelineTitle;
