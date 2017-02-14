import HR from '../hr';
import { Grid, Cell } from '../grid';
import EventNewsMeta from '../event-news-meta';
import EventImage from '../event-image';
import DateBubble from '../date-bubble';
import EventTitle from '../event-title';
import React, { PropTypes } from 'react';
import styles from '../events-list/style.css';
import { setEndDate, eventImagePath } from '../../../../../site/fetchers/util/events';

import Link from '../../../../../site/components/link';

const EventsNewsListEntry = ({
  id,
  tags,
  slug,
  title,
  timeline,
  strapline,
  endDateTime,
  externalLinks,
  internalLinks,
  startDateTime,
  featureImageFilename,
}) => {
  const eventLink = ({
    year: startDateTime.year,
    month: startDateTime.month,
    date: startDateTime.date,
    slug,
  });

  return (
    <li key={`entry_${id}`} className={styles.eventItem}>
      <Grid fit={false}>
        <Cell size={12}>
          <HR color="grey" customClassName=
            {styles.mobileHorizontalLine} />
          <DateBubble
              startDateTime={startDateTime}
              endDateTime={setEndDate(
                timeline,
                startDateTime,
                endDateTime)}
          />
        </Cell>
        <Cell size={1} key="event_picture_mobile" hideOn="mobileSM">
          <Link to="event" navigationData={eventLink}>
            <EventImage
              imgPath={eventImagePath(featureImageFilename)}
              imgAlt={title}
            />
          </Link>
        </Cell>
        <Cell size={12} breakOn="mobile">
          <Grid fit={false}>
              <Cell size={8} key='event_description'
                breakOn="mobileS"
              >
              <EventTitle
                eventLink={eventLink}
                eventTitle={title}
              />
              <div className={styles.eventDescription}>
                {strapline}
              </div>
              <EventNewsMeta
                internalLinks={internalLinks}
                externalLinks={externalLinks}
                tags={tags}
               />
            </Cell>
            <Cell size={4} key='event_picture' breakOn="mobileS"
              hideOn="mobileS">
              <Link to="event" navigationData={eventLink}>
                <EventImage
                  imgPath={eventImagePath(featureImageFilename)}
                  imgAlt={title}
                  href={eventLink}
                />
              </Link>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </li>
  );
};

EventsNewsListEntry.propTypes = {
  id: PropTypes.string.isRequired,
  strapline: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featureImageFilename: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  externalLinks: EventNewsMeta.propTypes.externalLinks,
  internalLinks: EventNewsMeta.propTypes.internalLinks,
  startDateTime: DateBubble.propTypes.startDateTime,
  endDateTime: DateBubble.propTypes.endDateTime,
  type: PropTypes.oneOf(['news', 'event']).isRequired,
  timeline: PropTypes.oneOf(['past', 'future', 'today']),
};

export default EventsNewsListEntry;
