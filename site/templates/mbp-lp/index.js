// @flow
// html strings are provided by our CMS and sanitized in badger brain
/* eslint-disable react/no-danger */
// Requires import * as syntax to use React.Node prop type.
import * as React from 'react';
import styles from './style.css';

import Social from '../../components/social';
// import Consultant from './consultant';
// import type { ConsultantProps } from './consultant';
import HubspotForm from '../../components/hubspot/form/index';
import type { HubspotFormProps } from '../../components/hubspot/form/index';
import Link from '../../components/link';

import Picture from '../../components/picture';

export type MBPLPProps = {
  title: string,
  slug: string,
  time: string,
  date: string,
  location: string,
  consultants: Array<ConsultantProps>,
  formId: string,
  hubspotForm: HubspotFormProps,
};

const renderConsultants = (consultants: Array<ConsultantProps>) => {
  return consultants.map(({ image, name, role, profileUrl }: ConsultantProps) => {
    return <Consultant key={name} image={image} name={name} role={role} profileUrl={profileUrl} />;
  });
};

const MBPLP = ({
  title,
  slug,
  time,
  date,
  location,
  consultants,
  formId,
  hubspotForm,
}: MBPLPProps) => {
  return (
    <div>
      {/* <Social
        title={'Experience Red Badger'}
        description={
          'Meet our tech and design experts to find out how we can deliver value, build capability, and change your culture to increase business efficiency.'
        }
        metaImage={headerImage.main}
        altText={headerAlt}
        url={`https://red-badger.com/what-we-do/experience-us/${slug}/`}
      /> */}
      <div className={styles.MBPLP}>
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <div className={styles.headerLogo}>
              <span>Mission</span>
              <span>Beyond</span>
              <span>Product</span>
            </div>
          </div>
          <div className={styles.contentText}>
            <h2>What’s this all about?</h2>
            <p>
              Mission Beyond Product is a coalition of advanced leaders with diverse minds willing
              to step outside of their own organisations to work together on the world’s biggest
              challenges.
            </p>
            <p>
              The grand challenges the world faces today, from climate change to the ageing
              population, can be tackled with a mission-based approach, changing the world one smart
              innovation at a time.
            </p>
            <p>
              We believe the best way to unlock human creativity and potential is through groups of
              diverse thinkers collaborating. Mission Beyond Product brings cross-sector coalitions
              to turn ideas into actions.
              <br />
              <strong>Get involved.</strong>
            </p>
          </div>
          <div className={styles.contentText}>
            <h2>Event Details</h2>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Time:</strong> {time}
            </p>
            <p>
              <strong>location:</strong> {location}
            </p>
          </div>
          <div className={styles.MBPLPContentContainer}>
            <div className={styles.MBPLPContent}>
              <h1 className={styles.h1}>{title}</h1>
              <div>
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
                    consentCssClass={styles.goldCoinFormConsent}
                    submitText={hubspotForm.submitText}
                    inlineMessage={hubspotForm.inlineMessage}
                    formFields={hubspotForm.formFields}
                    formConsent={hubspotForm.formConsent}
                    pageTitle={title}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* eslint-enable react/no-danger */
export default MBPLP;
