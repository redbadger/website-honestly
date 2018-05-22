import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import CookieBanner from '../components/cookie-banner';
import Footer from '../components/footer';
import styles from './style.css';
import { getCookieValue } from '../components/utils';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    stateNavigator: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  static childContextTypes = {
    stateNavigator: PropTypes.object,
  };

  getChildContext() {
    return { stateNavigator: this.props.stateNavigator };
  }

  updateCallback = () => this.forceUpdate();

  render() {
    const cookiesAccepted = getCookieValue('_cookies') === 'true';

    return (
      <div className={styles.application}>
        {!cookiesAccepted && <CookieBanner closeBanner={this.updateCallback} />}
        <Header />
        <div id="mainContent" className={styles.background}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
