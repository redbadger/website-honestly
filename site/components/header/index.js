import React from 'react';
import InlineSVG from 'svg-inline-react';

import SmallScreenNav from './small-screen-nav';

import styles from './style.css';
import logoSVG from './rb-logo-placeholder.svg';

const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <a href="/" title="Home" className={styles.logo}>
        <span className={styles.screenReaderText}>Red Badger</span>
        <InlineSVG src={logoSVG} />
      </a>

      <nav className={styles.mediumScreenNavContainer} role="navigation">
        <ul className={styles.mediumScreenNav}>
          <li><a href="/what-we-do/">What we do</a></li>
          <li><a href="/about-us/">About us</a></li>
          <li><a href="http://red-badger.com/blog/">Blog</a></li>
          <li><a href="/about-us/events/">Events</a></li>
        </ul>
      </nav>

      <SmallScreenNav />

    </header>
  );
};

export default Header;
