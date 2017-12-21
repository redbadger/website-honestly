import moment from 'moment';

export function parseDateAndResetTime(dateTimeIso) {
  const date = moment(dateTimeIso);
  date.hour(0);
  date.minute(0);
  return date;
}

export function splitEvents({
  events, // array of events
  timeline, // one of 'past', 'today', 'future'
  reverse = false, // optionally reverse final list of events
  todayDateTime = new Date(), // iso string representing today date
}) {
  let relevantEvents = events.filter(event => {
    const startDateTime = parseDateAndResetTime(event.startDateTime.iso);
    const endDateTime = parseDateAndResetTime(event.endDateTime.iso);

    // In a rare case of user error we omit this event from the output list
    if (startDateTime.isAfter(endDateTime, 'minute')) {
      return false;
    }

    switch (timeline) {
      case 'today':
        if (startDateTime.isSame(endDateTime, 'day')) {
          return startDateTime.isSame(todayDateTime, 'day');
        }
        return moment(todayDateTime).isBetween(startDateTime, endDateTime);
      case 'past':
        return (
          !moment(todayDateTime).isBetween(startDateTime, endDateTime) &&
          endDateTime.isBefore(todayDateTime) &&
          !endDateTime.isSame(todayDateTime, 'day')
        );
      case 'future':
        return !startDateTime.isSame(todayDateTime, 'day') && startDateTime.isAfter(todayDateTime);
      default:
        return false;
    }
  }, this);

  if (relevantEvents.length > 1 && reverse === true) {
    relevantEvents = relevantEvents.reverse();
  }

  return relevantEvents;
}

// Helper function for displaying date range for multi day events
// Date range would only be displayed if end date is set on the
// child component
export function setEndDate(timeline, startDateTime, endDateTime) {
  if (timeline === 'today' && startDateTime.date !== endDateTime.date) {
    return endDateTime;
  }
  return null;
}
