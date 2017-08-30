// @flow
import React from 'react';

import jump from 'jump.js';
import styles from './style.css';

type ContactBoxProps = {
  target?: string,
};

const ContactBox = ({ target = '#contactUs' }: ContactBoxProps) =>
  <div className={styles.contactBox}>
    <h2 className={styles.contactBox__heading}>
      Project in mind?
    </h2>
    <button
      onClick={() => jump(target, { a11y: true, duration: 800 })}
      className={styles.contactBox__button}
    >
      Tell us more
    </button>
  </div>;

export default ContactBox;
