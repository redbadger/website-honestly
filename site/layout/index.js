// @flow

import React, { type Node } from 'react';
import { StateNavigator } from 'navigation';
import { NavigationHandler } from 'navigation-react';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './style.css';
import logAmplitudeEvent, { fetchPageMetadata } from '../tracking/amplitude';

type Props = {
  title: string,
  stateNavigator: StateNavigator,
  children: Node,
};

export default class Layout extends React.Component<Props> {
  componentDidMount = () => {
    const { stateContext } = this.props.stateNavigator;
    logAmplitudeEvent('PAGE LOADED', fetchPageMetadata(stateContext));
    logAmplitudeEvent('ENTRY PAGE', fetchPageMetadata(stateContext), true);
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.title !== this.props.title) {
      const { stateContext } = this.props.stateNavigator;
      logAmplitudeEvent('PAGE LOADED', fetchPageMetadata(stateContext));
    }
  }

  render() {
    const { stateNavigator, children } = this.props;

    return (
      <NavigationHandler stateNavigator={stateNavigator}>
        <div className={styles.application}>
          <Header />
          <div id="mainContent" className={styles.background}>
            {children}
          </div>
          <Footer />
        </div>
      </NavigationHandler>
    );
  }
}
