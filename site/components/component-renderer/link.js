import React from 'react';
import styles from './styles.css';

export default function Link({ children, href }) {
  return (
    <a className={styles.a} href={href}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: React.PropTypes.node,
  href: React.PropTypes.string.isRequired,
};
