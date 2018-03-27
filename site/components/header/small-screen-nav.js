// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import ReactGA from 'react-ga';

import styles from './style.css';
import Link from '../link';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'MobileSideNavigation',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

type State = {
  navOpen: boolean,
};

export default class SmallScreenNav extends React.Component<any, State> {
  constructor() {
    super();
    this.state = {
      navOpen: false,
    };
  }

  
  smallScreenNav: HTMLInputElement | HTMLDivElement;

  documentBodyLock = () => {
    // $FlowIgnore
    document.getElementById('mainContent').setAttribute('aria-hidden', 'true');
    // $FlowIgnore
    document.body.style.position = 'fixed';
    this.smallScreenNav.scrollTop = 0;
  };

  documentBodyRelease = () => {
    // $FlowIgnore
    document.getElementById('mainContent').removeAttribute('aria-hidden');
    // $FlowIgnore
    document.body.style.position = 'relative';
  };

  handleInputChange = (event: SyntheticInputEvent<any>) => {
    if (event.target.checked) {
      this.documentBodyLock();
    } else {
      this.documentBodyRelease();
    }
    this.setState({
      navOpen: event.target.checked,
    });
  };

  closeMenu = () => {
    this.documentBodyRelease();
    this.setState({
      navOpen: false,
    });
    return true;
  };

  render() {
    const { navOpen } = this.state;
    const navTabIndex = navOpen ? 0 : -1;

    return (
      <div className={styles.smallScreenNavComponent}>
        <div className={styles.triggerContainer}>
          <label htmlFor="burger" className={styles.triggerLabel} hidden={navOpen}>
            MENU
          </label>
        </div>
        <input
          type="checkbox"
          className={styles.trigger}
          id="burger"
          checked={navOpen}
          onChange={this.handleInputChange}
          hidden
        />

        <div className={styles.overlay}>
          <div className={styles.smallScreenNavMargin} onClick={this.closeMenu} />
          <div
            ref={c => {
              // $FlowIgnore
              this.smallScreenNav = c;
            }}
            className={styles.smallScreenNavWrapper}
          >
            <label htmlFor="burger" className={styles.menuCloseButton}>
              Close
            </label>

            <nav className={styles.smallScreenNavContainer} role="navigation">
              <ul role="listbox" className={styles.smallScreenNav}>
                <li>
                  <Link tabIndex={navTabIndex} to="homePage" navigating={this.closeMenu}>
                    <span onClick={trackAnalytics('Home')}>Home</span>
                  </Link>
                </li>
                <li>
                  <Link tabIndex={navTabIndex} to="whatWeDoPage" navigating={this.closeMenu}>
                    <span onClick={trackAnalytics('What we do')}>What we do</span>
                  </Link>
                  <ul className={styles.childList}>
                    <li>
                      <Link tabIndex={navTabIndex} to="technology" navigating={this.closeMenu}>
                        <span onClick={trackAnalytics('Technology')}>Technology</span>
                      </Link>
                    </li>
                    <li>
                      <Link tabIndex={navTabIndex} to="ourWorkPage" navigating={this.closeMenu}>
                        <span onClick={trackAnalytics('Our work')}>Our work</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link tabIndex={navTabIndex} to="aboutUsPage" navigating={this.closeMenu}>
                    <span onClick={trackAnalytics('About us')}>About us</span>
                  </Link>
                  <ul className={styles.childList}>
                    <li>
                      <Link tabIndex={navTabIndex} to="badgers" navigating={this.closeMenu}>
                        <span onClick={trackAnalytics('Our team')}>Our team</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a tabIndex={navTabIndex} href="/blog">
                    <span onClick={trackAnalytics('Blog')}>Blog</span>
                  </a>
                </li>
                <li>
                  <Link tabIndex={navTabIndex} to="events" navigating={this.closeMenu}>
                    <span onClick={trackAnalytics('Events')}>Events</span>
                  </Link>
                </li>
                <li>
                  <Link tabIndex={navTabIndex} to="joinUs" navigating={this.closeMenu}>
                    <span onClick={trackAnalytics('Jobs')}>Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link
                    tabIndex={navTabIndex}
                    to="homePage"
                    navigationData={{ contactUs: true }}
                    navigating={this.closeMenu}
                  >
                    <span onClick={trackAnalytics('Contact us - HomePage')}>Contact us</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
