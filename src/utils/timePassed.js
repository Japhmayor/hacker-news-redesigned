import pluralize from './pluralize';

/**
 * Convert given timestamp to "minutes/hours/days/months/years ago" format
 *
 * @param {Number} seconds – UNIX Time
 * @return {String|undefined}
 * */
function timePassed(seconds) {
  const
    now = Math.round(Date.now() / 1000),
    secondsPassed = now - seconds;
  
  if (typeof seconds !== 'number') {
    console.error('timePassed expects an integer Unix timestamp.');
    return;
  }
  
  if (secondsPassed < 0) {
    console.error('Provided Unix timestamp can\'t be from future.');
    return;
  }
  
  const
    ranges = [
      { keyword: 'year',     seconds: 31104000 }, // 60 * 60 * 24 * 30 * 12
      { keyword: 'month',    seconds: 2592000 },  // 60 * 60 * 24 * 30
      { keyword: 'day',      seconds: 86400 },    // 60 * 60 * 24
      { keyword: 'hour',     seconds: 3600 },     // 60 * 60
      { keyword: 'minute',   seconds: 60 },       // 60
      { keyword: 'just now', seconds: 0 },        // 0
    ],
    
    currentRange = ranges.find(range => range.seconds < secondsPassed),
    amount = Math.round(secondsPassed / currentRange.seconds),
    keyword = currentRange.keyword;

  return keyword === 'just now'
    ? keyword
    : `${amount} ${pluralize(keyword, amount)} ago`
}

export default timePassed;
