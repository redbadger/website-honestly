// @flow
// html strings are provided by our CMS and sanitized in badger brain
/* eslint-disable react/no-danger */
// Requires import * as syntax to use React.Node prop type.
import * as React from 'react';
import styles from './style.css';

// import Social from '../../components/social';
import Consultant from './consultant';
// import type { ConsultantProps } from './consultant';
import HubspotForm from '../../components/hubspot/form/index';
import type { HubspotFormProps } from '../../components/hubspot/form/index';
// import Link from '../../components/link';

// import Picture from '../../components/picture';

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

const MBPLP = ({ title, time, date, location, consultants, hubspotForm }: MBPLPProps) => {
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
            <div className={styles.MBPLPForm}>
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
                    consentCssClass={styles.MBPLPFormConsent}
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
          <div className={styles.contentText}>
            <h2>Agenda</h2>
            <p>
              <strong>8:30am:</strong> Breakfast served{' '}
            </p>
            <p>
              <strong>9:00am:</strong> Welcome and what’s Mission Beyond Product about - Cain Ullah,
              CEO of Red Badger
            </p>
            <p>
              <strong>9:10am:</strong> Think Outside the Building: How Advanced Leaders Can Change
              the World One Smart Innovation at a Time - Rosabeth Moss Kanter, Harvard Business
              School
            </p>
            <p>
              <strong>9:40am:</strong> How to tackle food waste? - Lindsay Boswell, CEO FareShare
            </p>
            <p>
              <strong>10:00am:</strong> Words into action: Mission X - Cain Ullah, CEO of Red Badger
            </p>
            <p>
              <strong>10:30am:</strong> Close
            </p>
          </div>
          <div className={styles.contentText}>
            <h2>Speakers</h2>
            {renderConsultants(consultants)}
          </div>
          <div className={styles.contentText}>
            <h2>Any other questions?</h2>
            If you have any queries or dietary requirements that we should be aware of, get in touch
            with us{' '}
            <a className={styles.inlineLink} href="https://www.red-badger.com">
              here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* eslint-enable react/no-danger */
export default MBPLP;
