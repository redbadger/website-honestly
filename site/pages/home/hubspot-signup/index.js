// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import styles from './style.css';

import hubspotBtns from '../../../components/buttons/hubspot-buttons';
import buttonStyles from '../../../components/buttons/style.css';

export default function HubspotSignup() {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.title}>
        Sign up to Badger News
        <span className={styles.subTitle}>
          Be the first to hear about webinars, events blogs and more.
        </span>
      </h2>
      <div
        className={`${buttonStyles.hubspotBtn} ${styles.btnWrapper}`}
        dangerouslySetInnerHTML={hubspotBtns.badgerNews}
      />
    </section>
  );
}
