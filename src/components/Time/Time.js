import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MetaItem } from '../Meta/MetaItem';
import * as timeUtils from '../../utils/utils.time';

const TimeStamp = MetaItem.withComponent('time');

const TimeLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  
  &:hover {
    opacity: 0.85;
  }
  
  &:active {
    opacity: 0.7;
  }
`;

const Time = ({ to, time }) => (
  <TimeStamp
    dateTime={timeUtils.getISOTime(time)}
    title={timeUtils.getExactTime(time)}
  >

    <TimeLink
      to={to}
      title="Open the entry in a separate page"
    >
      {timeUtils.getTimePassed(time)}
    </TimeLink>
  </TimeStamp>
);

export default Time;
