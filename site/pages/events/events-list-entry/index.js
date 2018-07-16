// @flow
import React from 'react';

import HR from '../../../components/hr';
import { Grid, Cell } from '../../../components/grid';
import EventMeta from '../../../components/event-meta';
import EventImage from '../../../components/event-image';
import DateBubble from '../../../components/date-bubble';
import type { DateShape } from '../../../components/date-bubble';
import type { LinkList } from '../../../pages/event/event-links-list';
import EventTitle from '../../../components/event-title';
import styles from '../events-list/style.css';
import { setEndDate } from '../../../fetchers/util/events';

import Link from '../../../components/link';

type EventsListEntryProps = {
  id: string,
  strapline?: string,
  slug: string,
  title: string,
  featureImageFilename: string,
  tags?: Array<string>,
  externalLinks: LinkList,
  internalLinks: LinkList,
  startDateTime: DateShape,
  endDateTime?: DateShape,
  type: 'news' | 'event',
  timeline?: 'past' | 'future' | 'today',
  location?: {
    address: string,
  },
};

const EventsListEntry = ({
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
  location,
}: EventsListEntryProps) => {
  const eventLink = {
    year: startDateTime.year,
    month: startDateTime.month,
    date: startDateTime.date,
    slug,
  };

  return (
    <li
      key={`entry_${id}`}
      className={styles.eventItem}
      itemScope
      itemType="http://schema.org/Event"
    >
      <span itemProp="location" itemScope itemType="http://schema.org/Place">
        {/* This is not exactly correct as Google reads it as the name of the location,
            and we pass it the full address, in one line (potentially, as the field
            in the CMS is just a text field). */}
        <span itemProp="address" content={location ? location.address : ''} />
      </span>
      <Grid fit={false}>
        <Cell size={12}>
          <HR color="grey" customClassName={styles.mobileHorizontalLine} />
          <DateBubble
            startDateTime={startDateTime}
            endDateTime={setEndDate(timeline, startDateTime, endDateTime)}
          />
        </Cell>
        <Cell size={1} key="event_picture_mobile" hideOn="mobileSM">
          <Link to="event" navigationData={eventLink}>
            <EventImage imgPath={featureImageFilename} imgAlt={title} />
          </Link>
        </Cell>
        <Cell size={12} breakOn="mobile">
          <Grid fit={false}>
            <Cell size={8} key="event_description" breakOn="mobileS">
              <EventTitle eventLink={eventLink} eventTitle={title} />
              <div className={styles.eventDescription}>{strapline}</div>
              <EventMeta internalLinks={internalLinks} externalLinks={externalLinks} tags={tags} />
            </Cell>
            <Cell size={4} key="event_picture" breakOn="mobileS" hideOn="mobileS">
              {/* using negative tabindex here as there is the exact same link on the heading,
                  making screen-readers go thourgh both */}
              <Link to="event" navigationData={eventLink} tabIndex="-1">
                <EventImage imgPath={featureImageFilename} imgAlt={title} href={eventLink} />
              </Link>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </li>
  );
};

export default EventsListEntry;
