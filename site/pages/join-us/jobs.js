import React, { Component } from 'react';
import Note from '../../components/note';
import HtmlParser from '../../components/html-parser';
import Wall from '../../components/wall';
import Link from '../../components/link';

import styles from "./index.css";

export default class Jobs extends Component {
  static propTypes = {
    jobs: React.PropTypes.arrayOf(React.PropTypes.shape({
      description: React.PropTypes.string,
      title: React.PropTypes.string,
    })) // eslint-disable-line comma-dangle
  };

  render() {
    const listings = this.props.jobs.map((job, index) => (
      <Note key={index}>
        <Link className={styles.title} to={`/about-us/join-us/${job.slug}`}>
          {job.title}
        </Link>
        <HtmlParser>{job.description}</HtmlParser>
      </Note>
    ));

    return (
      <div className="jobs">
        <Wall cols={3}>
          {listings}
        </Wall>
      </div>
    );
  }
}
