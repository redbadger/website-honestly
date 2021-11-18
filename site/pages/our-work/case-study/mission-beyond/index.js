import React from 'react';

// Components
import ScrollTracker from '../../../../components/scroll-tracker';
import Social from '../../../../components/social';
import Image from '../../../../components/image';
import {
  PageHeading,
  Body,
  Section,
  SectionBody,
  SectionHeading,
  P,
  H3,
  Quote,
  UL,
} from '../shared';
import ListBox from '../../../../components/list-box';
import Card from '../../../../components/card';
import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';

// Assets
import header from './images/TabletHeader@1x.png';
import header2x from './images/DesktopHeader@1x.png';
import header3x from './images/DesktopHeader@2x.png';
import rehearse from './images/Rehearse@1x.jpg';
import thinking from './images/ThinkingDesktop.jpg';
import openDoors from './images/OpendoorsDesktop@2x.jpg';
import cainPfp from './images/cain.jpg';
import johnPfp from './images/john.jpg';
import chatbot from './images/ChatbotDesktop@2x.png';
import businessModel from './images/CanvasDesktop@2x.jpg';
import device from './images/DeviceDesktop@2x.jpg';
import talent from './images/TalentDesktop@2x.jpg';
import website from './images/WebsiteDesktop@2x.jpg';
import reporting from './images/ReportingDesktop@2x.jpg';

// Styles
import styles from './style.css';

const social = {
  title:
    'Mission Beyond: Building a mission-oriented product business from the group up | Red Badger',
  description:
    'Find out how a Red Badger team set about tackling social inequality by building a digital platform to connect employers with a diverse talent pool from poorer socioeconomic backgrounds.',
  metaImage: header,
  altText: 'An abstract graphic that reads: Mission Beyond',
  url: 'https://red-badger.com/our-work/case-study/mission-beyond',
};

const cainQuoteAProps = {
  text: `Our ethos has always been to deliver work that matters, tackle big problems and
    deliver meaningful results. Tackling the world’s grand challenges is a gargantuan
    undertaking. You have to break it down into bite-sized chunks. Fuelled by Mariana
    Mazzucato’s Mission Economy principles, we built a coalition of like-minded, purpose
    driven leaders from across the business community and set ourselves the ambitious
    goal of enhancing social mobility and representation.`,
  author: {
    name: 'Cain Ullah',
    title: 'Red Badger Board Member, Founder, and former CEO',
    image: cainPfp,
  },
};

const cainQuoteBProps = {
  text: `This was a critical part of the process, not only did we have to validate Talent Compass as a potential business, we had to clearly show how it would help us tackle our broader mission to positively impact young people’s lives. The painstaking work testing and eradicating assumptions required great discipline, a great framework and great commitment. The Red Badger team left nothing to chance and used real data and information to inform any and all decisions taken, all but guaranteeing the best ideas won through.`,
  author: {
    name: 'Cain Ullah',
    title: 'Red Badger Board Member, Founder, and former CEO',
    image: cainPfp,
  },
};

const cainQuoteCProps = {
  text: `With such rigorous product development, user testing and analysis we knew we had a great service on our hands. The supporting materials provided by the team alongside the consistent and in-depth feedback sessions throughout this project has made our job simple in communicating the tremendous value of this service. We are extremely hopeful of securing the necessary investment to bring this platform to life and start tackling the social mobility challenge.`,
  author: {
    name: 'Cain Ullah',
    title: 'Red Badger Board Member, Founder, and former CEO',
    image: cainPfp,
  },
};

const johnQuoteAProps = {
  text:
    'The Red Badger team’s flexibility and adaptability is remarkable. From their initial dedicated focus on ensuring every interaction with a beneficiary was valuable, to ensuring a platform design at scale would meet the requirements of an ecosystem of thousands of entities offering job and mentoring opportunities. It’s a testament to the agile ways of working deployed, commitment to delivering the right product and the depth of talent within the team to move seamlessly between a single user need to a national digital infrastructure platform and keep value and impact at the heart of every decision.',
  author: {
    name: 'John Godfrey',
    title: 'Executive Commercial Director, Red Badger',
    image: johnPfp,
  },
};

const MissionBeyondCaseStudy = () => (
  <ScrollTracker>
    <Social {...social} />
    <div className={styles.headerImgWrapper}>
      <Image
        src={header3x}
        src2x={header2x}
        src3x={header3x}
        className={styles.headerImg}
        altText="A graphical banner that reads: Mission Beyond"
      />
    </div>
    <Body>
      <div className={styles.body}>
        <PageHeading>
          Open Doors: Building a national digital ecosystem to positively impact young peoples’
          lives
        </PageHeading>
        <Section>
          <SectionBody>
            <P>
              This is the story of how Red Badger built a mission-oriented product organisation from
              the ground up. Deploying cross-functional teams and digital product thinking, Red
              Badger set out to create a product-led charity that could tackle social inequality and
              help 1 million people from poorer socioeconomic backgrounds reach economic
              independence by 2025.
            </P>
          </SectionBody>
        </Section>
        <div className={styles.videoAndResultsDesktop}>
          <div className={styles.bannerWrapper}>
            <Image
              src={openDoors}
              className={styles.banner}
              altText="A screenshot of a website that reads: Open Doors to diverse candidates"
            />
          </div>

          <Section>
            <SectionBody>
              <Card>
                <ListBox
                  className={styles.listBox}
                  title="AT A GLANCE"
                  items={[
                    {
                      label:
                        'From idea to functioning, validated product primed for investment in under 6 months',
                    },
                    {
                      label:
                        'MVP delivered clear value as evidenced by young people and the business community',
                    },
                    {
                      label:
                        'In 5 weeks the team was designing and validating an interconnected social mobility ecosystem',
                    },
                    {
                      label:
                        'Collated insights from hundreds of users to valide numerous assumptions',
                    },
                  ]}
                  itemClassName={styles.listBox__item}
                />
              </Card>
            </SectionBody>
          </Section>
        </div>

        <Section>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <SectionHeading
                subHeading="The challenge"
                heading="Building a mission driven organisation"
              />

              <P>
                In August 2020, Red Badger launched Mission Beyond, an initiative that brings
                together purpose-led leaders to form coalitions to solve some of the world’s grand
                challenges. Leveraging mission thinking to solve these challenges, Mission Beyond
                tasked itself with addressing social mobility. In September of the same year, a
                coalition was formed and developed a mission to enhance social mobility and
                representation. The group was going to do this by harnessing the power of digital
                platforms and products.
              </P>

              <Quote {...cainQuoteAProps} />
            </div>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <SectionHeading
                subHeading="DO THE RIGHT THING"
                heading="Creating a solution for social inequality"
              />
              <P>
                Cognitive and demographic diversity are key to improving collective intelligence,
                enhancing productivity, powering innovation, fuelling new ideas and creating more
                equitable companies. Delivering it, however, is a fundamental challenge felt around
                the world. How do you source and attract the kinds of diverse talent pools needed to
                expand thinking and grow your collective knowledge?
              </P>

              <P>
                This is the challenge that the Red Badger team set out to solve, with a particular
                focus on empowering those from underrepresented backgrounds. As experts in product
                conception and discovery, a cross-functional team was deployed to examine the
                landscape, analyse potential paths and plot a route to a solution. Aligning around
                the core proposition and working collaboratively, the team experimented rapidly
                using proven techniques from the world of digital entrepreneurship to evolve the
                right digital product and platform.
              </P>
              <div className={styles.bannerWrapper}>
                <Image
                  src={rehearse}
                  className={styles.banner}
                  altText="A diagram showing user stories."
                />
              </div>
            </div>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <H3>A structured approach to digital innovation</H3>
              <P>
                In product strategy, customer desirability is tested before considering whether it
                is viable or feasible to build it. This approach proved incredibly successful for
                Mission Beyond who couldn’t afford to waste time, resources or money on an
                undesirable (and therefore unsustainable) solution. Red Badger’s product strategy
                proposition runs through three distinct phases which follow a metered funding
                approach where the aim of each phase is to validate assumptions and uncover insights
                that build a business case to move forward. The phases are:
              </P>

              <P>
                <strong>Ready:</strong> Define innovation focus, ensure propositions explored in the
                next phase relate to an addressable market, real business challenge or grand
                challenge the business feels comfortable investing in.
                <br />
                <strong>Rinse:</strong> Conduct successive short sprints to uncover customer wants,
                needs and challenges. Identify multiple propositions to address these and explore
                how to reach and build relationships with these particular customers.
                <br />
                <strong>Rehearse:</strong> Validate the business model for a proposition by testing
                low-tech, low-fidelity versions of the product or service with customers.
              </P>
              <div className={styles.bannerWrapper}>
                <Image
                  src={thinking}
                  className={styles.banner}
                  altText="A graphics that depicts the design thinking process. it reads: Design thinking - structure, agility and pace. It maps the steps involved as: empathy, define, ideate, prototype and test."
                />
              </div>
            </div>
          </SectionBody>
        </Section>

        <Section>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <SectionHeading heading="Generating momentum and building a proposition" />
              <P>
                With social mobility clearly defined by the Mission Beyond coalition as the
                innovation focus, the team set to work. Bringing together diverse technical, design,
                product, engineering and delivery experts, the team began crafting a viable
                proposition.
              </P>
              <H3>Deploying design thinking methodology</H3>
              <P>
                Over a series of intensive 5-day sprints, the team uncovered multiple desirable
                solutions to better enable 18-25 year olds from disadvantaged backgrounds to enter
                the workforce. Two clear personas were identified for both the employer and
                potential employee, and all the assumptions about their individual journeys were
                rigorously analysed and worked through.
              </P>
              <P>
                Interviews with persona representatives were conducted. The insights gathered from
                these sessions helped seed several brainstorms to create a long list of potential
                products or services, where the most compelling were brought forward for testing.
              </P>
            </div>
          </SectionBody>
        </Section>

        <div className={styles.coloumnContentTall}>
          <div className={styles.coloumnContentText}>
            <P>
              A front door test helped the team zero in on desirability and an initial concept,
              Talent Compass, performed extremely well. A chat bot service devised to help the
              potential employee extract desirable traits and skills for the workforce from their
              life experiences, Talent Compass exhibited extremely high conversion rates.
            </P>
            <div className={styles.h3}>
              <H3>Building a sustainable model</H3>
            </div>
            <P>
              With a desirable product identified, a number of workshops and elements of individual
              work were undertaken to align on the Talent Compass vision and mission, market size,
              potential competitors and the details of the value proposition.
            </P>
            <P>
              A business model canvas was created to highlight key activities, resources and
              partners needed to deliver the value proposition and identify assumptions that needed
              testing. The riskiest assumptions were prioritised and a backlog of experiments to
              prove/disprove these assumptions was created.
            </P>
          </div>
          <div className={styles.bannerWrapper}>
            <Image
              src={chatbot}
              className={styles.banner}
              altText="A screenshot from a phone showing a conversation with a chatbot"
            />
          </div>
        </div>

        <Section>
          <SectionBody>
            <Quote {...cainQuoteBProps} />
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <div className={styles.bannerWrapper}>
              <Image
                src={businessModel}
                className={styles.banner}
                altText="A table showing the Business model canvas, the sections are listed as: Key partners, Key activities, value propositions, customer relationships, customer segments, channels, cost structure, revenue streams"
              />
            </div>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeading
            subHeading="Doing the thing right."
            heading="Working backwards from a successful outcome"
          />
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <P>
                With a list of experiments to conduct and business model assumptions to test, the
                team established processes and norms for how to work rapidly and maintain clarity of
                mission throughout.
              </P>
              <P>
                A pre-mortem identified the biggest hurdles to overcome and provided the framework
                to define which tasks needed to be completed to mitigate them. Leading indicators of
                success were mapped out to balance product health (ex. numbers of users interviewed,
                expressions of interest, and assumptions validated) with team health (ex.
                psychological safety, blogs posted) — these were leveraged to help everyone maintain
                focus throughout.
              </P>
              <H3>Validating multiple assumptions</H3>
              <P>
                With so much to test, the team devised a ‘Wizard of Oz’ test to validate them all in
                the leanest way possible. Product desirability, tech feasibility and business
                viability were all run through a comprehensive evaluation process which involved
                building a minimum viable product and user testing.
              </P>
            </div>
            <div className={styles.tandemImage}>
              <Image
                src={talent}
                className={styles.banner}
                altText="A screenshot of a website, it reads: You've already got the skills to get hired."
              />
              <Image
                src={device}
                className={styles.banner}
                altText="A screenshot of a smartphone showing an ongoing conversation with a chatbot"
              />
            </div>
            <div className={styles.tabletContentWrapper}>
              <P>
                Over a two-week period the team conducted one hour sessions to test a lightweight
                version of Talent Compass with many young people aligned with the employee persona.
                The core assumptions being tested were:
              </P>
              <P>
                <UL>
                  <li>
                    <strong>A conversational interface and tone</strong> as the most effective way
                    to engage users
                  </li>
                  <li>
                    Our users would value a product that{' '}
                    <strong>helps identify hidden job- relevant skills</strong>
                  </li>
                  <li>
                    It is possible to{' '}
                    <strong>surface job-relevant skills based on responses</strong> to the
                    conversational UI
                  </li>
                  <li>
                    It is possible to <strong>identify potential jobs for users</strong> based on
                    the skills Talent Compass surfaces
                  </li>
                  <li>
                    The product’s <strong>branding lends it credibility,</strong> and users will be
                    willing to engage with it
                  </li>
                </UL>
              </P>
              <P>
                All participants acknowledged the tremendous value of the product but provided
                valuable feedback which would shape the future development.
              </P>
            </div>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <div className={styles.quoteWrapper}>
              <Quote {...johnQuoteAProps} />
            </div>
            <div className={styles.tabletContentWrapper}>
              <P>
                To ensure the success of the product and that it more accurately satisfied the
                market demand, the team expanded its remit to include employers and the broader
                ecosystem. To reflect this shift, Talent Compass became Open Doors.
              </P>
              <P>
                Open Doors would serve all sides of the ecosystem and the team explored how the
                service could provide value to all of them, not just the talent seeking work. A
                service blueprint was drawn of all possible interactions with other segments through
                the Open Doors platform. A customer value proposition was created and a reworked
                business model canvas created to test desirability, feasibility and viability of the
                new platform.
              </P>
            </div>
            <div className={styles.bannerWrapper}>
              <Image
                src={website}
                className={styles.banner}
                altText="A screenshot of a website, it reads: Open doors to candidates. It then has a section that reads: Don't be late to the part. Finally there is a section that reads: How it works."
              />
            </div>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <div className={styles.tabletContentWrapper}>
              <H3>Expanding the mission and delivering the right product</H3>
              <P>
                Within 5 weeks of the start of the project, the team was already designing and
                validating an interconnected social mobility ecosystem. To keep things lean, the
                team tested a static prototype of a partner portal designed purely on assumptions.
                This portal demonstrated how an employer could:
              </P>
              <UL>
                <li>
                  Understand the Open Doors proposition for employers and mentorship programmes
                </li>
                <li>Sign up to Open Doors providing organisational details and available roles</li>
                <li>View potential candidates interested in the available roles</li>
                <li>Review profiles and applications of people who have applied for roles</li>
                <li>See anonymised diversity data of applicants</li>
              </UL>
            </div>
            <div className={styles.bannerWrapper}>
              <Image
                src={reporting}
                className={styles.banner}
                altText="A screenshot of an app dashboard, it reads: Reporting, company, fiteen candidates your company has encouraged to apply and Eleven organic applications."
              />
            </div>
            <div className={styles.tabletContentWrapper}>
              <P>
                Iterating and seeking feedback from stakeholders and customers throughout the
                process, the team made job descriptions more user friendly, enabled employees to
                apply directly through the platform and created a differentiated product from any
                existing recruitment platforms available today. It even brought in development
                opportunities for those candidates who didn’t receive any job matches.
              </P>
              <P>
                The final stage of the project was to equip the Mission Beyond board with the
                materials it would need in its quest to secure funding for the next stage: building
                a launchable product ready to meet the needs of a diverse ecosystem.
              </P>
            </div>
            <Quote {...cainQuoteCProps} />
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <SectionHeading heading="Want to know more about Mission Beyond and the Open Doors product?" />
            <Card>
              <ListBox
                className={styles.listBox}
                title="CATCH THE FULL THREE-PART AND IN DEPTH STORY ON OUR BLOG:"
                items={[
                  {
                    label:
                      ' Part 1: How to build a product organisation to tackle social inequality',
                  },
                  {
                    label:
                      'Part 2: How to define and design a solution for a challenge like social inequality',
                  },
                  {
                    label:
                      'Part 3: How to bring product ideas to life: validating a potential solution to social inequality',
                  },
                ]}
                itemClassName={styles.listBox__item}
              />
            </Card>
          </SectionBody>
        </Section>
      </div>
    </Body>
    <WhatToReadNext currentPage="pagoFxCaseStudy" linkKeys={[]} />
    <ChecklistContactUs />
  </ScrollTracker>
);

export default MissionBeyondCaseStudy;
