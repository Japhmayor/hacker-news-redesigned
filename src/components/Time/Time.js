import React from 'react';
import PropTypes from 'prop-types';
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

Time.propTypes = {
  to: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};


export default Time;

// TODO: PropTypes
