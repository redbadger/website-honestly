// @flow

import React from 'react';

import Link from '../link';
import SmallScreenNav from './small-screen-nav';

import styles from './style.css';
import Logo from './logo';

const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <Link to="homePage" data-link="header" title="Home" className={styles.logo}>
        <Logo />
      </Link>

      <nav className={styles.mediumScreenNavContainer}>
        <ul role="listbox" className={styles.mediumScreenNav}>
          <li className={styles.navItemWithChild}>
            <Link to="whatWeDoPage" data-link="header" activeCssClass={styles.activeNavLink}>
              What we do
            </Link>
            <ul className={styles.mediumScreenChildList}>
              <li>
                <Link to="experienceUs" activeCssClass={styles.activeNavLink}>
                  Experience us
                </Link>
              </li>
              <li>
                <Link to="technology" activeCssClass={styles.activeNavLink}>
                  Technology
                </Link>
              </li>
              <li>
                <Link to="ourWorkPage" data-link="header" activeCssClass={styles.activeNavLink}>
                  Our work
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItemWithChild}>
            <Link to="aboutUsPage" data-link="header" activeCssClass={styles.activeNavLink}>
              About us
            </Link>
            <ul className={styles.mediumScreenChildList}>
              <li>
                <Link to="badgers" data-link="header" activeCssClass={styles.activeNavLink}>
                  Our team
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="/blog" data-link="header">
              Blog
            </a>
          </li>
          <li>
            <Link to="events" data-link="header" activeCssClass={styles.activeNavLink}>
              Events
            </Link>
          </li>
          <li>
            <Link to="joinUs" data-link="header" activeCssClass={styles.activeNavLink}>
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
