// @flow
import React from 'react';

import Social from '../../../../components/social';
import Image from '../../../../components/image';
import ScrollTracker from '../../../../components/scroll-tracker';
import {
  PageHeading,
  Body,
  Quote,
  Section,
  SectionHeading,
  SectionBody,
  P,
  H3,
  UL,
} from '../shared';
import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';
import ListBox from '../../../../components/list-box';
import Card from '../../../../components/card';

// Image imports
import DevicesX1Img from './images/Devices@1x.png';
import DevicesX2Img from './images/Devices@2x.png';
import HeaderX1Img from './images/Header@1x.png';
import HeaderX2Img from './images/Header@2x.png';
import HeaderX3Img from './images/Header@3x.png';
import PlasticCardX1Img from './images/PlasticCard@1x.png';
import PlasticCardX2Img from './images/PlasticCard@2x.png';
import RyanX2Img from './images/Ryan@2x.png';
import TapWithPhoneX1Img from './images/TapWithPhone@1x.jpg';
import TapWithPhoneX2Img from './images/TapWithPhone@2x.jpg';
import TapWithPhoneX3Img from './images/TapWithPhone@3x.jpg';
import TapWithWatchX1Img from './images/TapWithWatch@1x.png';
import TapWithWatchX2Img from './images/TapWithWatch@2x.png';
import TestingX1Img from './images/Testing@1x.png';
import TestingX2Img from './images/Testing@2x.png';

import styles from './style.css';

const quoteProps = {
  text:
    'None of this would be possible without the audacity and vision to deliver a cutting edge customer experience, willingness to collaborate, adopt a test and learn mindset and staying totally focused on the needs of our customers.  Red Badger has been a powerful ally from the start and instrumental in delivering a great customer experience with Nando’s.',
  author: {
    name: 'Ryan Foreman',
    title: "Product Manager at Nando's",
    image: RyanX2Img,
  },
};

const social = {
  title:
    "Nando's: Delivering a digital reward programme with full-stack modern engineering | Red Badger",
  description:
    "Here's how Red Badger delivered a pioneering digital-reward programme for Nando's using NFC and full-stack engineering.",
  metaImage: HeaderX1Img,
  altText: "Nando's digital reward programme story",
  url: 'https://red-badger.com/our-work/case-study/nandos-loyalty/',
};

export default function NandosLoyalty() {
  return (
    <ScrollTracker>
      <Social {...social} />
      <div className={styles.headerImgWrapper}>
        <Image
          src={HeaderX1Img}
          src2x={HeaderX2Img}
          src3x={HeaderX3Img}
          className={styles.headerImg}
          altText="Nando's digital reward programme story"
        />
      </div>
      <Body>
        <PageHeading>Digital-first rewards programme</PageHeading>
        <Section>
          <SectionBody>
            <P>
              <a href="https://www.nandos.co.uk/card/about">The Nando&apos;s Rewards programme</a>{' '}
              allows lovers of the brand&apos;s legendary PERi-PERi to collect ‘chillies’ to earn
              free PERi-PERi. Red Badger and the Nando&apos;s Loyalty product team have reimagined
              the customer experience of the Nando&apos;s rewards programme – designing and building
              a digital-first, mobile wallet enabled loyalty experience enabling customers to earn
              and redeem rewards across all digital touchpoints.
            </P>
          </SectionBody>
        </Section>
        <div className={styles.coloumnContent}>
          <Section>
            <Image
              src={TapWithPhoneX1Img}
              src2x={TapWithPhoneX2Img}
              src3x={TapWithPhoneX3Img}
              className={styles.bodyImage}
              altText="Mobile and Restaurant POS - Nando's digital reward programme"
            />
          </Section>
          <Section>
            <Card>
              <ListBox
                className={styles.listBox}
                title="HEADLINES"
                items={[
                  {
                    label:
                      "Introduced first NFC-enabled mobile loyalty card in the UK built upon entirely bespoke infrastructure to enable the loyalty scheme across Nando's digital ecosystem",
                  },
                  {
                    label:
                      'Created a new digital channel for both customer acquisition and engagement',
                  },
                  {
                    label:
                      'Designed and built an end-to-end digital loyalty experience validated for customer desirability and business viability',
                  },
                ]}
                itemClassName={styles.listBox__item}
              />
            </Card>
          </Section>
        </div>
        <Section>
          <SectionHeading
            subHeading="The Challenge"
            heading="Poor experiences spoil the taste of free PERi-PERi"
          />
          <SectionBody>
            <P>
              In 2018, Nando&apos;s came up with a hypothesis that transforming the existing
              Nando&apos;s reward programme into a digital-first journey would eradicate a number of
              problems customers were experiencing.
            </P>
          </SectionBody>
        </Section>
        <Section>
          <div className={styles.coloumnContentTall}>
            <Section>
              <Image
                src={PlasticCardX1Img}
                src2x={PlasticCardX2Img}
                className={styles.bodyImage}
                altText="Nando's loyalty card - review and challenge"
              />
            </Section>
            <Section>
              <div>
                <P>
                  The original Nando&apos;s rewards programme offering relied on a plastic card.
                  Handing the card to staff at point of sale in the restaurant would allow customers
                  to collect chillies, which add up to rewards that can be redeemed for free food
                  (scientifically proven to taste even better than regular Nando&apos;s).
                </P>
                <P>
                  There were multiple issues with this setup. Customers had to keep the card in
                  their wallet and have it every time they visited. Cards were easily lost and time
                  consuming to replace. Customers would often start collecting towards a reward, but
                  then abandon their card, only to register a new one and start over again, no
                  closer to their free PERi-PERi. On top of that, the programme released more
                  plastic into the world, which wasn&apos;t aligned with Nando&apos;s environmental
                  efforts such as their commitment to reduce direct emissions to zero by 2030.
                </P>
                <P>The plastic card had to evolve with the times.</P>
              </div>
            </Section>
          </div>
        </Section>
        <Section>
          <SectionHeading
            subHeading="Doing the right thing"
            heading="Reimagining a loyalty programme"
          />
          <SectionBody>
            <P>
              <strong>
                Nando&apos;s believed solving the plastic card problem would unlock a host of other
                benefits for both customers and business alike:
              </strong>
            </P>
            <UL>
              <li>
                <strong>Increased engagement from current customers</strong>: Eliminate current pain
                points with the scheme such as lost or forgotten cards, lack of understanding of the
                value of the scheme, and incomplete registrations.
              </li>
              <li>
                <strong>Open up new customer segments</strong>: Attract digital natives - who expect
                to engage with brands in a digital way.
              </li>
              <li>
                <strong>Business efficiency and cost reduction</strong>: Reduce administration of
                the scheme and create a unified customer data ecosystem.
              </li>
            </UL>
            <P>
              The team identified a number of options for digitally enabled loyalty, the best of
              which was to launch the Nando&apos;s card for customers&apos; mobile wallets through
              Apple&apos;s Wallet app and GPay. Now instead of the plastic card, customers simply
              touch their phone at the till and the transaction would automatically use the
              customer&apos;s Nando&apos;s account, earning Chillies and unlocking rewards when
              ordering in restaurants or online.
            </P>
          </SectionBody>
        </Section>
        <div className={styles.bannerWrapper}>
          <Image
            src={TapWithWatchX1Img}
            src2x={TapWithWatchX2Img}
            className={styles.banner}
            altText="Apple Watch and Restaurant POS - Nando's digital reward programme"
          />
        </div>
        <Section>
          <SectionBody>
            <P>
              The challenge for the team was designing an experience that seamlessly connected
              physical and digital spaces, ensuring all the customer touchpoints work in sync and
              making the immense technical complexity feel entirely effortless.
            </P>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading
            subHeading="Do the thing right"
            heading="Striving for the best customer experience"
          />
          <SectionBody>
            <H3>8-week test & learn discovery</H3>
            <P>
              The initiative kicked off with an 8-week discovery period. A cross-functional team
              used a Lean approach to conduct customer research, competitor analysis and business
              stakeholder interviews. We experimented with 7-10 technical solutions to digitally
              enable loyalty, from linking credit card data to using a phone number to verify
              identity and even biometric authentication.
            </P>
            <H3>Incremental value to the customers</H3>
            <P>
              The team settled on a mobile-wallet enabled scheme as the most viable and desirable
              solution. The plan was to adopt an incremental approach to deliver value to
              Nando&apos;s customers following a Lean methodology of rapid test &amp; learn phases
              with customers.
            </P>
            <P>
              In the Alpha stage, we took a road trip to guerrilla-test our riskiest customer
              assumptions and validate the technical viability of a new-to-market hardware solution.
              Through this process we came up with many iterations of the journey and visuals to
              identify what worked best for the customer.
            </P>
          </SectionBody>
        </Section>
        <P>
          <span className={styles.coloumnContentShort}>
            <Image
              src={TestingX1Img}
              src2x={TestingX2Img}
              className={styles.bodyImage}
              altText="Group testing the Nando's digital reward programme"
            />
            <Image
              src={DevicesX1Img}
              src2x={DevicesX2Img}
              className={styles.bodyImage}
              altText="Nando's digital reward programme on mobile devices"
            />
          </span>
        </P>
        <Section>
          <SectionBody>
            <P>
              On the back of what we found out, we refined the experience and in the Beta phase,
              rolled out the solution to Nando&apos;s most loyal customers. Once everything worked
              to their satisfaction, we gradually expanded the new experience to include all
              customer segments. This let the team release the new experience as early as possible
              to get fast feedback, but without having to cater to every edge case and with a
              limited impact if anything didn&apos;t work quite right at first try.
            </P>
            <H3>The fullest of full-stack software engineering</H3>
            <P>
              The team was the first in the UK to introduce a loyalty scheme into Apple&apos;s
              Wallet app using NFC to tap the pass in the restaurant. This took full-stack effort
              like no other, spanning web and mobile customer journeys, web services, transactional
              email, Apple and Google wallet API infrastructure, down to integrating the tills with
              a new hardware device enabling the NFC transactions for passes in mobile wallets.
            </P>
            <P>
              Brand new and not available publicly in the UK and Ireland at the time, the NFC
              loyalty technology was a first for Nando&apos;s. We worked closely with Apple to
              implement the new service, and helped find a hardware supplier for the NFC readers
              supporting it. In the end, it even took a custom device driver to make the user
              journey as smooth as possible.
            </P>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading subHeading="The results" heading="A future-proof digital solution" />
          <SectionBody>
            <P>
              In addition to the foundation services to earn Chillies and redeem rewards, the team
              delivered a brand new registration flow and an industry-first mobile NFC loyalty card,
              as well as redesigned messaging of the scheme. We brought in new agile ways of working
              and embedded a test &amp; learn approach with customers and internal stakeholders.
            </P>
            <P>The results speak for themselves:</P>
            <Card>
              <ListBox
                className={styles.listBox}
                title="Impact"
                items={[
                  {
                    label:
                      'Within 3 months, over 300,000 customers had added the card to their mobile wallet',
                  },
                  {
                    label:
                      'Loyalty registrations doubled compared to the same period of the previous year',
                  },
                  {
                    label:
                      'The percentage of orders earning loyalty went from 33% to 66% and reward redemption jumped from 6% to 18% of orders',
                  },
                  {
                    label: 'Removed £200k of annual plastic card production cost from the business',
                  },
                ]}
                itemClassName={styles.listBox__item}
              />
            </Card>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <Quote {...quoteProps} />
          </SectionBody>
        </Section>
      </Body>
      <WhatToReadNext currentPage="prideCaseStudy" linkKeys={['pagoFx']} />
      <ChecklistContactUs />
    </ScrollTracker>
  );
}
