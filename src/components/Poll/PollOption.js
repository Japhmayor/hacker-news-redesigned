import React from 'react';
import PropTypes from 'prop-types';
import { spacing } from '../../styles/settings/spacing';
import PollItem from './PollItem';
import PollIndicator from './PollIndicator';

const PollOption = ({ text, voteCount, percentage }) => (
  <PollItem>
    <div style={{flex: '1 1 80%'}}>{text}</div>
    <div style={{ marginLeft: spacing(3), flex: '1 0 auto', textAlign: 'right' }}>{voteCount}</div>
    
    <PollIndicator percentage={percentage}/>
  </PollItem>
);

PollOption.propTypes = {
  text: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default PollOption;

// Sort descending
// Something's wrong with http://localhost:3050/post/3298905
