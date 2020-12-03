import React from 'react';

// Components
import ScrollTracker from '../../../../components/scroll-tracker';
import Social from '../../../../components/social';
import Image from '../../../../components/image';
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
import Triptych from './triptych';
import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';

// Assets
import header from './images/header.png';
import header2x from './images/header@2x.png';
import header3x from './images/header@3x.png';
import artboard from './images/artboard.png';
import postitGroup from './images/post-it-group.png';
import MapDotImage from './map-dot';

// Styles
import styles from './style.css';

const social = {
  title: 'PagoFX: Helping Santander build a trusted digital business | Red Badger',
  description:
    'Find out how we used React Native to deliver a 5 star mobile app across two platforms working as a cross-functional volunteer team.',
  metaImage: header,
  altText: 'People (Badgers) sticking post-its on a blue wall',
  url: 'https://red-badger.com/our-work/case-study/pagofx',
};

const PagoFx = () => (
  <ScrollTracker>
    <Social {...social} />
    <Image
      src={header3x}
      src2x={header2x}
      src3x={header3x}
      className={styles.headerImg}
      altText="iPhone showing Pago FX application"
    />
    <Body>
      <div className={styles.body}>
        <PageHeading>PagoFX: Helping Santander build a trusted digital business</PageHeading>
        <Section>
          {/* <div className={styles.desktopContentWrapper}> */}
          <SectionBody>
            <P>
              Red Badger worked with Santander’s PagoFX team to design, build and deliver a
              best-in-class payments service.
            </P>
            <P>
              Part of Santander’s four-year (2019-2022), 20 billion-euro digital technology pledge,
              PagoFX is a standalone international money transfer app that offers anyone low cost
              money transfers, bank-level security, and multi-channel customer support.
            </P>
            <P>
              In 2020, the service was launched in the UK with bold plans to expand into 20 new
              markets thereafter.
            </P>
          </SectionBody>
          {/* </div> */}
        </Section>
        <div className={styles.videoAndResultsDesktop}>
          <Section>
            <Video name="PagoFX video" elementId="pride-video" videoId="56apxChHLDs" />
          </Section>

          <Section>
            <SectionBody>
              <Card>
                <ListBox
                  className={styles.listBox}
                  title="Results, at glance"
                  items={[
                    {
                      label:
                        'Built an end-to-end product in just 18 months – in a highly regulated financial sector',
                    },
                    {
                      label:
                        'Designed a best-in-class customer experience, powered by user testing across Europe',
                    },
                    {
                      label:
                        'Helped establish a solid technical foundation to set PagoFX up for future success',
                    },
                    {
                      label:
                        'Created a service that was recognised by users with a 4+ star rating on the App Store ',
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
                Over the last couple of years, international transfers have seen an increasing
                number of new-to-market providers offering innovative, user centred services.
                Consumer expectations are changing fast.
              </P>

              <P>
                In this context, Santander saw an opportunity to delight the market with a brand new
                service that brings together the best of both worlds. PagoFX combines the trust and
                security of a large established bank with the single-minded customer focus of an
                industry disruptor.
              </P>
              <div className={styles.h3}>
                <H3>Defining unknown problems</H3>
              </div>
              <P>
                Money transfer services haven’t traditionally been beloved of customers. Imagine
                WhatsApp without the blue ticks, without notifications and where only half your
                message gets delivered. Then imagine being charged £20 to send that message. That’s
                what sending money overseas has felt like for many.
              </P>
              <P>
                How do you shake that up and offer something altogether more effortless and
                reassuring? PagoFX&apos;s key selling points are around giving back control to the
                customer through transparency, offering fair pricing, and being trustworthy (which
                goes hand in hand with being backed by a world-renowned bank).
              </P>
              <P>
                Part of our job was to validate the assumptions underlying the new product and help
                PagoFX product owners prioritise which problems to solve first.
              </P>
              <P>
                Red Badger experts set out to design a minimum desirable product – a limited
                internal pilot launch of an iOS application with a full customer onboarding journey
                and end-to-end international payment encompassing the capture of funds, FX hedging,
                and settlement.
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
                <H3>Speaking to real customers</H3>
              </div>
              <P>
                At Red Badger, we believe in getting out of the building to speak to real customers,
                shaping products with people at their heart. This project was no exception. We
                listened, and learnt that customers who’d used traditional banks to make
                international money transfers were frustrated with hidden fees, long delivery times,
                and poor visibility of payments.
              </P>
              <P>
                This valuable information allowed us to better understand the problems we needed to
                solve, as well as who’s been struggling with these problems and how.
              </P>
              <P>
                Red Badger put the product in the hands of real users early on, through a
                comprehensive user onboarding initiative. We worked closely with PagoFX’s business,
                legal and tech teams to create a journey that met their requirements as well as the
                needs of users. The result? We crafted a product that gave users a strong sense of
                security and that’s simple and easy to use.
              </P>
              <div className={styles.lastParagraphWrapper}>
                <P>
                  We took the same user-centric approach to defining the payments journey, too. And
                  we did everything we could to make the payment process refreshingly transparent.
                </P>
              </div>
            </div>
            <ArticleImg src={postitGroup} alt="Post it with ideas" />
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <div className={styles.h3}>
                <H3>Thinking like a start-up</H3>
              </div>
              <P>
                To create value fast, we needed to run the project according to Lean and Agile
                principles. The PagoFX team was set up to operate independently of the larger bank’s
                operations. It was given the autonomy to make product and technology choices and to
                experiment safely in isolation.
              </P>
              <P>
                For dramatically increased speed to market, the initial minimum desirable product
                was built using a number of third party services for some of the key functionality,
                with the longer-term strategy to migrate onto Santander platforms where appropriate.
              </P>
              <P>
                The first step towards an end-to-end product was to produce a pilot proving the key
                features we knew we needed: customer registration; the “Know Your Customer”
                verification process; acquiring funds from the customer; exchanging currency on the
                FX market; and sending money to the recipient.
              </P>
              <P>
                We built a series of prototypes exploring the technical feasibility of various early
                product ideas, including processing ApplePay payments and NFC scanning of biometric
                information from ID documents on Android.
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
                application for a payments license to the UK and EU regulators. Red Badger gave
                expert support from a technology perspective, covering cloud architecture, the
                processing of sensitive information, and general information security controls.
              </P>
              <P>
                The pilot’s success meant the next goals were a full launch in the UK, followed by
                the EU. While the pilot product was an end-to-end journey, the full scope of work
                for a public launch was significantly larger and more complex.
              </P>
              <div className={styles.h3}>
                <H3>Scaling and learning</H3>
              </div>
              <P>
                To achieve the larger scale launch at speed, the project grew from one Red Badger
                team to four parallel Red Badger teams.
              </P>
              <P>Here’s what the additional teams worked on:</P>
              <div className={styles.listWrapper}>
                <UL>
                  <li>Android application – a key platform to reach customers in the EU markets</li>
                  <li>
                    A staff-facing customer and payment operations portal – enabling operators to
                    monitor customer onboarding and payments processing so they could support
                    customers and monitor for any financial crime
                  </li>
                  <li>
                    An accounting ledger system to keep track of the precise movements of funds
                    during online payment processing
                  </li>
                </UL>
              </div>
              <P>
                As with any Red Badger project, we made sure we were continuously learning and
                improving. With our key user journeys defined, we ran regular lab-style usability
                testing sessions to evaluate journeys and to highlight any key usability issues. The
                process was designed to be collaborative, allowing key stakeholders and team members
                to understand and empathise with the user.
              </P>
              <P>
                We created a clear roadmap to incorporate customer desires and feedback, to continue
                to improve the experience and grow the customer base.
              </P>
            </div>
            <Triptych />
          </SectionBody>
        </Section>
        <Section>
          <div className={styles.h2}>
            <SectionHeading heading="From project to sustainable business" />
          </div>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <P>
                PagoFX’s aim? To make sure the business was well-positioned to operate the service
                independently and continue to scale the product into new markets. Together, we’ve
                provided a solid platform for these ambitions.
              </P>
              <P>
                In under 18 months, Red Badger helped PagoFX go from prototype to live product. The
                live product we created is now being rolled out globally.
              </P>
              <P>
                We’re proud of the work we’ve done to help create a foundation which PagoFX can
                confidently build upon in the future. Above all, we’re excited that so many
                customers will be able to make use of this trusted, secure and innovative product to
                send money abroad quickly and safely.
              </P>
            </div>
          </SectionBody>
        </Section>
      </div>
    </Body>
    <WhatToReadNext currentPage="pagofx" linkKeys={[]} />
    <ChecklistContactUs />
  </ScrollTracker>
);

export default PagoFx;
