// @flow

import React from 'react';
import Social from '../../../../components/social';
import styles from './style.css';

import headerImage from './images/header.png';
import techGraphImage from './images/tech-graph.jpg';
import authorQuoteImage from './images/quote-author.jpg';

import Card from '../../../../components/card';
import ListBox from '../../../../components/list-box';
import Quote from '../../../../components/quote';

import WhatToReadNext from '../what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';

const social = {
  title: 'The proof is in the pudding.',
  description: 'Camden Market’s new digital platform designed and built in ten weeks',
  metaImage: headerImage,
  url: 'https://red-badger.com/our-work/case-study/camden-market',
};

type CamdenState = {
  Shapes?: any,
};

class CaseStudyCamdenMarket extends React.Component<*, CamdenState> {
  constructor() {
    super();

    this.state = {
      Shapes: undefined,
    };
  }

  componentDidMount() {
    if (!this.state.Shapes) {
      System.import(/* webpackChunkName: "camden-market-shapes" */ './shapes/index').then(Shapes =>
        this.setState({ Shapes: Shapes.default }),
      );
    }
  }

  render() {
    const { Shapes } = this.state;

    return (
      <div className={styles.caseStudy}>
        <Social {...social} />
        <div className={styles.header}>
          {Shapes && <Shapes />}
          <div className={styles.header__container}>
            <div className={styles.header__imageContainer}>
              <img
                src={headerImage}
                alt="Camden Market website on a mobile device"
                className={styles.header__image}
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content__mainTitleWrapper}>
            <h1 className={styles.content__mainTitle}>
              Camden Market’s new digital platform designed and built in ten weeks
            </h1>
          </div>
          <div className={styles.overview}>
            <Quote
              className={styles.quote}
              author={{
                name: 'Lily Walsh',
                title: 'Product Owner, Market Tech',
                image: authorQuoteImage,
              }}
              text={
                'We put Londoners at the heart of the project and the website. The results are already speaking for themselves and within just four days of the launch, the bounce rate has dropped by 18% and average session duration increased by 53%.'
              }
            />
            <Card className={styles.listBoxContainer}>
              <ListBox
                title="Results"
                items={[
                  {
                    label: 'New London Users',
                    value: '+75%',
                  },
                  {
                    label: 'Mobile traffic',
                    value: '+42%',
                  },
                  {
                    label: 'User increase week on week',
                    value: '+30%',
                  },
                ]}
              />
            </Card>
          </div>
          <div className={styles.content__wrapper}>
            <h2 className={styles.content__title}>
              <span className={styles.content__redTitle}>{'Let’s make things better.'}</span>
              Digitally engaging Londoners to entice them back to the city’s fourth biggest
              attraction
            </h2>
            <p className={styles.content__paragraph}>
              As the fourth most-visited tourist attraction in London, with around 500,000 people
              traversing the stalls and shops every week, Camden Market is a sightseer’s heaven.
              Property development company, Market Tech, who own the area, have a strong belief in
              the on-going value of Camden Market in the community and in London as a world-leading
              city.
            </p>
            <p className={styles.content__paragraph}>
              Market Tech came to us for help in discerning the complex digital needs of the market;
              especially as the incumbent online offering was underperforming. Having bought Camden
              Market in 2014, Market Tech had aims to improve footfall to the market and traffic to
              the website from Londoners, and, in particular, to remind Londoners that the market
              isn’t just the reserve of tourists.
            </p>
            <p className={styles.content__paragraph}>
              Our challenge was to help Market Tech understand how they could achieve their business
              aims through the redevelopment of the Camden Market website.
            </p>
            <h2 className={styles.content__title}>
              <span className={styles.content__redTitle}>
                Do the right thing. Do the thing right.
              </span>
              Creating solutions by collaborating
            </h2>
            <h3 className={styles.content__secondaryTitle}>Collaboration</h3>
            <p className={styles.content__paragraph}>
              Our fully integrated team began by framing Market Tech’s aims and aligning them with
              the purpose of the site, via a series of User Experience and Design workshops. Working
              with Market Tech’s team, it was decided that the focus would be on a content-driven
              site.
            </p>
            <p className={styles.content__paragraph}>
              Close quarters efficiencies were created by building a team which was based in one
              location, with communication across the whole project. Within three weeks of changing
              to this arrangement, productivity increased by over 100%.
            </p>
            <p className={styles.content__paragraph}>
              Having designers and developers sat next to each other meant that queries could be
              solved swiftly. For example, a bug fix or design tweak could be delivered within a
              working day, rather than waiting for off-shore teams to come online and pick up the
              ticket, which would take up to four days.
            </p>
            <p className={styles.content__paragraph}>
              Switching from using an online project management tool to using a physical Kanban
              board on the wall of the office, spurred conversations within the team and kept
              everyone up-to-date with changes in real-time. Transparency, as well as a shared
              understanding of project progress and working practices of the team, are hugely
              valuable in a tight delivery schedule.
            </p>
            <p className={styles.content__paragraph}>
              Despite the tight deadline for the website build, the team were able to stick to their
              usual working day. Even better, the backlog was completed not only on time but a day
              in advance. We also reached an increase of 650% throughput, in the last week before
              launch.
            </p>
            <p className={styles.content__paragraph}>
              Having a co-located, cross-functional team also dramatically reduced the lead time for
              a user-facing feature; from a high of 25 working days to an average of seven working
              days, from request to go-live.
            </p>
          </div>
          <div>
            <img src={techGraphImage} className={styles.techGraphImage} alt="Tech graph" />
          </div>
          <div className={styles.content__wrapper}>
            <h3 className={styles.content__secondaryTitle}>Finding the right tech for the job</h3>
            <p className={styles.content__paragraph}>
              We used cutting-edge web technologies including React, Redux, and Flow, to build a
              site which utilised stateless functional components, meaning it could be implemented
              faster and adapted more easily.
            </p>
            <p className={styles.content__paragraph}>
              A pre-built CMS was chosen to reduce development time. With a beautifully simple
              interface, Prismic.io gave the content editors preview functionality without requiring
              additional hosting, allowed grouping of edits to schedule a release with more than one
              change and was flexible within the suite of technologies.
            </p>
            <p className={styles.content__paragraph}>
              Separating business logic from the user interface via stateless components, and the
              combination of bleeding edge technologies, meant both could be best designed for their
              own users and not compromise for each other. The code underlying the site was easier
              to maintain and less prone to bugs.
            </p>
            <p className={styles.content__paragraph}>
              Choosing the right tech and handling each component separately allowed for the build
              of many features and complex functionalities which were created in just ten weeks.
              This also meant components could be updated and altered without having to suspend the
              whole site.
            </p>
            <h2 className={styles.content__title}>
              <span className={styles.content__redTitle}>Creating lasting change.</span>
              Increasing website traffic from Londoners
            </h2>
            <p className={styles.content__paragraph}>
              Working collaboratively and focusing on designing a site for Londoners, we created a
              new platform for one of the city’s most iconic markets; translating a deep cultural
              heritage into a successful online experience for a diverse audience.
            </p>
            <p className={styles.content__paragraph}>
              The new site utilised bleeding-edge technology to create an easy-to-use site that
              increased users week on week from 10k to 13k (week one vs week two, post go-live
              date), and almost doubled mobile traffic from 61% to 38%.
            </p>
            <p className={styles.content__paragraph}>
              Through our collaborative work with Market Tech, the objective of bringing Camden
              Market back to the attention of Londoners was met with success. In the first month
              after launch, new users to the website from London rose by 75%. In addition to this,
              active sessions increased 38% overall, week on week, with organic search generating
              38% of total traffic and direct traffic increasing by 98% week on week, generating 37%
              of total traffic.
            </p>
          </div>
        </div>
        <WhatToReadNext currentPage="camdenMarket" />
        <ChecklistContactUs />
      </div>
    );
  }
}

export default CaseStudyCamdenMarket;
