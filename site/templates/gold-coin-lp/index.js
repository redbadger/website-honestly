// @flow
// html strings are provided by our CMS and sanitized in badger brain
/* eslint-disable react/no-danger */
// Requires import * as syntax to use React.Node prop type.
import * as React from 'react';
import styles from './style.css';

import Consultant from './consultant';
import type { ConsultantProps } from './consultant';
import PreviewSlice from './preview-slice';
import type { PreviewSliceProps } from './preview-slice';
import HubspotForm from '../../components/hubspot/form/index';
import type { HubspotFormProps } from '../../components/hubspot/form/index';

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
  formId: String,
  hubspotForm: HubspotFormProps,
  pageTitle: string,
};

const renderConsultants = (consultants: Array<ConsultantProps>) => {
  return consultants.map(({ image, name, role, profileUrl }: ConsultantProps) => {
    return <Consultant key={name} image={image} name={name} role={role} profileUrl={profileUrl} />;
  });
};

const renderPreviews = (previews: Array<PreviewSliceProps>) => {
  return previews.map(({ image, title, subTitle, url, duration, alt }: PreviewSliceProps) => {
    return (
      <PreviewSlice
        key={title}
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
  hubspotForm,
  pageTitle,
}: GoldCoinLPProps) => {
  return (
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
                  className={styles.goldCoinLPInfoImg}
                  src={priceImage}
                  alt="Price of engagement"
                />
                {price}
              </p>
              {(type &&
                (atAGlanceTypes[type] && (
                  <p>
                    <img
                      className={styles.goldCoinLPInfoImg}
                      src={atAGlanceTypes[type].image}
                      alt="Type of engagement"
                    />
                    {atAGlanceTypes[type].text}
                  </p>
                ))) || (
                <p>
                  <img
                    className={styles.goldCoinLPInfoImg}
                    src={atAGlanceTypes.lunch.image}
                    alt="Type of engagement"
                  />
                  {atAGlanceTypes.lunch.text}
                </p>
              )}

              <p>
                <span className={styles.goldCoinLPInfoLocation}>
                  <img
                    className={styles.goldCoinLPInfoImg}
                    src={locationImage}
                    alt="Location of engagement"
                  />
                </span>
                {location}
              </p>
            </div>

            <div className={styles.goldCoinLPBody}>
              <div className={styles.goldCoinLPBodyText}>
                <div className={styles.goldCoinLPQSection}>
                  <h3 className={styles.h3}>What is it?</h3>
                  <div dangerouslySetInnerHTML={{ __html: whatIsIt }} />
                </div>
                <div className={styles.goldCoinLPQSection}>
                  <h3 className={styles.h3}>Who is this for?</h3>
                  <div dangerouslySetInnerHTML={{ __html: whoIsItFor }} />
                </div>
                <div className={styles.goldCoinLPQSection}>
                  <h3 className={styles.h3}>What will you learn?</h3>
                  <div dangerouslySetInnerHTML={{ __html: whatWillYouLearn }} />
                </div>
                <div className={styles.goldCoinLPQSection}>
                  <h3 className={styles.h3}>Who will run this session?</h3>
                  <div dangerouslySetInnerHTML={{ __html: whoWillRun }} />
                  {consultants && (
                    <div className={styles.goldCoinLPConsultants}>
                      {renderConsultants(consultants)}
                    </div>
                  )}
                </div>
              </div>
              {hubspotForm && (
                <HubspotForm
                  portalId={hubspotForm.portalId}
                  guid={hubspotForm.guid}
                  name={hubspotForm.name}
                  cssClass={
                    hubspotForm.cssClass
                      ? `${hubspotForm.cssClass} ${styles.goldCoinForm}`
                      : styles.goldCoinForm
                  }
                  submitText={hubspotForm.submitText}
                  inlineMessage={hubspotForm.inlineMessage}
                  formFields={hubspotForm.formFields}
                  pageTitle={pageTitle}
                />
              )}
            </div>
          </div>
        </div>
        {previews && (
          <div className={styles.goldCoinLPExplore}>
            <div className={styles.goldCoinLPExploreContent}>
              <h3 className={styles.h3}>Thirsty for know-how? There’s more to explore.</h3>
              <div className={styles.goldCoinLPPreviews}>{renderPreviews(previews)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* eslint-enable react/no-danger */
export default GoldCoinLP;
