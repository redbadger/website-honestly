// @flow
import React from 'react';
import styles from './style.css';
import LargeLoop from './largeLoop';
import SmallLoop from './smallLoop';

const innovationSteps = [
  {
    subHeader: 'Research',
    description: 'We’ll understand your business and your target audience',
  },
  {
    subHeader: 'Ideate',
    description:
      'Together we’ll define the problem to be solved and develop a range of possible solutions',
  },
  {
    subHeader: 'Test',
    description: 'Let’s learn fast and cheaply discard unfeasible solutions',
  },
];

const deliverySteps = [
  {
    subHeader: 'Backlog',
    description: 'Together we’ll prioritise and validate solutions as concrete initiatives',
  },
  {
    subHeader: 'Execute',
    description: 'We’ll deliver great quality products and services with speed',
  },
  {
    subHeader: 'Optimise',
    description:
      'Together we’ll constantly measure and learn to look out for new opportunities and improvements',
  },
];

type StepProps = {
  subHeader: string,
  description: string,
};

const renderStep = ({ subHeader, description }: StepProps) => {
  return (
    <div key={subHeader} className={styles.step}>
      <div className={styles.marker} />
      <div className={styles.stepContent}>
        <h4 className={styles.stepSubHeader}>{subHeader}</h4>
        <p className={styles.stepDescription}>{description}</p>
      </div>
    </div>
  );
};

const leanAgileSlice = () => {
  return (
    <section className={styles.leanAgileSlice}>
      <h2 className={styles.leanAgileHeader}>Our flexible lean and agile process</h2>
      <div className={styles.steps}>
        <div className={styles.loopContainer}>
          <SmallLoop className={styles.smallLoopImage} />
          <LargeLoop className={styles.largeLoopImage} />
          <div className={styles.wordLeft}>Innovation</div>
          <div className={styles.wordRight}>Delivery</div>
        </div>
        <div>
          <h3 className={styles.stepInnovationHeader}>Innovation</h3>
          {innovationSteps.map(renderStep)}
          <h3 className={styles.stepDeliveryHeader}>Delivery</h3>
          {deliverySteps.map(renderStep)}
          <div className={styles.stepPaddingBottom} />
        </div>
      </div>
    </section>
  );
};

export default leanAgileSlice;
