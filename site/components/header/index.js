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
          <li onClick={trackAnalytics('What we do')}>
            <Link to="whatWeDoPage" activeCssClass={styles.activeNavLink}>
              What we do
            </Link>
          </li>
          <li onClick={trackAnalytics('About us')}>
            <Link to="aboutUsPage" activeCssClass={styles.activeNavLink}>
              About us
            </Link>
          </li>
          <li>
            <a onClick={trackAnalytics('Blog')} href="/blog/">Blog</a>
          </li>
          <li onClick={trackAnalytics('Events')}>
            <Link to="events" activeCssClass={styles.activeNavLink}>
              Events
            </Link>
          </li>
        </ul>
      </nav>

      <SmallScreenNav />

    </header>
  );
};

export default Header;
