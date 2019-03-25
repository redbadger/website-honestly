import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../../components/link/test-helper';

import ClientTestimonialSlice from './index';
import testimonials from './testimonials';

describe('site/pages/home/client-testimonal-slice', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <ClientTestimonialSlice />
        </Context>,
      ),
    ).toMatchSnapshot();
  });

  it('shows the first testimonial by default', () => {
    const testimonialSlice = mount(
      <Context>
        <ClientTestimonialSlice />
      </Context>,
    );

    const testimonial = testimonialSlice.find('.main');
    expect(testimonial.text()).toMatch(testimonials[0].content);
  });

  it('only shows the next testimonial when arrow is clicked', () => {
    const testimonialSlice = mount(
      <Context>
        <ClientTestimonialSlice />
      </Context>,
    );

    const nextButton = testimonialSlice.find('.arrowRight');
    let testimonial = testimonialSlice.find('.main');
    expect(testimonial.text()).toMatch(testimonials[0].content);
    expect(testimonial.text()).not.toMatch(testimonials[1].content);
    nextButton.simulate('click');
    testimonial = testimonialSlice.find('.main');
    expect(testimonial.text()).toMatch(testimonials[1].content);
    expect(testimonial.text()).not.toMatch(testimonials[0].content);
  });

  it('can traverse backwards and forwards', async () => {
    const testimonialSlice = mount(
      <Context>
        <ClientTestimonialSlice />
      </Context>,
    );

    const nextButton = testimonialSlice.find('.arrowRight');
    const prevButton = testimonialSlice.find('.arrowLeft');

    nextButton.simulate('click');
    let testimonialElement = testimonialSlice.find('.main');
    expect(testimonialElement.text()).toMatch(testimonials[1].content);

    prevButton.simulate('click');
    testimonialElement = testimonialSlice.find('.main');
    expect(testimonialElement.text()).toMatch(testimonials[0].content);
  });

  it('will not go before the first testimonial', async () => {
    const testimonialSlice = mount(
      <Context>
        <ClientTestimonialSlice />
      </Context>,
    );

    const prevButton = testimonialSlice.find('.arrowLeft');

    let testimonialElement = testimonialSlice.find('.main');
    expect(testimonialElement.text()).toMatch(testimonials[0].content);

    prevButton.simulate('click');
    testimonialElement = testimonialSlice.find('.main');
    expect(testimonialElement.text()).toMatch(testimonials[0].content);
  });

  it('will not go beyond the last testimonial', async () => {
    const testimonialSlice = mount(
      <Context>
        <ClientTestimonialSlice />
      </Context>,
    );

    const nextButton = testimonialSlice.find('.arrowRight');

    testimonials.forEach(() => {
      nextButton.simulate('click');
    });
    const testimonialElement = testimonialSlice.find('.main');
    expect(testimonialElement.text()).toMatch(testimonials[testimonials.length - 1].content);
    nextButton.simulate('click');
    expect(testimonialElement.text()).toMatch(testimonials[testimonials.length - 1].content);
  });
});
