// @flow
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
      <InlineSVG role="presentation" src={mapSVG} className={styles.footerMap} />
      <div className={styles.footerSections}>
        <nav role="navigation" className={cx('section', 'footerLinks')}>
          <ul className={styles.nav}>
            <li>
              <Link to="homePage">Home</Link>
            </li>
            <li>
              <Link to="aboutUsPage">About us</Link>
            </li>
            <li>
              <Link to="whatWeDoPage">What we do</Link>
            </li>
            <li>
              <a href="/blog/">Blog</a>
            </li>
            <li>
              <Link to="events">Events</Link>
            </li>
            <li>
              <Link to="joinUs">Jobs</Link>
            </li>
          </ul>
        </nav>

        <div className={cx('section', 'social')}>
          <span className={styles.screenReaderText}>Email us at</span>
          <a href="mailto:hello@red-badger.com" className={styles.mailtoLink}>
            hello@red-badger.com
          </a>
          <span className={styles.screenReaderText}>Call us on</span>
          <a href="tel:+442035670555" className={styles.telLink}>
            <span>+</span>
            <span>4</span>
            <span>4 </span>
            <span>(</span>
            <span>0</span>
            <span>) </span>
            <span>2</span>
            <span>0 </span>
            <span>3</span>
            <span>5</span>
            <span>6</span>
            <span>7 </span>
            <span>0</span>
            <span>5</span>
            <span>5</span>
            <span>5</span>
          </a>
          <span className={styles.screenReaderText}>Find us on social media</span>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://github.com/redbadger"
                title="Red Badger Github"
                className={styles.socialIcon}
              >
                <InlineSVG
                  src={githubSVG}
                  title="Github"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/redbadgerteam"
                title="Red Badger Twitter"
                className={styles.socialIcon}
              >
                <InlineSVG
                  src={twitterSVG}
                  title="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://redbadger.typeform.com/to/cBuJUl"
                title="Red Badger Slack"
                className={styles.socialIcon}
              >
                <InlineSVG
                  src={slackSVG}
                  title="Slack"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/red-badger"
                title="Red Badger Linkedin"
                className={styles.socialIcon}
              >
                <InlineSVG
                  src={linkedinSVG}
                  title="Linkedin"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/redbadgerteam/"
                title="Red Badger Instagram"
                className={styles.socialIcon}
              >
                <InlineSVG
                  src={instagramSVG}
                  title="Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/RedBadger"
                title="Red Badger Facebook"
                className={styles.socialIcon}
              >
                <InlineSVG
                  src={facebookSVG}
                  title="Facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/redbadgerteam"
                title="Red Badger Youtube"
                className={styles.socialIcon}
              >
                <InlineSVG
                  src={youtubeSVG}
                  title="Youtube"
                />
              </a>
            </li>
            <li>
              <a
                href="https://plus.google.com/+Redbadgerteam"
                title="Red Badger Google Plus"
                className={styles.socialIcon}
              >
                <InlineSVG
                  src={gplusSVG}
                  title="Google Plus"
                />
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className={cx('section', 'address')}>
        <InlineSVG role="presentation" src={mapPinSVG} className={styles.mapPin} />
        <div className={styles.mapContainer}>
          <address>
            <p>12 Mallow St</p>
            <p>London</p>
            <p>EC1Y 8RQ</p>
            <p>UK</p>
          </address>

          <a
            className={styles.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/12+Mallow+St,+London+EC1Y+8RQ,+UK/@51.52477,-0.0908016,17z/data=!3m1!4b1!4m5!3m4!1s0x48761ca8a59bf3b3:0x4cdb7444be05c280!8m2!3d51.52477!4d-0.0886129?hl=en"
          >
            Open in Google maps
          </a>
        </div>
      </div>
      <div className={styles.footerEndContainer}>
        <div className={cx('section', 'disclaimer', 'noBorder')}>
          <p className={cx('afterDivider', 'disclaimerParagraph')}>
            &copy; Red Badger Consulting Limited 2016
          </p>
          <p className={cx('afterDivider', 'disclaimerParagraph')}>
            Registered in England No. 7242017
          </p>
          <p className={styles.disclaimerParagraph}>VAT Registration No. 990 8085 82</p>
          <p className={styles.cookieWarning}>
            We use cookies on our website. For more information, view our privacy policy.
          </p>
        </div>
        <InlineSVG
          src={badgerSVG}
          className={styles.badgerIcon}
          title="Sally the Red Badger Badger"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
