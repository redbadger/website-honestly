import React, { PropTypes } from 'react';
import classNames from 'classnames';
import icons from '../icons/style.css';
import styles from '../events-list/style.css';
import { h2 } from '../typography/style.css';

const EventTitle = ({
  eventTitle,
  eventHref,
}) => (
  <a className={styles.eventTitleLink}
    href={eventHref}>
    <h2 className={classNames({
      [styles.eventTitle]: true,
      [h2]: true,
    })}>
      <span>
        {eventTitle}
      </span>
      <span className={classNames(
        {
          [styles.arrow]: true,
          [icons.sketchArrowRight]: true,
        })}
      />
    </h2>
  </a>
);

EventTitle.propTypes = {
  eventTitle: PropTypes.string.isRequired,
  eventHref: PropTypes.string.isRequired,
};

export default EventTitle;
