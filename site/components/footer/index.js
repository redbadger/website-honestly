// @flow
import classnames from 'classnames/bind';
import React from 'react';
import styles from './style.css';
import Link from '../link';

/* Icons */
import GitHub from '../icons/github';
import Twitter from '../icons/twitter';
import Slack from '../icons/slack';
import LinkedIn from '../icons/linkedin';
import Instagram from '../icons/instagram';
import Facebook from '../icons/facebook';
import Youtube from '../icons/youtube';
import MapPin from '../icons/map-pin';
import Badger from '../icons/badger-in-circle';

const cx = classnames.bind(styles);

const Footer = () => (
  <footer role="contentinfo" className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerSections}>
        <nav className={cx('section', 'footerLinks', 'underline')}>
          <ul className={styles.nav}>
            <li>
              <Link data-link="footer" to="homePage">
                Home
              </Link>
            </li>
            <li>
              <Link data-link="footer" to="aboutUsPage">
                About us
              </Link>
            </li>
            <li>
              <Link data-link="footer" to="whatWeDoPage">
                What we do
              </Link>
            </li>
            <li>
              <a data-link="footer" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <Link data-link="footer" to="events">
                Events
              </Link>
            </li>
            <li>
              <Link data-link="footer" to="joinUs">
                Jobs
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <div className={cx('section', 'social', 'underline')}>
            <span className={styles.screenReaderText}>Email us at</span>
            <a data-link="footer" href="mailto:hello@red-badger.com" className={styles.mailtoLink}>
              <span className={styles.mailtoLinkText}>hello@red-badger.com</span>
            </a>
            <span className={styles.screenReaderText}>Call us on</span>
            <a data-link="footer" href="tel:+442035670555" className={styles.telLink}>
              <span className={styles.telLinkText}>
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
              </span>
            </a>
            <span className={styles.screenReaderText}>Find us on social media</span>
            <ul className={styles.socialLinks}>
              <li>
                <a
                  data-link="footer"
                  href="https://github.com/redbadger"
                  title="Red Badger Github"
                  aria-label="Red Badger Github"
                  className={styles.socialIcon}
                >
                  <GitHub />
                </a>
              </li>
              <li>
                <a
                  data-link="footer"
                  href="https://twitter.com/redbadgerteam"
                  title="Red Badger Twitter"
                  aria-label="Red Badger Twitter"
                  className={styles.socialIcon}
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  data-link="footer"
                  href="https://redbadger.typeform.com/to/cBuJUl"
                  title="Red Badger Slack"
                  aria-label="Red Badger Slack"
                  className={styles.socialIcon}
                >
                  <Slack />
                </a>
              </li>
              <li>
                <a
                  data-link="footer"
                  href="https://www.linkedin.com/company/red-badger"
                  title="Red Badger Linkedin"
                  aria-label="Red Badger Linkedin"
                  className={styles.socialIcon}
                >
                  <LinkedIn />
                </a>
              </li>

              <li>
                <a
                  data-link="footer"
                  href="https://www.instagram.com/redbadgerteam/"
                  title="Red Badger Instagram"
                  aria-label="Red Badger Instagram"
                  className={styles.socialIcon}
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  data-link="footer"
                  href="https://www.facebook.com/RedBadger"
                  title="Red Badger Facebook"
                  aria-label="Red Badger Facebook"
                  className={styles.socialIcon}
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  data-link="footer"
                  href="https://www.youtube.com/redbadgerteam"
                  title="Red Badger Youtube"
                  aria-label="Red Badger Youtube"
                  className={styles.socialIcon}
                >
                  <Youtube />
                </a>
              </li>
            </ul>
          </div>
          <div className={cx('section', 'address', 'underline')}>
            <MapPin className={styles.mapPin} role="presentation" />
            <div className={styles.mapContainer}>
              <address>
                <p>4th Floor</p>
                <p>2 Old Street Yard</p>
                <p>London</p>
                <p>
                  <a
                    title="Red Badger address on Google Maps"
                    aria-label="Red Badger address on Google Maps"
                    data-link="footer"
                    href="https://www.google.co.uk/maps/place/Red+Badger/@51.524652,-0.0903147,17z/data=!3m1!4b1!4m5!3m4!1s0x48761ca9aaaaaaab:0xf14bdb5cbedebef9!8m2!3d51.524652!4d-0.088126"
                  >
                    EC1Y 8AF
                  </a>
                </p>
                <p className={styles.addressHint}>(Featherstone Street entrance)</p>
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerEndContainer}>
        <div className={cx('section', 'disclaimer', 'noBorder')}>
          <p className={cx('afterDivider', 'disclaimerParagraph')}>
            © Red Badger Consulting Limited {new Date().getFullYear()}
          </p>
          <p className={cx('afterDivider', 'disclaimerParagraph')}>
            Registered in England No. 7242017
          </p>
          <p className={styles.disclaimerParagraph}>VAT Registration No. 990 8085 82</p>
          <p className={styles.cookieWarning}>
            We use{' '}
            <Link data-link="footer" to="cookiePolicy">
              cookies
            </Link>{' '}
            on our website. For more information, view our{' '}
            <Link data-link="footer" to="privacyPolicy">
              privacy policy
            </Link>{' '}
            and website{' '}
            <Link data-link="footer" to="termsAndConditions">
              T&amp;C&apos;s
            </Link>
            .
          </p>
        </div>
        <div className={styles.badgerIcon}>
          <Badger />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
