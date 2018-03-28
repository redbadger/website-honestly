// @flow
/* eslint-disable react/jsx-pascal-case, react/no-danger */
import React from 'react';

import Container from '../../components/container';
import Section from '../../components/section';
import Link from '../../components/link';
import HR from '../../components/hr';
import DateBubble from '../../components/date-bubble';
import EventMeta from '../../components/event-meta';
import type { LinkList } from '../../pages/event/event-links-list';

import styles from './style.css';

import { setEndDate } from '../../fetchers/util/events';

type DateShape = {
  date: string,
  monthSym: string,
  year: string,
  month?: string,
};

type EventProps = {
  event: {
    startDateTime: DateShape,
    endDateTime?: DateShape,
    title: string,
    strapline: string,
    body: Array<{ text: string }>,
    internalLinks: LinkList,
    externalLinks: LinkList,
    featureImageFilename: string,
  },
};

export default function Event({ event }: EventProps) {
  return (
    <div className={styles.background}>
      <Section>
        <Container>
          <div className={styles.mainContainer}>
            <HR color="grey" customClassName={styles.mobileHorizontalLine} />
            <DateBubble
              startDateTime={event.startDateTime}
              endDateTime={setEndDate('today', event.startDateTime, event.endDateTime)}
            />
            <h2 className={styles.eventTitle}>{event.title}</h2>
            <div className={styles.twoColumn}>
              <div className={styles.event}>
                <div className={styles.eventDescription}>{event.strapline}</div>
                <div className={styles.eventBody}>
                  {event.body.map((el, i) => (
                    <p
                      className={styles.paragraph}
                      key={i}
                      dangerouslySetInnerHTML={{ __html: el.text }}
                    />
                  ))}
                </div>
                <EventMeta
                  internalLinks={event.internalLinks}
                  externalLinks={event.externalLinks}
                />
                <HR color="grey" />
                <div className={styles.moreEvents}>
                  <Link to="events">
                    <span>More events</span>
                  </Link>
                </div>
              </div>
              <div>
                {event.featureImageFilename && (
                  <img
                    role="presentation"
                    className={styles.eventImg}
                    src={`${event.featureImageFilename}`}
                    alt={event.title}
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
