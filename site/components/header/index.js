import React from 'react';
import InlineSVG from 'svg-inline-react';

import Link from '../link';
import SmallScreenNav from './small-screen-nav';

import styles from './style.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <Link to="homePage" title="Home" className={styles.logo}>
        <InlineSVG src={logo} />
      </Link>

      <nav className={styles.mediumScreenNavContainer} role="navigation">
        <ul className={styles.mediumScreenNav}>
          <li><Link to="whatWeDoPage">What we do</Link></li>
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
