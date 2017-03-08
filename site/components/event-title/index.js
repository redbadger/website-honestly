import React, { PropTypes } from 'react';
import styles from '../../pages/events/events-list/style.css';
import Link from '../link';

const EventTitle = ({
  eventLink,
  eventTitle,
}) => (
  <h2
    className={styles.eventTitle}
  >
    <Link to="event" navigationData={eventLink} className={styles.eventTitleLink}>
      <span>
        {eventTitle}
      </span>
    </Link>
  </h2>
);

EventTitle.propTypes = {
  eventTitle: PropTypes.string.isRequired,
  eventLink: PropTypes.shape({
    to: PropTypes.string,
    children: PropTypes.node,
  }),
};

export default EventTitle;
