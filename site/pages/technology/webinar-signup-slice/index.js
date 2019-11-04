// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */

import React from 'react';

import { HubspotButton } from '../../../components/buttons';
import styles from '../style.css';

export default () => (
  <section className={styles.webinar}>
    <div className={styles.webinarInner}>
      <h2 className={styles.webinarText}>
        {'Did you miss our tech webinars on Serverless, GraphQL and more?'}
      </h2>
      <HubspotButton hubspotName="webinar" />
    </div>
  </section>
);
