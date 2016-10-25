import React from 'react';
import styles from './styles.css';

import leanImg from './lean.png';

export default function LeanSlice() {
  return (
    <section className={styles.slice}>
      <h2 className={styles.heading}>
        How do we get to the right thing?
      </h2>

      <div className={styles.content}>
        <div className={styles.leanImageWrapper} >
          <img role="presentation" className={styles.leanImage} src={leanImg} />
        </div>

        <div className={styles.pointsWrapper}>
          <p className={styles.point}>
            <span className={styles.bold}>Visualise the workflow</span> on a
            physical wall for complete transparency.
          </p>

          <p className={styles.point}>
            <span className={styles.bold}>Build a shared understanding</span> by
            working in the same place as our clients.
          </p>

          <p className={styles.point}>
            <span className={styles.bold}>Learn fast</span> by getting to something
            we can test quickly.
          </p>

          <p className={styles.point}>
            <span className={styles.bold}>Minimise waste</span> by using real data
            to forecast and make decisions.
          </p>

          <p className={styles.point}>
            <span className={styles.bold}>Work in cross-functional teams</span> who
            have the autonomy to make the right decisions.
          </p>

          <p className={styles.point}>
            <span className={styles.bold}>Focus on what the users need
            </span> and deliver improvements incrementally whilst getting continual
            feedback.
          </p>
        </div>
      </div>
    </section>
  );
}
