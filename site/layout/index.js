import React, { PropTypes } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './style.css';

export default class Layout extends React.Component {
  static childContextTypes = {
    stateNavigator: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className={styles.application}>
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }

  getChildContext() {
    return { stateNavigator: this.props.stateNavigator };
  }
}
