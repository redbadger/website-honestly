import Container from '../../components/container';
import React, { Component } from 'react';
import { fetchEvent } from '../../actions/events/event';
import Section from '../../components/section';
import styles from './style.css';
import fetch from '../../util/fetch-proxy';
import { connect } from 'react-redux';
import { filter, flow, head, property } from 'lodash/fp';
import isEqual from 'lodash/isEqual'; // lodash fp isEqual is broken in 4.0.0

import HR from '../../components/hr';
import { Grid, Cell } from '../../components/grid';
import DateBubble from '../../components/date-bubble';
import EventsNewsSideList from '../../components/events-news-side-list';
import EventNewsMeta from '../../components/event-news-meta';

import { splitEvents, setEndDate } from '../../util/events';

import marked from 'marked';
import Helmet from 'react-helmet';

export class Event extends Component {
  static fetchData = fetchEvent(fetch());

  render() {
    const { event, events } = this.props;
    const futureEvents = splitEvents({
      events,
      timeline: 'future',
      reverse: true,
    });
    const todayEvents = splitEvents({
      events,
      timeline: 'today',
    });


    return (
      <div className={styles.eventContainer}>
        <Helmet title={`${event.title} | Red Badger`} />
        <Section>
          <Container>
            <Grid fit={false}>
              <Cell size={12} breakOn="mobile">
                <HR color="grey"
                  customClassName={styles.mobileHorizontalLine} />
                <DateBubble
                    startDateTime={event.startDateTime}
                    endDateTime={setEndDate(
                      'today',
                      event.startDateTime,
                      event.endDateTime)}
                />
              </Cell>
              <Cell size={8} breakOn="mobile">
                <Grid fit={false}>
                  <Cell size={12} key='event_description' breakOn="mobileS">
                    <h2 className={styles.eventTitle}>
                      {event.title}
                    </h2>
                    <div className={styles.eventDescription}>
                      {event.strapline}
                    </div>
                    <div className={styles.eventBody}>
                      {
                        event.body.map((el, i) =>
                          (<p key={i}>
                            {marked(el.text)}
                          </p>)
                        )
                      }
                    </div>
                    <EventNewsMeta
                      internalLinks={event.internalLinks}
                      externalLinks={event.externalLinks}
                      tags={event.tags}
                     />
                  </Cell>
                </Grid>
                <HR color="grey" />
                <div className={styles.moreEvents}>
                  <a href="/about-us/events">
                    <span className={styles.arrowBack} />
                    <span>More events</span>
                  </a>
                </div>
              </Cell>
              <Cell size={3} breakOn="mobile">
                { todayEvents.length ?
                  <EventsNewsSideList
                    entryList={todayEvents}
                    title='Today'
                    entryType='event' />
                  : []
                }
                { futureEvents.length ?
                  <EventsNewsSideList
                    entryList={futureEvents}
                    title='Upcoming'
                    entryType='event' />
                  : []
                }
              </Cell>
            </Grid>
          </Container>
        </Section>
      </div>
    );
  }
}

// This can be made much nicer when lodash 4.0.1 is released
function firstWithSlug(slug) {
  return flow(
    filter((event) => isEqual(slug, property('slug')(event))),
    head
  );
}

function mapStateToProps(state, { routeParams }) {
  return {
    event: state.event || firstWithSlug(routeParams.slug)(state.events),
    events: state.events,
  };
}

export default connect(
  mapStateToProps
)(Event);
