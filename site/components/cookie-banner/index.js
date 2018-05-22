// @flow

import React from 'react';
import Link from '../link';

import styles from './style.css';

const CookieBanner = ({ closeBanner }: { closeBanner: Function }) => {
  const acceptCookies = () => {
    document.cookie = '_cookies=true; path=/;  expires=Fri, 31 Dec 9999 23:59:59 GMT';
    closeBanner();
  };

  return (
    <div className={styles.banner}>
      <p>
        Welcome to Red Badger. Our website uses cookies to optimise your experience.{' '}
        <Link to="cookiePolicy">View cookies policy here.</Link>
      </p>
      <button onClick={acceptCookies}>Accept and Close</button>
    </div>
  );
};

export default CookieBanner;
