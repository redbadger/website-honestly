import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './style.css';
import logAmplitudeEvent, { fetchPageMetadata } from '../tracking/amplitude';

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
    const { stateContext } = this.props.stateNavigator;
    logAmplitudeEvent('PAGE LOADED', fetchPageMetadata(stateContext));
  };

  componentDidUpdate = prevProps => {
    if (prevProps.title !== this.props.title) {
      const { stateContext } = this.props.stateNavigator;
      logAmplitudeEvent('PAGE LOADED', fetchPageMetadata(stateContext));
    }
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
