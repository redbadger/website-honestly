import React, { PropTypes } from 'react';
import classNames from 'classnames';
import icons from '../icons/style.css';
import styles from '../events-list/style.css';
import { h2 } from '../typography/style.css';

const EventTitle = ({
  eventTitle,
}) => (
  <h2
    className={classNames({
      [styles.eventTitle]: true,
      [h2]: true,
    })}
  >
    <span>
      {eventTitle}
    </span>
  </h2>
);

EventTitle.propTypes = {
  eventTitle: PropTypes.string.isRequired,
};

export default EventTitle;
