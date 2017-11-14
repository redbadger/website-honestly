import React from 'react';
import styles from '../../css/typography/_fonts.css';

export default function Paragraph({ children }) {
  return <strong className={styles.boldSansSerif}>{children}</strong>;
}

Paragraph.propTypes = {
  children: React.PropTypes.node.isRequired,
};
