import React, { Component } from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import ContactUs from './contact-us-slice';
import NewsletterAfterSignUp from './newsletter-slice/after-sign-up';
import NewsletterBeforeSignUp from './newsletter-slice/before-sign-up';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsletterSubmitted: false,
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      newsletterSubmitted: !this.state.newsletterSubmitted,
    });
  }

  render() {
    return (
      <div>
        <TopSlice />
        <CaseStudy />
        <Brie />
        <TechSlice />
        <ContactUs postURL={this.props.data.contactUsURL} />
        <BlogSlice />
        {
          this.state.newsletterSubmitted
            ? <NewsletterAfterSignUp onSubmit={this.onSubmit} />
            : <NewsletterBeforeSignUp onSubmit={this.onSubmit} />
        }
      </div>
    );
  }
}

const { shape, string } = React.PropTypes;
HomePage.propTypes = {
  data: shape({
    contactUsURL: string,
  }).isRequired,
};
