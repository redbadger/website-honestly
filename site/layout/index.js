import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import CookieBanner from '../components/cookie-banner';
import Footer from '../components/footer';
import styles from './style.css';
import { getCookieValue } from '../components/utils';
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

  state = {
    showCookiesBanner: false,
  };

  getChildContext() {
    return { stateNavigator: this.props.stateNavigator };
  }

  componentDidMount = () => {
    const cookiesAccepted = getCookieValue('_cookies') === 'true';

    if (!cookiesAccepted) {
      this.setState({ showCookiesBanner: true });
    }

    logAmplitudeEvent('PAGE LOADED', { pageType: this.getPageType() }, true);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.title !== this.props.title) {
      logAmplitudeEvent('PAGE LOADED', { pageType: this.getPageType() }, true);
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

  updateCallback = () => this.setState({ showCookiesBanner: false });

  render() {
    return (
      <div className={styles.application}>
        {this.state.showCookiesBanner && <CookieBanner closeBanner={this.updateCallback} />}
        <Header />
        <div id="mainContent" className={styles.background}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
