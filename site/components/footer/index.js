import InlineSVG from 'svg-inline-react';
import classnames from 'classnames/bind';
import React from 'react';
import styles from './style.css';

import Link from '../link';

/* SVGs */
import githubSVG from './SVG/github.svg';
import facebookSVG from './SVG/facebook.svg';
import gplusSVG from './SVG/g-plus.svg';
import instagramSVG from './SVG/instagram.svg';
import linkedinSVG from './SVG/linked-in.svg';
import slackSVG from './SVG/slack.svg';
import twitterSVG from './SVG/twitter.svg';
import youtubeSVG from './SVG/youtube.svg';
import mapPinSVG from './SVG/map-pin.svg';
import badgerSVG from './SVG/badger-on-black.svg';
import mapSVG from './SVG/map.svg';

const cx = classnames.bind(styles);

const Footer = () => (
  <footer role="contentinfo" className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerSections}>
        <nav role="navigation" className={cx('section', 'footerLinks')}>
          <ul className={styles.nav}>
            <li>
              <Link to="homePage">Home</Link>
            </li>
            <li>
              <a href="/about-us/">About us</a>
            </li>
            <li>
              <Link to="whatWeDoPage">What we do</Link>
            </li>
            <li>
              <a href="http://red-badger.com/blog/">Blog</a>
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
          <a href="mailto:hello@red-badger.com" className={styles.mailtoLink}>
            hello@red-badger.com
          </a>
          <a href="tel:+442035670555" className={styles.telLink}>+44 (0) 20 3567 0555</a>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://github.com/redbadger"
                title="Red Badger Github"
                className={styles.socialIcon}
              >
                <InlineSVG src={githubSVG} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/redbadgerteam"
                title="Red Badger Twitter"
                className={styles.socialIcon}
              >
                <InlineSVG src={twitterSVG} />
              </a>
            </li>
            <li>
              <a
                href="https://redbadger.typeform.com/to/cBuJUl"
                title="Red Badger Slack"
                className={styles.socialIcon}
              >
                <InlineSVG src={slackSVG} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/red-badger"
                title="Red Badger Linkedin"
                className={styles.socialIcon}
              >
                <InlineSVG src={linkedinSVG} />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/redbadgerteam/"
                title="Red Badger Instagram"
                className={styles.socialIcon}
              >
                <InlineSVG src={instagramSVG} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/RedBadger"
                title="Red Badger Facebook"
                className={styles.socialIcon}
              >
                <InlineSVG src={facebookSVG} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/redbadgerteam"
                title="Red Badger Youtube"
                className={styles.socialIcon}
              >
                <InlineSVG src={youtubeSVG} />
              </a>
            </li>
            <li>
              <a
                href="https://plus.google.com/+Redbadgerteam"
                title="Red Badger Google Plus"
                className={styles.socialIcon}
              >
                <InlineSVG src={gplusSVG} />
              </a>
            </li>
          </ul>
        </div>

      </div>
      <InlineSVG src={mapSVG} className={styles.footerMap} />
      <div className={cx('section', 'address')}>
        <InlineSVG src={mapPinSVG} className={styles.mapPin} />
        <div className={styles.mapContainer}>
          <address>
            <p>12 Mallow St</p>
            <p>London</p>
            <p>EC1Y 8RQ</p>
            <p>UK</p>
          </address>

          <a
            className={styles.mapLink}
            href="https://www.google.co.uk/maps?q=EC1Y+8RQ&hl=en&sll=51.528642,-0.101599&sspn=0.494671,1.20575&hnear=London+EC1Y+8RQ,+United+Kingdom&t=m&z=16"
          >
            Open in Google maps
          </a>
        </div>
      </div>
      <div className={styles.footerEndContainer}>
        <div className={cx('section', 'disclaimer', 'noBorder')}>
          <p className={cx('afterDivider', 'disclaimerParagraph')}>
            &copy; Red Badger Consultancy Ltd 2016
          </p>
          <p className={cx('afterDivider', 'disclaimerParagraph')}>
            Registered number 345 678 912 UK
          </p>
          <p className={styles.disclaimerParagraph}>VAT Registration No. 990 8085 82</p>
          <p className={styles.cookieWarning}>
            We use cookies on our website. For more information, view our privacy policy.
          </p>
        </div>
        <InlineSVG src={badgerSVG} className={styles.badgerIcon} />
      </div>
    </div>
  </footer>
);

export default Footer;
