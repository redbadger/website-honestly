import classnames from 'classnames';
import Layout from '../../components/layout';
import React, { Component } from 'react';
import styles from './style.css';

export default class Root extends Component {
  static propTypes = {
    background: React.PropTypes.oneOf(['error', 'none']),
    children: React.PropTypes.node,
  };

  static defaultProps = {
    background: 'none',
    children: [],
  };

  render() {
    const outerClass = classnames(styles.root, {
      [styles['error-background']]: this.props.background === 'error',
    });

    return (
      <div className={outerClass}>
        <Layout>
          {this.props.children}
        </Layout>
      </div>
    );
  }
}
