import React from 'react';
import styles from './styles.css';

import leanImg from './lean.png';

export default function LeanSlice() {
  return (
    <section className={styles.slice}>
      <h2 className={styles.heading}>
        How do we do the thing right?
      </h2>

      <div className={styles.content}>
        <div className={styles.leanImageWrapper}>
          <img role="presentation" className={styles.leanImage} src={leanImg} />
        </div>

        <div className={styles.pointsWrapper}>
          <p className={styles.point}>
            <strong className={styles.bold}>Visualise the workflow</strong> on a
            physical wall for complete transparency.
          </p>

          <p className={styles.point}>
            <strong className={styles.bold}>Build a shared understanding</strong> by
            working in the same place as our clients.
          </p>

          <p className={styles.point}>
            <strong className={styles.bold}>Learn fast</strong> by getting to something
            we can test quickly.
          </p>

          <p className={styles.point}>
            <strong className={styles.bold}>Minimise waste</strong> by using real data
            to forecast and make decisions.
          </p>

          <p className={styles.point}>
            <strong className={styles.bold}>Work in cross-functional teams</strong> who
            have the autonomy to make the right decisions.
          </p>

          <p className={styles.point}>
            <strong className={styles.bold}>
              Focus on what the users need
            </strong>
            {' '}
            and deliver improvements incrementally whilst getting continual
            feedback.
          </p>
        </div>
      </div>
    </section>
  );
}
