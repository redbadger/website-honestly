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
            <Link
              to="whatWeDoPage"
              data-link="header"
              activeCssClass={styles.activeNavLink}
              data-cy="whatWeDoLink"
            >
              What we do
            </Link>
            <ul className={styles.mediumScreenChildList}>
              <li>
                <Link
                  to="experienceUs"
                  data-link="header"
                  activeCssClass={styles.activeNavLink}
                  data-cy="experienceUsLink"
                >
                  Experience us
                </Link>
              </li>
              <li>
                <Link
                  to="technology"
                  data-link="header"
                  activeCssClass={styles.activeNavLink}
                  data-cy="technologyLink"
                >
                  Technology
                </Link>
              </li>
              <li>
                <a href="/our-work" data-link="header" data-cy="ourWorkLink">
                  Our work
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.navItemWithChild}>
            <Link
              to="aboutUsPage"
              data-link="header"
              activeCssClass={styles.activeNavLink}
              data-cy="aboutUsLink"
            >
              About us
            </Link>
            <ul className={styles.mediumScreenChildList}>
              <li>
                <Link
                  to="badgers"
                  data-link="header"
                  activeCssClass={styles.activeNavLink}
                  data-cy="meetOurTeamLink"
                >
                  Our team
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://content.red-badger.com/" data-link="header" data-cy="blogLink">
              Insights
            </a>
          </li>
          <li>
            <Link
              to="events"
              data-link="header"
              activeCssClass={styles.activeNavLink}
              data-cy="eventsLink"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="joinUs"
              data-link="header"
              activeCssClass={styles.activeNavLink}
              data-cy="joinUsLink"
            >
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
