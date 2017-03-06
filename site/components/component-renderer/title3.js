import React from 'react';
import styles from './styles.css';

export default function Title3({ children }) {
  return <h3 className={styles.h3}>{children}</h3>;
}

Title3.propTypes = {
  children: React.PropTypes.node,
};
