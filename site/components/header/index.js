import React, { PropTypes } from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import logoSVG from './rb-logo-placeholder.svg';

function NavLink({ children, href, smallScreen }) {
  const className = smallScreen ? styles.smallScreenNavLink : styles.navLink;
  return (
    <li>
      <a className={className} href={href}>{children}</a>
    </li>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  smallScreen: PropTypes.bool,
};


export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <a href="/" title="Home" className={styles.logo}>
        <InlineSVG src={logoSVG} />
      </a>

      <nav className={styles.mediumScreenNavContainer} role="navigation">
        <ul className={styles.mediumScreenNav}>
          <NavLink href="/services/">Services</NavLink>
          <NavLink href="/about-us/">About us</NavLink>
          <NavLink href="/blog/">Blog</NavLink>
          <NavLink href="/about-us/events/">Events</NavLink>
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
              <NavLink smallScreen href="/">Home</NavLink>
              <NavLink smallScreen href="/about-us/">About us</NavLink>
              <NavLink smallScreen href="/services/">Services</NavLink>
              <NavLink smallScreen href="/blog/">Blog</NavLink>
              <NavLink smallScreen href="/about-us/events/">Events</NavLink>
              <NavLink smallScreen href="/about-us/join-us/">Jobs</NavLink>
              <NavLink smallScreen href="/about-us/contact-us/">Contact us</NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
