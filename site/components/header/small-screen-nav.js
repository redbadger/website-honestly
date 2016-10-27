/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';

import styles from './style.css';
import Link from '../link';

export default class SmallScreenNav extends React.Component {
  closeMenu = () => {
    this.input.checked = false;
  }

  render() {
    return (
      <div className={styles.smallScreenNavComponent}>
        <div className={styles.triggerContainer}>
          <label htmlFor="burger" className={styles.triggerLabel}>MENU</label>
        </div>
        <input
          type="checkbox"
          className={styles.trigger}
          id="burger"
          ref={c => { this.input = c; }}
        />

        <div className={styles.overlay}>
          <div
            className={styles.smallScreenNavMargin}
            onClick={this.closeMenu}
          />
          <div className={styles.smallScreenNavWrapper}>
            <label htmlFor="burger" className={styles.menuCloseButton}>Close</label>

            <nav className={styles.smallScreenNavContainer} role="navigation">
              <ul className={styles.smallScreenNav}>
                <li><Link to="homePage">Home</Link></li>
                <li><a href="/about-us/">About us</a></li>
                <li><Link to="whatWeDoPage">What we do</Link></li>
                <li><a href="http://red-badger.com/blog/">Blog</a></li>
                <li><a href="/about-us/events/">Events</a></li>
                <li><a href="/about-us/join-us/">Jobs</a></li>
                <li><a href="/about-us/contact-us/">Contact us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
