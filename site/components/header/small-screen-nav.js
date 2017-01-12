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

  handleInputChange = event => {
    this.scrollLock();
    this.setState({
      navOpen: event.target.checked,
    });
  }

  closeMenu = () => {
    this.scrollRelease();
    this.setState({
      navOpen: false,
    });
    return true;
  }

  scrollLock = () => {
    this.smallScreenNav.addEventListener('wheel', this.onScrollHandler, false);
    this.smallScreenNav.addEventListener('touchmove', this.onScrollHandler, false);
  }

  scrollRelease = () => {
    this.smallScreenNav.removeEventListener('wheel', this.onScrollHandler, false);
    this.smallScreenNav.removeEventListener('touchmove', this.onScrollHandler, false);
  }

  onScrollHandler = e => {
    e.stopImmediatePropagation();
    e.preventDefault();
  }

  componentWillUnmount = () => {
    this.scrollRelease();
  }

  render() {
    const { navOpen } = this.state;
    const navTabIndex = navOpen ? 0 : -1;

    return (
      <div ref={c => { this.smallScreenNav = c; }} className={styles.smallScreenNavComponent}>
        <div className={styles.triggerContainer}>
          <label
            htmlFor="burger"
            className={styles.triggerLabel}
            hidden={navOpen}
          >
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
          <div
            className={styles.smallScreenNavMargin}
            onClick={this.closeMenu}
          />
          <div
            className={styles.smallScreenNavWrapper}
          >
            <label htmlFor="burger" className={styles.menuCloseButton}>Close</label>

            <nav className={styles.smallScreenNavContainer} role="navigation">
              <ul role="listbox" className={styles.smallScreenNav}>
                <li><Link tabIndex={navTabIndex} to="homePage" navigating={this.closeMenu}>Home</Link></li>
                <li><Link tabIndex={navTabIndex} to="aboutUsPage" navigating={this.closeMenu}>About us</Link></li>
                <li><Link tabIndex={navTabIndex} to="whatWeDoPage" navigating={this.closeMenu}>What we do</Link></li>
                <li><a tabIndex={navTabIndex} href="/blog/">Blog</a></li>
                <li><Link tabIndex={navTabIndex} to="events" navigating={this.closeMenu}>Events</Link></li>
                <li><Link tabIndex={navTabIndex} to="joinUs" navigating={this.closeMenu}>Jobs</Link></li>
                <li><Link tabIndex={navTabIndex} to="homePage" navigationData={{ contactUs: true }} navigating={this.closeMenu}>Contact us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
