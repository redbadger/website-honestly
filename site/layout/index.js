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

    logAmplitudeEvent('PAGE LOADED', { url: window.location.href }, true);

    if (!cookiesAccepted) {
      this.setState({ showCookiesBanner: true });
    }
  };

  componentDidUpdate(prevprops) {
    if (prevprops.stateNavigator !== this.props.stateNavigator) {
      logAmplitudeEvent('PAGE LOADED', { url: window.location.href }, true);
    }
  }

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
