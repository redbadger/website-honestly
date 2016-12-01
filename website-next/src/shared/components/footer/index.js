/* eslint-disable max-len */

import React, { Component } from 'react';
import classNames from 'classnames';
import Container from '../container';
import { Grid, Cell } from '../grid';
import Input from '../input';
import Button from '../button';
import icons from '../icons/style.css';
import display from '../utils/display.css';

/**
  Note: this css module must be imported last :(
  https://github.com/redbadger/website-next/issues/182
*/
import styles from './style.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <Container>
          <Grid>

            <Cell breakOn="mobileS" size={4}>
              <address className={styles.address}>
                <strong>Red Badger Consulting Limited</strong>
                <br/>
                <span>12 Mallow Street</span>
                <br/>
                <span>London EC1Y 8RQ</span>
                <br/>
                <a className={styles.contactUsLink} href="/about-us/contact-us">
                  Contact us <span className={styles.contactUsIcon}></span>
                </a>
              </address>
            </Cell>

            <Cell breakOn="mobileS" size={4}>
              <ul className={styles.links} >
                <li>
                  <a className={styles.contactLink} href="mailto:hello@red-badger.com">
                    <span className={classNames(styles.iconCyan, icons.sketchEmail)} ></span>
                    {' hello@red-badger.com'}
                  </a>
                </li>
                <li>
                  <a className={styles.socialLink} href="http://twitter.com/redbadgerteam">
                    <span className={classNames(styles.icon, icons.socialTwitter)}></span>
                    {' @redbadgerteam'}
                  </a>
                </li>
                <li>
                  <a className={styles.socialLink} href="http://www.facebook.com/RedBadger">
                    <span className={classNames(styles.icon, icons.socialFacebook)}></span>
                    {' facebook'}
                  </a>
                </li>
                <li>
                  <a className={styles.socialLink} href="http://www.linkedin.com/companies/red-badger">
                    <span className={classNames(styles.icon, icons.socialLinkedin)}></span>
                    {' linkedin'}
                  </a>
                </li>
                <li>
                  <a className={styles.socialLink} href="https://instagram.com/redbadgerteam">
                    <span className={classNames(styles.icon, icons.socialInstagram)}></span>
                    {' instagram'}
                  </a>
                </li>
              </ul>
            </Cell>

            <Cell breakOn="mobile" size={4}>
              <h4 className={styles.newsletterHeading}>Join our newsletter</h4>
              <form action="//red-badger.us6.list-manage.com/subscribe/post?u=0ab76cd515&amp;amp;id=b20af1dc4e" className={styles.todo} method="post" >
                <label>
                  Subscribe to receive news, ideas and lessons learned from Red Badger
                </label>
                <div className={styles.inputContainer}>
                  <Input className={styles.inputText} name="EMAIL" placeholder="Enter your email" type="text"/>
                  <Button className={styles.inputSubmit} type="submit">Subscribe</Button>
                  <div className={display.hiddenVisually}>
                    <input name="b_0ab76cd515_b20af1dc4e" tabIndex="-1" type="text" value=""/>
                  </div>
                </div>
              </form>
              <div>
                <span>© Red Badger All Rights Reserved</span>
              </div>
            </Cell>

          </Grid>
        </Container>
      </footer>
    );
  }
}
