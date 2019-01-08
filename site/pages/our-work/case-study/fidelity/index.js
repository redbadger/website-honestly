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
import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';
import ListBox from '../../../../components/list-box';
import Card from '../../../../components/card';
import Picture from '../../../../components/picture';

import styles from './style.css';

import socialImg from './images/social.jpg';
import binocularsImg from './images/Binoculars.jpg';
import headerL from './images/header_L.jpg';
import headerM from './images/header_M.jpg';
import headerS from './images/header_S.jpg';
import Monika from './images/Monika_HS.jpg';
import Screenshot01 from './images/Screenshots_1_M.png';
import Screenshot02 from './images/Screenshots_2_M.png';
import HarryPotters from './images/harry_potters.png';
import Waves from './images/BlackWaves.webm';
import WavesMP4 from './images/BlackWaves.mp4';
import WavesImage from './images/BlackWaves.jpg';

// Update
const social = {
  title: 'Leading design and usability for global financial website | Red Badger',
  description:
    'Reflecting Fidelity’s exceptional level of service with industry-leading design and usability on a global website.',
  metaImage: socialImg,
  altText: 'People (Badgers) sticking post-its on a blue wall',
  url: 'https://red-badger.com/our-work/case-study/fidelity',
};

const endQuoteProps = {
  text:
    'We worked closely with Fidelity Institutional to define a project vision, creative strategy and implementation roadmap that we then delivered on to provide a site that is a new benchmark for them in terms of content and execution. The new site has helped them articulate their story with pride and distinctiveness – it also positions them as thought leaders in their industry.',
  author: {
    name: 'Monika Koziol',
    title: 'Managing Director at Red Badger',
    image: Monika,
  },
};

export default function Fidelity() {
  return (
    <ScrollTracker>
      <Social {...social} />
      <div className={styles.headerImgWrapper}>
        <Picture
          largeSrc={headerL}
          mediumSrc={headerM}
          smallSrc={headerS}
          className={styles.headerImg}
          alt="People (Badgers) sticking post-its on a blue wall"
        />
      </div>
      <Body>
        <PageHeading>
          Communicating the fine art of investment with a unified, global website in four months
        </PageHeading>
        <Section>
          <SectionHeading
            subHeading="Let's make things better"
            heading="Using design to reflect an exceptional level of client service"
          />
          <SectionBody>
            <P>
              Fidelity International (Fidelity) is a global leader in investment, it manages $310bn
              globally for clients who range from private individuals to institutions like pension
              funds and sovereign wealth funds. It has been innovating for 50 years in 25 countries.
            </P>
            <P>
              Fidelity recognised that it had a fractured web strategy for institutional clients,
              sometimes combining them with other client groups or, in some markets, not offering
              any web content at all.
            </P>
            <P>
              With an ambitious brief, Fidelity chose to work with Red Badger to create a digital
              presence that would unite the company’s disparate global sites, showcase its
              capabilities, and highlight its thinking, without overwhelming the reader. Ultimately,
              the new website needed to give visitors a taste of the lengths Fidelity will go to for
              clients.
            </P>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading
            subHeading="Do the right thing. Do the thing right"
            heading="Creating a design strategy and delivering on it "
          />
          <SectionBody>
            <H3>Building a brand online</H3>
            <P>
              Our engagement with Fidelity began with an intense round of workshops which gathered
              our own designers, UX and developers with their own cross-disciplinary team. We worked
              together to set out a clear project vision, articulated as a client statement:
            </P>
            <ArticleImg src={binocularsImg} alt="" />
            <P>
              We used this vision as a platform to build the creative principles on, which then
              guided the design expression.
            </P>
            <P>
              Together, we focused on what clients want by identifying their goals, motivations and
              behaviours. This was a truly collaborative process from start to finish, making the
              design something which Fidelity feels reflects the company’s expertise, ambition and
              spirit.
            </P>
            <P>
              The central creative principle for the project which the team referred to throughout
              was ‘Provocatively Reassuring’. In a crowded market, the site needed to catch clients’
              attention but quickly hold their interest with reassuringly excellent and relevant
              content.
            </P>

            <H3>
              This elegant site anticipates my needs and supplies the investment thinking I rely on.
            </H3>
            <P>
              We used this vision as a platform to build the creative principles on, which then
              guided the design expression.
            </P>
            <P>
              Together, we focused on what clients want by identifying their goals, motivations and
              behaviours. This was a truly collaborative process from start to finish, making the
              design something which Fidelity feels reflects the company’s expertise, ambition and
              spirit.
            </P>
            <P>
              The central creative principle for the project which the team referred to throughout
              was ‘provocatively reassuring’. In a crowded market, the site needed to catch clients’
              attention but quickly hold their interest with reassuringly excellent and relevant
              content.
            </P>
            <H3>There are two main sections to the site:</H3>
            <UL>
              <li>
                <P>
                  <strong>Editorial, which is itself split into ‘Fidelity Answers’:</strong> a
                  novel, magazine-like approach which tackles thematic client questions with a
                  cross-asset class investment insight; and ‘Latest Thinking’: blogs with fast
                  market commentary and topical investment insight.
                </P>
              </li>
              <li>
                <strong>The ‘Business Card’:</strong> the section of the website that outlines
                Fidelity’s capabilities, sales contacts and background to the company’s history and
                heritage.
              </li>
            </UL>
            {/* Wrap in section for bespoke width */}
            <div className={styles.articleImgFlexWrapper}>
              <div className={styles.articleImgFlexContent}>
                <Image
                  className={styles.articleImgFlex}
                  src={Screenshot01}
                  alt="Editorial site section example"
                />
                <Image
                  className={styles.articleImgFlex}
                  src={Screenshot02}
                  alt="Business Card site section example"
                />
              </div>
            </div>
            <P />
            <P>
              The design language we developed was informed by the ‘provocatively reassuring’
              duality: eye-catching elements of striking imagery, bold headlines and asymmetrical,
              disruptive layouts were then balanced by a reassuringly logical structure and a
              disciplined approach to hierarchy. All this was then combined with a suite of refined
              and user-centric design details.
            </P>

            <H3>An image is worth a thousand words</H3>
            <P>
              Across the pages that explain who Fidelity is and how they work, we wanted to find a
              way to bring the content to life in a rich and thought-provoking way, that hints at
              the cutting-edge nature of their work.
            </P>
            <P>
              The answer was staring us in the face: the company’s art. Across Fidelity‘s offices
              around the world, there’s a collection of over 3,000 artworks, often created by local
              artists. We worked with the company’s curator to choose a selection of digital,
              moving-image pieces to use in the headers - these catch the eye in a sophisticated way
              and invite to the user to make connections with the business, while also highlighting
              the modern, innovative side of the business. Furthermore, they subtly reinforce the
              global nature of the company by using artists based in its many locations around the
              world.
            </P>
            <P>
              For the flagship ‘Fidelity Answers’ content, we wanted additional bold imagery to draw
              people in. Together with the editorial team, we commissioned illustrations based on
              the editions’ themes to create a sense of intrigue. This enabled us to convey the
              nuances of complex investment concepts with a lightness of touch.
            </P>

            <H3>Tech made to deliver</H3>
            <P>
              Alongside the design strategy, we mapped out the technology that would be implemented
              to strengthen the responsiveness of the site, across all platforms. We decided to use
              technology such as React, Serverless, Node, Terraform and AWS, which enabled us to
              build the site quickly. Accompanying this technology, we worked with Sourcefabric to
              integrate Superdesk, a digital editorial content management system developed with
              Fidelity’s team.
            </P>
            <H3>Delivery</H3>
            <P>
              From the very first workshop, we used lean agile methodology in cross-functional
              teams. This enabled us to embed UXD throughout the process and get feedback
              ‘just-in-time’. This enabled a continuous stream of testing (internally and with
              users) and feedback, which was then incorporated into the design and build of the
              website. Due to the flexibility afforded by agile ways of working, we were able to
              work through (not insignificant) compliance hurdles, incorporate the views of the
              various global stakeholders, and align and implement their views. We shared progress
              with regular demos of what we were building, soliciting feedback and winning buy-in to
              the site from stakeholders around the world.
            </P>
            <P>
              As the project developed we identified, developed and delivered a range of features to
              help users access and understand the great content the editorial team was generating.
              These features include:
            </P>

            <UL>
              <li>Jargon busters to help those who may not understand all specialist terms </li>
              <li>Interactive graphs to help communicate dense information </li>
              <li>
                <P>
                  Embedded{' '}
                  <a href="https://www.fidelityinstitutional.com/en/in-depth-in-eight-minutes-end-of-the-cycle-explained-b306d2/">
                    video
                  </a>{' '}
                  and{' '}
                  <a href="https://www.fidelityinstitutional.com/en/novembers-rich-pickings-bill-mcquakers-most-beautiful-index-0e4bbf/">
                    podcasts
                  </a>{' '}
                  provide allow Fidelity to add richness to their storytelling
                </P>
              </li>
            </UL>

            <div className={styles.iframeVideoContainer}>
              <iframe
                className={styles.iframeVideo}
                title="Fidelity Video"
                width="640"
                height="360"
                frameBorder="0"
                src="https://video.fidelity.tv/view/b7N4LtWHkQG?embed=true&amp;width=640&amp;height=360"
                allowFullScreen
              />
            </div>

            <Image
              className={styles.articleImgRight}
              src={HarryPotters}
              alt="Fidelity leadership headshots"
            />
            <P>
              For the portraits of Fidelity’s leadership, we found a way to invest them with a
              little more personality than you might expect for an industry that is typically very
              conservative.
            </P>
            <P>
              As the pages load, you see a fairly traditional set of{' '}
              <a href="https://www.fidelityinstitutional.com/en/about-us/leadership/">portraits</a>,
              but on hover they move. This simple but unexpected twist adds a surprising amount of
              personality and the portraits become known affectionately as the ‘Harry Potters’.
            </P>
          </SectionBody>
          <Image src={WavesImage} className={styles.articleImgFullWidth} alt="Black Waves" />
        </Section>
        <Section>
          <video autoPlay muted loop className={styles.articleVideoFullWidth} title="Black Waves">
            <source src={Waves} type="video/webm" />
            {/* safari support */}
            <source src={WavesMP4} type="video/mp4" />
            Your browser does not support the video tag.
            <img src={WavesImage} alt="Black Waves" />
          </video>
        </Section>
        <Section>
          <SectionHeading
            subHeading="Creating lasting change"
            heading="Editorial empowerment and agile methods"
          />
          <SectionBody>
            <P>
              Within four months, we designed and built a site for Fidelity Institutional that
              communicates their innovative and distinctive approach to client service, with
              authority and personality. It’s now responsive across all devices (ideal for
              mobile-heavy markets such as Asia) and has a steady stream of premium content that can
              be easily managed by their editorial team. Additionally, it was the company’s first
              global website - covering 21 locations - and has been translated into several
              languages. This saved the overhead of managing 21 different websites.
            </P>
            <P>
              Through the integration of Superdesk, Fidelity has control over the quality and
              cadence of the workflow. It has helped Fidelity’s team to position the company as
              authoritative thought leaders in their industry.
            </P>
            <P>
              Fidelity can also generate new article ideas, commission the articles and the
              accompanying illustrations, input the illustrations and populate the content, all
              internally without specialist help. This level of control empowers the company to
              present their own innovative views in their own voice.
            </P>
            <P>
              By working with us and using lean, agile ways of working to deliver the project, we
              have helped Fidelity embed these practices, and shift them away from their established
              waterfall ways of working. The Editorial team at Fidelity has now adopted this as
              their own best practice for future developments.
            </P>
            <P>
              Fidelity International’s Institutional business now has a website that sets a
              benchmark for design and usability within their industry. It is helping them stand out
              from their competition and the business has been left with the tools and ways of
              working needed to grow the site and its audience — providing investment thinking that
              can be relied on.
            </P>
          </SectionBody>
        </Section>
        <Section>
          <Card className={styles.overview}>
            <ListBox
              className={styles.listBox}
              title="What we did"
              items={[
                {
                  label: 'Global stakeholder input',
                },
                {
                  label: 'Defined vision and priciples up front',
                },
                {
                  label: 'Took art from office walls to website',
                },
                {
                  label: 'CMS integration',
                },
              ]}
              labelClassName={styles.listBox__leftLabel}
            />
            <ListBox
              className={styles.listBox}
              title="Results"
              items={[
                {
                  label: 'One product adopted across 21 countries',
                },
                {
                  label: 'Accelerated design and build speed to market',
                },
                {
                  label: 'Digital experience to reflect the brand',
                },
                {
                  label: 'Regular flow of thought leadership content',
                },
              ]}
            />
          </Card>
        </Section>
        <Section>
          <SectionBody>
            <Quote {...endQuoteProps} />
          </SectionBody>
        </Section>
      </Body>
      <WhatToReadNext currentPage="fidelity" linkKeys={['bank', 'pride', 'financialTimes']} />
      <ChecklistContactUs />
    </ScrollTracker>
  );
}
