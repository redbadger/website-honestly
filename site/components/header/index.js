// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */

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
        <InlineSVG src={logo} title="Red Badger logo" />
      </Link>

      <nav className={styles.mediumScreenNavContainer}>
        <ul role="listbox" className={styles.mediumScreenNav}>
          <li className={styles.navItemWithChild}>
            <Link to="whatWeDoPage" activeCssClass={styles.activeNavLink}>
              What we do
            </Link>
            <ul className={styles.mediumScreenChildList}>
              <li>
                <Link to="technology" activeCssClass={styles.activeNavLink}>
                  Technology
                </Link>
              </li>
              <li>
                <Link to="ourWorkPage" activeCssClass={styles.activeNavLink}>
                  Our work
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItemWithChild}>
            <Link to="aboutUsPage" activeCssClass={styles.activeNavLink}>
              About us
            </Link>
            <ul className={styles.mediumScreenChildList}>
              <li>
                <Link to="badgers" activeCssClass={styles.activeNavLink}>
                  Our team
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <Link to="events" activeCssClass={styles.activeNavLink}>
              Events
            </Link>
          </li>
          <li>
            <Link to="joinUs" activeCssClass={styles.activeNavLink}>
              Jobs
            </Link>
          </li>
        </ul>
      </nav>
      <SmallScreenNav />
    </header>
  );
};

export default Header;
