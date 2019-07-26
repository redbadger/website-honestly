// @flow
import React from 'react';

import styles from './style.css';
import ShareThymeLogo from './sharethyme-logo';

import Image from '../../components/image';

import logoImage from './images/group-21_1x.png';
import logoX2Image from './images/group-21_2x.png';
import logoX3Image from './images/group-21_3x.png';

// type Props = {
//   linkUrl: string,
// };

export default function ShareThymeSlice() {
  return (
    <section className={styles.shareThymeSlice}>
      <div className={styles.shareThymeContent}>
        <ShareThymeLogo className={styles.shareThymeLogo} />
        <h3>See what we&apos;ve been cooking up</h3>
        <a href="https://www.red-badger.com">Take a look</a>
      </div>
      <Image
        alt="Illustration of hands carrying a pot of food with a love heart on it"
        className={styles.shareThymeImage}
        src={logoImage}
        src2x={logoX2Image}
        src3x={logoX3Image}
      />
    </section>
  );
}
