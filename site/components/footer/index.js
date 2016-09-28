import classnames from 'classnames/bind';

import React from 'react';
import styles from './style.css';

const cx = classnames.bind(styles);

const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.section}>
      <ul className={styles.nav}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-us/">About us</a>
        </li>
        <li>
          <a href="/about-us/join-us/">What we do</a>
        </li>
        <li>
          <a href="/blog/">Blog</a>
        </li>
        <li>
          <a href="/about-us/events/">Events</a>
        </li>
        <li>
          <a href="/about-us/join-us/">Jobs</a>
        </li>
      </ul>
    </nav>

    <div className={cx('section', 'social')}>
      <a href="mailto:hello@red-badger.com">hello@red-badger.com</a>
      <a href="tel:+442035670555">+44 (0) 20 3567 0555</a>
    </div>

    <div className={cx('section', 'address')}>
      <address>
        <p>12 Mallow St</p>
        <p>London</p>
        <p>EC1Y 8RQ</p>
        <p>UK</p>
      </address>

      <a href="https://www.google.co.uk/maps?q=EC1Y+8RQ&hl=en&sll=51.528642,-0.101599&sspn=0.494671,1.20575&hnear=London+EC1Y+8RQ,+United+Kingdom&t=m&z=16">
        Open in Google maps
      </a>
    </div>

    <div className={cx('section', 'disclaimer')}>
      <p>&copy; Red Badger Consultancy Ltd 2016 Registered number 345 678 912 UK</p>
      <p>VAT Registration No. 990 8085 82</p>
      <p>We use cookies on our website. For more information, view our privacy policy.</p>
    </div>

  </footer>
);

export default Footer;
