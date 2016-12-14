import React from 'react';
import styles from './style.css';
import Navigator from './navigator';
import First from './first';

class TimelineSlice extends React.Component {

  componentWillMount() {
    this.state = {
      currentPage: '',
    };
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div className={styles.timeline}>
        <Navigator />
        <div className={styles.content}>
          <First />
        </div>
      </div>
    );
  }
}

export default TimelineSlice;
