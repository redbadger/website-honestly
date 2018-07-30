// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StateNavigator } from 'navigation';
import PropTypes from 'prop-types';

import { Container, Text, Header, Description, ReadMore, Image, Logo } from './slices/shared';
import { createMockContext } from '../../components/link/test-helper';
import bankGif from './slices/bank/images/bank.gif';
import camden from './slices/camden/images/camden.png';
import camdenLogo from './slices/camden/images/camden-logo.png';
import fmLogo from './slices/fortnum-and-mason-digital-transformation/images/fortnum-mason-logo.png';
import ftLogo from './slices/ft/images/ft-logo.png';
import ft from './slices/ft/images/ft.png';

import { BBCCell, HallerCell } from './cells';

class Context extends React.Component<{ children: React.Node }> {
  static childContextTypes = {
    stateNavigator: PropTypes.instanceOf(StateNavigator),
  };

  getChildContext() {
    return createMockContext();
  }

  render() {
    return this.props.children;
  }
}

function ContextDecorator(storyFn) {
  return <Context>{storyFn()}</Context>;
}

storiesOf('Pages/Our-work/Slice', module)
  .addDecorator(ContextDecorator)
  .add('default', () => (
    <Container to="bankCaseStudy">
      <Text>
        <Header>Digital transformation in retail banking</Header>
        <Description>
          Discover how we delivered quality digital products to customers quickly, built capability
          and changed the culture to increase business efficiency in one of the world’s largest
          banks.
        </Description>
        <ReadMore />
      </Text>
      <Image src={bankGif} alt="Bank project snapshot" />
    </Container>
  ))
  .add('with reverse layout and logo', () => (
    <Container to="financialTimesCaseStudy" layout="row-reverse">
      <Text layout="rightCol">
        <Logo src={ftLogo} slice="ft" />
        <Header>Lasting change for a media giant</Header>
        <Description>
          The Financial Times (FT) is one of the world’s best known and most respected news
          publications. The ‘pink paper’ has a good existing online offering with total circulation
          of over 750k readers, including 550k corporate memberships.
        </Description>
        <ReadMore />
      </Text>
      <Image src={ft} alt="Financial Times project snapshot" />
    </Container>
  ))
  .add('with no bottom padding', () => (
    <Container to="camdenMarketCaseStudy" layout="row" removeBottomPadding>
      <Text>
        <Logo src={camdenLogo} slice="camden" />
        <Header>Taking steps towards a digital future</Header>
        <Description>
          Built in just ten weeks, Camdenmarket.com relaunched in May 2016 to drive more footfall
          from Londoners to the physical market by showcasing the eclectic range of goods, food and
          events.
        </Description>
        <ReadMore />
      </Text>
      <Image layout="restricted" src={camden} alt="Camden project screenshot" />
    </Container>
  ))
  .add('without image', () => (
    <Container to="fMTeaCaseStudy">
      <Text layout="fullWidth">
        <Logo src={fmLogo} slice="fm" />
        <Header>The ongoing digital transformation of a 310-year old retailer</Header>
        <Description>
          Discover how we helped customers find products faster and drive sales of tea.
        </Description>
        <ReadMore center />
      </Text>
    </Container>
  ));

function CellWrapper(storyFn) {
  const styles = { maxWidth: '550px', margin: '40px auto' };
  return <div style={styles}>{storyFn()}</div>;
}

storiesOf('Pages/Our-work/Cell', module)
  .addDecorator(ContextDecorator)
  .addDecorator(CellWrapper)
  .add('with large header', () => <BBCCell />)
  .add('with image', () => <HallerCell />);
