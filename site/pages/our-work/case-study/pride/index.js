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
  ArticleImg,
} from '../shared';
import Video from '../shared/video';
import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';
import ListBox from '../../../../components/list-box';
import Card from '../../../../components/card';

import styles from './style.css';
import Triptych from './triptych';

import socialImg from './images/social.gif';
import collaborationImg from './images/collaboration.jpg';
import header from './images/header.gif';
import Kristof from './images/Kristof_HS.jpg';
import Lani from './images/Lani_HS.jpg';

// Update
const social = {
  title: 'Building a react native mobile app for Pride in London | Red Badger',
  description:
    'Find out how we used React Native to deliver a 5 star mobile app across two platforms working as a cross-functional volunteer team.',
  metaImage: socialImg,
  altText: 'People (Badgers) sticking post-its on a blue wall',
  url: 'https://red-badger.com/our-work/case-study/pride',
};

const quoteProps = {
  text:
    'I loved working with Red Badger. From the very start of the project I felt the passion and energy from each and every team member. You proved yourself to be a well oiled machine getting some really awesome, creative work out and working to a schedule and deadlines. Everyone at Pride is super excited and happy with what we’ve done.',
  author: {
    name: 'Kristof Hamilton',
    title: 'Product Owner at Pride in London',
    image: Kristof,
  },
};

const endQuoteProps = {
  text:
    'Pride in London’s new app was an exciting challenge for Red Badger and all the volunteers involved. As a pro-bono, voluntary, open source project that has been built for the community, by the community, it’s been a true labour of love and collaboration. The app is a culmination of all the volunteers’ work and truly reflects the enthusiasm they brought to the project.',
  author: {
    name: 'Lani Shamash',
    title: 'Delivery Director at Red Badger',
    image: Lani,
  },
};

export default function Pride() {
  return (
    <ScrollTracker>
      <Social {...social} />
      <div className={styles.headerImgWrapper}>
        <Image
          src={header}
          className={styles.headerImg}
          altText="People (Badgers) sticking post-its on a blue wall"
        />
      </div>
      <Body>
        <PageHeading>
          A labour of love – delivering a flagship, best-in-class digital experience for the Pride
          in London community
        </PageHeading>
        <Section>
          <SectionBody>
            <Quote {...quoteProps} />
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading
            subHeading="Let's make things better"
            heading="Encouraging festival discovery with a mobile app"
          />
          <SectionBody>
            <P>
              Pride in London is a non-profit, volunteer-led organisation which works to provide a
              platform for every part of London’s LGBTQ+ community and campaigns for freedoms that
              will allow them to live their lives on a genuinely equal footing. It’s ​the ​world’s
              largest curated ​LGBTQ+ ​festival ​with ​over ​300 ​LGBTQ+ events, ​culminating ​in a
              Pride parade ​through ​Central ​London. Over 1 million visitors join the day,
              including 30,000 parade participants from ​all ​over ​the ​UK ​and abroad.
            </P>
            <P>
              Pride In London released their first app for the 2017 parade. 2018 saw more ambitious
              goals for the events and also the digital experience. Red Badger worked with Pride in
              London to define the vision for the project. As part of this we mapped a set of key
              requirements, at the core of which were inclusivity and accessibility, reflecting
              values and behaviour of Pride in London and respecting the diversity of the community
              they serve. The main requirement of the app was to encourage the discovery of the
              events and help Pride goers navigate the parade. Due to organisational challenges, we
              were not able to reuse the code developed for the previous app thus the product had to
              be built from scratch.
            </P>
            <Triptych />
            <H3>The right project for Red Badger</H3>
            <P>
              As a business we&#39;ve always been proud of the work we do and two years ago we
              decided to focus more on delivering social good, leading to us establishing a Social
              Value team. The Pride in London app was the perfect project to demonstrate what we
              could achieve by volunteering our time.
            </P>
            <P>It was the right project for us on many fronts, allowing us to:</P>
            <UL>
              <li>
                Work with a brand that chimes with Red Badger’s own values of valuing diversity, and
                being inclusive and accessible
              </li>
              <li>Design and deliver the app as a truly cross-functional team </li>
              <li>Choose the right tech for the job </li>
              <li>Demonstrate how best in class delivery can create social value</li>
            </UL>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading
            subHeading="Do the right thing. Do the thing right"
            heading="Working as a cross-functional volunteer team"
          />
          <SectionBody>
            <H3>Remote cross-functional team</H3>
            <P>
              At Red Badger we usually work in cross-functional teams, co-locating with our clients
              to enable short feedback loops and highly efficient teams. In a voluntary project this
              wasn’t possible and it was particularly challenging.
            </P>
            <P>
              At the beginning of the project we had volunteers from our Strategy, Branding, User
              Experience, Design, Delivery, Engineering teams and Pride in London, in the same room,
              collaborating on the product vision and roadmap. We agreed that the app had to be a
              place to promote and showcase the diversity of the 2018 festival and parade, help
              people discover, plan and get involved in events, while also making it simple and easy
              to use.
            </P>
            <P>
              We ran a branding workshop early on. This helped define the design approach and the
              creative vision for the app. Our approach centred on a richer, more cohesive
              experience for the user.
            </P>
            <ArticleImg src={collaborationImg} alt="" />
            <H3>Choosing React Native as the right tech for the job</H3>
            <P>
              When looking into which tech would be best to deliver a fully functioning app across
              two platforms, React Native came up top. Firstly, it meant we could open source the
              project and give back to the tech community which we collectively rely so heavily on.
              Secondly, it meant that we could develop our skills and expertise in a growing
              technology that has incredible potential for the future – not just for Pride in
              London, but for our other clients too. Thirdly, given tight timelines, we could
              deliver a minimum desirable mobile product for both iOS and Android platforms quickly,
              and iterate from there.
            </P>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading
            subHeading="Creating lasting change"
            heading="Proud to have built the Pride in London Mobile App"
          />
          <SectionBody>
            <P>
              Proud is the word that best encompasses the ethos of the project. We’re incredibly
              proud of the quality of work and the product we delivered for Pride In London 2018
              festival.
            </P>
            <P>Amongst the things we’re most proud of are:</P>
            <UL>
              <li>
                Partnering with an organisation that promotes equality, diversity and inclusion
              </li>
              <li>
                Developing an open source project that can live beyond our involvement and be easily
                improved for the next year’s events
              </li>
              <li>Delivering a 5★ app experience with AA accessibility standards </li>
              <li>Helping 20,000+ people navigate the festival and parade</li>
              <li>
                Delivering an end-to-end mobile product in 6 months working as a genuinely
                cross-functional team
              </li>
              <li>
                Delivering a project using React Native and learning some valuable lessons along the
                way
              </li>
            </UL>
            <P>
              You can read more in-depth about{' '}
              <a href="https://blog.red-badger.com/2018/6/27/branding-the-pride-in-london-app">
                Branding
              </a>
              ,{' '}
              <a href="https://blog.red-badger.com/2018/6/28/designing-pride-into-the-experience">
                UX
              </a>
              ,{' '}
              <a href="https://red-badger.com/blog/2018/6/28/pride-in-london-going-native">
                React Native
              </a>
              ,{' '}
              <a href="https://blog.red-badger.com/blog/2018/6/28/open-source-with-pride">
                Open Source
              </a>{' '}
              and{' '}
              <a href="https://blog.red-badger.com/2018/6/28/the-pride-in-london-2018-app-delivering-a-rainbow">
                Delivery
              </a>
              .
            </P>
            <P>
              Since completing this project we have been approached and engaged with some new
              clients on mobile projects. If you have a mobile app project in mind we’d love to talk
              to you about how to apply our knowledge and skills to help you deliver great mobile
              experiences for your customers. Please get in touch on{' '}
              <a href="email:hello@red-badger.com" className={styles.link}>
                hello@red-badger.com
              </a>
              .
            </P>
            <P>
              Are you a charity or NGO looking for help with your project? Our social value team
              offer pro bono or reduced rates. Please contact us at{' '}
              <a href="email:socialvalue@red-badger.com" className={styles.link}>
                socialvalue@red-badger.com
              </a>
              .
            </P>
          </SectionBody>
        </Section>
        <Section>
          <Video name="Pride video" elementId="pride-video" videoId="PwA3wDnYq4Y" />
        </Section>

        <Section>
          <SectionBody>
            <Card>
              <ListBox
                className={styles.listBox}
                title="Results"
                items={[
                  {
                    label: '21,000+ app downloads, +50% vs. 2017',
                  },
                  {
                    label: '1,000 daily active users, +280% vs. 2017',
                  },
                  {
                    label: '1000+ hours on the app on Parade Day alone',
                  },
                  {
                    label: '5★ user ratings on iOS and Android platforms',
                  },
                  {
                    label: 'Featured as an app of the day on App Store',
                  },
                  {
                    label: '‘AA’ accessibility standard',
                  },
                ]}
                itemClassName={styles.listBox__item}
              />
            </Card>
          </SectionBody>
        </Section>

        <Section>
          <SectionBody>
            <Quote {...endQuoteProps} />
          </SectionBody>
        </Section>
      </Body>
      <WhatToReadNext currentPage="pride" linkKeys={[]} />
      <ChecklistContactUs />
    </ScrollTracker>
  );
}
