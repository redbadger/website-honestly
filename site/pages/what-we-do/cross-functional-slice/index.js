// @flow
import React from 'react';
import styles from './styles.css';
import Link from '../../../components/link';
import ColourBox from '../../../components/colour-box';
import Image from '../../../components/image';

import bigParty1x from './png/big-party.png';
import bigParty2x from './png/big-party@2x.png';
import bigParty3x from './png/big-party@3x.png';
import crossFunctionalBadgers from './jpg/cross-functional-badgers.jpg';

const CrossFunctionalSlice = () => (
  <section className={styles.crossFunctionalSlice}>
    <div className={styles.photoContainer}>
      <Image
        src={crossFunctionalBadgers}
        alt="working in a cross functional team"
        className={styles.image}
      />
    </div>
    <div className={styles.sliceBody}>
      <section className={styles.outerHeadingContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Working in cross functional teams</h2>
        </div>
      </section>
      <section className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={bigParty1x}
            src2x={bigParty2x}
            src3x={bigParty3x}
            role="presentation"
            className={styles.image}
          />
        </div>
        <div className={styles.colourBoxContainer}>
          <ColourBox title="Lean Agile" labelColour="blue">
            <p>
              <span className={styles.detail}>
                Drive efficiency and reduce risk through our lean methods.
              </span>
            </p>
          </ColourBox>
          <ColourBox title="Tech" labelColour="green">
            <Link to="technology">
              <p>
                <span className={styles.detail}>
                  Transform your business by being bold with tech.
                </span>
                <span className={styles.arrowContainer}>
                  <svg
                    className={styles.arrowLink}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 20"
                  >
                    <path
                      fill="#22D69B"
                      fillRule="nonzero"
                      stroke="#22D69B"
                      d="M11 0l10 10-10 10-1.754-1.754 6.959-7.018H1V8.772h15.205l-6.96-7.018z"
                    />
                  </svg>
                </span>
              </p>
            </Link>
          </ColourBox>
          <ColourBox title="Design" labelColour="yellow">
            <p>
              <span className={styles.detail}>
                Improve customer experience, create delightful products and services.
              </span>
            </p>
          </ColourBox>
          <ColourBox title="You (the client)" labelColour="red">
            <p>
              <span className={styles.detail}>
                Together we build a capability and lasting change.
              </span>
            </p>
          </ColourBox>
        </div>
      </section>
    </div>
  </section>
);

export default CrossFunctionalSlice;
