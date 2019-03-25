// @flow

import React from 'react';
import { shallow } from 'enzyme';

import {
  PageHeading,
  Body,
  Quote,
  Section,
  SectionHeading,
  SectionBody,
  H3,
  P,
  UL,
  ArticleImg,
} from '.';

const render = component => shallow(component);

describe('pages/our-work/case-study/shared', () => {
  it('renders PageHeading correctly', () => {
    expect(render(<PageHeading>Heading</PageHeading>)).toMatchSnapshot();
  });

  it('renders Body correctly', () => {
    expect(
      render(
        <Body>
          <PageHeading>Heading</PageHeading>
        </Body>,
      ),
    ).toMatchSnapshot();
  });

  it('renders Quote correctly', () => {
    expect(
      render(<Quote author={{ name: 'James', title: 'Big Boss' }} text="Great job" />),
    ).toMatchSnapshot();
  });

  it('renders Section correctly', () => {
    expect(
      render(
        <Section>
          <SectionBody>Body</SectionBody>
        </Section>,
      ),
    ).toMatchSnapshot();
  });

  it('renders SectionHeading correctly', () => {
    expect(
      render(<SectionHeading subHeading="I am subheading" heading="I am heading" />),
    ).toMatchSnapshot();
  });

  it('renders SectionBody correctly', () => {
    expect(render(<SectionBody>Body</SectionBody>)).toMatchSnapshot();
  });

  it('renders P correctly', () => {
    expect(render(<P>Hey you</P>)).toMatchSnapshot();
  });

  it('renders UL correctly', () => {
    expect(
      render(
        <UL>
          <li>List item</li>
        </UL>,
      ),
    ).toMatchSnapshot();
  });

  it('renders ArticleImg correctly', () => {
    expect(render(<ArticleImg src="/path/to/image" alt="A sunset" />)).toMatchSnapshot();
  });

  it('renders H3 correctly', () => {
    expect(render(<H3>heading</H3>)).toMatchSnapshot();
  });
});
