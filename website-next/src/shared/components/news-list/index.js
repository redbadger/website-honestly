// Display list of events
// You can request only displaying events of past or future
// with the `timeline` prop

import React, { PropTypes } from 'react';
import styles from './style.css';
import EventsNewsListEntry from '../events-news-list-entry';

const NewsList = ({
  news,
}) => {
  if (news.length > 0) {
    return (
      <div className={styles.eventsListTimelineSection}>
        <ul className={styles.eventsList}>
          {
            news.map((entry) => (
              <EventsNewsListEntry
                id={entry.id}
                tags={entry.tags}
                slug={entry.slug}
                title={entry.title}
                strapline={entry.strapline}
                startDateTime={entry.datetime}
                externalLinks={entry.externalLinks}
                internalLinks={entry.internalLinks}
                featureImageFilename={entry.featureImageFilename}
                timeline="past"
                type="news"
                key={`key_${entry.id}`}
              />
            ))
          }
        </ul>
      </div>
    );
  }

  return (<noscript />);
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default NewsList;
