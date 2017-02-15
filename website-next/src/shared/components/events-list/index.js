// Display list of events
// You can request only displaying events of past or future
// with the `timeline` prop

import React, { PropTypes } from 'react';
import styles from './style.css';
import EventsTimelineTitle from '../events-timeline-title';
import EventsNewsListEntry from '../events-news-list-entry';
import { splitEvents } from '../../../../../site/fetchers/util/events';

const EventsList = ({
  events,
  timeline,
}) => {
  const relevantEvents =
    timeline
    ? splitEvents({
      events,
      timeline,
      reverse: timeline === 'future',
    })
    : events;

  if (relevantEvents.length > 0) {
    return (
      <div className={styles.eventsListTimelineSection}>
          <EventsTimelineTitle timeline={timeline} />
        <ul className={styles.eventsList}>
          {
            relevantEvents.map((event) => (
              <EventsNewsListEntry
                {...event}
                timeline={timeline}
                type="event"
                key={`key_${event.id}`}
              />
            ))
          }
        </ul>
      </div>
    );
  }

  return (<noscript />);
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  timeline: EventsTimelineTitle.propTypes.timeline,
};

export default EventsList;
