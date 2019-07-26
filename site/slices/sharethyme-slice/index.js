// @flow
import React from 'react';

import styles from './style.css';
import ShareThymeLogo from './sharethyme-logo';

// type Props = {
//   linkUrl: string,
// };

export default function ShareThymeSlice() {
  return (
    <section className={styles.shareThymeSlice}>
      <ShareThymeLogo className={styles.shareThymeLogo} />
      <h3>See what we&apos;ve been cooking up</h3>
      <a href="https://www.red-badger.com">Take a look</a>
    </section>
  );
}
