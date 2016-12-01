/* eslint-disable no-multi-str */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import { splitEvents, setEndDate, eventImagePath, parseDateAndResetTime } from './events';
import { expect } from 'chai';
import { imageAssetsEndpoint } from '../config';
import * as MockDate from 'mockdate';

let testEventsSingleDay = [];
let testEventsMultiDay = [];
let testEventsMultiDayInProgress = [];
let testErrorMultiDay = [];
let testEventsSingleDayWrongStartEndTime = [];
let currentDate;

describe('Set end date', () => {
  const startDateTime = {
    date: 5,
  };
  const endDateTime = {
    date: 8,
  };

  it('returns end date when timeline is set to today \
    and start date is different', () => {
    expect(setEndDate('today', startDateTime, endDateTime))
      .to.deep.equal(endDateTime);
  });

  it('returns null when timeline is not set to today \
    and start date is different', () => {
    expect(setEndDate('past', startDateTime, endDateTime)).to.be.null;
  });

  it('returns null when timeline is set to today \
    and start date is same', () => {
    const endDateTimeToday = {
      date: 5,
    };
    expect(setEndDate('past', startDateTime, endDateTimeToday)).to.be.null;
  });
});

describe('Event image path', () => {
  it('returns full image path when image filename is provided', () => {
    expect(eventImagePath('hi.jpg')).to.equal('//res.cloudinary.com/red-badger-assets/image/upload/events/hi.jpg');
  });
  it('returns default image path when image filename is not provided', () => {
    expect(eventImagePath()).to.equal('//res.cloudinary.com/red-badger-assets/image/upload/events/red-badger-event.jpg');
  });
  it('returns default image path when image filename is null', () => {
    expect(eventImagePath(null)).to.equal('//res.cloudinary.com/red-badger-assets/image/upload/events/red-badger-event.jpg');
  });
});

describe('Parse date and reset time to 00:00', () => {
  it('resets time but preserves the date', () => {
    currentDate = new Date();
    const d = parseDateAndResetTime(currentDate);
    expect(d.getHours()).to.equal(0);
    expect(d.getMinutes()).to.equal(0);
  });
});

describe('SplitEvents', () => {
  beforeEach(() => {
    MockDate.set('Thu Jun 23 2016 14:10:56 GMT+0100 (BST)');

    currentDate = new Date();

    const laterToday = new Date();
    laterToday.setHours(currentDate.getHours() + 1);

    const earlierToday = new Date();
    earlierToday.setHours(currentDate.getHours() - 1);

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);

    const previousDate = new Date();
    previousDate.setDate(previousDate.getDate() - 5);

    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    testEventsMultiDay = [
      {
        id: 'past-multi-day-event',
        startDateTime: {
          iso: previousDate,
        },
        endDateTime: {
          iso: threeDaysAgo,
        },
      },
      {
        id: 'today-multi-day-event',
        startDateTime: {
          iso: currentDate,
        },
        endDateTime: {
          iso: futureDate,
        },
      },
      {
        id: 'future-multi-day-event',
        startDateTime: {
          iso: tomorrow,
        },
        endDateTime: {
          iso: futureDate,
        },
      },
    ];

    testErrorMultiDay = [
      {
        id: 'today-multi-day-event',
        startDateTime: {
          iso: tomorrow,
        },
        endDateTime: {
          iso: yesterday,
        },
      },
    ];

    testEventsMultiDayInProgress = [
      {
        id: 'past-multi-day-event',
        startDateTime: {
          iso: previousDate,
        },
        endDateTime: {
          iso: threeDaysAgo,
        },
      },
      {
        id: 'yesterday-tomorrow-multi-day-event',
        startDateTime: {
          iso: yesterday,
        },
        endDateTime: {
          iso: futureDate,
        },
      },
    ];

    testEventsSingleDay = [
      {
        id: 'past-event-1',
        startDateTime: {
          iso: previousDate,
        },
        endDateTime: {
          iso: previousDate,
        },
      },
      {
        id: 'past-event-2',
        startDateTime: {
          iso: previousDate,
        },
        endDateTime: {
          iso: previousDate,
        },
      },
      {
        id: 'today-event-1',
        startDateTime: {
          iso: currentDate,
        },
        endDateTime: {
          iso: currentDate,
        },
      },
      {
        id: 'today-event-2',
        startDateTime: {
          iso: currentDate,
        },
        endDateTime: {
          iso: currentDate,
        },
      },
      {
        id: 'later-today-event',
        startDateTime: {
          iso: laterToday,
        },
        endDateTime: {
          iso: laterToday,
        },
      },
      {
        id: 'earlier-today-event',
        startDateTime: {
          iso: earlierToday,
        },
        endDateTime: {
          iso: earlierToday,
        },
      },
      {
        id: 'future-event-1',
        startDateTime: {
          iso: futureDate,
        },
        endDateTime: {
          iso: futureDate,
        },
      },
      {
        id: 'future-event-2',
        startDateTime: {
          iso: futureDate,
        },
        endDateTime: {
          iso: futureDate,
        },
      },
    ];

    testEventsSingleDayWrongStartEndTime = [
      {
        id: 'earlier-event',
        startDateTime: {
          iso: earlierToday,
        },
        endDateTime: {
          iso: laterToday,
        },
      },
      {
        id: 'later-today-event',
        startDateTime: {
          iso: laterToday,
        },
        endDateTime: {
          iso: earlierToday,
        },
      }];
  });


  afterEach(() => {
    MockDate.reset();
  });

  describe('multi day events', () => {
    it('omits events with end date earlier then start date from final list', () => {
      const timeline = 'today';
      const returnedEvents = splitEvents({
        events: testErrorMultiDay,
        timeline,
        todayDateTime: currentDate,
      });
      expect(returnedEvents.length).to.equal(0);
    });

    it('returns todays events correctly when event start date is today and end date is tomorrow', () => {
      const timeline = 'today';
      const returnedEvents = splitEvents({
        events: testEventsMultiDay,
        timeline,
        todayDateTime: currentDate,
      });
      expect(returnedEvents.length).to.equal(1);
      expect(returnedEvents[0].id).to.equal('today-multi-day-event');
    });

    it('returns todays events correctly when event start date was yesterday and end date is tomorrow', () => {
      const timeline = 'today';
      const returnedEvents = splitEvents({
        events: testEventsMultiDayInProgress,
        timeline,
        todayDateTime: currentDate,
      });
      expect(returnedEvents.length).to.equal(1);
      expect(returnedEvents[0].id).to.equal('yesterday-tomorrow-multi-day-event');
    });

    it('returns future events correctly for upcoming multiday events', () => {
      const timeline = 'future';
      const returnedEvents = splitEvents({
        events: testEventsMultiDay,
        timeline,
        todayDateTime: currentDate,
      });
      expect(returnedEvents.length).to.equal(1);
      expect(returnedEvents[0].id).to.equal('future-multi-day-event');
    });

    it('returns past events correctly for multiday events', () => {
      const timeline = 'past';
      const returnedEvents = splitEvents({
        events: testEventsMultiDay,
        timeline,
        todayDateTime: currentDate,
      });
      expect(returnedEvents.length).to.equal(1);
      expect(returnedEvents[0].id).to.equal('past-multi-day-event');
    });
  });

  describe('single day events', () => {
    it('returns future events', () => {
      const timeline = 'future';
      const returnedEvents = splitEvents({
        events: testEventsSingleDay,
        timeline,
        todayDateTime: currentDate,
      });
      expect(returnedEvents.length).to.equal(2);
      expect(returnedEvents[0].id).to.equal('future-event-1');
      expect(returnedEvents[1].id).to.equal('future-event-2');
    });

    it('returns past events', () => {
      const timeline = 'past';
      const returnedEvents = splitEvents({
        events: testEventsSingleDay,
        timeline,
        todayDateTime: currentDate,
      });
      expect(returnedEvents.length).to.equal(2);
      expect(returnedEvents[0].id).to.equal('past-event-1');
      expect(returnedEvents[1].id).to.equal('past-event-2');
    });

    it('returns todays events', () => {
      const timeline = 'today';
      const returnedEvents = splitEvents({
        events: testEventsSingleDay,
        timeline,
        todayDateTime: currentDate,
      });
      expect(returnedEvents.length).to.equal(4);
      expect(returnedEvents[0].id).to.equal('today-event-1');
      expect(returnedEvents[1].id).to.equal('today-event-2');
      expect(returnedEvents[2].id).to.equal('later-today-event');
      expect(returnedEvents[3].id).to.equal('earlier-today-event');
    });

    it('returns events in reverse order when specified', () => {
      const timeline = 'future';
      const returnedEvents = splitEvents({
        events: testEventsSingleDay,
        timeline,
        todayDateTime: currentDate,
        reverse: true,
      });
      expect(returnedEvents.length).to.equal(2);
      expect(returnedEvents[0].id).to.equal('future-event-2');
      expect(returnedEvents[1].id).to.equal('future-event-1');
    });

    it('sanitates time of the event', () => {
      const timeline = 'today';
      const returnedEvents = splitEvents({
        events: testEventsSingleDayWrongStartEndTime,
        timeline,
        todayDateTime: currentDate,
      });
      expect(returnedEvents.length).to.equal(2);
      expect(returnedEvents[0].id).to.equal('earlier-event');
    });
  });
});
