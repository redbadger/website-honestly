import React from 'react';
import styles from '../style.css';

const webinarLink =
  'https://attendee.gotowebinar.com/register/4215309162791382274?source=RB-Tech-website';

export default () =>
  <section className={styles.webinar}>
    <div className={styles.webinarInner}>
      <h2 className={styles.webinarText}>{"We're hosting a webinar!"}</h2>
      <a
        className={styles.webinarButton}
        href={webinarLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign up to attend
      </a>
    </div>
  </section>;
