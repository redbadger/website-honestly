/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';

import styles from './style.css';
import Link from '../link';

export default class SmallScreenNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };
  }

  documentBodyLock = () => {
    document.getElementById('mainContent').setAttribute('aria-hidden', true);
    document.body.style.position = 'fixed';
    this.smallScreenNav.scrollTop = 0;
  };

  documentBodyRelease = () => {
    document.getElementById('mainContent').removeAttribute('aria-hidden');
    document.body.style.position = 'relative';
  };

  handleInputChange = event => {
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
              this.smallScreenNav = c;
            }}
            className={styles.smallScreenNavWrapper}
          >
            <label htmlFor="burger" className={styles.menuCloseButton}>Close</label>

            <nav className={styles.smallScreenNavContainer} role="navigation">
              <ul role="listbox" className={styles.smallScreenNav}>
                <li>
                  <Link tabIndex={navTabIndex} to="homePage" navigating={this.closeMenu}>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link tabIndex={navTabIndex} to="aboutUsPage" navigating={this.closeMenu}>
                    <span>About us</span>
                  </Link>
                </li>
                <li>
                  <Link tabIndex={navTabIndex} to="whatWeDoPage" navigating={this.closeMenu}>
                    <span>What we do</span>
                  </Link>
                </li>
                <li><a tabIndex={navTabIndex} href="/blog/"><span>Blog</span></a></li>
                <li>
                  <Link tabIndex={navTabIndex} to="events" navigating={this.closeMenu}>
                    <span>Events</span>
                  </Link>
                </li>
                <li>
                  <Link tabIndex={navTabIndex} to="joinUs" navigating={this.closeMenu}>
                    <span>Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link
                    tabIndex={navTabIndex}
                    to="homePage"
                    navigationData={{ contactUs: true }}
                    navigating={this.closeMenu}
                  >
                    <span>Contact us</span>
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
