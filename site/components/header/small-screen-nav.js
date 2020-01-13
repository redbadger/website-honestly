// @flow

import React from 'react';

import styles from './style.css';
import Link from '../link';

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

  smallScreenNav: HTMLElement;

  documentBodyLock = () => {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    mainContent.setAttribute('aria-hidden', 'true');
    if (!document.body) return;
    document.body.style.position = 'fixed';
    this.smallScreenNav.scrollTop = 0;
  };

  documentBodyRelease = () => {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    mainContent.removeAttribute('aria-hidden');
    if (!document.body) return;
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
        {!navOpen && (
          <div className={styles.triggerContainer}>
            <label htmlFor="burger" className={styles.triggerLabel}>
              MENU
            </label>
          </div>
        )}
        <input
          type="checkbox"
          className={styles.trigger}
          id="burger"
          checked={navOpen}
          onChange={this.handleInputChange}
          hidden
        />

        <div className={styles.overlay}>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div className={styles.smallScreenNavMargin} onClick={this.closeMenu} />
          <div
            ref={c => {
              if (c) this.smallScreenNav = c;
            }}
            className={styles.smallScreenNavWrapper}
          >
            {navOpen && (
              <label htmlFor="burger" className={styles.menuCloseButton}>
                Close
              </label>
            )}

            <nav className={styles.smallScreenNavContainer}>
              <ul role="listbox" className={styles.smallScreenNav}>
                <li>
                  <Link
                    data-link="header"
                    tabIndex={navTabIndex}
                    to="homePage"
                    navigating={this.closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    data-link="header"
                    tabIndex={navTabIndex}
                    to="whatWeDoPage"
                    navigating={this.closeMenu}
                  >
                    What we do
                  </Link>
                  <ul className={styles.childList}>
                    <li>
                      <Link
                        to="experienceUs"
                        data-link="header"
                        activeCssClass={styles.activeNavLink}
                        navigating={this.closeMenu}
                      >
                        Experience us
                      </Link>
                    </li>
                    <li>
                      <Link
                        data-link="header"
                        tabIndex={navTabIndex}
                        to="technology"
                        navigating={this.closeMenu}
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        data-link="header"
                        tabIndex={navTabIndex}
                        to="ourWorkPage"
                        navigating={this.closeMenu}
                      >
                        Our work
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    data-link="header"
                    tabIndex={navTabIndex}
                    to="aboutUsPage"
                    navigating={this.closeMenu}
                  >
                    About us
                  </Link>
                  <ul className={styles.childList}>
                    <li>
                      <Link
                        data-link="header"
                        tabIndex={navTabIndex}
                        to="badgers"
                        navigating={this.closeMenu}
                      >
                        Our team
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a tabIndex={navTabIndex} href="/blog">
                    Blog
                  </a>
                </li>
                <li>
                  <Link
                    data-link="header"
                    tabIndex={navTabIndex}
                    to="events"
                    navigating={this.closeMenu}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    data-link="header"
                    tabIndex={navTabIndex}
                    to="joinUs"
                    navigating={this.closeMenu}
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    data-link="header"
                    tabIndex={navTabIndex}
                    to="homePage"
                    navigationData={{ contactUs: true }}
                    navigating={this.closeMenu}
                  >
                    Contact us
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
