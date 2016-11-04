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
    this.setState({
      navOpen: event.target.checked,
    });
  }

  closeMenu = () => {
    this.input.checked = false;
  }

  render() {
    const { navOpen } = this.state;
    const navTabIndex = navOpen ? 0 : -1;
    return (
      <div className={styles.smallScreenNavComponent}>
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
          ref={c => { this.input = c; }}
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
            hidden={!navOpen}
          >
            <label htmlFor="burger" className={styles.menuCloseButton}>Close</label>

            <nav className={styles.smallScreenNavContainer} role="navigation">
              <ul role="listbox" className={styles.smallScreenNav}>
                <li><Link tabIndex={navTabIndex} to="homePage">Home</Link></li>
                <li><a tabIndex={navTabIndex} href="/about-us/">About us</a></li>
                <li><Link tabIndex={navTabIndex} to="whatWeDoPage">What we do</Link></li>
                <li><a tabIndex={navTabIndex} href="http://red-badger.com/blog/">Blog</a></li>
                <li><a tabIndex={navTabIndex} href="/about-us/events/">Events</a></li>
                <li><a tabIndex={navTabIndex} href="/about-us/join-us/">Jobs</a></li>
                <li><a tabIndex={navTabIndex} href="/about-us/contact-us/">Contact us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
