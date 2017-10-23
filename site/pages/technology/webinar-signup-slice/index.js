import React from 'react';
import ReactGA from 'react-ga';
import styles from '../style.css';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'TechnologyPage',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

const webinarLink =
  'https://register.gotowebinar.com/register/1013898540655278338?source=Tech+page';

export default () =>
  <section className={styles.webinar}>
    <div className={styles.webinarInner}>
      <h2 className={styles.webinarText}>{"We're hosting a webinar!"}</h2>
      <a
        className={styles.webinarButton}
        href={webinarLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackAnalytics('Webinar-technology page -button')}
      >
        Sign up to attend
      </a>
    </div>
  </section>;
