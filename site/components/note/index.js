import React from 'react';
import styles from './style.css';

export default function Note({ children }) {
  return <div className={styles.note}>{children}</div>;
}

Note.propTypes = {
  children: React.PropTypes.node.isRequired,
};
