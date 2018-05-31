// @flow
// Displays date bubble

import React from 'react';
import styles from './style.css';

export type DateShape = {
  date: string,
  monthSym: string,
  year: string,
  month?: string,
};

type DateBubbleProps = {
  startDateTime: DateShape,
  endDateTime?: DateShape,
};

function displayDateContent(startDateTime, endDateTime) {
  if (endDateTime) {
    return (
      `${startDateTime.date} ${startDateTime.monthSym} ${startDateTime.year} - ` +
      `${endDateTime.date} ${endDateTime.monthSym} ${endDateTime.year}`
    );
  }
  return `${startDateTime.date} ${startDateTime.monthSym} ${startDateTime.year}`;
}

const DateBubble = ({ startDateTime, endDateTime }: DateBubbleProps) => (
  <div itemProp="startDate" content={startDateTime.iso} className={styles.dateBubble}>
    {displayDateContent(startDateTime, endDateTime)}
  </div>
);

export default DateBubble;
