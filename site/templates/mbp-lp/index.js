// @flow
// html strings are provided by our CMS and sanitized in badger brain
/* eslint-disable react/no-danger */
// Requires import * as syntax to use React.Node prop type.
import * as React from 'react';
import styles from './style.css';

import Social from '../../components/social';
import Consultant from './consultant';
import type { ConsultantProps } from './consultant';
import HubspotForm from '../../components/hubspot/form/index';
import type { HubspotFormProps } from '../../components/hubspot/form/index';

import TriangleGraphic from './assets/triangle-graphic';
import MBPLogo from './assets/mbp-logo';
import metaLogo from './assets/mbp-meta-logo.png';

import Footer from './footer';

export type MBPLPProps = {
  title: string,
  slug: string,
  time: string,
  date: string,
  place: string,
  location: string,
  consultants: Array<ConsultantProps>,
  formId: string,
  hubspotForm: HubspotFormProps,
};

const renderConsultants = (consultants: Array<ConsultantProps>) => {
  return consultants.map(({ image, name, description, profileUrl, imgRight }: ConsultantProps) => {
    return (
      <Consultant
        key={name}
        image={image}
        name={name}
        description={description}
        profileUrl={profileUrl}
        imgRight={imgRight}
      />
    );
  });
};

const Agenda = ({ className }: { className: string }) => (
  <div className={`${styles.contentText} ${className}`}>
    <h2>Agenda</h2>
    <p>
      <strong>8:30am:</strong> Breakfast served{' '}
    </p>
    <p>
      <strong>9:00am:</strong> Welcome from Cain Ullah, CEO of Red Badger
    </p>
    <p>
      <strong>9:20am:</strong> Power of diverse thinking by Matthew Syed, author of Rebel Ideas
    </p>
    <p>
      <strong>10:30am:</strong> Close
    </p>
  </div>
);

const MBPLP = ({ title, time, place, date, location, consultants, hubspotForm }: MBPLPProps) => {
  return (
    <div>
      <Social
        title={'Mission Beyond Product'}
        description={
          'Mission Beyond Product is an event series enabling collective cooperation, where thinkers and doers come together to tackle the world’s biggest challenges.'
        }
        metaImage={metaLogo}
        altText="Mission Beyond Product Logo"
        url="https://missionbeyond.co.uk"
      />
      <div className={styles.MBPLP}>
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <div className={styles.headerLogo}>
              <MBPLogo />
            </div>
          </div>
          <div className={`${styles.contentHeaderText} ${styles.narrowContent}`}>
            <h3>What?</h3>
            <p>
              Mission Beyond Product is a coalition of action-taking business leaders ready to step
              beyond the walls of their own organisations. Together, we’ll tackle the world’s
              biggest challenges by creating bold new ideas and transforming words into action.
            </p>

            <a href="#mbp-form" className={styles.headerAnchor}>
              RSVP
            </a>
          </div>
          <div className={styles.triangleContainer}>
            <TriangleGraphic />
          </div>
          <div className={`${styles.contentText} ${styles.contentTextLarge}`}>
            <p>
              Join us at the first event with <strong>Matthew Syed</strong>, a bestselling author
              and <strong>Cain Ullah</strong>, CEO of Red Badger for a breakfast masterclass in
              creative problem-solving for the future. As part of the event, we will demo
              ShareThyme, a platform that connects generations through cooking, and invite you to be
              part of our next mission.
            </p>
          </div>
          <div className={`${styles.columnContainer} ${styles.narrowContent}`}>
            <div className={styles.contentTextColumn}>
              <div id="mbp-form" className={styles.contentText}>
                <h2>Event details</h2>
                <p>
                  <strong>Date:</strong> {date}
                  <br />
                  <strong>Time:</strong> {time}
                  <br />
                  <strong>Place:</strong> {place}
                  <br />
                  <strong>Location:</strong> {location}
                </p>
                <p>
                  <strong>Invitation only.</strong>
                </p>
              </div>

              <Agenda className={styles.displayLarge} />
            </div>

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

            <Agenda className={styles.displaySmall} />
          </div>
          <div className={styles.narrowContent}>
            <div className={styles.contentText}>
              <h2 className={styles.speakers}>Speakers</h2>
              <div className={styles.contentSpeakers}>{renderConsultants(consultants)}</div>
            </div>
            <div className={`${styles.contentText} ${styles.contentTextAOC}`}>
              <h2>Any other questions?</h2>
              If you have any queries or dietary or access requirements that we should be aware of,
              get in touch with us{' '}
              <a className={styles.inlineLink} href="mailto:hello@missionbeyond.co.uk">
                here.
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

/* eslint-enable react/no-danger */
export default MBPLP;
