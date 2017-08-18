// @flow
import React from 'react';

import WhatToReadNext from '../what-to-read-next';
import ContactUs from '../../../../slices/contact-us-slice';

import CaseStudyFrame from '../../../../components/case-study-frame';
import CaseStudyHeader from '../../../../components/case-study-header';
import CaseStudySection from '../../../../components/case-study-section';
import PullQuote from '../../../../components/pull-quote';
import headerImage from './images/header.jpg';
import articleImage from './images/article.jpg';

type HallerCaseStudyProps = {
  contactUsURL: string,
};

const social = {
  title: 'The proof is in the pudding',
  description: 'Working with the Haller Foundation: Developing technology for good',
  metaImage: headerImage,
  url: 'https://red-badger.com/our-work/case-study/financial-times',
};

const HallerCaseStudy = ({ contactUsURL }: HallerCaseStudyProps) =>
  <CaseStudyFrame>
    <CaseStudyHeader
      title="Working with the Haller Foundation: Developing technology for good"
      tagline="Red Badger teamed up with the Haller Foundation on a pro-bono basis to develop a mobile application which helps Kenyan farmers"
      headerImage={headerImage}
      headerImageAlt="image"
      headerColor="#8B252A"
      contactUsURL={contactUsURL}
      social={social}
    />
    <CaseStudySection title="The challenge">
      <p>
        In December 2013 Red Badger teamed up with the Haller Foundation, a UK-based charity to
        support its work in helping subsistence farmers in Kenya. The Haller Foundation works with
        farmers in Kenya to help them rehabilitate their land and achieve sustainable
        self-sufficiency. But with only 1 extension officer for every 1,000 farmers in Kenya, the
        process of reaching them is slow, inefficient and expensive.
      </p>
      <p>
        Haller approached Red Badger wanting to explore the potential to use new technologies to
        extend these initiatives to a much wider farming audience in Kenya.

        <ul>
          <li>
            Mobile usage in Kenya is surprisingly high with around 50% of Kenyan’s owning a
            smartphone and this number is growing rapidly thanks to the digital advancements which
            have been made in recent years.
          </li>
          <li>
            Utilising this greater communication power to launch an app specifically designed to
            support the agricultural improvements of Kenyan farmers was the logical next step.
          </li>
        </ul>

      </p>

    </CaseStudySection>

    <PullQuote
      author={{
        name: 'Louise Piper',
        title: 'Founding Trustee of Haller',
      }}
      text="This web app fits perfectly with our approach – it releases potential through practical ideas that are collaborative, self-sustainable and resourceful"
    />
    <CaseStudySection title="Solution">
      <p>
        Red Badger staff worked together with design agency, Pearlfisher, to provide the user
        experience, visual design and development of a new mobile website that will enable Haller to
        deliver the training to the farmers that need it, across the entire country. A prototype was
        delivered within 5 months and tested with different kinds of farmers in Kenya that would be
        using the app. This gave Red Badger vital feedback in a number of areas:
      </p>
      <p>
        <ul>
          <li>Mobile data packages in Kenya are traditionally small but competitively priced</li>
          <li>There were wide regional disparities in literacy rates</li>
          <li>
            Although English is the national language over half the small holder farmers surveyed
            didn’t speak English
          </li>
        </ul>
        <img alt="Screenshots of the Haller application" src={articleImage} />
      </p>
      <p>
        The unique and innovative technical design of the app addresses all these issues. The total
        size of the app is less than 1MB in total thanks to intelligent use of lightweight
        iconography and other design considerations. The download is stored on the device itself and
        only changes if any updates are required or when using the marketplace feature.
      </p>
      <p>
        The app is multi-lingual with both Swahili and English versions, and literacy issues are
        further addressed via an audio feature with Swahili translations. Strong use of visuals and
        symbols also make the app as intuitive to use as possible.
      </p>
      <p>
        The app was successfully launched in Nairobi in November 2014, and is already being used by
        farmers – after taking less than a year to deliver. Red Badger and Haller both see huge
        potential to extend this technology to other parts of Africa and even further afield.
      </p>
    </CaseStudySection>

    <WhatToReadNext />
    <ContactUs postURL={contactUsURL} />
  </CaseStudyFrame>;

export default HallerCaseStudy;
