/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';

import styles from './style.css';

const NavItem = ({ href, tabIndex, text }) => (
  <li><a href={href} tabIndex={tabIndex}>{text}</a></li>
);

const { number, string } = React.PropTypes;
NavItem.propTypes = {
  href: string.isRequired,
  tabIndex: number.isRequired,
  text: string.isRequired,
};

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
    const navItems = [
      {
        href: '/about-us/',
        text: 'About us',
      },
      {
        href: '/what-we-do/',
        text: 'What we do',
      },
      {
        href: 'http://red-badger.com/blog/',
        text: 'Blog',
      },
      {
        href: '/about-us/events/',
        text: 'Events',
      },
      {
        href: '/about-us/join-us/',
        text: 'Jobs',
      },
      {
        href: '/about-us/contact-us/',
        text: 'Contact us',
      },
    ];

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
                {
                  navItems.map((item, index) => {
                    const tabIndex = navOpen ? 0 : -1;
                    return (
                      <NavItem
                        href={item.href}
                        key={index}
                        tabIndex={tabIndex}
                        text={item.text}
                      />
                    );
                  })
                }
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
