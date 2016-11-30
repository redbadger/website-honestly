import Container from '../../components/container';
import React, { Component } from 'react';
import { fetchNewsItem } from '../../actions/news/news-item';
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

import marked from 'marked';
import Helmet from 'react-helmet';

export class NewsItem extends Component {
  static fetchData = fetchNewsItem(fetch());

  render() {
    const { newsItem, news } = this.props;

    // Only displaying limited amount of recent news
    // in the side link list
    const recentNews = news.slice(0, 5);

    return (
      <div className={styles.eventContainer}>
        <Helmet title={`${newsItem.title} | Red Badger`} />
        <Section>
          <Container>
            <Grid fit={false}>
              <Cell size={12} breakOn="mobile">
                <HR color="grey"
                  customClassName={styles.mobileHorizontalLine} />
                <DateBubble
                    startDateTime={newsItem.datetime}
                />
              </Cell>
              <Cell size={8} breakOn="mobile">
                <Grid fit={false}>
                  <Cell size={12} key='event_description' breakOn="mobileS">
                    <h2 className={styles.eventTitle}>
                      {newsItem.title}
                    </h2>
                    <div className={styles.eventDescription}>
                      {newsItem.strapline}
                    </div>
                    <div className={styles.eventBody}>
                      {
                        newsItem.body.map((el, i) =>
                          (<p key={i}>
                            {marked(el.text)}
                          </p>)
                        )
                      }
                    </div>
                    <EventNewsMeta
                      internalLinks={newsItem.internalLinks}
                      externalLinks={newsItem.externalLinks}
                      tags={newsItem.tags}
                     />
                  </Cell>
                </Grid>
                <HR color="grey" />
                <div className={styles.moreEvents}>
                  <a href="/about-us/news">
                    <span className={styles.arrowBack} />
                    <span>More news</span>
                  </a>
                </div>
              </Cell>
              <Cell size={3} breakOn="mobile">
                <EventsNewsSideList
                  entryList={recentNews}
                  title="Recent news"
                  entryType="news"
                />
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
    newsItem: state.newsItem || firstWithSlug(routeParams.slug)(state.news),
    news: state.news,
  };
}

export default connect(
  mapStateToProps
)(NewsItem);
