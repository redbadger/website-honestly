// @flow
/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';

import styles from './style.css';
import { P as BaseParagraph } from '../../components/text';
import Link from '../../components/link';

const P = ({
  children,
  customClass = styles.mb10,
}: {
  children: React.Node,
  customClass?: string,
}) => <BaseParagraph customClass={customClass}>{children}</BaseParagraph>;

const H3 = ({ children }) => <h3 className={styles.simpleHeading}>{children}</h3>;

const H4 = ({ children }) => <h4 className={styles.simpleHeading}>{children}</h4>;

const SerifH3 = ({ children }) => <h3 className={styles.largeSimpleHeading}>{children}</h3>;

const policies = [
  {
    heading: 'Why do you have a Cookies Policy?',
    statements: [
      {
        body: () => (
          <P>
            We are committed to safeguarding the privacy of individuals (“<b>you</b>”, “<b>your</b>”)
            whose personal data we collect and use. In this Privacy Statement, we explain how we
            handle your personal data. For example, what personal data we collect and how, what we
            do with it and who we share it with. It also describes your privacy rights and controls
            such as your choices regarding use, access and correction of your personal data.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            Our Privacy Statement is part of, and is subject to, our{' '}
            <Link to="cookiesPolicy">Cookies Policy</Link> and our{' '}
            <Link to="termsAndConditions">Website Terms</Link>. By accessing or using{' '}
            <Link to="home">www.red-badger.com</Link> (“<b>Website</b>”), you confirm that you
            accept the terms of our Privacy Statement.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'About Red Badger',
    statements: [
      {
        body: () => (
          <P>
            Our Website is owned and operated by Red Badger Consulting Limited (“<b>Red Badger</b>”,
            “<b>we</b>”, “<b>us</b>” or “<b>our</b>”)
          </P>
        ),
      },
      {
        body: () => (
          <P>
            We are a company registered in England and Wales under registration number 7242017. Our
            registered office and principal place of business is at 4th Floor, 2 Old Street Yard,
            London, England, EC1Y 8AF.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You can contact us by (a) post, to 4th Floor, 2 Old Street Yard, London, England, EC1Y
            8AF, (b) using our Website contact form, (c) telephone, on 0207 242 017, or (d) email,
            using the following email address:{' '}
            <a href="mailto:hello@red-badger.com">hello@red-badger.com.</a>
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Our Data Compliance Manager',
    statements: [
      {
        body: () => (
          <P>
            Our Data Compliance Manager is Jen Speirs. You can contact our Data Compliance Manager
            in writing using the following contact details:{' '}
            <a href="mailto:privacy@red-badger.com">privacy@red-badger.com</a>. The tasks of our
            Data Compliance Manager include (for example) monitoring our compliance with applicable
            data protection laws and acting as contact for individuals whose data is processed by
            us.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            If you have any questions about anything to do with this Privacy Statement, our data
            processes and practices or simply to exercise your privacy rights, please contact our
            Data Compliance Manager using the contact details above.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Your privacy rights',
    statements: [
      {
        body: () => (
          <P>
            We have summarised below your privacy rights. Some of these rights are complex, and not
            all of the details have been included in our summaries below. For this reason, you
            should read the applicable data protection laws and guidance from the UK Information
            Commissioner for a fuller explanation of these rights. You can do so by using this link{' '}
            <a href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/">
              https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/
            </a>.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You may exercise any of your rights below in relation to your personal data by
            contacting our Data Compliance Manager in writing using the following contact details:{' '}
            <a href="mailto:privacy@red-badger.com.">privacy@red-badger.com.</a>
          </P>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <P>Your principal rights under the applicable data protection laws are:</P>
            <ul className={styles.policyList}>
              <li>the right to access;</li>
              <li>the right to rectification;</li>
              <li>the right to erasure;</li>
              <li>the right to restrict processing;</li>
              <li>the right to object to processing;</li>
              <li>the right to data portability;</li>
              <li>the right to complain to the UK Information Commissioner; and</li>
              <li>the right to withdraw consent.</li>
            </ul>
          </React.Fragment>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to access:</b> You have the right to confirmation as to whether or not we
            process your personal data and, where we do, access to the personal data, together with
            certain additional information. That additional information includes details of the
            purposes of the processing, the categories of personal data concerned and the recipients
            of the personal data. Providing the rights and freedoms of others are not affected, we
            will supply to you a copy of your personal data. The first copy will be provided free of
            charge, but additional copies may be subject to a reasonable fee. If you receive our
            newsletters, you can access your personal data and other details via our email software
            provider at [insert URL], by signing in and going to ‘Change my preferences’.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to rectification:</b> You have the right to have any inaccurate personal data
            about you rectified and, taking into account the purposes of the processing, to have any
            incomplete personal data about you completed. You can ask us to make any necessary
            changes to ensure that your personal data is accurate and kept up to date.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to erasure:</b> In some circumstances you have the right to the erasure of your
            personal data without undue delay. Those circumstances include: the personal data is no
            longer necessary in relation to the purposes for which they were collected or otherwise
            processed; you withdraw consent to consent-based processing; the processing is for
            direct marketing purposes; and the personal data has been unlawfully processed. However,
            there are certain general exclusions of the right to erasure. Those general exclusions
            include where processing is necessary for: exercising the right of freedom of expression
            and information; compliance with a legal obligation; for the establishment, exercise or
            defence of legal claims. The consequences of erasing your personal data are, for
            example, that you will be unable to access some content on our Website and will be
            excluded from marketing communication communications including (for example)
            newsletters, event information, blogs etc.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to restrict processing:</b> In some circumstances you have the right to
            restrict the processing of your personal data. Those circumstances are: you contest the
            accuracy of the personal data; processing is unlawful, but you oppose erasure; we no
            longer need the personal data for the purposes of our processing, but you require
            personal data for the establishment, exercise or defence of legal claims; and you have
            objected to processing, pending the verification of that objection. Where processing has
            been restricted on this basis, we may continue to store your personal data. However, we
            will only otherwise process it: with your consent; for the establishment, exercise or
            defence of legal claims; for the protection of the rights of another individual or legal
            person; or for reasons of important public interest.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to object to processing:</b> You have the right to object to our processing of
            your personal data on grounds relating to your particular situation, but only to the
            extent that the legal basis for the processing is that the processing is necessary for:
            the performance of a task carried out in the public interest or in the exercise of any
            official authority vested in us; or the purposes of the legitimate interests pursued by
            us or by a third party. If you make such an objection, we will cease to process the
            personal data unless we can demonstrate compelling legitimate grounds for the processing
            which override your interests, rights and freedoms, or the processing is for the
            establishment, exercise or defence of legal claims.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to object to processing (direct marketing):</b> You have the right to object to
            our processing of your personal data for direct marketing purposes (including, for
            example, profiling for direct marketing purposes). If you make such an objection, we
            will cease to process your personal data for this purpose. You may exercise this right
            at any time by (a) hitting the unsubscribe button in the email footer of the newsletter
            we send you, or (b) by contacting our Data Compliance Manager in writing using the
            following contact details{' '}
            <a href="mailto:privacy@red-badger.com.">privacy@red-badger.com.</a>
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to object to processing (scientific, historical research or statistics):</b>{' '}
            You have the right to object to our processing of your personal data for scientific or
            historical research purposes or statistical purposes on grounds relating to your
            particular situation, unless the processing is necessary for the performance of a task
            carried out for reasons of public interest.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to data portability:</b> To the extent that the legal basis for our processing
            of your personal data is consent, and such processing is carried out by automated means,
            you have the right to receive your personal data from us in a structured, commonly used
            and machine-readable format. However, this right does not apply where it would adversely
            affect the rights and freedoms of others.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to complain to the UK Information Commissioner:</b> If you consider that our
            processing of your personal data infringes the applicable data protection laws, you have
            a legal right to lodge a complaint with the UK Information Commissioner (<a href="http://www.ico.org.uk">
              www.ico.org.uk
            </a>) which is the UK data protection regulatory body.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Right to withdraw consent:</b> To the extent that the legal basis for our processing
            of your personal data is consent, you have the right to withdraw that consent at any
            time. Withdrawal will not affect the lawfulness of processing before the withdrawal.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Changes to the Red Badger Privacy Statement',
    statements: [
      {
        body: () => (
          <P>
            We may update the Red Badger Privacy Statement from time to time by publishing a new
            version on our Website. If we make changes to this Privacy Statement, we will post the
            revised Privacy Statement on our Website and update the “Effective Date” date at the top
            of this Privacy Statement.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            If we make changes that materially alter your privacy rights, we will provide additional
            notice, such as via email. If you disagree with the changes to the Privacy Statement,
            you should contact our Data Compliance Manager (<a href="mailto:privacy@red-badger.com">
              privacy@red-badger.com
            </a>) writing requesting the erasure of your personal and, if you receive our
            newsletter, unsubscribe from them.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            If you continue accessing and/or using of our Website, receiving our communications,
            contacting us, and/or signing up /attending our events and webinars etc. this will
            constitute acceptance of the revised Privacy Statement.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'What personal data we collect',
    statements: [
      {
        body: () => (
          <P>
            We use many different kinds of personal data. They are grouped together as in the table
            below. The groups are all listed here so that you can see what we may know about you. We
            don’t use all this personal data in the same way. Some of it is useful for marketing, or
            for providing services to you.
          </P>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <H3>Website data</H3>
            <P>
              This is data on how you use our Website and may include your IP address, geographical
              location, browser type and version, operating system, referral source, length of
              visit, page views and Website navigation paths, as well as information about the
              timing, frequency and pattern of your use of our Website.
            </P>
            <H3>Service data</H3>
            <P>
              This may include billing data, your name and contact details such as your email
              address contained in/relating to services we provide (if you enquired to hire us or
              you decided to hire us).
            </P>
            <H3>Correspondence data</H3>
            <P>
              This may include personal data contained in or relating to any communication that you
              send to us or that we use to communicate with you.
            </P>
            <H3>Marketing data</H3>
            <P>
              This may include personal data you provide to us if you sign up to receive our
              newsletters and choose whether you wish to receive promotional communications (e.g.
              offers, invitations to promotional activities such as events, webinars etc.) from us
              by email, post, telephone and social media.
            </P>
            <H3>Cookies & similar technology data</H3>
            <P>
              This includes personal data that we obtain about you through cookies and similar
              technologies. For more information, see our Cookies Policy [insert link].
            </P>

            <H3>Profile data</H3>
            <P>
              This may include your name and contact details and some of the other personal data set
              out in this table e.g. Third-Party data, registration data.
            </P>
            <H3>Registration data</H3>
            <P>
              This may include information you provide to register for events, webinars, surveys,
              etc. and may include your name and contact details e.g. an email address.
            </P>

            <H3>Applicant data</H3>
            <P>
              This may include your name and contact details and any other additional personal
              information as well as a CV. Third-Party data This may include your name and contact
              details we obtain from third parties such as third-party services providers, lead
              generation companies, social media etc.
            </P>
            <H3>Other data</H3>
            <P>This is personal data other than the ones set out in the table above.</P>
          </React.Fragment>
        ),
      },
    ],
  },
  {
    heading: 'How we collect your personal data',
    body: () => <P>We collect your personal data from various sources. These are as follows:</P>,
    statements: [
      {
        body: () => (
          <React.Fragment>
            <P>
              <b>Personal data you provide us about you:</b> We collect your personal data that you
              provide us when you do the following:
            </P>
            <ul className={styles.policyList}>
              <li>fill a contact webform on our Website;</li>
              <li>get in touch with us by email, telephone, letter, and/or some other means;</li>
              <li>
                subscribe to receive marketing communications from us such as newsletters informing
                you of our news, events etc.;
              </li>
              <li>apply for a job through our Website; and</li>
              <li>
                provide us with your name and contact details (e.g. on a business card) at (a) an
                event or webinar we have organised and/or attended, and/or (b)pitching events;
              </li>
              <li>participate in a survey, market research etc.</li>
            </ul>
          </React.Fragment>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <P>
              <b>Data we collect about you automatically:</b> We collect your personal data when you
              contact us or automatically when you access and/or use our Website and through the use
              of cookies (see our <Link to="cookiePolicy">Cookies Policy</Link>). The types of
              personal data we will collect include, for example:
            </P>
            <ul className={styles.policyList}>
              <li>name and address;</li>
              <li>demographic data;</li>
              <li>the originating IP address;</li>
              <li>the site that you visited immediately prior to visiting our Website;</li>
              <li>the type of browser and operating system used (if provided by the browser);</li>
              <li>
                the type of device model and version, device identifier (or “UDID”), and your
                HubSpot Subscription service.
              </li>
              <li>URL of the referring page (if provided by the browser);</li>
              <li>
                the specific actions that you take on our Website, including, for example, the pages
                that you visit; and
              </li>
              <li>the time, frequency and duration of your visits to our Website.</li>
            </ul>
          </React.Fragment>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <P>
              <b>Data we collect about you from others:</b>
              We also collect personal data about you from others such as (for example):
            </P>
            <ul className={styles.policyList}>
              <li>name and address;</li>
              <li>online through social media we use and the internet in general;</li>
              <li>contact details sourcing software we use;</li>
              <li>
                event organisation software we use to organise events if you signed up and attended
                one of our events e.g. meetups.
              </li>
              <li>
                webinar software we use to organise webinars if you signed up and watched one of our
                webinars;
              </li>
              <li>
                third parties we use to source potential client leads for us such as lead generation
                companies.
              </li>
              <li>
                companies (e.g. companies that recommend us such because they are current/previous
                clients) and/or individuals (e.g. your colleagues) that introduce you to us; or
              </li>
              <li>employers (if you apply for a job and we contact your employer).</li>
            </ul>
          </React.Fragment>
        ),
      },
    ],
  },
  {
    heading: 'How we use your personal data',
    statements: [
      {
        body: () => (
          <React.Fragment>
            <P>
              Below, you find a list of the ways that we may use your data and which of the legal
              reasons we rely on to do so.
            </P>
            <SerifH3>Website</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To analyse your use of our Website as well as to develop, operate, improve, protect,
              personalise, customise and optimise our Website.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reasons for this are our legitimate interest of the proper administration
              and operation of our business and/or to comply with a legal obligation.
            </P>

            <SerifH3>Services</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To provide you with information you requested about our services when you are
              considering whether to hire us or not (e.g. a quote) and, if you decide to hire us, to
              provide you our services.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reason for this is to perform our contract with you and/or take steps, at
              your request, to enter into such a contract.
            </P>

            <SerifH3>Communications (Non-Marketing)</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To communicate with you (e.g. by email, by post, by phone etc.) as well as to process
              the communications you send to us.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reasons for this is to perform our contract with you and/or our legitimate
              interest of the proper administration and operation of our business.
            </P>

            <SerifH3>Operations</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To perform general administrative and operational activities e.g. billing, debt
              recovery etc.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reason for this is our legitimate interest of the proper administration and
              operation of our business.
            </P>

            <SerifH3>Marketing & Advertising</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To send you newsletters and promotional communications (e.g. offers, invitations to
              promotional activities such as events, webinars etc.) from us by email, post,
              telephone, SMS and/or WhatsApp that may be of interest to you based on your
              preferences as well as to advertise our business and services to you through a variety
              of different channels which may include Twitter, Facebook or LinkedIn.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reasons for this is our legitimate interest of conducting marketing
              (including, for example, advertising) including any soft opt-in to undertake direct
              marketing to promote our business and services. To the extent that we are required to
              obtain consent for electronic marketing and we are not relying on your opt-in, our
              legal reason for this is consent.
            </P>

            <SerifH3>Profiling</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To create a profile of you by combining data you provided to us by you or we got from
              other sources such as social media, the internet and lead generation companies in
              order to update, expand and analyse our data records, lead generation, and create more
              tailored marketing (including, for example, advertising) and/or to personalise the
              services we provide to you.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reasons for this is our legitimate interest of (a) the proper administration
              and/or operation of our business, and/or (b) conducting marketing (including, for
              example, advertising) to promote our business and services. To the extent necessary
              for providing services to you, the performance of the contract between you and us.
            </P>

            <SerifH3>Security, Risk & Crime</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To protect our website and business, prevent fraud, spam, abuse, security incidents,
              harmful and/or illegal activity, conduct security investigations and risk assessments,
              and/or to verify or authenticate information.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reasons for this is our legitimate interest of protecting our website and
              business, to comply with a legal obligation, to perform our contract with you, and/or
              the protection and assertion of our legal rights, your legal rights and the legal
              rights of others.
            </P>

            <SerifH3>Research and Analysis</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To carry out research (e.g. market research), business and statistical analysis (e.g.
              develop statistical models, analyse the performance of our marketing (including, for
              example, advertising) campaigns etc.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reason for this is our legitimate interest of the proper administration,
              monitoring and/or operation of our business and services.
            </P>

            <SerifH3>Business improvement</SerifH3>
            <H4>Processing Purpose</H4>
            <P>To develop or improve our services and business.</P>
            <H4>Legal Basis</H4>
            <P>
              The legal reason for this processing is our legitimate interest of the proper
              administration and operation of our business and services as well as to monitor our
              business and services.
            </P>

            <SerifH3>Data Retention</SerifH3>
            <H4>Processing Purpose</H4>
            <P>To retain, store, archive and/or destroy the data.</P>
            <H4>Legal Basis</H4>
            <P>
              The legal reasons for this processing is the performance of a contract between you and
              us, our legitimate interest of the proper administration and operation of our
              business, to comply with a legal obligation, and/or the protection and assertion of
              our legal rights, your legal rights and the legal rights of others.
            </P>

            <SerifH3>Audits</SerifH3>
            <H4>Processing Purpose</H4>
            <P>To carry out audits.</P>
            <H4>Legal Basis</H4>
            <P>
              The legal reason for this processing is our legitimate interest of the proper
              administration and operation of our business as well as to monitor and improve our
              business and services.
            </P>

            <SerifH3>Sharing (Service Providers)</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To disclose your personal data such as your name and contact details to third party
              service providers we use.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reasons for this is our legitimate interest of administering, operate and/or
              managing our business, and/or performance of a contract between you and us.
            </P>

            <SerifH3>Sharing (Consent)</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To share your data (including personal information) where you have provided consent,
              for the purpose(s) described at the time we ask you for your consent.
            </P>
            <H4>Legal Basis</H4>
            <P>The legal reason for this is consent.</P>

            <SerifH3>Sharing (Aggregated Data)</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To share aggregated information (information about our individuals that we combine
              together so that it no longer identifies or references an individual) and
              non-personally identifiable information in order to conduct industry and market
              analysis, demographic profiling, marketing (including, for example, advertising).
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reason for this is our legitimate interests of the proper administration and
              operation of our business.
            </P>

            <SerifH3>Sharing (Sale/Investment)</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              If there is (a) a sale or an asset transfer to a third party of, and/or (b) an
              investment in Red Badger, part of that sale, asset transfer and/or investment may
              include your personal data. Purchasers, investors and/or their advisers may have
              access to your personal data as part of the corporate due diligence they perform as
              part of the (a) sale or asset transfer, and/or (b) the investment.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reason for this is our legitimate interest of the proper administration and
              operation of our business.
            </P>

            <SerifH3>Sharing (Internal re-organisation & Insolvency)</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To pass on to a successor in interest as part of a corporate re-organisation or in the
              unlikely event of an insolvency event such as a liquidation, insolvency, bankruptcy or
              administration.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reason for this is our legitimate interest of the proper administration and
              operation of our business.
            </P>

            <SerifH3>Sharing (Insurers & Professional Advisers)</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To disclose your personal data to our insurers and/or professional advisers insofar as
              reasonably necessary for the purposes of obtaining and maintaining insurance coverage,
              managing risks, obtaining professional advice and/or managing legal disputes.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reason for this is our legitimate interest of the proper administration and
              operation of our business, to comply with a legal obligation and/or the protection and
              assertion of our legal rights, your legal rights and the legal rights of others.
            </P>

            <SerifH3>Sharing (Legal Disclosures)</SerifH3>
            <H4>Processing Purpose</H4>
            <P>
              To disclose your personal data where such disclosure is necessary for compliance with
              a legal obligation to which we are subject and/or the protection and assertion of our
              legal rights, your legal rights and the legal rights of others.
            </P>
            <H4>Legal Basis</H4>
            <P>
              The legal reasons for this is to comply with a legal obligation, and/or the protection
              and assertion of our legal rights, your legal rights and the legal rights of others.
            </P>
          </React.Fragment>
        ),
      },
    ],
  },
  {
    heading: 'Providing your personal data to others',
    statements: [
      {
        body: () => (
          <P>
            <b>Third-party service providers:</b> We may disclose your personal data such as your
            name and contact details to our third-party service providers to help us administer,
            operate and manage our business provide services related to us and/or our Website.
            Service providers may be located inside or outside of the EEA. For example, service
            providers may help us provide customer service, advertising, or marketing. These service
            providers have limited access to your personal data to perform these tasks on our behalf
            and are contractually obligated to use it consistent with this Privacy Statement.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Aggregated Data:</b> We may also share aggregated information (information about our
            individuals that we combine together so that it no longer identifies or references an
            individual) and non-personally identifiable information for industry and market
            analysis, demographic profiling, marketing (including, for example) advertising, and
            other business purposes.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Sale/Investment:</b> If there is (a) a sale or an asset transfer to a third party of,
            and/or (b) an investment in Red Badger, part of that sale, asset transfer and/or
            investment may include your personal data. Purchasers, investors and/or their advisers
            may have access to your personal data as part of the corporate due diligence they
            perform as part of the (a) sale or asset transfer, and/or (b) the investment. However,
            use of your personal data will remain subject to this Privacy Statement.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Insolvency:</b> Your personal data may be passed on to a successor in interest as
            part of a corporate re-organisation or in the unlikely event of an insolvency event such
            as a liquidation, insolvency, bankruptcy or administration. In the case of an insolvency
            event, our customer database may be sold separately from the rest of the business, in
            whole or in a number of parts. It could be that the purchaser’s business is different
            from ours too.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Our insurers & professional advisers:</b> We may disclose your personal data to our
            insurers and/or professional advisers insofar as reasonably necessary for the purposes
            of obtaining and maintaining insurance coverage, managing risks, obtaining professional
            advice and/or managing legal disputes.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            <b>Legal compliance:</b> In addition to the specific disclosures of personal data set
            out in this Section 8, we may also disclose your personal data where such disclosure is
            necessary for compliance with a legal obligation to which we are subject, or in order to
            protect your vital interests or the vital interests of another individual.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'How do you make use of social media?',
    statements: [
      {
        body: () => (
          <React.Fragment>
            <P>We use social media accounts and pages in different ways. For example:</P>
            <ul className={styles.policyList}>
              <li>
                <b>to promote, market, advertise and communicate.</b> We use social media to
                promote, market and advertise our brand and services. We also use social media to
                communicate with each other.
              </li>
              <li>
                <b>to generate leads for our business:</b> If you connect with us through your
                social media account and/or communicate with us through that account, the
                information you choose to share with us may include the basic personal data
                available in your social media profile and also the information you provide to us
                when you communicate with us e.g. name, your contact details (e.g. email address,
                phone number) etc. We may also add your name and contact details to the CRM, sales
                and marketing software we use (e.g. HubSpot) to help us understand who is interested
                in our business and/or services.
              </li>
              <li>
                <b>We have also integrated social media features and plugins on our Website.</b>{' '}
                These features and plugins may collect your IP address, which page you are visiting
                on our Website, and may set a cookie to enable the feature to function properly.
                Also, when you click on one of the social buttons, you will be re-directed to our
                social media account page on the relevant social media. If at our account page, you
                are logged and you click on one of the buttons (such as Facebook’s ‘Like’ button)
                certain information is shared with these social media providers. Your social media
                provider may relate this information to your social media account and possibly
                present your actions on your social media profile to be shared with others in your
                network. These social media features and plugins are governed by the privacy
                policies of the social media providers and not our Privacy Statement.
              </li>
            </ul>
          </React.Fragment>
        ),
      },
    ],
  },
  {
    heading: 'International transfers of your personal data',
    statements: [
      {
        body: () => (
          <React.Fragment>
            <P>
              We may transfer your personal data to countries outside the EEA. This may happen as
              follows:
            </P>
            <ul className={styles.policyList}>
              <li>Our Website is hosted in eu-west-1 (Dublin, Ireland)</li>
              <li>
                The business software we use (e.g. Slack, HubSpot etc.) may be hosted outside the
                EEA e.g. the US. If that is the case, we rely on the adequate safeguards they have
                put in place to keep this personal data safe and secure.
              </li>
            </ul>
            <P>
              These legal safeguards vary depending on which country the data is transferred to. For
              example, if the personal data is transferred outside the EEA, then they could, for
              example, be (a) part of the E.U.-U.S. Privacy Shield (www.privacyshield.gov) for data
              transfers to the US, or (b) using what is called ‘Standard Contractual Clauses’ put in
              place by the EU, or (c) the EU has decided that a particular non-EEA country provides
              the same/equivalent level of data protection as in the EU.
            </P>
          </React.Fragment>
        ),
      },
      {
        body: () => (
          <P>
            You acknowledge and agree that if you submit personal data for publication through our
            Website or social media accounts, this data may be available, via the internet, around
            the world. We cannot prevent the use (or misuse) of such personal data by others.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Security of personal data',
    statements: [
      {
        body: () => (
          <P>
            We maintain administrative, technical and physical safeguards designed to protect your
            personal data provided to us. While no system or process is full-proof (e.g. hacking),
            we believe the measures implemented reduce our vulnerability to security problems to a
            level appropriate to the type of personal data involved and the current state of
            technology.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Retaining and deleting personal data',
    statements: [
      {
        body: () => (
          <P>
            We have data retention policies and procedures in place, which are designed to help
            ensure that we comply with our legal obligations in relation to the retention and
            deletion of personal data.
          </P>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <P>
              Personal data that we process for any purpose or purposes shall not be kept for longer
              than is necessary for that purpose or those purposes. We will retain and delete your
              personal data as follows:
            </P>
            <ul className={styles.policyList}>
              <li>
                sign-up for newsletters will be retained for 24 months following month of sign-up,
                at the end of which period it will be deleted from our systems.
              </li>
              <li>
                sign-up for webinar will be retained for 24 months following month of sign-up, at
                the end of which period it will be deleted from our systems.
              </li>
              <li>
                identified via legitimate interest will be retained for 24 months following month of
                addition to CRM], at the end of which period it will be deleted from our systems.
              </li>
            </ul>
          </React.Fragment>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <P>
              In some cases, it is not possible for us to specify in advance the periods for which
              your personal data will be retained. In such cases, we will determine the period of
              retention based on the following criteria:
            </P>
            <ul className={styles.policyList}>
              <li>Engagement statistics for social media data.</li>
              <li>
                the amount, nature, and sensitivity of the personal data, the potential risk of harm
                from unauthorised use or disclosure of your personal data, the purposes for which we
                process your personal data and whether we can achieve those purposes through other
                means, and the applicable legal requirements e.g. whether (and for how long) we are
                required by law to retain your personal data.
              </li>
            </ul>
          </React.Fragment>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <P>However, we may retain your personal data</P>
            <ul className={styles.policyList}>
              <li>
                where such retention is necessary for (a) the performance of a contract we have with
                you, (b) the compliance with a legal obligation to which we are subject, and/or (c)
                or the establishment, exercise or defence of legal claims; and/ or
              </li>
              <li>
                in order to protect your vital interests or the vital interests of another
                individual.
              </li>
            </ul>
          </React.Fragment>
        ),
      },
    ],
  },
  {
    heading: 'Third Party websites',
    statements: [
      {
        body: () => (
          <P>
            Our Website may contain links to third party websites. Please note that if you follow a
            link to any such website, we do not accept any liability and/or responsibility, because
            these websites have their own terms & conditions and Privacy Policies.
          </P>
        ),
      },
    ],
  },
];

export default policies;
