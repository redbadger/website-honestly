import React, { PropTypes } from 'react';

const EventsTimelineTitle = ({
  timeline,
}) => {
  switch (timeline) {
    case 'past':
      return (<h2>Past events</h2>);
    case 'future':
      return (<h2>Upcoming events</h2>);
    case 'today':
      return (<h2>Today</h2>);
    default:
      return (<noscript />);
  }
};

EventsTimelineTitle.propTypes = {
  timeline: PropTypes.oneOf(['past', 'future', 'today']),
};

export default EventsTimelineTitle;
