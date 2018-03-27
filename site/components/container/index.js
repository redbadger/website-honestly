// @flow
/*
* This component is ported from Website Next and is meant to be
* used only by Jobs and Events components
*/

import * as React from 'react';
import styles from './style.css';

type ContainerProps = {
  children?: React.Node
};

export default class Container extends React.Component<ContainerProps> {

  static defaultProps = {
    children: [],
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}
