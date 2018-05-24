// @flow

import * as React from 'react';

import Link from '../link';

import styles from './style.css';

type Props = { closeBanner: Function };

class CookieBanner extends React.Component<Props> {
  // This clones the banner and sets it's position to static, effectively pushing it behind
  // the sticky banner in the DOM. Thanks to this, the component takes up space and pushes
  // the down by the right amount always.
  componentDidMount() {
    if (!this.bannerNode) return;

    const parent = this.bannerNode.parentElement;
    const clone = this.bannerNode.cloneNode(true);
    clone.style.cssText = 'position: static; z-index: 0';

    if (parent) parent.appendChild(clone);
  }

  bannerNode: ?HTMLDivElement;

  acceptCookies = (closeBanner: Function) => {
    document.cookie = '_cookies=true; path=/;  expires=Fri, 31 Dec 9999 23:59:59 GMT';
    closeBanner();
  };

  render() {
    const { closeBanner } = this.props;

    return (
      // The outer div provides a parent for the cloning function - see componentDidMount
      <div>
        <div ref={node => (this.bannerNode = node)} className={styles.bannerWrapper}>
          <div className={styles.banner}>
            <p>
              Welcome to Red Badger. Our website uses cookies to optimise your experience.{' '}
              <Link to="cookiePolicy">View cookies policy here.</Link>
            </p>
            <button onClick={this.acceptCookies.bind(this, closeBanner)}>Accept and Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CookieBanner;
