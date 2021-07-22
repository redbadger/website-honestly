// @flow

import React, { type Node } from 'react';
import { StateNavigator } from 'navigation';
import { NavigationHandler } from 'navigation-react';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './style.css';

type Props = {
  title: string,
  stateNavigator: StateNavigator,
  children: Node,
};

const Layout = ({ stateNavigator, children }: Props) => {
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
};

export default Layout;
