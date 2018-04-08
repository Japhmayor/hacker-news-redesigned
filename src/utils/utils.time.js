import pluralize from './pluralize';

/**
 * @param {Number} seconds – UNIX Time
 * @return {String|undefined} – Text in "x minutes/hours/days/months/years ago" format
 * */
export function getTimePassed(seconds) {
  const now = Math.round(Date.now() / 1000);
  const secondsPassed = now - seconds;

  if (typeof seconds !== 'number') {
    console.error('timePassed expects an integer Unix timestamp.');
    return;
  }

  if (secondsPassed < 0) {
    console.error('Provided Unix timestamp can\'t be from future.');
    return;
  }

  const ranges = [
    {
      keyword: 'year',
      seconds: 31104000,
    }, // 60 * 60 * 24 * 30 * 12
    {
      keyword: 'month',
      seconds: 2592000,
    },  // 60 * 60 * 24 * 30
    {
      keyword: 'day',
      seconds: 86400,
    },    // 60 * 60 * 24
    {
      keyword: 'hour',
      seconds: 3600,
    },     // 60 * 60
    {
      keyword: 'minute',
      seconds: 60,
    },       // 60
    {
      keyword: 'just now',
      seconds: 0,
    },        // 0
  ];

  const currentRange = ranges.find((range) => range.seconds < secondsPassed);
  const amount = Math.round(secondsPassed / currentRange.seconds);
  const keyword = currentRange.keyword;

  return keyword === 'just now'
    ? keyword
    : `${amount} ${pluralize(keyword, amount)} ago`;
}


/**
 * Convert UNIX time readable Date format
 *
 * @param {Number} seconds – UNIX Time
 * @return {String|undefined} – Timestamp in following format: March 13, 2018, at 12:45 PM
 * */
export function getExactTime(seconds) {
  return new Date(seconds * 1000)
    .toLocaleDateString(
      navigator.language || 'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      },
    );
}


/**
 * Convert given timestamp to ISO Format: 2011-10-05T14:48:00.000Z
 *
 * @param {Number} seconds – UNIX Time
 * @return {String|undefined} – Date string in ISO format
 * */
export function getISOTime(seconds) {
  return new Date(seconds * 1000).toISOString();
}


