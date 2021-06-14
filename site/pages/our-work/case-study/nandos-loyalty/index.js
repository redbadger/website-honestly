// @flow
import React from 'react';

// import Social from '../../../../components/social';
// import Image from '../../../../components/image';
import ScrollTracker from '../../../../components/scroll-tracker';
// import Triptych from '../../../../components/triptych';
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
  // ArticleImg,
} from '../shared';
// import Video from '../shared/video';
import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';
import ListBox from '../../../../components/list-box';
import Card from '../../../../components/card';

import styles from './style.css';
// import Triptych from './triptych';

// import socialImg from './images/social.gif';
// import collaborationImg from './images/collaboration.jpg';
// import header from './images/header.gif';

// import Ryan from './images/Ryan_HS.jpg';
// import Viktor from './images/Viktor_HS.jpg';

// triptich images
// import triptychLeft from './images/trip-left.jpg';
// import triptychMiddle from './images/trip-middle.jpg';
// import triptychRight from './images/trip-right.jpg';

// // Update
// const social = {
//   title: "Nando's loyalty case study | Red Badger",
//   description:
//     'Red Badger worked with the Nando’s product team to reimagine the customer experience of the restaurant’s loyalty programme. Together we designed and built a digital-first, mobile wallet enabled loyalty experience enabling customers to earn and redeem rewards across all digital touchpoints.',
//   metaImage: socialImg,
//   altText: 'TODO',
//   url: 'https://red-badger.com/our-work/case-study/nandos-loyalty',
// };

const quoteProps = {
  text:
    'None of this would be possible without the audacity and vision to deliver a cutting edge customer experience, willingness to collaborate, adopt a test and learn mindset and staying totally focused on the needs of our customers. Red Badger has been a powerful ally from the start and instrumental in bringing this loyalty programme to market.',
  author: {
    name: 'Ryan Foreman',
    title: "Product Manager at Nando's",
    // image: Ryan,
  },
};

// const endQuoteProps = {
//   text:
//     "It was a real joy to work with Nando's on a truly innovative, industry first approach to customer loyalty. The brand has a cult following unlike any other among the digital native customers, and the mobile wallet approach clearly fit right in with their lives, allowing more of them to enjoy the Nando's rewards. Overcoming the technical obstacles was great fun for the team and thanks to Nando's openness to innovation, we were able to do some of our best work together.",
//   author: {
//     name: 'Viktor Charypar',
//     title: 'Tech Director at Red Badger',
//     image: Viktor,
//   },
// };

// const tryptychConfig = {
//   srcImageLeft: left,
//   srcImageMiddle: middle,
//   srcImageRight: right,
//   altImageLeft:
//     "Phone with the Pride app on in screen displaying a map, text reads: 'Easily find bars and events on the day'",
//   altImageMiddle:
//     "Phone with the Pride app on in screen displaying a list of events, text reads: 'Plan your perfect festival with ease and love'",
//   altImageRight:
//     "Phone with the Pride app on in screen displaying a list of event categories, text reads: 'Find diverse experiences from cabaret to films'",
// };

export default function Pride() {
  return (
    <ScrollTracker>
      {
        // <Social {...social} />
      }
      <div className={styles.headerImgWrapper}>
        {/* <Image
          src={header}
          className={styles.headerImg}
          altText="People (Badgers) sticking post-its on a blue wall"
        /> */}
      </div>
      <Body>
        <PageHeading>Digital-first loyalty programme</PageHeading>
        <Section>
          <SectionBody>
            <P>
              <a href="https://www.nandos.co.uk/card/about">Nando&aposs loyalty programme</a> allows
              lovers of the legendary PERi-PERi Chicken restaurant to collect ‘chillies’ and access
              free meals. Red Badger worked with the Nando’s product team to reimagine the customer
              experience of the restaurant’s loyalty programme. Together we designed and built a
              digital-first, mobile wallet enabled loyalty experience enabling customers to earn and
              redeem rewards across all digital touchpoints.
            </P>
            <Card>
              <ListBox
                className={styles.listBox}
                title="RESULTS, AT A GLANCE"
                items={[
                  {
                    label: 'Introduced first NFC-enabled Loyalty Card in the UK',
                  },
                  {
                    label:
                      'Created a new digital channel for both customer acquisition and engagement ',
                  },
                  {
                    label:
                      'Designed and built an end-to-end digital loyalty experience validated for customer desirability and business viability',
                  },
                  {
                    label:
                      'Built a bespoke tech infrastructure to enable the loyalty scheme across Nando’s digital ecosystem',
                  },
                ]}
                itemClassName={styles.listBox__item}
              />
            </Card>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading
            subHeading="The Challenge"
            heading="Poor experiences spoil the taste of free PERi-PERi"
          />
          <SectionBody>
            <P>
              In 2018, Nando’s came to Red Badger with a hypothesis that transforming it’s existing
              loyalty programme into a digital-first journey would eradicate a number of problems
              it’s customers were experiencing.
            </P>
            <P>
              <b>Image placehodler: the plastic card</b>
            </P>
            <P>
              The original loyalty offering relied on a plastic card. Handing the card to staff at
              point of sale in the restaurant would allow customers to collect chillies, which add
              up to rewards that can be redeemed for free food (scientifically proven to taste even
              better than regular Nando’s).
            </P>
            <P>
              There were multiple issues with this setup. Customers had to keep the card in their
              wallet and have it every time they visited. Cards were easily lost and time consuming
              to replace. Customers would often start collecting towards a reward, but then abandon
              their card, only to register a new one and start over again, no closer to their free
              PERi-PERi. On top of that, the scheme released more plastic into the world, which
              wasn’t aligned with Nando’s environmental efforts such as their commitment to reduce
              direct emissions to zero by 2030.
            </P>
            <P>The plastic card had to evolve with the times.</P>
            {
              // <Triptych {...tryptychConfig} />
            }
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading
            subHeading="Doing the right thing"
            heading="Reimagining a loyalty programme"
          />
          <SectionBody>
            <P>
              Nando’s believed solving the plastic card problem would unlock a host of other
              benefits for both customers and business alike:
            </P>
            <UL>
              <li>
                <strong>Increased engagement from current customers</strong>: Eliminate current pain
                points with the scheme such as lost or forgotten cards, lack of understanding of the
                value of the scheme, and incomplete registrations.
              </li>
              <li>
                <b>Open up new customer segments</b>: Attract digital natives - who expect to engage
                with brands in a digital way.
              </li>
              <li>
                <b>Business efficiency and cost reduction</b>: Reduce administration of the scheme
                and create a unified customer data ecosystem.
              </li>
            </UL>
            <P>
              The team identified a number of options for digitally enabled loyalty, the best of
              which was to launch the Nando’s card for customer’s mobile wallets through Apple’s
              Wallet app and GPay. Now instead of the plastic card, customers simply touch their
              phone at the till and the transaction would automatically use the customer’s Nando’s
              account, earning Chillies and unlocking rewards when ordering in restaurants or
              online.
            </P>
            <P>
              <b>Image placeholder: tapping a phone on the reader</b>
            </P>
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
              The initiative kicked off with an 8-week discovery period. A blended Nando’s and Red
              Badger cross-functional team used a Lean approach to conduct customer research,
              competitor analysis and business stakeholder interviews. We experimented with 7-10
              technical solutions to digitally enable loyalty, from linking credit card data to
              using a phone number to verify identity and even biometric authentication.
            </P>
            <H3>Incremental value to the customers</H3>
            <P>
              The team settled on a mobile-wallet enabled scheme as the most viable and desirable
              solution. The plan was to adopt an incremental approach to deliver value to Nando’s
              customers following a Lean methodology of rapid test & learn phases with customers.
            </P>
            <P>
              In the Alpha stage, we took a road trip to guerrilla-test our riskiest customer
              assumptions and validate the technical viability of a new-to-market hardware solution.
              We worked hand-in-hand with internal stakeholders to ensure every part of the business
              understood and supported the service.
            </P>
            <P>
              <b>Image placeholder: evolution of the design</b>
            </P>
            <P>
              On the back of what we found out, we refined the experience and in the Beta phase,
              rolled out the solution to Nando’s most loyal customers. Once everything worked to
              their satisfaction, we gradually expanded the new experience to include all customer
              segments. This let the team release the new experience as early as possible to get
              fast feedback, but without having to cater to every edge case and with a limited
              impact if anything didn’t work quite right at first try.
            </P>
            <H3>The fullest of full-stack software engineering</H3>
            <P>
              Brand new and not available publicly at the time, the NFC loyalty technology was a
              first for us and Nando’s. We worked closely with Apple to implement the new service,
              and helped find a hardware supplier for the NFC readers supporting it. In the end, it
              even took a custom device driver to make the user journey as smooth as possible.
            </P>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading subHeading="The results" heading="A future-proof digital solution" />
          <SectionBody>
            <P>
              In addition to the foundation services to earn Chillies and redeem rewards, the team
              delivered a brand new registration flow and an industry-first NFC loyalty pass in
              mobile wallet, as well as redesigned messaging of the scheme. We brought in new agile
              ways of working and embedded a test & learn approach with customers and internal
              stakeholders.
            </P>
            <P>The results speak for themselves:</P>
            <Card>
              <ListBox
                className={styles.listBox}
                title="Results"
                items={[
                  {
                    label:
                      'Within 3 months, over 300,000 customers had added the card to their mobile wallet',
                  },
                  {
                    label:
                      'Loyalty registrations doubled compared to the same period of the previous year.',
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
