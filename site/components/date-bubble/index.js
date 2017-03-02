// Displays date bubble

import React, { PropTypes } from 'react';
import styles from './style.css';

function displayDateContent(startDateTime, endDateTime) {
  if (endDateTime) {
    return (
      `${startDateTime.date} ${startDateTime.monthSym} ${startDateTime.year} - `
    + `${endDateTime.date} ${endDateTime.monthSym} ${endDateTime.year}`);
  }
  return (
    `${startDateTime.date} ${startDateTime.monthSym} ${startDateTime.year}`);
}

const DateBubble = ({
  startDateTime,
  endDateTime,
}) => (
  <div className={styles.dateBubble}>
    {displayDateContent(startDateTime, endDateTime)}
  </div>
);

const dateShape = {
  date: PropTypes.string.isRequired,
  monthSym: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

DateBubble.propTypes = {
  startDateTime: PropTypes.shape(dateShape).isRequired,
  endDateTime: PropTypes.shape(dateShape),
};

export default DateBubble;
