/* eslint-disable react/jsx-pascal-case */

import Container from '../../components/container';
import React, { Component } from 'react';
import Section from '../../components/section';
import Link from '../../../../../site/components/link';

import styles from './style.css';

import HR from '../../components/hr';
import DateBubble from '../../components/date-bubble';
import EventNewsMeta from '../../components/event-news-meta';
import { setEndDate } from '../../../../../site/fetchers/util/events';

import marked from 'marked';

export default class Event extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className={styles.background}>
        <Section>
          <Container>
            <div className={styles.mainContainer}>
              <HR
                color="grey"
                customClassName={styles.mobileHorizontalLine}
              />
              <DateBubble
                startDateTime={event.startDateTime}
                endDateTime={setEndDate(
                  'today',
                  event.startDateTime,
                  event.endDateTime)
                }
              />
              <h2 className={styles.eventTitle}>
                {event.title}
              </h2>
              <div className={styles.twoColumn}>
                <div className={styles.event}>
                  <div className={styles.eventDescription}>
                    {event.strapline}
                  </div>
                  <div className={styles.eventBody}>
                    {
                      event.body.map((el, i) => <p className={styles.paragraph} key={i} dangerouslySetInnerHTML={{ __html: marked(el.text) }}></p>)
                    }
                  </div>
                  <EventNewsMeta
                    internalLinks={event.internalLinks}
                    externalLinks={event.externalLinks}
                    tags={event.tags}
                  />
                  <HR color="grey" />
                  <div className={styles.moreEvents}>
                    <Link to="events">
                      <span>More events</span>
                    </Link>
                  </div>
                </div>
                <div>
                  {event.featureImageFilename && <img
                    role="presentation"
                    className={styles.eventImg}
                    src={`${event.featureImageFilename}`}
                  />}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    );
  }
}
