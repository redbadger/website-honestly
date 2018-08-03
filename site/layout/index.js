import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './style.css';
import logAmplitudeEvent from '../tracking/amplitude';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    stateNavigator: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    title: PropTypes.string.isRequired,
  };

  static childContextTypes = {
    stateNavigator: PropTypes.object,
  };

  getChildContext() {
    return { stateNavigator: this.props.stateNavigator };
  }

  componentDidMount = () => {
    logAmplitudeEvent('PAGE LOADED', { pageType: this.getPageType() });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.title !== this.props.title) {
      logAmplitudeEvent('PAGE LOADED', { pageType: this.getPageType() });
    }
  };

  getPageType = () => {
    const pathnameArray = window.location.pathname.split('/');

    if (pathnameArray[1] === 'events') {
      return 'events';
    } else if (pathnameArray.length > 2) {
      return pathnameArray[2];
    }
    return pathnameArray[1];
  };

  render() {
    return (
      <div className={styles.application}>
        <Header />
        <div id="mainContent" className={styles.background}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
