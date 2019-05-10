import React from 'react';
import { render, mount } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import Event from './index';
import EventbriteEmbed from './eventbrite-embed';

const event = {
  id: 'W00fw00F4mD0g3',
  startDateTime: {
    date: '31',
    month: '01',
    year: '2017',
    monthSym: 'January',
  },
  endDateTime: {
    date: '01',
    month: '02',
    year: '2017',
    monthSym: 'February',
  },
  title: 'I am the best event ever',
  strapline: 'Come along to the best event ever',
  body: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }],
  internalLinks: [
    {
      url: 'https://www.red-badger.com/some-event',
      title: 'some event',
    },
  ],
  externalLinks: [
    {
      url: 'https://www.external-site.com/some-event',
      title: 'some event',
    },
  ],
  ticketLink: 'https://www.eventbrite.com/some-event-123456789',
  eventbriteId: '123456789',
  featureImageFilename: 'i-am-an-image.jpg',
  location: {
    address: 'Badgerham Palace',
  },
};

describe('site/pages/event', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <Event event={event} />
        </Context>,
      ),
    ).toMatchSnapshot();
  });

  it('Renders eventbrite modal button for eventbrite events', () => {
    const eventPage = mount(
      <Context>
        <Event event={event} />
      </Context>,
    );

    expect(
      eventPage.contains(
        <EventbriteEmbed eventbriteId={event.eventbriteId} url={event.ticketLink} />,
      ),
    ).toBe(true);
  });

  it('Does not render eventbrite modal button for non-eventbrite events', () => {
    const newEvent = event;
    newEvent.eventbriteId = null;
    const eventPage = mount(
      <Context>
        <Event event={newEvent} />
      </Context>,
    );
    expect(
      eventPage.contains(
        <EventbriteEmbed eventbriteId={newEvent.eventbriteId} url={newEvent.ticketLink} />,
      ),
    ).toBe(false);
  });
});
