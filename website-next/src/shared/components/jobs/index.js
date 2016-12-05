import React, { Component } from 'react';
import Note from '../note';
import HtmlParser from '../html-parser';
import styles from './style.css';
import { connect } from 'react-redux';
import Link from '../../../../../site/components/link';
import Wall from '../wall';

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
        <Link className={styles.title} to='job' navigationData={{ slug: job.slug }}>
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
