// @flow
import * as React from 'react';
import styles from '../../pages/events/events-list/style.css';
import Link from '../link';

type EventTitleProps = {
  eventLink: {
    to?: string,
    children?: React.Node
  },
  eventTitle:string
}

const EventTitle = ({ eventLink, eventTitle }: EventTitleProps) => (
  <h2 className={styles.eventTitle}>
    <Link to="event" navigationData={eventLink} className={styles.eventTitleLink}>
      <span>{eventTitle}</span>
    </Link>
  </h2>
);

export default EventTitle;
