import Container from '../../components/container';
import React, { Component } from 'react';
import { fetchNews } from '../../actions/news';
import Section from '../../components/section';
import styles from './style.css';
import fetch from '../../util/fetch-proxy';
import { connect } from 'react-redux';
import EventsListEntry from '../../components/events-news-list-entry';

export class News extends Component {
  static fetchData = fetchNews(fetch());

  render() {
    return (
      <div>
        <h1 className={styles.h1}>News</h1>
        <Section>
          <Container>
            <ul className={styles.eventsList}>
              {
                this.props.news.map((newsItem) => (
                  <EventsListEntry
                    id={newsItem.id}
                    tags={newsItem.tags}
                    slug={newsItem.slug}
                    title={newsItem.title}
                    strapline={newsItem.strapline}
                    startDateTime={newsItem.datetime}
                    endDateTime={newsItem.endDateTime}
                    externalLinks={newsItem.externalLinks}
                    internalLinks={newsItem.internalLinks}
                    featureImageFilename={newsItem.featureImageFilename}
                    key={`key_${newsItem.id}`}
                    type="news"
                    timeline="past"
                  />
                ))
              }
            </ul>
          </Container>
        </Section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

export default connect(
  mapStateToProps
)(News);
