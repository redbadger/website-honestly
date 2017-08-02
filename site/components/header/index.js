import React from 'react';
import InlineSVG from 'svg-inline-react';
import ReactGA from 'react-ga';

import Link from '../link';
import SmallScreenNav from './small-screen-nav';

import styles from './style.css';
import logo from './logo.svg';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'HeaderNavigation',
    action: title,
    label: `From: ${window.location.pathname}`,
  });
  
const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <Link to="homePage" title="Home" className={styles.logo}>
        <InlineSVG src={logo} title="Red Badger logo" />
      </Link>

      <nav className={styles.mediumScreenNavContainer} role="navigation">
        <ul role="listbox" className={styles.mediumScreenNav}>
          <li>
            <Link to="whatWeDoPage" activeCssClass={styles.activeNavLink}>
              What we do
            </Link>
          </li>
          <li>
            <Link to="aboutUsPage" activeCssClass={styles.activeNavLink}>
              About us
            </Link>
          </li>
          <li><a href="/blog/">Blog</a></li>
          <li>
            <Link to="events" activeCssClass={styles.activeNavLink}>
              Events
            </Link>
          </li>
          <li>
            <Link to="joinUs" activeCssClass={styles.activeNavLink} onClick={trackAnalytics('Jobs')}>
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
