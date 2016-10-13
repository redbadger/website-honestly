import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import logoSVG from './rb-logo-placeholder.svg';

const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <a href="/" title="Home" className={styles.logo}>
        <InlineSVG src={logoSVG} />
      </a>

      <nav className={styles.mediumScreenNavContainer} role="navigation">
        <ul className={styles.mediumScreenNav}>
          <li><a href="/services/">What we do</a></li>
          <li><a href="/about-us/">About us</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/about-us/events/">Events</a></li>
        </ul>
      </nav>

      <div className={styles.triggerContainer}>
        <label htmlFor="burger" className={styles.triggerLabel}>MENU</label>
      </div>
      <input type="checkbox" className={styles.trigger} id="burger" />

      <div className={styles.overlay}>
        <div>
          <label htmlFor="burger" className={styles.menuCloseButton}>Close</label>

          <nav className={styles.smallScreenNavContainer} role="navigation">
            <ul className={styles.smallScreenNav}>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us/">About us</a></li>
              <li><a href="/services/">What we do</a></li>
              <li><a href="/blog/">Blog</a></li>
              <li><a href="/about-us/events/">Events</a></li>
              <li><a href="/about-us/join-us/">Jobs</a></li>
              <li><a href="/about-us/contact-us/">Contact us</a></li>
            </ul>
          </nav>
        </div>
      </div>

    </header>
  );
};

export default Header;
