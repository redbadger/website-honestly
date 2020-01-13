// pulled this into its own module so I can mock it
// HAHA STUPID MODULE
import moment from 'moment';

const daysSinceFortnumStarted = () => {
  const startDate = moment([2014, 4, 14]);
  const today = moment();
  const diffInDays = today.diff(startDate, 'days');

  return diffInDays.toLocaleString();
};

export default daysSinceFortnumStarted;
