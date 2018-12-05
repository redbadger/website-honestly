// @flow
import * as React from 'react';

import styles from '../../components/policy/style.css';
import { P, H3, SerifH3, B, PolicyList } from '../../components/policy/shared';
import Link from '../../components/link';

const policies = [
  {
    heading: 'Introduction',
    statements: [
      {
        body: () => (
          <P>
            These Website Terms tell individuals (“<B>you</B>”, “<B>your</B>”) the rules that govern
            the access and/or use of <a href="https://red-badger.com">red-badger.com</a>,{' '}
            <a href="https://react.london">react.london</a>,{' '}
            <a href="https://meetup.react.london">meetup.react.london</a> (“<B>Websites</B>”).
          </P>
        ),
      },
      {
        body: () => (
          <P>
            These Website Terms are part of, and are subject to, our{' '}
            <Link to="privacyPolicy">Privacy Statement</Link> and our{' '}
            <Link to="cookiePolicy">Cookies Policy</Link>. By accessing or using our (“
            <B>Websites</B>”), you confirm that you accept these Website Terms.
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
            Our Websites are owned and operated by Red Badger Consulting Limited (“<B>Red Badger</B>
            ”, “<B>we</B>”, “<B>us</B>” or “<B>our</B>”)
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
            8AF, (b) telephone, on 0203 567 0555, or (c) email, using the following email address:{' '}
            <a href="mailto:hello@red-badger.com">hello@red-badger.com</a>.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Changes to the Red Badger Website Terms',
    statements: [
      {
        body: () => (
          <P>
            We may update the Red Badger Website Terms from time to time by publishing a new version
            here at{' '}
            <a href="https://red-badger.com/terms-and-conditions">
              red-badger.com/terms-and-conditions
            </a>
            . If we make changes to this Website Terms, we will post the revised Website Terms here
            at{' '}
            <a href="https://red-badger.com/terms-and-conditions">
              red-badger.com/terms-and-conditions
            </a>{' '}
            and update the “Effective Date” date at the top of this Website Terms.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            Please check{' '}
            <a href="https://red-badger.com/terms-and-conditions">
              red-badger.com/terms-and-conditions
            </a>{' '}
            regularly for any such changes.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Information use only',
    statements: [
      {
        body: () => (
          <P>
            The content on our Websites are provided for general information only. It is not
            intended to amount to advice on which you (and/or others) should rely. You must obtain
            professional and/or specialist advice before taking, and/or refraining from, any action
            on the basis of the content on our Website.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            Although we make reasonable efforts to update the information on our Websites, we make
            no representations, warranties and/or guarantees, whether express or implied, that the
            content on our Websites are accurate, complete and/or up to date. Our content is
            provided as-is.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'We may suspend or withdraw our Websites',
    statements: [
      {
        body: () => <P>Our Websites are made available free of charge.</P>,
      },
      {
        body: () => (
          <P>
            We do not guarantee that our Websites, and/or any content on it, will always be
            available and/or be uninterrupted. We may suspend and/or withdraw and/or restrict the
            availability of all and/or any part of our Website for any reason whatsoever in our sole
            and absolute discretion. We will try to give you reasonable notice of any suspension
            and/or withdrawal.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You are also responsible for ensuring that all persons who access our Websites through
            your internet connection are aware of these Website Terms and other applicable terms and
            conditions, and that they comply with them.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'You must keep your account details',
    statements: [
      {
        body: () => (
          <P>
            If you choose, or you are provided with, a user identification code, password or any
            other piece of information as part of our security procedures, you must treat such
            information as confidential. You must not disclose it to any third party.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            We have the right to disable any user identification code or password, whether chosen by
            you or allocated by us, at any time, if in our reasonable opinion you have failed to
            comply with any of the provisions of these Website Terms and/or applicable laws.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            If you know or suspect that anyone other than you knows your user identification code or
            password, you must promptly notify us at:{' '}
            <a href="mailto:hello@red-badger.com">hello@red-badger.com</a>.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'How you may use material on our Websites',
    statements: [
      {
        body: () => (
          <P>
            We are the owner or the licensee of all intellectual property rights in our Website, and
            in the material published on it. Those works are protected by copyright laws and
            treaties around the world. All such rights are reserved.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You may print off one copy, and may download extracts, of any page(s) from our Website
            for your personal use and you may draw the attention of others within your organisation
            to content posted on our Websites.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You must not modify the paper and/or digital copies of any materials you have printed
            off or downloaded in any way, and you must not use any illustrations, photographs, video
            and/or audio sequences and/or any graphics separately from any accompanying text.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            Our status (and that of any identified contributors) as the authors of content on our
            Websites must always be acknowledged.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You must not use any part of the content on our Websites for commercial purposes without
            obtaining a licence to do so from us or our licensors.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            If you print off, copy and/or download any part of our Websites in breach of these
            Website Terms and/or applicable laws, your right to use our Website will cease
            immediately and you must, at our option, return or destroy any copies of the materials
            you have made.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'We are not responsible for websites we link to',
    statements: [
      {
        body: () => (
          <P>
            Where our Websites contain links to other sites and resources provided by third parties,
            these links are provided for your information only. Such links should not be interpreted
            as approval by us of those linked websites or information you may obtain from them.
          </P>
        ),
      },
      {
        body: () => <P>We have no control over the contents of those sites or resources.</P>,
      },
    ],
  },
  {
    heading: 'User-generated content is not approved by us',
    statements: [
      {
        body: () => (
          <P>
            Our Websites may include information and materials uploaded by other users of the
            Websites. This information and these materials have not been verified and/or approved by
            us. The views expressed by other users on our Websites do not represent Red Badger, our
            views and/or values.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            If you wish to complain about information and materials uploaded by other users please
            contact us at <a href="mailto:hello@red-badger.com">hello@red-badger.com</a>.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Our responsibility for loss or damage suffered by you',
    body: () => <SerifH3>Whether you are a consumer or a business user</SerifH3>,
    statements: [
      {
        body: () => (
          <P>
            We do not exclude and/or limit in any way our liability to you where it would be
            unlawful to do so. This includes (for example) liability for death or personal injury
            caused by our negligence or the negligence of our employees, agents or subcontractors
            and for fraud or fraudulent misrepresentation.
          </P>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <P customClass={styles.mb20}>
              Different limitations and exclusions of liability will apply to liability arising as a
              result of the supply by us of software, goods and/or services to you. These
              limitations and exclusions of liability are set out in our terms and conditions of
              supply.
            </P>
            <H3>If you are a business user</H3>
          </React.Fragment>
        ),
      },
      {
        body: () => (
          <P>
            We exclude all implied conditions, warranties, undertaking, guaranties, representations
            and/or other terms that may apply to our Websites and/or any content them.
          </P>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <P>
              We will not be liable to you for any loss and/or damage, whether in contract, tort
              (including negligence), breach of statutory duty, and/or otherwise, even if
              foreseeable, arising under and/or in connection with your:
            </P>
            <PolicyList>
              <li>use of, and/or inability to use, our Websites; and/or</li>
              <li>use of and/or reliance on any content displayed on our Websites.</li>
            </PolicyList>
          </React.Fragment>
        ),
      },
      {
        body: () => (
          <React.Fragment>
            <P>We will not be liable for:</P>
            <PolicyList>
              <li>loss of profits, sales, business, and/or revenue;</li>
              <li>business interruption;</li>
              <li>loss of anticipated savings;</li>
              <li>loss of business opportunity, goodwill and/or reputation; and/or</li>
              <li className={styles.mb20}>any indirect and/or consequential loss and/or damage.</li>
            </PolicyList>
            <H3>If you are a consumer user</H3>
          </React.Fragment>
        ),
      },
      {
        body: () => (
          <P>
            Please note that we only provide our Websites for domestic and private use. You agree
            not to use our Websites for any commercial and/or business purposes, and we have no
            liability to you for any loss of profit, loss of business, business interruption, and/or
            loss of business opportunity.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'How we may use your personal data',
    statements: [
      {
        body: () => (
          <P>
            We will only use your personal data as set out in our{' '}
            <Link to="privacyPolicy">Privacy Statement</Link>.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Uploading content to our Websites',
    statements: [
      {
        body: () => (
          <P>
            You warrant, represent and undertake that any content you upload and/or post to our
            Websites complies with these Website Terms and/or applicable laws, and you will be
            liable to us and indemnify us for any and/or all breaches of that warranty. This means
            you will be responsible for any loss and/or damage we suffer as a result of your breach
            of this warranty.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            Any content you upload and/or post to our Websites will be considered non-confidential
            and non-proprietary. You retain all of your ownership rights in your content, but you
            are required to grant us the licence described in section 13 below.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            We also have the right to disclose your identity to any third party who is claiming that
            any content posted and/or uploaded by you to our Websites constitutes a violation of
            applicable laws and/or their rights including (but not limited to) intellectual property
            and/or data protection rights.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            We have the right to remove any posting you make on our Websites for any reason
            whatsoever in our sole and absolute discretion.
          </P>
        ),
      },
      {
        body: () => <P>You are solely responsible for securing and backing up your content.</P>,
      },
    ],
  },
  {
    heading: 'Rights you are giving us to use material you upload',
    statements: [
      {
        body: () => (
          <P>
            By uploading and/or posting content to our Websites, you hereby grant us a
            non-exclusive, worldwide, royalty-free, irrevocable, perpetual (or for the term of the
            protection), sub-licensable, paid up, assignable and transferable license to such
            content to access, use, store, copy, modify, prepare derivative works of, distribute,
            publish, transmit, stream, broadcast, allow others to access and use, and otherwise
            exploit in any manner such content to provide and/or promote our Websites and/or Red
            Badger as we deem necessary and/or desirable from time to time, in any media and/or
            platform.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'We are not responsible for viruses and you must not introduce them',
    statements: [
      {
        body: () => (
          <P>
            We do not guarantee that our Websites will be secure and/ or free from bugs and/or
            viruses.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You are responsible for configuring your information technology, computer programmes and
            platform to access our Websites. You should use your own virus protection software.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You must not misuse our Websites by knowingly introducing viruses, trojans, worms, logic
            bombs and/or other material that is malicious or technologically harmful. You must not
            attempt to gain unauthorised access to our Website, the server on which our Websites are
            stored and/or any server, computer and/or database connected to our Websites. You must
            not attack our Websites via a denial-of-service attack or a distributed denial-of
            service attack. By breaching this provision, you would commit a criminal offence under
            the Computer Misuse Act 1990. We will report any such breach to the relevant law
            enforcement authorities and we will co-operate with those authorities by disclosing your
            identity to them. In the event of such a breach, your right to use our Websites will
            cease immediately.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Rules about linking to our Websites',
    statements: [
      {
        body: () => (
          <P>
            You may link to our home pages, provided you do so in a way that is fair and legal and
            does not damage our reputation and/or take advantage of it.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You must not establish a link in such a way as to suggest any form of association,
            approval and/or endorsement on our part where none exists.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            You must not establish a link to our Website in any website that is not owned by you.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            Our Websites must not be framed on any other site, nor may you create a link to any part
            of our Websites other than the home page.
          </P>
        ),
      },
      {
        body: () => <P>We reserve the right to withdraw linking permission without notice.</P>,
      },
      {
        body: () => (
          <P>
            If you wish to link to or make any use of content on our Websites other than that set
            out above, please contact <a href="mailto:hello@red-badger.com">hello@red-badger.com</a>
            .
          </P>
        ),
      },
    ],
  },
  {
    heading: "Which country's laws apply to any disputes?",
    statements: [
      {
        body: () => (
          <P>
            If you are a consumer, please note that these Website Terms, their subject matter and
            their formation (and any non-contractual disputes or claims), are governed by English
            law. You and we both agree that the courts of England will have exclusive jurisdiction
            except that if you are a resident of Northern Ireland you may also bring proceedings in
            Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in
            Scotland.
          </P>
        ),
      },
      {
        body: () => (
          <P>
            If you are a business, these Website Terms, their subject matter and their formation
            (and any non-contractual disputes or claims) are governed by English law. We both agree
            to the exclusive jurisdiction of the courts of England.
          </P>
        ),
      },
    ],
  },
  {
    heading: 'Our trade mark is registered',
    statements: [
      {
        body: () => (
          <P>
            “<B>RED BADGER</B>” is a UK registered trade mark (UK UK00003056439) of Red Badger
            Consulting Limited. You are not permitted to use this trade mark without our prior
            written approval.
          </P>
        ),
      },
    ],
  },
];

export default policies;
