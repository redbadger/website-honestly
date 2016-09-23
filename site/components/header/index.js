import React from 'react';
import styles from './style.css';

const Header = () => {
  return (
    <header>
      <div className={styles.logo} />
      <ul>
        <li><a href="/services/">Services</a></li>
        <li><a href="/about-us/">About us</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/about-us/events/">Events</a></li>
      </ul>
    </header>
  );
};

export default Header;
