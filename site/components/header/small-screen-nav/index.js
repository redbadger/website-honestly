/* eslint-disable jsx-a11y/no-static-element-interactions */

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import styles from './style.css';
import Link from '../../link';

export default class SmallScreenNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    });
  }

  menu = (
    <div className={styles.overlay} key="SmallScreenNav">
      <div className={styles.overlayWrapper} >
        <label htmlFor="burger" className={styles.menuCloseButton}>Close</label>
        <nav className={styles.navigation} role="navigation">
          <ul role="listbox" className={styles.list} onClick={this.toggleMenu} onTouchEnd={this.toggleMenu}>
            <li><Link tabIndex={0} to="homePage">Home</Link></li>
            <li><Link tabIndex={0} to="whatWeDoPage">What we do</Link></li>
            <li><Link tabIndex={0} to="aboutUsPage">About Us</Link></li>
            <li><a tabIndex={0} href="/blog/">Blog</a></li>
            <li><a tabIndex={0} href="/about-us/events/">Events</a></li>
            <li><a tabIndex={0} href="/about-us/join-us/">Jobs</a></li>
            <li><a tabIndex={0} href="/about-us/contact-us/">Contact us</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )

  text = (
    <div className={styles.triggerContainer}>
      <label
        htmlFor="burger"
        className={styles.triggerLabel}
        onClick={this.toggleMenu}
        onTouchEnd={this.toggleMenu}
        >
        MENU
      </label>
    </div>
  );

  render() {
    const { navOpen } = this.state;

    const menu = navOpen ? this.menu : null;
    return (
      <div className={styles.smallScreen}>
        {this.text}
        <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.overlayEnter,
            leave: styles.overlayLeave,
            appear: 'appear',
          }}
          transitionEnterTimeout={100}
          transitionLeaveTimeout={200}
          >
          {menu}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
