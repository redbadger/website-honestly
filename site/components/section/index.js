/*
* This component is ported from Website Next and is meant to be
* used only by Jobs and Events components
*/

import React from 'react';
import styles from './style.css';

export default function Section({ children }) {
  return (
    <section className={styles.section}>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: React.PropTypes.node,
};
