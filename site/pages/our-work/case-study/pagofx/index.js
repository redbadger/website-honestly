import React from 'react';

// Components
import ScrollTracker from '../../../../components/scroll-tracker';
import Social from '../../../../components/social';
import Image from '../../../../components/image';
import Triptych from '../../../../components/triptych';
import {
  PageHeading,
  Body,
  Section,
  SectionHeading,
  SectionBody,
  P,
  H3,
  UL,
  ArticleImg,
} from '../shared';
import ListBox from '../../../../components/list-box';
import Card from '../../../../components/card';
import Video from '../shared/video';
import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';

// Assets
import header from './images/header.png';
import header2x from './images/header@2x.png';
import header3x from './images/transparent-header.png';
import artboard from './images/artboard.png';
import postitGroup from './images/post-it-group.png';
import MapDotImage from './map-dot';
import left from './images/left.png';
import middle from './images/middle.png';
import right from './images/right.png';

// Styles
import styles from './style.css';

const social = {
  title: 'PagoFX: Helping Santander build a trusted digital business | Red Badger',
  description:
    'Learn how Red Badger helped Santander’s PagoFX team to design, build and deliver a best-in-class payments service.',
  metaImage: header,
  altText: 'People (Badgers) sticking post-its on a blue wall',
  url: 'https://red-badger.com/our-work/case-study/pagofx',
};

const tryptychConfig = {
  srcImageLeft: left,
  srcImageMiddle: middle,
  srcImageRight: right,
  altImageLeft: 'Phone with the Pago FX app on in screen displaying a conversion quote',
  altImageMiddle: "Phone with the Pago FX app on in screen displaying a list 'greetings Reece'",
  altImageRight: 'Phone with the Pago FX app on in screen displaying a conversion quote',
};

const PagoFx = () => (
  <ScrollTracker>
    <Social {...social} />
    <div className={styles.headerImgWrapper}>
      <Image
        src={header3x}
        src2x={header2x}
        src3x={header3x}
        className={styles.headerImg}
        altText="iPhone showing Pago FX application"
      />
    </div>
    <Body>
      <div className={styles.body}>
        <PageHeading>PagoFX: Helping Santander build a digital business</PageHeading>
        <Section>
          <SectionBody>
            <P>
              PagoFX is a Santander-backed, standalone international money transfer app. Currently
              available in the UK but with ambitious global growth plans, it offers customers
              low-cost money transfers with bank-level security supported by multi-channel customer
              service. Instrumental in its development, Red Badger worked with PagoFX to design,
              build and launch the best in class payments service.
            </P>
          </SectionBody>
        </Section>
        <div className={styles.videoAndResultsDesktop}>
          <Section>
            <Video name="PagoFX video" elementId="pagofx-video" videoId="56apxChHLDs" />
          </Section>

          <Section>
            <SectionBody>
              <Card>
                <ListBox
                  className={styles.listBox}
                  title="AT A GLANCE"
                  items={[
                    {
                      label:
                        '18 month end-to-end product development in highly regulated financial sector',
                    },
                    {
                      label:
                        'Leveraged user testing across Europe to design best-in-class customer experience',
                    },
                    {
                      label:
                        'Architected long-term technical foundation and set up PagoFX for future success',
                    },
                    {
                      label: '4.9 * rating on App Store',
                    },
                  ]}
                  itemClassName={styles.listBox__item}
                />
              </Card>
            </SectionBody>
          </Section>
        </div>

        <Section>
          <div className={styles.h2}>
            <SectionHeading heading="Finding the right product-market fit" />
          </div>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <P>
                PagoFX is part of Santander’s 4-year digital transformation program, a program which
                has been pledged a staggering €20 billion investment. Identifying a gap in the
                international payments market, PagoFX is designed to combine the best of both
                worlds: the trust and security of a large bank with the single-minded customer focus
                of an industry disruptor. Santander believes that even with the flux of new market
                entrants, there is a clear space for the service.
              </P>
              <div className={styles.h3}>
                <H3>The challenge</H3>
              </div>
              <P>
                Sending money overseas today can be a painful experience. No clear verification
                process, no acknowledgement that funds received and no oversight as to whether the
                money even arrived. Plus you have to pay for the privilege. PagoFX’s key selling
                points are giving back control to the customer while being transparent, with fair
                pricing and with the trust that comes from the backing of a world-renowned bank.
              </P>
              <P>
                Red Badger’s job was to validate assumptions of the customer challenges being faced,
                the problem the service was trying to solve and give PagoFX product owners a clear
                understanding of which problems to solve first.
              </P>
              <P>
                We designed a minimum desirable product - a limited internal pilot launch of an iOS
                application with full customer onboarding journey and end-to-end international
                payment - which captured funds, FX hedging and settlement.
              </P>
            </div>
          </SectionBody>
        </Section>
      </div>
    </Body>
    <div className={styles.bannerWrapper}>
      <Image
        src={artboard}
        className={styles.banner}
        altText="Challenger mindset plus Santander is equal to Pago FX"
      />
    </div>
    <Body>
      <div className={styles.body}>
        <Section>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <div className={styles.h3}>
                <H3>Get out of the building and speak to customers</H3>
              </div>
              <P>
                Ahead of any concrete decisions, it was critical to collect real customer feedback.
                Hidden fees, long delivery times and poor payment visibility were all cited as
                problems using traditional banks to make international money transfers. This
                information crystallised the problems to solve and the broad swathes of people
                experiencing them.
              </P>
              <div className={styles.lastParagraphWrapper}>
                <P>
                  User onboarding was tackled first, working closely with business, legal and tech
                  teams to create a journey which delivered the security customers demanded while
                  meeting the quality requirements of the new service. The approach formulated
                  tackling this challenge gave a framework to define the payments journey, ensuring
                  money was safe and the process transparent.
                </P>
              </div>
            </div>
          </SectionBody>
        </Section>
        <div className={styles.postitGroupWrapper}>
          <ArticleImg src={postitGroup} alt="Post it with ideas" />
        </div>
        <Section>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <div className={styles.h3}>
                <H3>Start-up thinking</H3>
              </div>
              <P>
                To facilitate lean and agile operations, the PagoFX team was set up to operate
                independently of the larger bank’s operations. The team has autonomy to make product
                and technology decisions, experimenting safely in isolation.
              </P>
              <P>
                To rapidly accelerate time to market for the new service, the initial minimum
                desirable product was built using 3rd party services for some of the key
                functionalities with the longer-term strategy to migrate onto Santander platforms
                where appropriate.
              </P>
              <P>
                The first step towards an end-to-end product was to produce a pilot proving the key
                features needed - customer registration, the “Know Your Customer”(KYC) verification
                process, fund acquisition from customer, currency exchange and sending money to the
                recipient. A series of prototypes were built to explore the technical feasibility of
                early product ideas (e.g. processing ApplePay payments, NFC scanning of biometric
                information from ID documents on Android).
              </P>
              <P>
                The team set themselves an ambitious goal of making an international payment from
                the app within four months. This involved setting up brand new cloud infrastructure,
                building the iOS app itself, designing and building the payments platform powering
                it and selecting and integrating 3rd party services. Despite the size of the
                challenge, the team achieved its goal in time.
              </P>
            </div>
            <div>
              <picture>
                <MapDotImage />
              </picture>
            </div>
          </SectionBody>
        </Section>
        <Section>
          <div className={styles.h2}>
            <SectionHeading heading="Building a licensed payment provider" />
          </div>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <P>
                Santander established a separate legal entity for PagoFX and submitted an
                application for a payments license to UK and EU regulators. Red Badger provided
                technology support covering cloud architecture, processing sensitive information and
                general information security controls.
              </P>
              <P>
                The pilot’s success pushed the project forward to a full launch in the UK, followed
                by the EU. While the pilot product was an end-to-end journey, the full scope of work
                for public launch was significantly larger and more complex.
              </P>
              <div className={styles.h3}>
                <H3>Scaling delivery</H3>
              </div>
              <P>
                To achieve the larger scale launch, the project expanded to four parallel Red Badger
                teams. The additional teams worked on:
              </P>
              <div className={styles.listWrapper}>
                <UL>
                  <li>
                    <strong>The Android application </strong>- a key platform to reach customers in
                    EU markets
                  </li>
                  <li>
                    <strong>A staff facing customer and payment operations portal</strong> -
                    critical to enable operators to monitor customer onboarding and payments
                    processing and provide additional support for any potential financial crime
                  </li>
                  <li>
                    <strong>The accounting ledger system</strong> - required to keep track of the
                    precise movements of funds during online payment processing
                  </li>
                </UL>
              </div>
              <div className={styles.h3}>
                <H3>Continuous learning</H3>
              </div>
              <P>
                With key user journeys defined, regular lab-style usability testing was conducted to
                evaluate performance and highlight any key usability issues. The process was
                designed to be collaborative, allowing stakeholders to and team members to build
                user empathy - a very important element of delivering exemplary customer
                experiences.
              </P>
            </div>
          </SectionBody>
          <Triptych {...tryptychConfig} />
        </Section>
        <Section>
          <div className={styles.h2}>
            <SectionHeading heading="From a project to a sustainable business" />
          </div>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <P>
                A core objective of the project was to ensure PagoFX’s team could operate the
                service independently and continue to scale the product into new markets. A clear
                roadmap was devised to incorporate customer desires and feedback to fuel
                development, improve the experience and expand the customer base.
              </P>
              <P>
                In under 18 months, Red Badger helped PagoFX go from prototype to a globally rolled
                out product. PagoFX now has a solid foundation to build on the for the future and a
                best-in-class payments platform enabling customers to send money abroad quickly and
                safely.
              </P>
            </div>
          </SectionBody>
        </Section>
      </div>
    </Body>
    <WhatToReadNext currentPage="pagoFxCaseStudy" linkKeys={[]} />
    <ChecklistContactUs />
  </ScrollTracker>
);

export default PagoFx;
