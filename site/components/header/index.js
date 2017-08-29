// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import InlineSVG from 'svg-inline-react';
import ReactGA from 'react-ga';

import Link from '../link';
import SmallScreenNav from './small-screen-nav';

import styles from './style.css';
import logo from './logo.svg';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'DesktopHeaderNavigation',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <Link to="homePage" title="Home" className={styles.logo}>
        <InlineSVG src={logo} title="Red Badger logo" onClick={trackAnalytics('Home')} />
      </Link>

      <nav className={styles.mediumScreenNavContainer} role="navigation">
        <ul role="listbox" className={styles.mediumScreenNav}>
          <li>
            <Link to="whatWeDoPage" activeCssClass={styles.activeNavLink}>
              <span onClick={trackAnalytics('What we do')}>
                What we do
              </span>
            </Link>
          </li>
          <li>
            <Link to="aboutUsPage" activeCssClass={styles.activeNavLink}>
              <span onClick={trackAnalytics('About us')}>
                About us
              </span>
            </Link>
          </li>
          <li>
            <a href="/blog">
              <span onClick={trackAnalytics('Blog')}>Blog</span>
            </a>
          </li>
          <li>
            <Link to="events" activeCssClass={styles.activeNavLink}>
              <span onClick={trackAnalytics('Events')}>
                Events
              </span>
            </Link>
          </li>
          <li>
            <Link to="joinUs" activeCssClass={styles.activeNavLink}>
              <span onClick={trackAnalytics('Jobs')}>
                Jobs
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <SmallScreenNav />

    </header>
  );
};

export default Header;
