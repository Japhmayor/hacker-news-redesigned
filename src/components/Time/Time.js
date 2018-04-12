import React from 'react';
import { Link } from 'react-router-dom';
import * as timeUtils from '../../utils/utils.time';

const Time = ({ to, time }) => (
  <time
    dateTime={timeUtils.getISOTime(time)}
    title={timeUtils.getExactTime(time)}
  >

    <Link
      to={to}
      title="Open the entry in a separate page"
    >
      {timeUtils.getTimePassed(time)}
    </Link>
  </time>
);

export default Time;

// TODO: PropTypes
