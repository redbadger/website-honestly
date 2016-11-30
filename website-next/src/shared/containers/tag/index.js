import Container from '../../components/container';
import React, { Component } from 'react';
import { fetchTags } from '../../actions/tags';
import Section from '../../components/section';
import styles from './style.css';
import fetch from '../../util/fetch-proxy';
import { connect } from 'react-redux';
import EventsList from '../../components/events-list';
import NewsList from '../../components/news-list';

export class Tag extends Component {
  static fetchData = fetchTags(fetch());

  render() {
    const { tag, events, news } = this.props;

    const eventsList =
      (Array.isArray(events) && events.length > 0)
      ? (
        <div>
          <h2 className={styles.h2}>Events</h2>
          <EventsList events={events} />
        </div>
        ) : null;
    const newsList =
      (Array.isArray(news) && news.length > 0)
      ? (
        <div>
          <h2 className={styles.h2}>News</h2>
          <NewsList news={news} />
        </div>
        ) : null;

    return (
      <div>
        <Section>
          <Container>
            <h1 className={styles.h1}>
              <span className={styles.headingLeadLine}>
                Blogs, ideas, events tagged with
              </span>
              {tag}
            </h1>
            {eventsList}
            {newsList}
            {
              (!eventsList && !newsList) ?
              <p>
                {`We don't have anything related to "${tag}" at the moment`}
              </p>
              : null
            }
          </Container>
        </Section>
      </div>
    );
  }
}

function mapStateToProps(state, { routeParams }) {
  return {
    tag: routeParams.tag,
    events: state.events.filter((event) => (
      event.tags.indexOf(routeParams.tag) !== -1
    )),
    news: state.news.filter((newsItem) => (
      newsItem.tags.indexOf(routeParams.tag) !== -1
    )),
  };
}

export default connect(
  mapStateToProps
)(Tag);
