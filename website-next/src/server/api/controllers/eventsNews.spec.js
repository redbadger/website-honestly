import { selectValidEvents } from './eventsNews';
import { expect } from 'chai';

describe('Events Utils', () => {
  describe('selectValidEvents', () => {
    it('filters out events with no startDateTime', () => {
      const events = [
        {
          title: 'Event A',
          startDateTime: { iso: '2016-11-07T12:16:58+00:00' },
        },
        {
          title: 'Event B',
        },
        {
          title: 'Event C',
          startDateTime: { garbage: true },
        },
      ];

      const output = selectValidEvents(events);

      expect(output).to.contain({
        title: 'Event A',
        startDateTime: { iso: '2016-11-07T12:16:58+00:00' },
      });
      expect(output).not.to.contain({
        title: 'Event B',
      });
      expect(output).not.to.contain({
        title: 'Event C',
        startDateTime: { garbage: true },
      });
    });
  });
});
