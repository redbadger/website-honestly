// @flow
// Requires import * as syntax to use React.Node prop type.
import * as React from 'react';
import styles from './style.css';

import Consultant from './consultant';
import type { ConsultantProps } from './consultant';
import PreviewSlice from './preview-slice';
import type { PreviewSliceProps } from './preview-slice';

import ClockIcon from './clock-icon';

import priceImage from './images/price.png';
import locationImage from './images/location.png';

import { atAGlanceTypes } from './atAGlance';

type GoldCoinLPProps = {
  duration: string,
  headerImage: string,
  headerAlt: string,
  title: string,
  subTitle: string,
  price: string,
  type: string,
  location: string,
  whatIsIt: React.Node,
  whoIsItFor: React.Node,
  whatWillYouLearn: React.Node,
  whoWillRun: React.Node,
  consultants: Array<ConsultantProps>,
  previews: Array<PreviewSliceProps>,
};

const renderConsultants = (consultants: Array<ConsultantProps>) => {
  return consultants.map(({ image, name, role, profileUrl }: ConsultantProps) => {
    return <Consultant image={image} name={name} role={role} profileUrl={profileUrl} />;
  });
};

const renderPreviews = (previews: Array<PreviewSliceProps>) => {
  return previews.map(({ image, title, subTitle, url, duration, alt }: PreviewSliceProps) => {
    return (
      <PreviewSlice
        image={image}
        title={title}
        subTitle={subTitle}
        url={url}
        duration={duration}
        alt={alt}
      />
    );
  });
};

const GoldCoinLP = ({
  duration,
  headerImage,
  title,
  subTitle,
  headerAlt,
  price,
  type,
  location,
  whatIsIt,
  whoIsItFor,
  whatWillYouLearn,
  whoWillRun,
  consultants,
  previews,
}: GoldCoinLPProps) => (
  <div>
    <div className={styles.goldCoinLP}>
      <img src={headerImage} className={styles.goldCoinLPHeaderImage} alt={headerAlt} />
      <div className={styles.goldCoinLPContentContainer}>
        <div className={styles.goldCoinLPContent}>
          <div className={styles.goldCoinLPDuration}>
            <ClockIcon />
            {duration}
          </div>
          <h1 className={styles.h1}>{title}</h1>
          <h2 className={styles.h2}>{subTitle}</h2>

          <div className={styles.goldCoinLPAtAGlance}>
            <p>
              <img
                className={styles.goldCoinLPPriceImg}
                src={priceImage}
                alt="Price of engagement"
              />
              {price}
            </p>
            <p>
              <img
                className={styles.goldCoinLPTypeImg}
                src={atAGlanceTypes[type].image}
                alt="Type of engagement"
              />
              {atAGlanceTypes[type].text}
            </p>
            <p>
              <img
                className={styles.goldCoinLPLocationImg}
                src={locationImage}
                alt="Location of engagement"
              />
              {location}
            </p>
          </div>

          <div className={styles.goldCoinLPBody}>
            <div className={styles.goldCoinLPBodyText}>
              <div className={styles.goldCoinLPQSection}>
                <h3 className={styles.h3}>What is it?</h3>
                {whatIsIt}
              </div>
              <div className={styles.goldCoinLPQSection}>
                <h3 className={styles.h3}>Who is this for?</h3>
                {whoIsItFor}
              </div>
              <div className={styles.goldCoinLPQSection}>
                <h3 className={styles.h3}>What will you learn?</h3>
                {whatWillYouLearn}
              </div>
              <div className={styles.goldCoinLPQSection}>
                <h3 className={styles.h3}>Who will run this session?</h3>
                {whoWillRun}
                <div className={styles.goldCoinLPConsultants}>{renderConsultants(consultants)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.goldCoinLPExplore}>
        <div className={styles.goldCoinLPExploreContent}>
          <h3 className={styles.h3}>Thirsty for know-how? There&apos;s more to explore.</h3>
          <div className={styles.goldCoinLPPreviews}>{renderPreviews(previews)}</div>
        </div>
      </div>
    </div>
  </div>
);

export default GoldCoinLP;
