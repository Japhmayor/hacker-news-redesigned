import React from 'react';
import { Link } from 'react-router-dom';
import * as timeUtils from '../../utils/utils.time';

const Time = ({ to, time }) => (
  <time
    dateTime={timeUtils.getISOTime(time)}
    title={timeUtils.getExactDateTime(time)}
  >

    <Link
      to={to}
      aria-label={`Posted ${timeUtils.getTimePassed(time)}. Go to the entry page`}
    >
      {timeUtils.getTimePassed(time)}
    </Link>
  </time>
);

export default Time;

// TODO: PropTypes
